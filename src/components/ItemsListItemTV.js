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
      </div>
    </div>
  );
};

ItemsListItemTV.defaultProps = {
  media: "http://placekitten.com/300/450",
  title: "Placeholder Movie Title",
  type: "movie",
  airDate: "1900/08/04",
  description: "",
  userRating: "70",
};

export default ItemsListItemTV;
