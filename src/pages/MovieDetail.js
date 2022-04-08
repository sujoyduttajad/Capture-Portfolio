import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

const Details = styled.div``;

const Headline = styled.div``;

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  console.log(url)
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <Details>
      {movie ? (
        <Headline>
          <h2>{movie.title}</h2>
          <img src={movie.mainImg} alt="movie" />
        </Headline>
      ) : (
        <h3>Sorry the movie you are looking is not available</h3>
      )}
    </Details>
  );
};

export default MovieDetail;
