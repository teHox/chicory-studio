import React from "react";
import Slider from "../slider/Slider";

const HomeSlider = ({ anime, title }) => {
    return (
        <div className="slider-block">
            {anime ? <Slider anime={anime} title={title} /> : null}
        </div>
    );
};

export default HomeSlider;
