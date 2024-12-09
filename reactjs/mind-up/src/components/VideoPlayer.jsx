import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div>
      <ReactPlayer
        url={videoUrl}
        controls
        playing={false} // Starts paused
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default VideoPlayer;
