import React from 'react';
import {
    storiesOf
} from '@storybook/react';
import {
    number
} from '@storybook/addon-knobs';

import Key from '../KeyComponent';
import Row from './index';

const stories = storiesOf(Row.displayName, module);

stories.add('Standard', () => (
    <Row>
        <Key keySymbol={'q'} />
        <Key keySymbol={'w'} />
        <Key keySymbol={'e'} />
        <Key keySymbol={'r'} />
        <Key keySymbol={'t'} />
        <Key keySymbol={'y'} />
        <Key keySymbol={'u'} />
        <Key keySymbol={'i'} />
        <Key keySymbol={'o'} />
        <Key keySymbol={'p'} />
        <Key keySymbol={'['} />
        <Key keySymbol={']'} />
    </Row>
));

stories.add('Expanded Keys', () => {
    const flexGrow = number('flexGrow', 3);

    return (
        <Row>
            <Key
                keySymbol={'Tab'}
                flexGrow={flexGrow}
            />
            <Key keySymbol={'q'} />
            <Key keySymbol={'w'} />
            <Key keySymbol={'e'} />
            <Key keySymbol={'r'} />
            <Key keySymbol={'t'} />
            <Key keySymbol={'y'} />
            <Key keySymbol={'u'} />
            <Key keySymbol={'i'} />
            <Key keySymbol={'o'} />
            <Key keySymbol={'p'} />
        </Row>
    );
});
