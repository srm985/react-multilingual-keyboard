import {
    withConsole
} from '@storybook/addon-console';
import {
    addDecorator,
    configure
} from '@storybook/react';
import {
    withInfo
} from '@storybook/addon-info';
import {
    withKnobs
} from '@storybook/addon-knobs';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withInfo);
addDecorator(withKnobs);

/* eslint-disable global-require */
function loadStories() {
    require('../src/components/ButtonComponent/stories');
    require('../src/components/KeyComponent/stories');
    require('../src/components/RowComponent/stories');
}

configure(loadStories, module);
