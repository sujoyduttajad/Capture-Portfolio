import React from "react";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import { Hide } from "../styles";

const ContactStyle = styled(motion.section)`
  padding: 5rem;
  max-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: row;
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
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-color: #1b1b1b;
  label {
    
  }
  button {

  }
  input{

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
      <FormTitle variants={titleAnimation}>
        <Hide>
          <motion.h4>Let's work together</motion.h4>
          <motion.p>
            Contact us for any photography or videography ideas that you have.
          </motion.p>
        </Hide>
      </FormTitle>
      <FormContainer>
        <label> Your name 
          <input name="Full Name" />
        </label>
        <label> Your email
          <input name="Your Email" />
        </label>
        <label> Your Interests
          <input name="Interest" />
        </label>
        <label> Your Message
          <textarea></textarea>
        </label>
        <button></button>
      </FormContainer>
    </ContactStyle>
  );
};

export default ContactForm;
