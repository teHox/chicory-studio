import React from "react";
import { NavLink } from "react-router-dom";

const Links = ({ item }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? "menu__nav-link menu__nav-link_active" : "menu__nav-link"
            }
            to={item.to}>
            <div>{item.img}</div>
            <div className="menu__nav-name">{item.name}</div>
        </NavLink>
    );
};

export default Links;
