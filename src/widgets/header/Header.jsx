import React from "react";
import HeaderNavigation from "../../shared/header/HeaderNavigation";
import HeaderTitle from "../../shared/header/HeaderTitle";

const Header = (props) => {
    const { showNavigation } = props;

    return (
        <header className="header">
            <div className="header__container">
                <HeaderTitle name={"Chicory studio"} />
                {showNavigation && <HeaderNavigation />}
            </div>
        </header>
    );
};

export default Header;
