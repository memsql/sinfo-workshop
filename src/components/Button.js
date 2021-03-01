import React from "react";
import PropTypes from "prop-types";

const BUTTON_SIZES = ["small", "medium", "large"];

const BUTTON_TYPES = [
    "brand-primary",
    "brand-secondary",
    "alt-primary",
    "alt-secondary",
];

const Button = ({
    children,
    type,
    size,
    inverted,
    disabled,
    onClick
}) => {

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
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    //📙 Learn more: https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values
    type: "brand-primary",
    size: "medium",
};

Button.propTypes = {
    //📙 Learn more: https://reactjs.org/docs/typechecking-with-proptypes.html
    type: PropTypes.oneOf(BUTTON_TYPES),
    size: PropTypes.oneOf(BUTTON_SIZES),
    children: PropTypes.node.isRequired,
    inverted: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};;

export default Button;


//📙 Learn about React Components and Props: https://reactjs.org/docs/components-and-props.html
