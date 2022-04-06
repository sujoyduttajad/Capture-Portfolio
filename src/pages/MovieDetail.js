import React, {useState} from 'react'
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';

const MovieDetail = () => {
    const history =  useHistory();
    const url = history.location.pathname;

    const [movies, setMovies] = useState(MovieState)

  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail