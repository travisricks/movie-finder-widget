/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const ItemsListItemPeople = (props) => {
  // Poster URL
  const media = `https://image.tmdb.org/t/p/w185${props.media}`;

  return (
    <div className="item-wrapper">
      {props.media !== null ? (
        <img src={media} alt={props.personName + " poster"} />
      ) : (
        <img
          src="http://placehold.jp/335267/ffffff/180x270.png?text=Image%20Unavailable"
          alt="image unavailable"
        />
      )}
      <div>
        <p className="item-title">{props.personName}</p>
        <span className="item-type">People</span>{" "}
        <span className="item-date">
          {props.gender === 2 && "Gender: Male"}
          {props.gender === 1 && "Gender: Female"}
        </span>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

ItemsListItemPeople.defaultProps = {
  media: "http://placekitten.com/300/450",
  personName: "Placeholder Name",
  description: "",
  userRating: "70",
};

export default ItemsListItemPeople;
