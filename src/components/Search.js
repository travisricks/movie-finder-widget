import React from "react";

export default class Search extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.text.value);
  };

  render() {
    return (
      <div>
        <form className="" onSubmit={this.handleFormSubmit}>
          <input
            className=""
            type="text"
            name="text"
            placeholder="Search for movies, tv shows or people..."
          />
          <button className="button">Search</button>
        </form>
        <div>
          <button>All</button>
          <button>Movies</button>
          <button>TV Shows</button>
          <button>People</button>
        </div>
      </div>
    );
  }
}
