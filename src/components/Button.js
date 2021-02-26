import React from "react";
import PropTypes from "prop-types";

const Button = ({
    //🎯 There is work to be done here!
    children,
    disabled,
    onClick,
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
        //🚩 Start here!
        //   Replace the HTML below
        <p>{children}</p>
    );
}

Button.defaultProps = {
    //🎯 There is work to be done here!
    //📙 Learn more: https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values
    disabled: false,
};

Button.propTypes = {
    //🎯 There is work to be done here!
    //📙 Learn more: https://reactjs.org/docs/typechecking-with-proptypes.html
    disabled: PropTypes.bool,
};;

export default Button;


//📙 Learn about React Components and Props: https://reactjs.org/docs/components-and-props.html
