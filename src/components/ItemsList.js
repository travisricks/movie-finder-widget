import React from "react";

import ItemsListItemMovie from "./ItemsListItemMovie";
import ItemsListItemTV from "./ItemsListItemTV";
import ItemsListItemPeople from "./ItemsListItemPeople";

const ItemsList = (props) => {
  return (
    <div>
      {props.data.map((item) => {
        if (item.media_type === "movie") {
          return (
            <ItemsListItemMovie
              key={item.id}
              id={item.id}
              title={item.title}
              media={item.poster_path}
              releaseDate={item.release_date}
              type={item.media_type}
              description={item.overview}
              userRating={item.vote_average * 10}
            />
          );
        }
        if (item.media_type === "tv") {
          return (
            <ItemsListItemTV
              key={item.id}
              id={item.id}
              title={item.name}
              media={item.poster_path}
              airDate={item.first_air_date}
              type={item.media_type}
              description={item.overview}
              userRating={item.vote_average * 10}
              personName={item.name}
            />
          );
        }
        if (item.name) {
          return (
            <ItemsListItemPeople
              key={item.id}
              id={item.id}
              media={item.profile_path}
              description={item.overview}
              personName={item.name}
              gender={item.gender}
            />
          );
        }
      })}
    </div>
  );
};

export default ItemsList;
