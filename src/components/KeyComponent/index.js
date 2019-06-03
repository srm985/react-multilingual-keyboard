import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

class KeyComponent extends React.PureComponent {
    render() {
        const {
            flexGrow,
            handleKeyPress,
            isAuxiliaryKey,
            keySymbol
        } = this.props;

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

        console.log('We are rendering the key!');

        return (
            <button
                className={KeyComponent.displayName}
                onClick={() => { handleKeyPress(preparedKeySymbol); }}
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
    }
}

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
