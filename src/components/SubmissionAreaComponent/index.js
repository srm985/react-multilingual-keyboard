import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';

import './styles.scss';

class SubmissionAreaComponent extends React.PureComponent {
    render() {
        return (
            <div className={SubmissionAreaComponent.displayName}>
                <Button label={'Cancel'} />
                <input className={`${SubmissionAreaComponent.displayName}__input-field`} />
                <Button label={'Submit'} />
            </div>
        );
    }
}

SubmissionAreaComponent.displayName = 'SubmissionAreaComponent';

SubmissionAreaComponent.defaultProps = {

};

SubmissionAreaComponent.defaultProps = {

};

export default SubmissionAreaComponent;
