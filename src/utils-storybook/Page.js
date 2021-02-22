import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Page.scss";

export const Page = ({
    title,
    info,
    children,
    inverted,
}) => {
    const classes = classNames("sb-page", {
        inverted,
    });

    return (
        <div className={classes}>
            <div className="sb-header">
                <h1 className="sb-title">{title}</h1>
                {info && <h2 className="sb-info">{info}</h2>}
            </div>
            {children}
        </div>
    );
};

Page.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string,
    inverted: PropTypes.bool,
    noHorizontalPadding: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Page;
