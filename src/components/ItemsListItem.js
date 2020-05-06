/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const ItemsListItem = (props) => {
  // Poster URL
  const media = `https://image.tmdb.org/t/p/w185${props.media}`;

  // Determine rating color based on user rating
  let ratingClass = "item-rating-low";
  if (props.userRating > 39 && props.userRating <= 69) {
    ratingClass = "item-rating-medium";
  } else if (props.userRating >= 70) {
    ratingClass = "item-rating-high";
  }

  // Fetch Movie Trailer URL
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    if (props.type === "movie") {
      fetch(
        `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=c5d29e3705cb514252dcac76c8cba1e2&language=en-US`
      )
        .then((response) => response.json())
        .then((jsonResponse) => {
          setTrailerUrl(
            `https://www.youtube.com/watch?v=${jsonResponse.results[0].key}`
          );
        })
        .catch((error) => {
          console.log("trailer fetch error ", error);
        });
    }
  }, []);

  // Movie Trailer click handler
  const onClickTrailer = () => {
    window.open(trailerUrl, "_blank");
  };

  return (
    <div className="item-wrapper">
      <img src={media} alt={props.title + " poster"} />
      <div>
        <p className="item-title">
          {props.title}{" "}
          <span>
            {props.type !== "people" && props.type === "movie"
              ? props.releaseDate.substring(0, 4)
              : props.airDate.substring(0, 4)}
            {props.type === "people" && `Gender: ${props.gender}`}
          </span>
        </p>
        <span className="item-type">
          {props.type === "tv" ? "TV Show" : props.type}
        </span>{" "}
        <span className="item-date">
          {props.type !== "people" && props.type === "movie"
            ? `Release date: ${props.releaseDate.replace(/-/g, "/")}`
            : `First air date: ${props.airDate.replace(/-/g, "/")}`}
        </span>
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
        {props.type === "movie" && trailerUrl && (
          <button className="item-play-btn" onClick={onClickTrailer}>
            &#9654; Play Trailer
          </button>
        )}
        {props.type === "movie" && !trailerUrl && (
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
  type: "movie",
  releaseDate: "2005/08/04",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  userRating: "70",
};

export default ItemsListItem;
