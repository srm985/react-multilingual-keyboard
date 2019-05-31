import React from 'react';
import {
    storiesOf
} from '@storybook/react';
import {
    text
} from '@storybook/addon-knobs';

import Button from './index';

const stories = storiesOf(Button.displayName, module);

stories.add('Standard', () => {
    const label = text('label', 'button');

    return (
        <Button
            label={label}
        />
    );
});
