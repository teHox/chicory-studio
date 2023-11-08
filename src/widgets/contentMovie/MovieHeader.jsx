import React from "react";
import DefaultTitle from "../../shared/default/defaultTitle/DefaultTitle";
import DefaultGreyText from "../../shared/default/defaultGreyText/DefaultGreyText";
import DefaultText from "../../shared/default/defaultText/DefaultText";
import useWindowResize from "../../hooks/useWindowResize";
import { PiListMagnifyingGlassThin } from "react-icons/pi";
import { BsBookmarks } from "react-icons/bs";
import { сropText } from "../../servises/animeServices";
import Player from "../../shared/player/Player";

const MovieHeader = ({ anime }) => {
    const { isFullWidth } = useWindowResize;
    
    return anime ? (
        <div className="movie__header" key={anime.mal_id}>
            <div className="movie__header__content">
                <div className="movie__header__title">
                    <div className="movie__header__title-main">
                        <DefaultTitle title={anime.title} animeID={anime.mal_id} />
                        <PiListMagnifyingGlassThin
                            style={{ minWidth: "20px", minHeight: "20px" }}
                        />
                    </div>
                    <div className="movie__header__title-second">
                        <h3>
                            <DefaultGreyText text={"Watching"} />
                        </h3>
                        <BsBookmarks />
                    </div>
                </div>
                <DefaultGreyText text={anime.aired.string} />
                <DefaultText text={сropText(anime.synopsis, isFullWidth ? 50 : 60)} />
                <div className="movie__header__genres">
                    <DefaultGreyText text={anime.genres[0].name} />
                    {anime.genres[1] ? (
                        <>
                            <span className="movie__header__dot"></span>
                            <DefaultGreyText text={anime.genres[1].name} />
                        </>
                    ) : null}
                    {anime.genres[2] ? (
                        <>
                            <span className="movie__header__dot"></span>
                            <DefaultGreyText text={anime.genres[2].name} />
                        </>
                    ) : null}
                </div>
            </div>
            <div className="movie__header__image">
                <Player url={anime.trailer.embed_url}/>
            </div>
        </div>
    ) : null;
};

export default MovieHeader;
