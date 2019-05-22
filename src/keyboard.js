import React from 'react';

import languageList from './languages';

class Keyboard extends React.PureComponent {
    static displayName = 'Keyboard';

    static RTL_LANGUAGES = [
        'ar-SA',
        'fa-IR',
        'he-IL',
        'ur-PK'
    ];

    constructor(props) {
        super(props);

        this.state = {
            deadkeyLookup: {},
            keyDataList: [],
            ligatureLookup: {},
            localeName: '',
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

        // Generate our raw lookup table used for regular keys.
        const keyDataList = cleanedLanguageFile.match(KEY_DATA_REGEX);

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
                .slice(-1);

            // Some of these matches may have intended double spaces.
            shiftStateData.forEach((value) => {
                if (value.indexOf(':') === -1) {
                    shiftStateLookup.default = shiftStateGroupValue(value);
                } else if (value.indexOf('Shft  Ctrl Alt') !== -1) {
                    shiftStateLookup.shift_altgrp = shiftStateGroupValue(value);
                } else if (value.indexOf('Shft  Ctrl') !== -1) {
                    shiftStateLookup.ctrl_shift = shiftStateGroupValue(value);
                } else if (value.indexOf('Ctrl Alt') !== -1) {
                    shiftStateLookup.altgrp = shiftStateGroupValue(value);
                } else if (value.indexOf('Ctrl') !== -1) {
                    shiftStateLookup.ctrl = shiftStateGroupValue(value);
                } else if (value.indexOf('Shft') !== -1) {
                    shiftStateLookup.shift = shiftStateGroupValue(value);
                }
            });
        }
        console.log({
            shiftStateLookup
        });

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
        console.log({
            deadkeyLookup
        });

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

        console.log({
            ligatureLookup
        });

        // Default language direction is LTR, unless it's in our lookup table.
        if (Keyboard.RTL_LANGUAGES.includes(localeName)) {
            textFlowDirection = 'RTL';
        }

        this.setState({
            deadkeyLookup,
            keyDataList,
            ligatureLookup,
            localeName,
            shiftStateLookup,
            textFlowDirection
        });
    }

    render() {
        console.log('state:', this.state);
        return (
            <div className={Keyboard.displayName} />
        );
    }
}

export default Keyboard;
