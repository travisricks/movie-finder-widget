import React from "react";
import Header from "./Header";
import Search from "./Search";
import ItemsList from "./ItemsList";
import "../styles/App.css";
import { ItemsListItem } from "./ItemsListItem";

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <ItemsList />
  </div>
);

export default App;
