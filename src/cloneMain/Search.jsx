import React, { useState } from "react";

const Search = ({ searchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => setSearchTerm(event.target.value);

  const keyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm)
        
      };
    }
  };

  return (
    <>
      <div className="header">
        <a href="/" className="brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png"
            alt="logo"
            className="logoBrand"
          />
        </a>
        <input
          type="text"
          fullWidth
          placeholder="Search.."
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={keyPress}
        />
      </div>
    </>
  );
};

export default Search;
