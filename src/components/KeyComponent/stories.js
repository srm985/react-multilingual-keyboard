import React from 'react';
import {
    storiesOf
} from '@storybook/react';
import {
    text
} from '@storybook/addon-knobs';

import Key from './index';

const stories = storiesOf(Key.displayName, module);

stories.add('with text', () => {
    const keySymbol = text('keySymbol', 'ä');

    return (<Key keySymbol={keySymbol} />);
});
