import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => setSearchTerm(event.target.value);

  const keyPress = (event) => {
    if (event.key === "Enter") {
      props.onSubmit(searchTerm);
    }
  };
  return (
    <div>
      <div className="header">
        <a href="/" className="brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png"
            alt="logo"
            className="logoBrand"
          />
        </a>
        <h1>Youtube</h1>
        <input
          type="text"
          placeholder="Search.."
          value={props.searchTerm}
          onChange={handleChange}
          onKeyPress={keyPress}
        />
      </div>
    </div>
  );
};

export default Search;
