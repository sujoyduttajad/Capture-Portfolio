import React from "react";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import { Hide } from "../styles";
// Icons
import Gmail from "../img/gmail-logo.svg";
import Twitter from "../img/twitter-logo.svg";
import Instagram from "../img/instagram-logo.svg";
import Youtube from "../img/youtube-logo.svg";




const StyledSocial = styled(motion.section)`
  padding: 5rem 10rem;
  height: 100vh;
  color: #23d997;
  background-color: #1b1b1b;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: #1b1b1b;
  h2 {
    color: #f7f7f7;
  }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 1em;
  h4 {
    margin: 1rem;
    color: #23d997;
    cursor: pointer;
  }
`;
const Circle = styled.img`
  border-radius: 50%;
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.5rem;
  object-fit: cover;
  opacity: 0.8;
  cursor: pointer;
  z-index: 100;
  background-color: #333;
  &:hover {
    opacity: 1;
  }
`;
const ContactSocial = () => {
  return (
    <StyledSocial
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle src={Gmail} alt="Gmail icon" />
            <h4>Gmail</h4>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle src={Instagram} alt="Instagram icon" />
            <h4>Instagram</h4>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle src={Twitter} alt="Twitter icon" />
            <h4>Twitter</h4>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle src={Youtube} alt="Youtube icon" />
            <h4>YouTube</h4>
          </Social>
        </Hide>
      </div>
    </StyledSocial>
  );
};

export default ContactSocial;
