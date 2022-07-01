import React, { useEffect, useState } from "react";

export default function Moviebox({ name }) {
  const [hrs, setHrs] = useState(0);
  const [min, setMin] = useState(0);

  useEffect(() => {
    let time = name.Runtime.replace(" min", "");
    setHrs(Math.floor(time / 60));
    setMin(time % 60);
  }, []);

  return (
    <div id="combo">
      <div>
        <img id="poster" src={name.Poster} alt="No pic available" />
      </div>
      <div id="info">
        <h1>{name.Title}</h1>
        <p id="plot">{name.Plot}</p>
        <ul>
          <li>
            <strong>Released : </strong>
            {`${name.Released}`}&nbsp;&nbsp;&nbsp; <strong>Language : </strong>
            {`${name.Language}`}&nbsp;&nbsp;&nbsp; <strong>Runtime : </strong>
            {`${hrs}h ${min}m`}
          </li>
          <li>
            <strong>Director : </strong>
            {`${name.Director}`}
          </li>
          <li>
            {" "}
            <strong>Actors : </strong>
            {`${name.Actors}`}
          </li>
          <li id="award">{`Achievements : ${name.Awards}`}</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
