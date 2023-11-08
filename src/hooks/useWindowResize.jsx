import { useEffect, useState } from "react";
import { getSwiperSlideConfig } from "../entities/slider/config/swiperConfig";

const useWindowResize = (width) => {
    const [slidesPerView, setSlidesPerView] = useState(3.1);
    const [isFullWidth, setIsFullWidth] = useState(false);

    const handleResize = () => {
        const newWidth = window.innerWidth;
        setSlidesPerView(getSwiperSlideConfig(newWidth));
        setIsFullWidth(newWidth <= width);

    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { slidesPerView, isFullWidth };
};

export default useWindowResize;
