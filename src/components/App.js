/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Search from "./Search";
import ItemsList from "./ItemsList";
import Footer from "./Footer";
import "../styles/styles.scss";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Load app with trending content
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=c5d29e3705cb514252dcac76c8cba1e2"
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        setData(jsonResponse.results);
        setFilteredData(jsonResponse.results);
      })
      .catch((error) => {
        console.log("initial fetch error: ", error);
      });
  }, []);

  // handle search
  const onSearch = (searchValue) => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=c5d29e3705cb514252dcac76c8cba1e2&language=en-US&query=${searchValue}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        setData(jsonResponse.results);
        setFilteredData(jsonResponse.results);
      })
      .catch((error) => {
        console.log("search fetch error: ", error);
      });
  };

  const onFilter = (filter) => {
    if (filter === "all") {
      setFilteredData([...data]);
    } else if (filter === "movie") {
      setFilteredData(data.filter((item) => item.media_type === "movie"));
    } else if (filter === "tv") {
      setFilteredData(data.filter((item) => item.media_type === "tv"));
    } else if (filter === "people") {
      setFilteredData(data.filter((item) => item.known_for_department));
    }
    return;
  };

  return (
    <div className="">
      <Header />
      <div className="container">
        <Search search={onSearch} filter={onFilter} />
        <ItemsList data={filteredData} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
