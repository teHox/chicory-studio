import React, { useContext } from "react";
import DefaultLayout from "../../layouts/Default/DefaultLayout";
import Header from "../../widgets/header/Header";
import MovieHeader from "../../widgets/contentMovie/MovieHeader";
import { DataContext } from "../../context/Contex";
// import MovieSlider from "../../widgets/movieSlider/MovieSlider";
import MovieSliderBlock from "../../widgets/movieSlider/MovieSlider";

const MoviePage = () => {
    const animeContext = useContext(DataContext);
    return (
        <DefaultLayout>
            <div className="movie">
                <Header showNavigation={false} />
                <img
                    className="movie__bg"
                    src={animeContext.currentAnime.images.webp.large_image_url}
                    alt={animeContext.currentAnime.title}
                />

                <MovieHeader anime={animeContext.currentAnime} />
                <MovieSliderBlock
                    title={"Preview"}
                    anime={animeContext.currentAnime}
                />
            </div>
        </DefaultLayout>
    );
};

export default MoviePage;
