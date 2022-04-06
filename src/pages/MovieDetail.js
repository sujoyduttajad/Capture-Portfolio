import React from 'react'
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';

const MovieDetail = () => {
    const history =  useHistory();
    const url = history.location.pathname;

  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail