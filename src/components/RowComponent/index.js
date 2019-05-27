import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const RowComponent = (props) => {
    const {
        children
    } = props;
    return (
        <div className={RowComponent.displayName}>{children}</div>
    );
};

RowComponent.displayName = 'RowComponent';

RowComponent.propTypes = {
    children: PropTypes.node.isRequired
};

export default RowComponent;
