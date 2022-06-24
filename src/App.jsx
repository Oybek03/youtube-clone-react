import React, { useState } from "react";
import Search from "./cloneMain/Search";

import "./Design.css";
const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  async function videoSubmit(searchTerm) {
    const {
      data: { items: video },
    } = await URL.get("search", {
      params: {
        part: "snippet",
        maxResults: 15,
        key: "AIzaSyAcSOpb4zx9jMb4Z5Tsd8ZCO9lw9pFMiYc",
        q: searchTerm,
      },
    });
    console.log(videos);
    setVideos(videos);
    setSelectedVideos(videos[0]);
  }
  return (
    <>
      <div className="searchSec">
        <Search onSubmit={videoSubmit} />
      </div>
    </>
  );
};

export default App;
