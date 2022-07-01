import React from "react";
import { useState } from "react";
import Emptybox from "./Emptybox";
import Moviebox from "./Moviebox";

export default function Searchbar() {
  const [movie, setMovie] = useState("");
  const [obj, setObj] = useState({});
  const [flag, setFlag] = useState(3);

  const changing = (e) => {
    setMovie(e.target.value);
  };

  const fetchData = () => {
    if (movie === "") {
      setFlag(0);
      return;
    }
    let url = `https://omdbapi.com/?t=${movie}&apikey=94589c10&`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setObj(data);
        setFlag(1);
        !data.Plot && setFlag(2);
      });
  };

  return (
    <>
      <div id="box">
        <input
          id="name"
          type="text"
          placeholder="Enter movie name..."
          onChange={changing}
        />
        <button id="btn" onClick={fetchData}>
          Search
        </button>
      </div>
      {flag === 0 ? (
        <Emptybox movieName={""} />
      ) : flag === 1 ? (
        <Moviebox name={obj} />
      ) : flag === 2 ? (
        <Emptybox movieName={movie} />
      ) : (
        ""
      )}
    </>
  );
}
