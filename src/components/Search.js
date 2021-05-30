import React from "react";

const Search = () => {
  return (
    <div className="search-div">
      <form className="search-frm">
        <label htmlFor="search" className="search-label">
          Search Movie:
        </label>
        <input type="text" id="search-box" />
        <button className="search-btn">Search</button>
      </form>
    </div>
  );
};

export default Search;
