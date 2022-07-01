import React, { useState } from "react";
import sad from "../sad.png";

export default function Emptybox({ movieName }) {
  return (
    <div id="emptyBox">
      {movieName === "" ? (
        <div className="empty" style={{ backgroundColor: "pink" }}>
          <p>Please, Enter valid movie name!</p>
          <img src={sad} alt="" />
        </div>
      ) : (
        <div className="empty" style={{ backgroundColor: "green" }}>
          <p>
            Sorry, no output is available. MovieName "{movieName}" doesn't
            exists.
          </p>
          <img src={sad} alt="" />
        </div>
      )}
    </div>
  );
}
