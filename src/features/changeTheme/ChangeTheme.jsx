import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useColorTheme } from "../../hooks/useColorTheme";

const ChangeTheme = () => {
    const { toggleColorTheme, colorTheme } = useColorTheme();
    const onChangeTheme = () => {
        toggleColorTheme();
    };
    return (
        <div onClick={onChangeTheme} className="menu__nav-link">
            <div>{colorTheme === "light" ? <BsMoon /> : <BsSun />}</div>
            <div className="menu__nav-name">Theme</div>
        </div>
    );
};

export default ChangeTheme;
