import React from "react";

const ItemsListItem = (props) => (
  <div>
    <img src="" alt="" />
    <div>
      <span>{props.title}</span> <span>{props.year}</span>
    </div>
    <span>{props.type}</span> <span>Release date: {props.date}</span>
    <p>{props.description}</p>
    <div>
      <p>User Rating: {props.userRating}%</p>
      <div
        style={{
          width: props.userRating + "%",
          backgroundColor: "blue",
          height: 20 + "px",
        }}
      ></div>
    </div>
    <button>&#9654; Play Trailer</button>
  </div>
);

ItemsListItem.defaultProps = {
  title: "Placeholder Movie Title",
  year: "2000",
  type: "Movie",
  date: "2005/08/04",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  userRating: "70",
};

export default ItemsListItem;
