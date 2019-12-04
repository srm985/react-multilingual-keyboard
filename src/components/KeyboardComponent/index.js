import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import Key from '../KeyComponent';
import Row from '../RowComponent';
import SubmissionArea from '../SubmissionAreaComponent';

import {
    ESCAPE_KEY_CODE,
    KEYBOARD_MAP,
    RTL_LANGUAGES,
    SUPPORTED_TYPES,
    TYPE_CONTENTEDITABLE,
    TYPE_NUMBER,
    SUBSTITUTE_NUMBER_REGEX
} from '../../config';

import languageList from '../../languages';

import './styles.scss';

class Keyboard extends React.PureComponent {
    static displayName = 'Keyboard';

    constructor(props) {
        super(props);

        this.submissionAreaReference = React.createRef();

        this.state = {
            currentText: '',
            deadkeyLookup: {},
            focusedField: {},
            isKeyboardShown: false,
            keyboardStatus: {
                isAltGrpKeySet: false,
                isControlKeySet: false,
                isShiftKeySet: false,
                isUpperCase: false
            },
            ligatureLookup: {},
            localeName: '',
            pendingDeadkey: '',
            preparedKeyDataList: [],
            selectedLanguage: 'hindi',
            shiftStateLookup: {},
            textFlowDirection: 'RTL'
        };
    }

    componentDidMount() {
        document.addEventListener('focusin', this.handleFocus);
        document.addEventListener('keydown', this.handleHardwareKeyPress);

        this.parseKeyboardFile();
    }

    componentWillUnmount() {
        document.removeEventListener('focusin', this.handleFocus);
        document.removeEventListener('keydown', this.handleHardwareKeyPress);
    }

    parseKeyboardFile = () => {
        const {
            state: {
                selectedLanguage
            }
        } = this;

        const BLANK_SPACE_CHARACTER_REGEX = new RegExp('\\u0000', 'g');
        const KEY_DATA_REGEX = new RegExp('\\d(\\w)?\\s+\\w+\\s+\\d\\s+(-1|\\w+@?|%%)\\s+(-1|\\w+@?|%%)\\s+(-1|\\w+@?|%%)(\\s+(-1|\\w+@?|%%))?(\\s+(-1|\\w+@?|%%))?(\\s+(-1|\\w+@?|%%))?\\s+\\/\\/', 'g');

        const {
            [selectedLanguage]: rawLanguageFile
        } = languageList;

        const cleanedLanguageFile = rawLanguageFile.replace(BLANK_SPACE_CHARACTER_REGEX, '');

        const [
            extractedLocaleName
        ] = cleanedLanguageFile.match(/LOCALENAME\s+".*"/);

        // Storing our locale name so that we can set certain language attributes.
        const localeName = extractedLocaleName.replace(/LOCALENAME\s+"(.*)"/, '$1');

        // We initialize an array of length 47 because we'll strategically place indicies to create our layout.
        const preparedKeyDataList = new Array(47).fill([]);

        // As we're parsing a text file, we need the locations of certain sections.
        const deadkeyLocation = cleanedLanguageFile.indexOf('DEADKEY');
        const keynameLocation = cleanedLanguageFile.indexOf('KEYNAME');
        const layoutLocation = cleanedLanguageFile.indexOf('LAYOUT');
        const ligatureLocation = cleanedLanguageFile.indexOf('LIGATURE');
        const shiftStateLocation = cleanedLanguageFile.indexOf('SHIFTSTATE');

        const deadkeyLookup = {};
        const ligatureLookup = {};
        const shiftStateLookup = {};

        let textFlowDirection = 'LTR';

        // Here we're extracting key data and creating our keyboard layout.
        cleanedLanguageFile
            .match(KEY_DATA_REGEX)
            .forEach((keyDataString) => {
                const preparedKeyData = keyDataString
                    .replace(/(\t+|\s+)/g, ' ')
                    .split(' ');

                const [
                    keyDataIndex
                ] = preparedKeyData;

                const {
                    [keyDataIndex]: mappedKeyIndex
                } = KEYBOARD_MAP;

                // We're strategically placing keys based on a defined layout table.
                if (mappedKeyIndex !== undefined) {
                    preparedKeyDataList[mappedKeyIndex] = preparedKeyData;
                }
            });

        // Here we're extracting mappings for our various shift key states.
        if (shiftStateLocation > 0) {
            const shiftStateData = cleanedLanguageFile
                .slice(shiftStateLocation, layoutLocation)
                .trim()
                .split(/\n/g)
                .slice(2);

            const shiftStateGroupValue = (value) => value
                .match(/\w{6}\s[0-9]/)
                .toString()
                .slice(-1) - 1;

            // Some of these matches may have intended double spaces.
            shiftStateData.forEach((value) => {
                if (value.indexOf(':') === -1) {
                    shiftStateLookup.default = shiftStateGroupValue(value);
                } else if (value.indexOf('Shft  Ctrl Alt') !== -1) {
                    shiftStateLookup.shiftAltGrp = shiftStateGroupValue(value);
                } else if (value.indexOf('Shft  Ctrl') !== -1) {
                    shiftStateLookup.ctrlShift = shiftStateGroupValue(value);
                } else if (value.indexOf('Ctrl Alt') !== -1) {
                    shiftStateLookup.altGrp = shiftStateGroupValue(value);
                } else if (value.indexOf('Ctrl') !== -1) {
                    shiftStateLookup.ctrl = shiftStateGroupValue(value);
                } else if (value.indexOf('Shft') !== -1) {
                    shiftStateLookup.shift = shiftStateGroupValue(value);
                }
            });
        }

        /**
         * If there's deadkey info to be had, we create a lookup table where the parent
         * keys are any given triggering deadkey. The nested children keys are the given
         * accepted accompanying key press. The nested value is then the resulting new key.
         */
        if (deadkeyLocation > 0) {
            const deadkeyData = cleanedLanguageFile
                .slice(deadkeyLocation, keynameLocation)
                .trim()
                .split('DEADKEY')
                .slice(1);

            deadkeyData.forEach((deadkeyString) => {
                const cleanedDeadkeyString = deadkeyString
                    .split(/\n/g)
                    .slice(2);

                const deadkeyKey = deadkeyString
                    .trim()
                    .slice(0, 4);

                // Initialize each new key to prevent undefined errors.
                deadkeyLookup[deadkeyKey] = {};

                cleanedDeadkeyString.forEach((deadkeyDataString) => {
                    const key = deadkeyDataString
                        .trim()
                        .slice(0, 4);

                    const value = deadkeyDataString
                        .trim()
                        .slice(5, 9);

                    deadkeyLookup[deadkeyKey][key] = value;
                });
            });
        }

        /**
         * If there's any ligature information, we're creating a lookup table for it
         * here. The structure is an object of child objects, containing arrays.
         *
         * Example: { key: [1, 2, 3] }
         */
        if (ligatureLocation > 0) {
            const ligatureData = cleanedLanguageFile
                .slice(ligatureLocation, keynameLocation)
                .trim()
                .split(/\n/g)
                .slice(5);

            ligatureData.forEach((ligatureDataLine) => {
                const hasComments = ligatureDataLine.indexOf('//') > 0;

                if (hasComments) {
                    const ligatureKeyCodesList = ligatureDataLine
                        .trim()
                        .split('//')[0]
                        .trim()
                        .replace(/\t/g, ' ')
                        .replace(/\s+/g, ' ')
                        .split(' ');

                    // We need to explicitly remove this unwanted index.
                    ligatureKeyCodesList.splice(1, 1);

                    const ligatureLookupKeyName = ligatureKeyCodesList.splice(0, 1);

                    ligatureLookup[ligatureLookupKeyName] = [
                        ...ligatureKeyCodesList
                    ];
                }
            });
        }

        // Default language direction is LTR, unless it's in our lookup table.
        if (RTL_LANGUAGES.includes(localeName)) {
            textFlowDirection = 'RTL';
        }

        this.setState({
            deadkeyLookup,
            ligatureLookup,
            localeName,
            preparedKeyDataList,
            shiftStateLookup,
            textFlowDirection
        });
    }

    /**
     * This function is called when a user focuses on any input field. When then
     * perform a check to determine if we should trigger the keyboard for that
     * given field.
     */
    handleFocus = (event) => {
        const {
            triggeringInputTypesList
        } = this.props;

        const {
            srcElement: {
                className
            },
            target,
            target: {
                disabled: isDisabled,
                innerText: contentEditableValue = '',
                isContentEditable,
                max,
                maxLength,
                min,
                pattern,
                placeholder,
                readOnly: isReadOnly,
                type: inputType,
                value: fieldValue = ''
            }
        } = event;

        const submissionAreaInputFieldClass = `${SubmissionArea.displayName}__input-field`;

        // We prevent recording a focus event on our own input field.
        const isSubmissionAreaInputField = className === submissionAreaInputFieldClass;

        const isInteractive = !isDisabled && !isReadOnly && !isSubmissionAreaInputField;

        // Content editable fields require a separate check.
        const isKeyboardTriggeringField = isInteractive
            && (triggeringInputTypesList.includes(inputType)
                || (isContentEditable && triggeringInputTypesList.includes(TYPE_CONTENTEDITABLE)));

        // We set the keyboard shown and store the value of the focused field.
        if (isKeyboardTriggeringField) {
            this.setState({
                currentText: fieldValue || contentEditableValue,
                focusedField: {
                    inputType: isContentEditable ? TYPE_CONTENTEDITABLE : inputType,
                    max,
                    maxLength,
                    min,
                    pattern,
                    placeholder,
                    target
                },
                isKeyboardShown: true
            });
        }
    }

    handleHardwareKeyPress = (event) => {
        const {
            state: {
                isKeyboardShown
            }
        } = this;

        const {
            keyCode
        } = event;

        if (isKeyboardShown) {
            switch (keyCode) {
                case ESCAPE_KEY_CODE:
                    this.setState({
                        isKeyboardShown: false
                    });
                    break;

                // no default
            }
        }
    }

    handleKeyPress = (keyValue) => {
        const {
            state: {
                currentText,
                deadkeyLookup,
                keyboardStatus,
                keyboardStatus: {
                    isUpperCase
                }
            }
        } = this;

        const HEX_REGEX = /^&#x([a-z0-9]{1,4});/;

        const isHexCode = HEX_REGEX.test(keyValue);

        const {
            current: submissionAreaNode
        } = this.submissionAreaReference;

        const submissionAreaInputField = ReactDOM
            .findDOMNode(submissionAreaNode)
            .querySelector(`.${SubmissionArea.displayName}__input-field`);

        const {
            selectionEnd,
            selectionStart
        } = submissionAreaInputField;

        const selectionLength = selectionEnd - selectionStart;

        const generateCharacter = (keyValueCode) => {
            const symbolHexCode = `0x${(keyValueCode).toString(16)}`;

            return String.fromCharCode(symbolHexCode);
        };

        const isValidText = (proposedText) => {
            const {
                state: {
                    focusedField: {
                        inputType,
                        max,
                        maxLength,
                        min
                    }
                }
            } = this;

            const isAboveMinNumber = !min || Number.isNaN(proposedText) || Number(proposedText) >= min;
            const isValidNumber = inputType !== TYPE_NUMBER || (inputType === TYPE_NUMBER && SUBSTITUTE_NUMBER_REGEX.test(proposedText));
            const isWithinMaxLength = !maxLength || maxLength < 0 || proposedText.length <= maxLength;
            const isWithinMaxNumber = !max || Number.isNaN(proposedText) || Number(proposedText) <= max;

            return isAboveMinNumber && isValidNumber && isWithinMaxLength && isWithinMaxNumber;
        };

        const renderedDeadkey = (currentKeyValue) => {
            const {
                state: {
                    pendingDeadkey
                }
            } = this;

            const deadkeyHexValue = `00${currentKeyValue.charCodeAt(0).toString(16)}`;
            const isDeadkeyTrigger = !!deadkeyLookup[deadkeyHexValue];

            const isNewDeadkey = pendingDeadkey && isDeadkeyTrigger;

            let generatedString = currentKeyValue;

            this.setState({
                pendingDeadkey: isDeadkeyTrigger && !isNewDeadkey ? deadkeyHexValue : ''
            });

            if (isNewDeadkey) {
                generatedString = generateCharacter(pendingDeadkey) + generateCharacter(deadkeyHexValue);
            } else if (isDeadkeyTrigger && !isNewDeadkey) {
                // Don't write anything on press of the first deadkey trigger.
                generatedString = '';
            } else if (!isDeadkeyTrigger && pendingDeadkey) {
                // Check if we have a deadkey combination.
                const {
                    [pendingDeadkey]: {
                        [deadkeyHexValue]: deadkeyCombinationCode
                    } = {}
                } = deadkeyLookup;

                generatedString = deadkeyCombinationCode ? generateCharacter(deadkeyCombinationCode) : generateCharacter(pendingDeadkey) + generateCharacter(deadkeyHexValue);
            }

            return generatedString;
        };

        let parsedValue = keyValue;

        if (isHexCode) {
            const symbolHexCode = `0x${(keyValue.match(HEX_REGEX)[1] || '').toString(16)}`;

            parsedValue = String.fromCharCode(symbolHexCode);
        }

        // Modify parsedValue if interacting with deadkeys.
        parsedValue = renderedDeadkey(parsedValue);

        // Check if we should be capitalizing our symbol.
        parsedValue = isUpperCase ? parsedValue.toUpperCase() : parsedValue;

        // We insert wherever our caret is placed.
        const newText = currentText.slice(0, selectionStart) + parsedValue + currentText.slice(selectionEnd);

        const canUpdateText = isValidText(newText);

        this.setState(({
            currentText: canUpdateText ? newText : currentText,
            keyboardStatus: {
                ...keyboardStatus,
                // Clear key states which only last one key press duration.
                isAltGrpKeySet: false,
                isControlKeySet: false,
                isShiftKeySet: false
            }
        }), () => {
            const selectionOffset = canUpdateText ? selectionLength - parsedValue.length : 0;

            submissionAreaInputField.focus();
            submissionAreaInputField.selectionStart = selectionStart - selectionOffset;
            submissionAreaInputField.selectionEnd = selectionEnd - selectionOffset;
        });
    }

    /**
     * We leverage this function to support manual keyboard entry into our input field.
     */
    handleManualUpdate = (newTextValue) => {
        this.setState({
            currentText: newTextValue
        });
    }

    handleAltGroupKeyPress = () => {
        this.setState((prevState) => {
            const {
                keyboardStatus,
                keyboardStatus: {
                    isAltGrpKeySet: wasAltGrpKeySet
                }
            } = prevState;

            return ({
                keyboardStatus: {
                    ...keyboardStatus,
                    isAltGrpKeySet: !wasAltGrpKeySet,
                    isControlKeySet: false,
                    isShiftKeySet: false
                }
            });
        });
    }

    handleAltKeyPress = () => {

    }

    handleBackspaceKeyPress = () => {

    }

    handleCapsLockKeyPress = () => {
        this.setState((prevState) => {
            const {
                keyboardStatus,
                keyboardStatus: {
                    isUpperCase: wasUpperCase
                }
            } = prevState;

            return ({
                keyboardStatus: {
                    ...keyboardStatus,
                    isUpperCase: !wasUpperCase
                }
            });
        });
    }

    handleControlKeyPress = () => {
        this.setState((prevState) => {
            const {
                keyboardStatus,
                keyboardStatus: {
                    isControlKeySet: wasControlKeySet
                }
            } = prevState;

            return ({
                keyboardStatus: {
                    ...keyboardStatus,
                    isAltGrpKeySet: false,
                    isControlKeySet: !wasControlKeySet,
                    isShiftKeySet: false
                }
            });
        });
    }

    handleEnterKeyPress = () => {

    }

    handleLanguageKeyPress = () => {

    }

    handleShiftKeyPress = () => {
        this.setState((prevState) => {
            const {
                keyboardStatus,
                keyboardStatus: {
                    isShiftKeySet: wasShiftKeySet
                }
            } = prevState;

            return ({
                keyboardStatus: {
                    ...keyboardStatus,
                    isAltGrpKeySet: false,
                    isControlKeySet: false,
                    isShiftKeySet: !wasShiftKeySet
                }
            });
        });
    }

    handleSpaceKeyPress = () => {

    }

    handleSpareKeyPress = () => {

    }

    handleTabKeyPress = () => {

    }

    handleHideKeyboard = () => {
        this.setState({
            isKeyboardShown: false
        });
    }

    handleInputSubmission = () => {
        const {
            state: {
                currentText,
                focusedField: {
                    inputType,
                    target
                }
            }
        } = this;

        if (inputType === TYPE_CONTENTEDITABLE) {
            target.innerText = currentText;
        } else {
            target.value = currentText;
        }

        this.handleHideKeyboard();
    }

    renderKeyboardKey = (keyData) => {
        const {
            state: {
                keyboardStatus: {
                    isShiftKeySet,
                    isUpperCase,
                    isControlKeySet,
                    isAltGrpKeySet
                }
            }
        } = this;

        const [
            keyLookupValue = '', , ,
            defaultKeySymbol = '',
            shiftKeySymbol = '',
            controlKeySymbol = '',
            altGrpKeySymbol = ''
        ] = keyData;

        let keySymbol = defaultKeySymbol;

        // Determine which key symbol to use.
        if (isShiftKeySet) {
            keySymbol = shiftKeySymbol;
        } else if (isControlKeySet) {
            keySymbol = controlKeySymbol;
        } else if (isAltGrpKeySet) {
            keySymbol = altGrpKeySymbol;
        }

        // For some keys, an @ symbol is appended and needs to be stripped.
        if (keySymbol.length === 5 && (/@/).test(keySymbol)) {
            keySymbol = keySymbol.replace('@', '');
        }

        return (
            <Key
                handleKeyPress={this.handleKeyPress}
                isUpperCase={isUpperCase}
                key={keyLookupValue}
                keySymbol={keySymbol}
            />
        );
    }

    renderControlsRow = () => {
        const {
            state: {
                selectedLanguage
            }
        } = this;

        return (
            <Row>
                <Key
                    handleKeyPress={this.handleControlKeyPress}
                    keySymbol={'Ctrl'}
                    isAuxiliaryKey
                />
                <Key
                    handleKeyPress={this.handleLanguageKeyPress}
                    keySymbol={selectedLanguage}
                    isAuxiliaryKey
                />
                <Key
                    handleKeyPress={this.handleAltKeyPress}
                    keySymbol={'Alt'}
                    isAuxiliaryKey
                />
                <Key
                    flexGrow={4}
                    handleKeyPress={this.handleSpaceKeyPress}
                    isAuxiliaryKey
                />
                <Key
                    handleKeyPress={this.handleAltGroupKeyPress}
                    keySymbol={'Alt Grp'}
                    isAuxiliaryKey
                />
                <Key
                    handleKeyPress={this.handleSpareKeyPress}
                    keySymbol={''}
                    isAuxiliaryKey
                />
                <Key
                    handleKeyPress={this.handleControlKeyPress}
                    keySymbol={'Ctrl'}
                    isAuxiliaryKey
                />
            </Row>
        );
    }

    renderKeyboardRows = () => {
        const {
            state: {
                preparedKeyDataList
            }
        } = this;

        const keyboardRowsMarkupList = [];

        // Generate Row 1
        const keysMarkupList1 = preparedKeyDataList
            .slice(0, 13)
            .map((keyData) => this.renderKeyboardKey(keyData));

        keysMarkupList1.push(
            <Key
                flexGrow={4}
                handleKeyPress={this.handleBackspaceKeyPress}
                keySymbol={'Backspace'}
                isAuxiliaryKey
            />
        );

        keyboardRowsMarkupList.push(<Row>{keysMarkupList1}</Row>);

        // Generate Row 2
        const keysMarkupList2 = preparedKeyDataList
            .slice(13, 26)
            .map((keyData) => this.renderKeyboardKey(keyData));

        keysMarkupList2.unshift(
            <Key
                flexGrow={4}
                handleKeyPress={this.handleTabKeyPress}
                keySymbol={'Tab'}
                isAuxiliaryKey
            />
        );

        keyboardRowsMarkupList.push(<Row>{keysMarkupList2}</Row>);

        // Generate Row 3
        const keysMarkupList3 = preparedKeyDataList
            .slice(26, 37)
            .map((keyData) => this.renderKeyboardKey(keyData));

        keysMarkupList3.unshift(
            <Key
                flexGrow={5}
                handleKeyPress={this.handleCapsLockKeyPress}
                keySymbol={'Caps Lock'}
                isAuxiliaryKey
            />
        );

        keysMarkupList3.push(
            <Key
                flexGrow={5}
                handleKeyPress={this.handleEnterKeyPress}
                keySymbol={'Enter'}
                isAuxiliaryKey
            />
        );

        keyboardRowsMarkupList.push(<Row>{keysMarkupList3}</Row>);

        // Generate Row 5
        const keysMarkupList4 = preparedKeyDataList
            .slice(37, 47)
            .map((keyData) => this.renderKeyboardKey(keyData));

        keysMarkupList4.unshift(
            <Key
                flexGrow={7}
                handleKeyPress={this.handleShiftKeyPress}
                keySymbol={'Shift'}
                isAuxiliaryKey
            />
        );

        keysMarkupList4.push(
            <Key
                flexGrow={7}
                handleKeyPress={this.handleShiftKeyPress}
                keySymbol={'Shift'}
                isAuxiliaryKey
            />
        );

        keyboardRowsMarkupList.push(<Row>{keysMarkupList4}</Row>);

        // Generate Row 5
        keyboardRowsMarkupList.push(this.renderControlsRow());

        return (keyboardRowsMarkupList);
    }

    render() {
        const {
            state: {
                focusedField,
                isKeyboardShown,
                currentText
            }
        } = this;

        console.log('state:', this.state);

        return (
            <>
                {
                    isKeyboardShown
                    && (
                        <div className={Keyboard.displayName}>
                            <SubmissionArea
                                currentText={currentText}
                                focusedField={focusedField}
                                handleHideKeyboard={this.handleHideKeyboard}
                                handleInputSubmission={this.handleInputSubmission}
                                handleManualUpdate={this.handleManualUpdate}
                                ref={this.submissionAreaReference}
                            />
                            {this.renderKeyboardRows()}
                        </div>
                    )
                }
            </>
        );
    }
}

Keyboard.propTypes = {
    triggeringInputTypesList: PropTypes.arrayOf(PropTypes.string)
};

Keyboard.defaultProps = {
    triggeringInputTypesList: [
        ...SUPPORTED_TYPES
    ]
};

export default Keyboard;
