import React from "react";

const options = [
    { id: 0, name: "Music" },
    { id: 1, name: "Manga" },
    { id: 2, name: "Films" },
    { id: 3, name: "Anime" },
];

const HeaderNavigation = () => {
    return (
        <nav className="header__nav">
            <ul>
                {options.map(option => 
                    <li key={option.id}>{option.name}</li>
                )}
            </ul>
        </nav>
    );
};

export default HeaderNavigation;
