import styled from "styled-components";
import { motion } from "framer-motion";

export const Layout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  /* iPad Pro tablet */
  @media only screen and (min-width: 821px) and (max-width: 1200px) {
    padding: 3rem 5rem;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    padding: 3rem;
    flex-direction: column;
    justify-content: center;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    padding: 1rem;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
    color: #f7f7f7;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    flex: 0;
    align-items: center;
    padding-right: 1rem;
    p {
      padding: 2rem;
      text-align: center;
    }
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    padding: 0;
    h2 {
      font-size: 2.5rem;
      text-align: center;
    }
    p {
      font-size: 1rem;
      text-align: center;
    }
    button {
      margin: 0 auto;
    }
  }
`;
export const ImageContainer = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  img {
    width: 100%;
    height: 45em;
    object-fit: cover;
    -webkit-user-drag: none;
    margin-top: 1rem;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    img {
      margin-top: 2rem;
      height: 30em;
      width: 35rem;
      object-fit: cover;
    }
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    margin-bottom: 1rem;
    img {
      margin-top: 1.6rem;
      height: 30em;
      width: 100%;
      object-fit: cover;
    }
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
