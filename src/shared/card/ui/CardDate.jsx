import React from "react";

const CardDate = ({ date }) => {
    return (
        <>
            <div className="card__date">
                {date.from ? `${date.from}. ` : ""}
                {date.duration ? `${date.duration}. ` : ""}
                {date.episodes ? `${date.episodes} ep's` : ""}
            </div>
        </>
    );
};

export default CardDate;
