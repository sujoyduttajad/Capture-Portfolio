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
  justify-content: space-around;
  color: #1b1b1b;
  background-color: #23d997;
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    padding: 5rem 2rem;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    padding: 1.5rem;
    flex-direction: column;
    max-height: fit-content;
    height: 100%;
  }
`;
const FormTitle = styled(motion.div)`
  width: 40%;
  h4 {
    color: #1b1b1b;
    font-size: 4rem;
  }
  p {
    color: #353535;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    h4 {
      font-size: 3.6rem;
    }
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    width: 100%;

    h4 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 30rem;
  width: 100%;
  padding: 3rem;
  border-radius: 7px;
  background-color: #1b1b1b;
  label {
    color: #23d997;
    margin-top: 1rem;
    margin-bottom: 0.4rem;
    letter-spacing: 1.4px;
  }
  button {
    background: #23d997;
    color: #1b1b1b;
    padding: 0.8rem 1rem;
    border-radius: 5.55px;
    margin-top: 2rem;
    &:active,
    &:hover {
      outline: 4px solid #f7f7f7;
    }
  }
  input,
  textarea {
    font-family: inherit;
    padding: 10px;
    border-radius: 5.55px;
    background-color: #f7f7f7;
    outline: none;
    border: none;
    font-size: 16px;
    flex-grow: 2;
    border: 1px solid #fff;
    &:focus {
      outline: 3px solid #23d997;
    }
    &::placeholder {
      color: #828282;
    }
    @media screen and (max-width: 820px) {
      width: 100%;
      margin: 0 0 16px 0;
    }
  }
  textarea {
    resize: vertical;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    margin-left: 1rem;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    padding: 1.5rem;
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
        <label> Your name <span>&#42;</span></label>
        <input
          name="Full Name"
          type="text"
          placeholder="John Doe"
          required
          aria-required
        />

        <label> Your email <span>&#42;</span></label>
        <input
          name="Your Email"
          type="email"
          placeholder="johndoe@xyz.com"
          required
          aria-required
        />

        <label> Your Interests</label>
        <input name="Interest" type="text" placeholder="Photography" />

        <label> Your Message</label>
        <textarea
          name="message"
          rows="4"
          cols="50"
          wrap="hard"
          placeholder="Type your message"
        ></textarea>

        <button>Send Message</button>
      </FormContainer>
    </ContactStyle>
  );
};

export default ContactForm;
