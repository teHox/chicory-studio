import React from "react";

const SocialLinks = ({ item }) => {
    return (
        <a href={item.href}>
            <img src={item.img} alt={item.img} />
        </a>
    );
};

export default SocialLinks;
