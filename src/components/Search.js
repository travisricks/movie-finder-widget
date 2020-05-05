import React from "react";

export default class Search extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.text.value);
  };

  render() {
    return (
      <div className="search">
        <form className="search-form" onSubmit={this.handleFormSubmit}>
          <div className="input-wrapper">
            <input
              className="search-form__input"
              type="text"
              name="text"
              placeholder="Search for movies, tv shows or people..."
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
  }
}
