import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';

import {
    TYPE_SUBMIT
} from '../ButtonComponent/constants';
import {
    TYPE_PASSWORD,
    TYPE_TEXT
} from '../../config';

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

    handleSubmit = (event) => {
        const {
            handleInputSubmission
        } = this.props;

        event.preventDefault();

        handleInputSubmission();
    }

    render() {
        const {
            currentText,
            focusedField: {
                inputType: focusedInputType,
                max = '',
                maxLength = '',
                min = '',
                pattern = '',
                placeholder = ''
            },
            handleHideKeyboard
        } = this.props;

        let inputType = TYPE_TEXT;

        if (focusedInputType === TYPE_PASSWORD) {
            inputType = TYPE_PASSWORD;
        }

        return (
            <form
                className={SubmissionAreaComponent.displayName}
                onSubmit={this.handleSubmit}
                ref={this.formReference}
            >
                <Button
                    handleClick={handleHideKeyboard}
                    label={'Cancel'}
                />
                <input
                    autoFocus
                    className={`${SubmissionAreaComponent.displayName}__input-field`}
                    max={max.length ? max : undefined}
                    maxLength={maxLength.length ? maxLength : undefined}
                    min={min.length ? min : undefined}
                    onChange={this.handleManualInput}
                    pattern={pattern.length ? pattern : undefined}
                    placeholder={placeholder.length ? placeholder : undefined}
                    ref={this.inputFieldReference}
                    type={inputType}
                    value={currentText}
                />
                <Button
                    label={'Submit'}
                    type={TYPE_SUBMIT}
                />
            </form>
        );
    }
}

SubmissionAreaComponent.displayName = 'SubmissionAreaComponent';

SubmissionAreaComponent.propTypes = {
    currentText: PropTypes.string,
    focusedField: PropTypes.shape({
        inputType: PropTypes.string,
        max: PropTypes.string,
        maxLength: PropTypes.number,
        min: PropTypes.string,
        pattern: PropTypes.string,
        placeholder: PropTypes.string
    }),
    handleHideKeyboard: PropTypes.func,
    handleInputSubmission: PropTypes.func,
    handleManualUpdate: PropTypes.func
};

SubmissionAreaComponent.defaultProps = {
    currentText: '',
    focusedField: {
        inputType: '',
        max: '',
        maxLength: '',
        min: '',
        pattern: '',
        placeholder: ''
    },
    handleHideKeyboard: () => { },
    handleInputSubmission: () => { },
    handleManualUpdate: () => { }
};

export default SubmissionAreaComponent;
