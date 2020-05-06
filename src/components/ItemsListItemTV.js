/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const ItemsListItemTV = (props) => {
  // Poster URL
  const media = `https://image.tmdb.org/t/p/w185${props.media}`;

  // Determine rating color based on user rating
  let ratingClass = "item-rating-low";
  if (props.userRating > 39 && props.userRating <= 69) {
    ratingClass = "item-rating-medium";
  } else if (props.userRating >= 70) {
    ratingClass = "item-rating-high";
  }

  // Fetch TV Trailer URL
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${props.id}/videos?api_key=c5d29e3705cb514252dcac76c8cba1e2&language=en-US`
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

  // TV Trailer click handler
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
      <div className="item-right-column">
        <p className="item-title">
          {props.title} <span>({props.airDate.substring(0, 4)})</span>
        </p>
        <span className="item-type">TV Show</span>{" "}
        <span className="item-date">
          {`First air date: ${props.airDate.replace(/-/g, "/")}`}
        </span>
        <p>{props.description}</p>
        <div className="item-rating">
          <p>
            User Rating:{" "}
            <span className="item-rating-value">
              {props.userRating === 0 ? "Not rated" : `${props.userRating}%`}
            </span>
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

ItemsListItemTV.defaultProps = {
  media: "http://placekitten.com/300/450",
  title: "Placeholder TV Title",
  type: "tv",
  airDate: "1900/08/04",
  description: "",
  userRating: "70",
};

export default ItemsListItemTV;
