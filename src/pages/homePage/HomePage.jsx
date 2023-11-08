import React, { useContext } from "react";
import DefaultLayout from "../../layouts/Default/DefaultLayout";
import Header from "../../widgets/header/Header";
import MovieBackscreen from "../../widgets/movieModal/MovieBackscreen";
import { DataContext } from "../../context/Contex";
import { Element } from "react-scroll";
import SliderBlocksContainer from "../../widgets/HomeSliderContainer/HomeSliderContainer";
import SmoothScroll from "../../shared/smoothScroll/SmoothScroll";

const HomePage = () => {
    const animeContext = useContext(DataContext);

    return (
        <DefaultLayout>
            <div className="home">
                <Element id="headerAnimeInfo" className="home__header">
                    <img
                        className="home__header-img"
                        src={animeContext.selectedAnimeImage}
                        alt="home-header-img"
                    />
                    <div className="home__header-blur"></div>
                    <Header />
                    <MovieBackscreen />
                </Element>
                <SliderBlocksContainer />
                <SmoothScroll />
            </div>
        </DefaultLayout>
    );
};

export default HomePage;
