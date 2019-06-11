/* eslint-disable sort-keys */

// This defines our mapping of the klc file to keyboard layout.
export const KEYBOARD_MAP = {
    '29': 0,
    '02': 1,
    '03': 2,
    '04': 3,
    '05': 4,
    '06': 5,
    '07': 6,
    '08': 7,
    '09': 8,
    '0a': 9,
    '0b': 10,
    '0c': 11,
    '0d': 12,
    '10': 13,
    '11': 14,
    '12': 15,
    '13': 16,
    '14': 17,
    '15': 18,
    '16': 19,
    '17': 20,
    '18': 21,
    '19': 22,
    '1a': 23,
    '1b': 24,
    '2b': 25,
    '1e': 26,
    '1f': 27,
    '20': 28,
    '21': 29,
    '22': 30,
    '23': 31,
    '24': 32,
    '25': 33,
    '26': 34,
    '27': 35,
    '28': 36,
    '2c': 37,
    '2d': 38,
    '2e': 39,
    '2f': 40,
    '30': 41,
    '31': 42,
    '32': 43,
    '33': 44,
    '34': 45,
    '35': 46
};
/* eslint-enable sort-keys */

// Languages known to proceed right to left.
export const RTL_LANGUAGES = [
    'ar-SA',
    'fa-IR',
    'he-IL',
    'ur-PK'
];


// Key Code Lookup
export const CAPS_LOCK_KEY_CODE = 20;
export const ENTER_KEY_CODE = 13;
export const ESCAPE_KEY_CODE = 27;
export const SHIFT_KEY_CODE = 16;
export const TAB_KEY_CODE = 9;

// Input Types
export const TYPE_CONTENTEDITABLE = 'contenteditable';
export const TYPE_EMAIL = 'email';
export const TYPE_NUMBER = 'number';
export const TYPE_PASSWORD = 'password';
export const TYPE_SEARCH = 'search';
export const TYPE_TEL = 'tel';
export const TYPE_TEXT = 'text';
export const TYPE_TEXTAREA = 'textarea';
export const TYPE_URL = 'url';

export const SUPPORTED_TYPES = [
    TYPE_CONTENTEDITABLE,
    TYPE_EMAIL,
    TYPE_NUMBER,
    TYPE_PASSWORD,
    TYPE_SEARCH,
    TYPE_TEL,
    TYPE_TEXT,
    TYPE_TEXTAREA,
    TYPE_URL
];


// This regex mimics the default HTML input type="number".
export const SUBSTITUTE_NUMBER_REGEX = /^(-)?(((\d+)|(\d+\.(\d+)?)|(\.(\d+)?))([eE]([-+])?(\d+)?)?)?$/;
