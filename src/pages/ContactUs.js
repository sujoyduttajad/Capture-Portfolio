import React from "react";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import { Hide } from "../styles";
// Icons
import Gmail from '../img/gmail-logo.svg'
import Twitter from '../img/twitter-logo.svg'
import Instagram from '../img/instagram-logo.svg'
import Youtube from '../img/youtube-logo.svg'

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  background-color: #f7f7f7;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: #1b1b1b;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 1em;
  h4 {
    margin: 1rem;
  }
`;

const Circle = styled.img`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  opacity: 0.9;
`;

const ContactUs = () => {
  return (
    <ContactStyle
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
            <Circle src={Gmail} />
            <h4>GMail</h4>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle src={Instagram} />
            <h4>Instagram</h4>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle src={Twitter} />
            <h4>Twitter</h4>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle src={Youtube} />
            <h4>YouTube</h4>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

export default ContactUs;
