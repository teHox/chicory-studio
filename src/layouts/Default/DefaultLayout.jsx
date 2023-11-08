import React from "react";
import SideMenu from "../../widgets/sideMenu/SideMenu";

const DefaultLayout = ({ children }) => {
    return (
        <div className="app">
            <SideMenu />
            <div className="app__container">{children}</div>
        </div>
    );
};

export default DefaultLayout;
