import React from "react";
import Header from "./Header";
import Search from "./Search";
import ItemsList from "./ItemsList";
import "../styles/styles.scss";

const App = () => (
  <div className="">
    <Header />
    <div className="container">
      <Search />
      <ItemsList />
    </div>
  </div>
);

export default App;
