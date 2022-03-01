import React, { useState } from "react"
import moviesData from "../moviesData.js"

export default function Card() {

  const [movie, setMovie] = React.useState("");

  function handleClick() {
    const moviesArray = moviesData.data.movies
    const randomNum = Math.floor(Math.random() * moviesArray.length)
    setMovie(moviesArray[randomNum].name)
  }

  return (
    <section className="card">
          <div className="card-cardResult">
            <h2>{movie ? movie : "The Rocky Horror Picture Show"}</h2>
          </div>
          <button className="btn-default" onClick={handleClick}>Randomize</button>
    </section>
  );
}
