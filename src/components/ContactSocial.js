import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import { Hide } from "../styles";
// Icons
import Gmail from "../img/gmail-logo.svg";
import Twitter from "../img/twitter-logo.svg";
import Instagram from "../img/instagram-logo.svg";
import Youtube from "../img/youtube-logo.svg";
import contact1 from "../img/contact1.jpg";

const StyledSocial = styled(motion.section)`
  padding: 5rem 10rem;
  max-height: 100vh;
  height: 100%;
  color: #23d997;
  background-color: #1b1b1b;
  @media only screen and (min-width: 821px) and (max-width: 1200px) {
    padding: 5rem 4rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  margin-left: 2rem;
  color: #1b1b1b;
  h2 {
    color: #f7f7f7;
  }
  h3 {
    margin: 0;
    margin-bottom: 1rem;
    color: #23d997;
    font-size: 2rem;
    font-weight: 500;
  }
`;
const Container = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
`;
const SocialLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 100%;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 1em;
  h4 {
    margin: 1rem;
    font-size: 1.5rem;
    letter-spacing: 2px;
    font-weight: 400;
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
  margin: 1rem;
  cursor: pointer;
  z-index: 100;
  background-color: #333;
  &:hover {
    opacity: 1;
  }
`;
const ImgContainer = styled.div`
  margin: 0 auto;
`;
const Image = styled(motion.img)`
  width: 25rem;
  height: 32rem;
  object-fit: contain;
`;
const AddressBox = styled.div`
  display: inline-block;
  margin-left: 2rem;
  h2 {
    @media only screen and (min-width: 821px) and (max-width: 1200px) {
      font-size: 2.75rem;
      letter-spacing: 1.8px;
    }
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 0.95rem;
    font-weight: 200;
  }
  ul {
    margin: 0;
    list-style-type: none;
    font-weight: 200;
  }
`;
const Footer = styled.footer`
  margin: 2.5rem 2rem 0.2rem 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 821px) and (max-width: 1200px) {
    justify-content: space-evenly;
    margin-left: 0;
  }
`;
const Newsletter = styled(motion.div)`
  form {
    display: flex;
    padding: 7px;
    border-radius: 7px;
    background-color: #f7f7f7;
    max-width: 35rem;
    width: 100%;
  }
  button {
    background: #23d997;
    color: #1b1b1b;
    padding: 0.8rem 1rem;
    border-radius: 7px;
  }
  input {
    font-family: inherit;
    padding: 10px 20px;
    border-radius: 7px;
    background-color: #f7f7f7;
    outline: none;
    border: none;
    font-size: 16px;
    flex-grow: 2;
    border: 1px solid #fff;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #242424;
    }
    @media only screen and (min-width: 821px) and (max-width: 1200px) {
      width: 100%;
      padding: 8px 10px;
    }
  }
`;

const ContactSocial = () => {
  const date = new Date();

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
      <Container>
        <SocialLinks>
          <Newsletter>
            <Title style={{ marginBottom: "0.5rem" }}>
              <motion.h3>Join our Newsletter</motion.h3>
              <form>
                <input name="email" type="email" placeholder="Your Email" />
                <button>Subscribe</button>
              </form>
            </Title>
          </Newsletter>
          <Hide>
            <Social variants={titleAnimation}>
              <Circle src={Gmail} alt="Gmail icon" />
              <Circle src={Instagram} alt="Instagram icon" />
              <Circle src={Twitter} alt="Twitter icon" />
              <Circle src={Youtube} alt="Youtube icon" />
            </Social>
          </Hide>
          <AddressBox>
            <h2>New Jersey</h2>
            <p>801 Park Ave, Suit 1 Hobodean, NJ 070730</p>
          </AddressBox>
          <AddressBox>
            <h2>E-mail</h2>
            <ul>
              <p>info@capture.com</p>
              <p>contact@capture.com</p>
            </ul>
          </AddressBox>
          <AddressBox>
            <h2>Phone</h2>
            <p>201-614-4108</p>
          </AddressBox>
        </SocialLinks>
        <ContactInfo>
          <ImgContainer>
            <Image src={contact1} />
          </ImgContainer>
        </ContactInfo>
      </Container>
      <Footer>
        <h1>
          <NavLink id="logo" to="/">
            Capture
          </NavLink>
        </h1>
        <AddressBox>
          <p>{date.getFullYear()} Capture Group®</p>
        </AddressBox>
      </Footer>
    </StyledSocial>
  );
};

export default ContactSocial;
