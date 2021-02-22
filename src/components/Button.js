import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.scss";

export const BUTTON_SIZES = ["small", "medium", "large"];

export const BUTTON_TYPES = [
    "primary",
    "primary-alt",
    "secondary",
    "secondary-alt",
];

const Button = ({ children, type, size, disabled, inverted, onClick }) => {
    // const shouldDisable = disabled || !onClick;
    const shouldDisable = disabled;

    const classes = classNames("button-component", type, `size-${size}`, {
        disabled: shouldDisable,
        inverted,
    });


     /** A handler to change the input value */
    const handleClick = e => {
        if (disabled) {
            e.stopPropagation();
            e.preventDefault();
        } else if (onClick) {
            onClick(e);
        }
    };

    return (
        <button
            className={classes}
            onClick={handleClick}
            disabled={shouldDisable}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: "primary",
    size: "medium",
};

export const buttonPropTypes = {
    type: PropTypes.oneOf(BUTTON_TYPES),
    size: PropTypes.oneOf(BUTTON_SIZES),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    inverted: PropTypes.bool,
};

Button.propTypes = buttonPropTypes;

export default Button;
