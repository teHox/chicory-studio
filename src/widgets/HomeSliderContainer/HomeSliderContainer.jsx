import React, { useContext } from "react";
import SliderBlock from "../../features/homeSlider/HomeSlider";
import { DataContext } from "../../context/Contex";

const HomeSliderContainer = () => {
    const animeContext = useContext(DataContext);

    const sliderData = [
        { id: 0, title: "New", data: animeContext.fallAnimeSeasons },
        { id: 1, title: "Best rated", data: animeContext.bestRetedAnime },
        { id: 2, title: "Upcoming", data: animeContext.upcomingAnime },
        { id: 3, title: "Scheduled", data: animeContext.scheduledAnime },
    ];
    return sliderData.map((item) => (
        <SliderBlock key={item.id} title={item.title} anime={item.data} />
    ));
};

export default HomeSliderContainer;
