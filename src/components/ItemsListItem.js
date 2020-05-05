import React from "react";

const ItemsListItem = (props) => {
  let ratingClass = "item-rating-low";
  if (props.userRating > 39 && props.userRating <= 69) {
    ratingClass = "item-rating-medium";
  } else if (props.userRating >= 70) {
    ratingClass = "item-rating-high";
  }

  return (
    <div className="item-wrapper">
      <img src={props.media} alt={props.title + "poster"} />
      <div>
        <p className="item-title">
          {props.title} <span>({props.year})</span>
        </p>
        <span className="item-type">{props.type}</span>{" "}
        <span className="item-date">Release date: {props.date}</span>
        <p>{props.description}</p>
        <div className="item-rating">
          <p>
            User Rating:{" "}
            <span className="item-rating-value">{props.userRating}%</span>
          </p>
          <div className="item-rating-bar-bg">
            <div
              className={ratingClass + " item-rating-bar"}
              style={{
                width: props.userRating + "%",
              }}
            ></div>
          </div>
        </div>
        {props.type === "Movie" && props.trailerUrl && (
          <button className="item-play-btn">&#9654; Play Trailer</button>
        )}
        {props.type === "Movie" && !props.trailerUrl && (
          <button className="item-play-btn-disabled">
            &#9654; Trailer Unavailable
          </button>
        )}
      </div>
    </div>
  );
};

ItemsListItem.defaultProps = {
  media: "http://placekitten.com/300/450",
  title: "Placeholder Movie Title",
  year: "2000",
  type: "Movie",
  date: "2005/08/04",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  userRating: "70",
  trailerUrl: "",
};

export default ItemsListItem;
