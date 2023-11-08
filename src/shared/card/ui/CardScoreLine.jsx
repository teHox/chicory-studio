import React from "react";

const CardScoreLine = ({ score,url }) => {
    const percentScore = score * 10;
    const scoreLineActive = {
        width: `${percentScore}px`,
    };
    return (
        <>
            <span className="card__score-line" style={{ scoreLineActive }}>
                <span style={scoreLineActive} className="card__score-line_active"></span>
            </span>
            <div className="card__score">
                <div className="card__user-score">
                    User score {percentScore.toFixed(1)}%
                </div>
            </div>
        </>
    );
};

export default CardScoreLine;
