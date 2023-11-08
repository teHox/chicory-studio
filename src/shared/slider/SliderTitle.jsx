import React from "react";
import { FaArrowRotateLeft } from "react-icons/fa6";

const SliderTitle = ({title, goToFirstSlide, sliderPosition}) => {
    return (
        <div className="slider-block__title">
            <h2 className="slider-block-title">{title}</h2>
            {sliderPosition !== 0 && <FaArrowRotateLeft onClick={goToFirstSlide} />} 
        </div>
    );
};


export default SliderTitle;
