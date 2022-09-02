import React from "react";
import styled from "styled-components";
import { Layout, Description, ImageContainer } from "../styles";
// Animation
import { motion } from "framer-motion";
import { useScroll } from "../hooks/useScroll";
import { fade, photoAnimation } from "../animation";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const Services = styled(Layout)`
  flex-direction: row-reverse;
  justify-content: space-between;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
  @media only screen and (min-width: 821px) and (max-width: 1200px) {
    h2 {
      font-size: 3rem;
    }
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    flex-direction: column;
    div {
      &:first-of-type {
        padding-left: 0;
      }
    }
    p {
      font-size: 98%;
      text-align: left;
    }
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    flex-direction: column;
    font-size: 20%;
    div {
      padding-left: 0;
    }
    p {
      font-size: 48%;
      text-align: left;
    }
    h2 {
      padding-bottom: 3rem;
      font-size: 1.9rem;
    }
    img {
      width: 10%;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    padding: 1rem;
    align-items: center;
    justify-content: space-around;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    flex-direction: column;
    font-size: 20%;
  }
`;
const Card = styled.div`
  flex-basis: 15rem;

  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: #333;
    padding: 1rem;
    font-size: 1rem;
  }
  p {
    margin: 0 !important;
    font-size: 1rem;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    flex-direction: column;
    font-size: 20%;
    p {
      padding: -1rem;
    }
    h3 {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }
`;

const Image = styled(ImageContainer)`
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    img {
    width: 80vw;
    height: 100%;
    margin-bottom: 1rem;
  }
  }
  
`;

const ServicesSection = () => {
  const [element] = useScroll();

  return (
    <Services variants={fade} initial="hidden" ref={element}>
      <Description style={{ paddingRight: 0, paddingLeft: "3rem" }}>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards className="cards">
          <Card className="card">
            <div className="icon">
              <motion.img
                variants={photoAnimation}
                initial="hidden"
                animate="show"
                src={clock}
                alt="icon"
              />
              <h3>Performance</h3>
            </div>
            <p>
              We understand exactly how your videos are performing across a
              multitude of channels? We’re here to crunch the numbers for you..
            </p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>
              Alone we can do so little, together we can do so much. Let's work
              together and turn your ideas and dreams into reality.
            </p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Equipment</h3>
            </div>
            <p>
              We use the best in class equipments available in the market to
              provide you the desired results that will blew your mind.
            </p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>
              Our prices are never been this reasonable with a complete range of
              packages and subscriptions we make sure that you get what you
              spend.
            </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          initial="hidden"
          animate="show"
          src={home2}
          alt=""
        />
      </Image>
    </Services>
  );
};

export default ServicesSection;
