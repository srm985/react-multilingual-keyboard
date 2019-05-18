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


function loadStories() {
    // require('../src/components/LayoutComponent/stories');
}

configure(loadStories, module);
