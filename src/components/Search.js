import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleFormSubmit}>
        <div className="input-wrapper">
          <input
            className="search-form__input"
            type="text"
            name="text"
            value={searchValue}
            placeholder="Search for movies, tv shows or people..."
            onChange={handleSearchInputChange}
          />
          <button className="search-form__button">Search</button>
        </div>
      </form>
      <div>
        <button className="filter-button filter-button-active">All</button>
        <button className="filter-button">Movies</button>
        <button className="filter-button">TV Shows</button>
        <button className="filter-button">People</button>
      </div>
    </div>
  );
};

export default Search;
