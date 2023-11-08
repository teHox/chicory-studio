import React from "react";

const HeaderTitle = ({name}) => {
    return (
        <div className="header__title">
            <h1 className="header-title">{name}</h1>
            <div className="header-title-background"></div>
        </div>
    );
};

export default HeaderTitle;
