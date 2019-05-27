import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const KeyComponent = (props) => {
    const {
        flexGrow,
        handleKeyPress,
        isAuxiliaryKey,
        keySymbol
    } = props;

    const keyStyles = {
        flexGrow
    };

    let preparedKeySymbol = '';

    if (!isAuxiliaryKey && keySymbol === '-1') {
        preparedKeySymbol = '';
    } else if (!isAuxiliaryKey && keySymbol.length === 4) {
        preparedKeySymbol = `&#x${keySymbol};`;
    } else {
        preparedKeySymbol = keySymbol;
    }

    return (
        <button
            className={KeyComponent.displayName}
            onClick={handleKeyPress}
            style={keyStyles}
            type={'button'}
        >
            <span
                className={`${KeyComponent.displayName}__symbol`}
                dangerouslySetInnerHTML={{
                    __html: preparedKeySymbol
                }}
            />
        </button>
    );
};

KeyComponent.displayName = 'KeyComponent';

KeyComponent.propTypes = {
    flexGrow: PropTypes.number,
    handleKeyPress: PropTypes.func,
    isAuxiliaryKey: PropTypes.bool,
    keySymbol: PropTypes.string
};

KeyComponent.defaultProps = {
    flexGrow: 1,
    handleKeyPress: () => { },
    isAuxiliaryKey: false,
    keySymbol: ''
};

export default KeyComponent;
