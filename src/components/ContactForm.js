import React from "react";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import { Hide } from "../styles";

const ContactStyle = styled(motion.section)`
  padding: 5rem 10rem;
  max-height: 100vh;
  height: 100%;
  color: #1b1b1b;
  background-color: #23d997;
`;
const FormTitle = styled(motion.div)`
  h4 {
    color: #1b1b1b;
    font-size: 4em;
  }
  p {
    color: #353535;
  }
`;

const ContactForm = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Hide>
        <FormTitle variants={titleAnimation}>
          <motion.h4>Let's work together</motion.h4>
          <motion.p>
            Contact us for any photography or videography ideas that you have.
          </motion.p>
        </FormTitle>
      </Hide>
    </ContactStyle>
  );
};

export default ContactForm;
