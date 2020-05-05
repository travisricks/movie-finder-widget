import React from "react";

import ItemsListItem from "./ItemsListItem";

const ItemsList = () => (
  <div>
    <ItemsListItem trailerUrl="http://google.com" />
    <ItemsListItem userRating="39" />
    <ItemsListItem userRating="69" />
  </div>
);

export default ItemsList;
