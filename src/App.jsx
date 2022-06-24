import React, { useState } from "react";
import Search from "./cloneMain/Search";
import URL from "./cloneMain/api/URL";
import "./Design.css";
import Video from "./cloneMain/Video";
import ListVideos from "./cloneMain/ListVideos";
const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState({ id: {}, snippet: {} });
  async function videoSubmit(searchTerm) {
    const {
      data: { items: videos },
    } = await URL.get("search", {
      params: {
        part: "snippet",
        maxResults: 3,
        key: "AIzaSyAcSOpb4zx9jMb4Z5Tsd8ZCO9lw9pFMiYc",
        q: searchTerm,
      },
    });
    setVideos(videos);
    setSelectedVideos(videos[0]);
    console.log(videos);
  }
  return (
    <>
      <div className="searchSec">
        <Search onSubmit={videoSubmit} />
      </div>
      <div className="videoMain">
        <div className="videoSec">
          <Video video={selectedVideos} />
        </div>
        <div className="videoLists">
          <ListVideos videos={videos} onVideoSelect={setSelectedVideos} />
        </div>
      </div>
    </>
  );
};

export default App;
