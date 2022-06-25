import React from "react";

const Video = ({
  video: {
    id: { videoId },
    snippet: { title, channelTitle, description },
  },
}) => {
  if (!videoId) return <p className="noResult">No Results...</p>;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="big-video">
      <div className="videoIframe">
        {/* <iframe
          frameBorder="0"
          allowFullScreen
          title="Video Player"
          src={videoSrc}
        /> */}
        <iframe
          width="850px"
          height="500px"
          src={videoSrc}
          title="video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          autoplay
          allowfullscreen
        ></iframe>
      </div>
      <div className="videoInfo">
        <h1 className="titleVideo">{title}</h1>
        <h1 className="channelTitle">{channelTitle}</h1>
        <p className="descriptionVideo">{description}</p>
      </div>
    </div>
  );
};

export default Video;
