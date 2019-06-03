import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const ButtonComponent = (props) => {
    const {
        label,
        type
    } = props;

    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className={ButtonComponent.displayName}
            type={type}
        >
            {label}
        </button>
    );
};

ButtonComponent.displayName = 'ButtonComponent';

ButtonComponent.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string
};

ButtonComponent.defaultProps = {
    label: '',
    type: 'button'
};

export default ButtonComponent;
