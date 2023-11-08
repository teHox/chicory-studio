import React, { createContext, useEffect, useState } from "react";
import {
    bestRetedURL,
    upcomingAnimeURL,
    fallSeasonsURL,
    schedulesURL,
} from "../servises/api";
import { addToQueue } from "../servises/axiosRequests";
import homeHeaderImg from "../assets/img/home-header-img.png";
import { getRandomNum } from "../helpers/helpers";
import { getAnime } from "../servises/animeServices";

export const DataContext = createContext();

const Context = ({ children }) => {
    const [bestRetedAnime, setBestRatedAnime] = useState([]);
    const [upcomingAnime, setUpcomingAnime] = useState([]);
    const [fallAnimeSeasons, setFallAnimeSeasons] = useState([]);
    const [scheduledAnime, setScheduledAnime] = useState([]);
    const [randomIndex, setRandomIndex] = useState(0);
    const [homeImage, setHomeImage] = useState(homeHeaderImg);
    const [anime, setAnime] = useState();
    const [currentAnime, setCurrentAnime] = useState(null);
    const [selectedAnimeImage, setSelectedAnimeImage] = useState(homeHeaderImg);
    const [selectedCardId, setSelectedCardId] = useState(null);

    useEffect(() => {
        addToQueue(upcomingAnimeURL, setUpcomingAnime, 25);
        addToQueue(bestRetedURL, setBestRatedAnime, 25);
        addToQueue(fallSeasonsURL, setFallAnimeSeasons, 25);
        setTimeout(() => {
            addToQueue(schedulesURL, setScheduledAnime, 25);
        }, 1500);
    }, []);

    useEffect(() => {
        if (bestRetedAnime.length > 0) {
            const initialRandomIndex = getRandomNum(0, bestRetedAnime.length - 1);
            setRandomIndex(initialRandomIndex);
            setCurrentAnime(bestRetedAnime[initialRandomIndex]);
            setSelectedAnimeImage(bestRetedAnime[initialRandomIndex].images?.webp?.large_image_url || "");
        }
    }, [bestRetedAnime]);

    const getRandomAnime = (animeToShow) => {
        const newIndex = getRandomNum(0, 24);
        setRandomIndex(newIndex);
        getAnime(animeToShow || anime, setHomeImage, newIndex);
    };
    const updateAnimeInfo = (anime) => {
        setCurrentAnime(anime);
        setSelectedAnimeImage(anime.images?.webp?.large_image_url || null);
    };

    return (
        <DataContext.Provider
            value={{
                scheduledAnime: scheduledAnime,
                upcomingAnime: upcomingAnime,
                bestRetedAnime: bestRetedAnime,
                fallAnimeSeasons: fallAnimeSeasons,
                randomIndex: randomIndex,
                homeImage: homeImage,
                getRandomAnime: getRandomAnime,
                updateAnimeInfo: updateAnimeInfo,
                setAnime: setAnime,
                anime: anime,
                currentAnime: currentAnime,
                setCurrentAnime: setCurrentAnime,
                selectedAnimeImage: selectedAnimeImage,
                setSelectedCardId: setSelectedCardId,
                selectedCardId: selectedCardId,
            }}>
            {children}
        </DataContext.Provider>
    );
};

export default Context;
