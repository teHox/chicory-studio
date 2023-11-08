import React from "react";
import ReactPlayer from "react-player";

const Player = ({ url, width, height }) => {
    return (
        <ReactPlayer
            url={url || "https://www.youtube.com/watch?v=ysz5S6PUM-U"}
            volume={0.05}
            controls={true}
            loop={true}
            width={width}
            height={height}
            config={{
                youtube: {
                    playerVars: { showinfo: 1 },
                },
            }}
        />
    );
};

export default Player;
