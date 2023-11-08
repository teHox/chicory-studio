import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoIosArrowUp } from "react-icons/io";
const SmoothScroll = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY >= 430 ? setIsVisible(true) : setIsVisible(false);
        });
    }, []);
    return (
        <Link
            className={`home__scroll ${isVisible ? "home__scroll_active" : ""}`}
            activeClass="active"
            to="headerAnimeInfo"
            spy={true}
            smooth={true}
            duration={650}
            offset={-50}
            isDynamic={true}>
            <IoIosArrowUp fill="white" />
        </Link>
    );
};

export default SmoothScroll;
