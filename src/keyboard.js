import React from 'react';

import Key from './components/KeyComponent';
import Row from './components/RowComponent';

import {
    KEYBOARD_MAP,
    RTL_LANGUAGES
} from './config';

import languageList from './languages';

import './styles/globalStyles.scss';

class Keyboard extends React.PureComponent {
    static displayName = 'Keyboard';

    constructor(props) {
        super(props);

        this.state = {
            deadkeyLookup: {},
            ligatureLookup: {},
            localeName: '',
            preparedKeyDataList: [],
            selectedLanguage: 'hindi',
            shiftStateLookup: {},
            textFlowDirection: 'RTL'
        };
    }

    componentDidMount() {
        this.parseKeyboardFile();
    }

    parseKeyboardFile = () => {
        const {
            selectedLanguage
        } = this.state;

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

    renderKeyboardKey = (keyData) => {
        const [
            keyLookupValue, , ,
            defaultKeySymbol
        ] = keyData;

        return (
            <Key
                key={keyLookupValue}
                keySymbol={defaultKeySymbol}
            />
        );
    }

    renderControlsRow = () => {
        const {
            selectedLanguage
        } = this.state;


        return (
            <Row>
                <Key
                    keySymbol={'Ctrl'}
                    isAuxiliaryKey
                />
                <Key
                    keySymbol={selectedLanguage}
                    isAuxiliaryKey
                />
                <Key
                    keySymbol={'Alt'}
                    isAuxiliaryKey
                />
                <Key
                    flexGrow={4}
                    isAuxiliaryKey
                />
                <Key
                    keySymbol={'Alt Grp'}
                    isAuxiliaryKey
                />
                <Key
                    keySymbol={''}
                    isAuxiliaryKey
                />
                <Key
                    keySymbol={'Ctrl'}
                    isAuxiliaryKey
                />
            </Row>
        );
    }

    renderKeyboardRows = () => {
        const {
            preparedKeyDataList
        } = this.state;

        const keyboardRowsMarkupList = [];

        // Generate Row 1
        const keysMarkupList1 = preparedKeyDataList
            .slice(0, 13)
            .map((keyData) => this.renderKeyboardKey(keyData));

        keysMarkupList1.push(
            <Key
                flexGrow={4}
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
                keySymbol={'Caps Lock'}
                isAuxiliaryKey
            />
        );

        keysMarkupList3.push(
            <Key
                flexGrow={5}
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
                keySymbol={'Shift'}
                isAuxiliaryKey
            />
        );

        keysMarkupList4.push(
            <Key
                flexGrow={7}
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
        console.log('state:', this.state);

        return (
            <div className={Keyboard.displayName}>
                {this.renderKeyboardRows()}
            </div>
        );
    }
}

export default Keyboard;
