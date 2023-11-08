import React from "react";

const CardGenre = ({ genres }) => {
    return (
        <ul className="card__genre">
            {genres.map((genre, index) => {
                return (
                    <>
                        <li key={genre.mal_id} className="card-ganre-link">
                            {genre.name}
                        </li>
                        {index < genres.length - 1 && <span>·</span>}
                    </>
                );
            })}
        </ul>
    );
};

export default CardGenre;
