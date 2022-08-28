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
  border-radius: 7px;
  background-color: #1b1b1b;
  label {
    color: #23d997;
  }
  button {
    background: #23d997;
    color: #1b1b1b;
    padding: 0.8rem 1rem;
    border-radius: 7px;
    margin-top: 2rem;
  }
  input {
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
        <label> Your name </label>
        <input name="Full Name" />

        <label> Your email</label>
        <input name="Your Email" />

        <label> Your Interests</label>
        <input name="Interest" />

        <label> Your Message</label>
        <textarea></textarea>

        <button>Send Message</button>
      </FormContainer>
    </ContactStyle>
  );
};

export default ContactForm;
