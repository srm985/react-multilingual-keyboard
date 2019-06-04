import PropTypes from 'prop-types';
import React from 'react';

import {
    TYPE_BUTTON
} from './constants';

import './styles.scss';

const ButtonComponent = (props) => {
    const {
        handleClick,
        label,
        type
    } = props;

    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className={ButtonComponent.displayName}
            onClick={handleClick}
            type={type}
        >
            {label}
        </button>
    );
};

ButtonComponent.displayName = 'ButtonComponent';

ButtonComponent.propTypes = {
    handleClick: PropTypes.func,
    label: PropTypes.string,
    type: PropTypes.string
};

ButtonComponent.defaultProps = {
    handleClick: () => { },
    label: '',
    type: TYPE_BUTTON
};

export default ButtonComponent;
