import React from "react";
import Movie from "./Movie";

function MoviesList(props) {
  return (
    <>
      <ul>
        {props.movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
        ))}
      </ul>
    </>
  );
}

export default MoviesList;
