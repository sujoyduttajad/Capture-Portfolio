import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  photoAnimation,
  fade,
  lineAnimation,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../hooks/useScroll";
import ScrollTop from "../components/ScrollTop";

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background-color: #f7f7f7;
  h2 {
    padding: 1rem 0;
  }
  @media only screen and (min-width: 821px) and (max-width: 1200px) {
    padding: 3rem 5rem;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    padding: 3rem 2.5rem;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    padding: 2.5rem 1rem;
    h2 {
      font-size: 3rem;
      text-align: center;
    }
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    @media only screen and (min-width: 821px) and (max-width: 1200px) {
      height: 30vh;
    }
    /* Kindel and iPad tablet  */
    @media only screen and (min-width: 540px) and (max-width: 820px) {
      height: 50vh;
    }
    /* Mobile devices iPhone, Pixel */
    @media only screen and (min-width: 320px) and (max-width: 539px) {
      object-fit: cover;
      height: 70vh;
    }
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    margin-bottom: 0;
    .line {
      margin-bottom: 1rem;
    }
  }
`;

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}> </Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link className="non-styled-link" to="/work/the-athlete">
          {/* <Hide> */}
          <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie
        variants={fade}
        animate={controls2}
        initial="hidden"
        ref={element2}
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link className="non-styled-link" to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie variants={fade} animate={controls} initial="hidden" ref={element}>
        <h2>Good Times</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link className="non-styled-link" to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

export default OurWork;
