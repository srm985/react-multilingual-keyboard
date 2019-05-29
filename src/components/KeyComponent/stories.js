import React from 'react';
import {
    storiesOf
} from '@storybook/react';
import {
    boolean,
    text
} from '@storybook/addon-knobs';

import Key from './index';

const stories = storiesOf(Key.displayName, module);

stories.add('Standard', () => {
    const keySymbol = text('keySymbol', '0209');

    return (<Key keySymbol={keySymbol} />);
});

stories.add('Auxiliary', () => {
    const isAuxiliaryKey = boolean('isAuxiliaryKey', true);
    const keySymbol = text('keySymbol', '0239');

    return (
        <Key
            isAuxiliaryKey={isAuxiliaryKey}
            keySymbol={keySymbol}
        />
    );
});

stories.add('Callback', () => {
    const keySymbol = text('keySymbol', '0209');
    const handleKeyPress = () => { console.log('key pressed...'); };

    return (
        <Key
            handleKeyPress={handleKeyPress}
            keySymbol={keySymbol}
        />
    );
});
