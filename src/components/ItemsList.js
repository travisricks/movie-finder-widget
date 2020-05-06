import React from "react";

import ItemsListItem from "./ItemsListItem";

const ItemsList = (props) => {
  return (
    <div>
      {props.data.map((item) => (
        <ItemsListItem
          key={item.id}
          id={item.id}
          title={item.title}
          media={item.poster_path}
          releaseDate={item.release_date}
          airDate={item.first_air_date}
          type={item.media_type}
          description={item.overview}
          userRating={item.vote_average * 10}
          personName={item.name}
        />
      ))}
    </div>
  );
};

export default ItemsList;
