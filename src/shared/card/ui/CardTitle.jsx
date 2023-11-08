import React from "react";

const CardTitle = ({ title }) => {
    const maxLength = 15;
    const ellipsis = "...";
    const croppedTitle = title.substring(0, maxLength) + ellipsis;

    return (
        <div>
            {title.length <= maxLength ? (
                <h2 className="card__title">{title}</h2>
            ) : (
                <h2 className="card__title">{croppedTitle}</h2>
            )}
        </div>
    );
};

export default CardTitle;
