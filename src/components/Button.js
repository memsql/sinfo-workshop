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
    const classes = classNames("button-component", type, size, {
        disabled,
        inverted,
    });

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
            disabled={disabled}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: "primary",
    size: "medium",
};

Button.propTypes = {
    type: PropTypes.oneOf(BUTTON_TYPES),
    size: PropTypes.oneOf(BUTTON_SIZES),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    inverted: PropTypes.bool,
};;

export default Button;
