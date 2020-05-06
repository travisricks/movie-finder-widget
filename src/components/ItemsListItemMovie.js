/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const ItemsListItemMovie = (props) => {
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
  }, []);

  // Movie Trailer click handler
  const onClickTrailer = () => {
    window.open(trailerUrl, "_blank");
  };

  return (
    <div className="item-wrapper">
      {props.media !== null ? (
        <img src={media} alt={props.title + " poster"} />
      ) : (
        <img
          src="http://placehold.jp/335267/ffffff/180x270.png?text=Image%20Unavailable"
          alt="unavailable"
        />
      )}
      <div>
        <p className="item-title">
          {props.title} <span>({props.releaseDate.substring(0, 4)})</span>
        </p>
        <span className="item-type">{props.type}</span>{" "}
        <span className="item-date">
          {`Release date: ${props.releaseDate.replace(/-/g, "/")}`}
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
        {trailerUrl && (
          <button className="item-play-btn" onClick={onClickTrailer}>
            &#9654; Play Trailer
          </button>
        )}
        {!trailerUrl && (
          <button className="item-play-btn-disabled">
            &#9654; Trailer Unavailable
          </button>
        )}
      </div>
    </div>
  );
};

ItemsListItemMovie.defaultProps = {
  media: "http://placekitten.com/300/450",
  title: "Placeholder Movie Title",
  type: "movie",
  releaseDate: "2005/08/04",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  userRating: "70",
};

export default ItemsListItemMovie;
