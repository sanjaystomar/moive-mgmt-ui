import React, { useState, useEffect } from "react";

const DataObject = () => {
  const [movies, setMovies] = useState([]);

  const handleShowMovies = () => {
    fetch("http://localhost:8080/movie/list-movies")
      .then((response) => response.json())
      .then((json) => setMovies(json));
  };

  useEffect(() => {
    fetch("http://localhost:8080/movie/list-movies")
      .then((response) => response.json())
      .then((json) => setMovies(json));
  }, []);

  console.log(movies);
  return (
    <div>
      <h1>List of Movies</h1>
      <button className="movie-button" onClick={handleShowMovies}>
        Show Movies
      </button>
      <button className="movie-button" onClick={() => setMovies([])}>
        Hide Movies
      </button>
      <div className="movieList">
        {movies.map((movie) => {
          return (
            <div className="moive" key={movie.id}>
              <h1>{movie.title}</h1>
              <h3>{movie.fileName}</h3>
              <h3>
                Location:{" "}
                <a target="_blank" href="{moive.location}">
                  {movie.location}
                </a>
              </h3>
              <h3>Release Year: {movie.year}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataObject;
