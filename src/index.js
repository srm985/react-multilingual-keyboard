import React from 'react';
import ReactDOM from 'react-dom';

import Keyboard from './keyboard';

ReactDOM.render(
    <Keyboard />,
    document.getElementById('app')
);

module.hot.accept();
