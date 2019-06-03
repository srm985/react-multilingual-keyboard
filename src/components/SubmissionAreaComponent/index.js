import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';

import './styles.scss';

class SubmissionAreaComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.inputFieldReference = React.createRef();
    }

    handleManualInput = (event) => {
        const {
            handleManualUpdate
        } = this.props;

        const {
            target: {
                value: inputText
            }
        } = event;

        handleManualUpdate(inputText);
    }

    render() {
        const {
            currentText,
            focusedField: {
                max,
                maxLength,
                min,
                placeholder,
                target
            }
        } = this.props;

        return (
            <div className={SubmissionAreaComponent.displayName}>
                <Button label={'Cancel'} />
                <input
                    autoFocus
                    className={`${SubmissionAreaComponent.displayName}__input-field`}
                    max={max}
                    maxLength={maxLength}
                    min={min}
                    onChange={this.handleManualInput}
                    placeholder={placeholder}
                    ref={this.inputFieldReference}
                    target={target}
                    value={currentText}
                />
                <Button label={'Submit'} />
            </div>
        );
    }
}

SubmissionAreaComponent.displayName = 'SubmissionAreaComponent';

SubmissionAreaComponent.propTypes = {
    currentText: PropTypes.string,
    focusedField: PropTypes.shape({
        max: PropTypes.string,
        maxLength: PropTypes.number,
        min: PropTypes.string,
        placeholder: PropTypes.string,
        target: PropTypes.instanceOf(Element)
    }),
    handleManualUpdate: PropTypes.func
};

SubmissionAreaComponent.defaultProps = {
    currentText: '',
    focusedField: {
        max: '',
        maxLength: '',
        min: '',
        placeholder: '',
        target: ''
    },
    handleManualUpdate: () => { }
};

export default SubmissionAreaComponent;
