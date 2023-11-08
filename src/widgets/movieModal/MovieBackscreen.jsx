import React, { useContext, useEffect } from "react";
import DefaultTitle from "../../shared/default/defaultTitle/DefaultTitle";
import DefaultGreyText from "../../shared/default/defaultGreyText/DefaultGreyText";
import DefaultText from "../../shared/default/defaultText/DefaultText";
import { сropText } from "../../servises/animeServices";
import useWindowResize from "../../hooks/useWindowResize";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { DataContext } from "../../context/Contex";

const MovieBackscreen = () => {
    const animeContext = useContext(DataContext);
    const { isFullWidth } = useWindowResize(885);
    animeContext.setAnime(animeContext.bestRetedAnime[animeContext.randomIndex]);
    const currentAnime = animeContext.currentAnime;

    useEffect(() => {
        animeContext.getRandomAnime(currentAnime);
    }, [currentAnime]);

    return currentAnime ? (
        <div className="movie-backscreen" key={currentAnime.mal_id}>
            <div className="movie-backscreen__title">
                <DefaultTitle title={currentAnime.title} animeID={currentAnime.mal_id} />

                <Link to={`anime/${currentAnime.mal_id}`}>
                    <FiExternalLink style={{ fontSize: "30px" }} stroke="white" />
                </Link>
            </div>
            <DefaultGreyText text={currentAnime.aired?.string} />
            <DefaultText text={сropText(currentAnime.synopsis, isFullWidth ? 25 : 35)} />
            <div className="movie-backscreen__genres">
                <DefaultGreyText text={currentAnime?.genres[0]?.name} />
                {currentAnime?.genres[1]?.name ? (
                    <>
                        <div className="movie-backscreen__dot"></div>
                        <DefaultGreyText text={currentAnime?.genres[1]?.name} />
                    </>
                ) : null}
                {currentAnime?.genres[2]?.name ? (
                    <>
                        <div className="movie-backscreen__dot"></div>
                        <DefaultGreyText text={currentAnime?.genres[2]?.name} />
                    </>
                ) : null}
            </div>
        </div>
    ) : null;
};

export default MovieBackscreen;
