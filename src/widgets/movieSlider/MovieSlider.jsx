import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y } from "swiper/modules";
import useWindowResize from "../../hooks/useWindowResize";
import Fancybox from "../../features/fancyBox/FancyBox";

const MovieSlider = ({ anime }) => {
    const { slidesPerView } = useWindowResize();
    const webpImages = anime.images.webp;
    const imageUrls = Object.values(webpImages).map((image) => image);

    return (
        <div className="movie-slider">
            <h2 className="movie-slider__title">{anime.title}</h2>
            <Swiper
                modules={[A11y]}
                className="movie-swiper slider"
                spaceBetween={20}
                slidesPerView={slidesPerView - 0.2}>
                {imageUrls.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Fancybox>
                            <a data-fancybox="gallery" href={image}>
                                    <img
                                        src={image}
                                        alt={anime.title}
                                        style={{
                                            maxWidth: "350px",
                                            maxHeight: "182px",
                                            width: "100%",
                                            height: '100%',
                                            objectFit: "cover",
                                        }}
                                    />
                            </a>
                        </Fancybox>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieSlider;
