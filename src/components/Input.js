import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { isValidInput } from "../utils/input";
import "./Input.scss";

export const TEXT_TYPES = [
    "email",
    "number",
    "password",
    "text",
    "url",
];

const Input = ({
    label,
    name,
    type,
    disabled,
    placeholder,
    success,
    error,
    onChange,
    onBlur,
}) => {
    const inputRef = useRef();
    const [ isSuccess, setIsSuccess ] = useState(success);
    const [ isError, setIsError ] = useState(error);
    const [ errorMessage, setErrorMessage ] = useState("");

    const classes = classNames("input-component", type, {
        disabled,
        error: isError,
        success: isSuccess,
    });

    /** A handler to change the input value */
    const handleChange = e => {
        if (disabled) {
            e.stopPropagation();
            e.preventDefault();
        } else if (inputRef.current) {
            setErrorMessage("");
            setIsError(false);
            const value = inputRef.current.value;
            if (onChange) {
                onChange(e, value);
            }

        }
    };

    /** A handler to change the input validation */
    const handleBlur = e => {
        if (inputRef.current) {
            setErrorMessage("");
            setIsError(false);
            setIsSuccess(false);

            const value = inputRef.current.value;
            const validation = isValidInput(value, type);

            if (typeof validation === 'string') {
                setErrorMessage(validation);
                setIsError(true);
            } else if (validation === true) {
                setIsSuccess(true);
            }

            if (onChange) {
                onChange(e, value);
            }

        }
    };

    return (
        <div className={classes}>
            {label && (
                <label className="input-label" htmlFor={name}>
                    {label}
                </label>
            )}
            <div className="input-wrapper">
                <input
                    ref={inputRef}
                    className="input"
                    type={type}
                    id={name}
                    disabled={disabled}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errorMessage &&
                    <p className="error-message">{errorMessage}</p>
                }
            </div>
        </div>
    );
}


Input.defaultProps = {
    type: "text",
};

export const inputPropTypes = {
    type: PropTypes.oneOf(TEXT_TYPES),
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
    onClick: PropTypes.func,
};

Input.propTypes = inputPropTypes;

export default Input;
