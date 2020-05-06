import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [isClearBtn, setIsClearBtn] = useState(false);

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    setIsClearBtn(true);
  };

  const resetInputField = () => {
    setSearchValue("");
    setIsAll(true);
    setIsMovie(false);
    setIsTv(false);
    setIsPeople(false);
    setIsClearBtn(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  const [isAll, setIsAll] = useState(true);
  const [isMovie, setIsMovie] = useState(false);
  const [isTv, setIsTv] = useState(false);
  const [isPeople, setIsPeople] = useState(false);

  const changeActiveClass = (filter) => {
    console.log("fire");
    if (filter === "all") {
      setIsAll(true);
      setIsMovie(false);
      setIsTv(false);
      setIsPeople(false);
    } else if (filter === "movie") {
      setIsAll(false);
      setIsMovie(true);
      setIsTv(false);
      setIsPeople(false);
    } else if (filter === "tv") {
      setIsAll(false);
      setIsMovie(false);
      setIsTv(true);
      setIsPeople(false);
    } else if (filter === "people") {
      setIsAll(false);
      setIsMovie(false);
      setIsTv(false);
      setIsPeople(true);
    }
    return;
  };

  const handleFilter = (e) => {
    e.preventDefault();
    changeActiveClass(e.target.value);
    props.filter(e.target.value);
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
          <button
            className={
              isClearBtn ? "search-form__clear" : "search-form__clear__hidden"
            }
            onClick={resetInputField}
            type="reset"
          >
            Clear
          </button>
          <button className="search-form__button">Search</button>
        </div>
      </form>
      <div>
        <button
          className={
            isAll ? "filter-button-active filter-button" : "filter-button"
          }
          onClick={handleFilter}
          value="all"
        >
          All
        </button>
        <button
          className={
            isMovie ? "filter-button-active filter-button" : "filter-button"
          }
          onClick={handleFilter}
          value="movie"
        >
          Movies
        </button>
        <button
          className={
            isTv ? "filter-button-active filter-button" : "filter-button"
          }
          onClick={handleFilter}
          value="tv"
        >
          TV Shows
        </button>
        <button
          className={
            isPeople ? "filter-button-active filter-button" : "filter-button"
          }
          onClick={handleFilter}
          value="people"
        >
          People
        </button>
      </div>
    </div>
  );
};

export default Search;
