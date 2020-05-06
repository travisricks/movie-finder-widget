/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Search from "./Search";
import ItemsList from "./ItemsList";
import "../styles/styles.scss";

const App = () => {
  const [data, setData] = useState([]);

  // Load app with trending content
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=c5d29e3705cb514252dcac76c8cba1e2"
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        setData(jsonResponse.results);
      })
      .catch((error) => {
        console.log("initial fetch error: ", error);
      });
  }, []);

  return (
    <div className="">
      <Header />
      <div className="container">
        <Search />
        <ItemsList data={data} />
      </div>
    </div>
  );
};

export default App;
