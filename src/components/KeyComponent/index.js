import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const KeyComponent = (props) => {
    const {
        keySymbol
    } = props;

    return (
        <div className={KeyComponent.displayName}>
            <span className={`${KeyComponent.displayName}__symbol`}>{keySymbol}</span>
        </div>
    );
};

KeyComponent.displayName = 'KeyComponent';

KeyComponent.propTypes = {
    keySymbol: PropTypes.string
};

KeyComponent.defaultProps = {
    keySymbol: ''
};

export default KeyComponent;
