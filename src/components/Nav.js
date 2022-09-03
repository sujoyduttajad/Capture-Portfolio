import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation, fade } from "../animation";

const Navbar = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 5000;
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 2rem;
      position: relative;
      color: #23d997;
    }
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    padding: 2rem;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    display: none;
    padding: 1rem;
    h1 {
      font-size: 0.5rem;
    }
    ul {
      li {
        font-size: 0.5em;
        display: none;
      }
    }
  }
`;

const NavbarMobile = styled.div`
  display: none;
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
    background: #282828;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 5000;
    h1 {
      font-size: 0.5rem;
    }
    ul {
      li {
        font-size: 0.5em;
        display: none;
      }
    }
  }
`;

const Navmenu = styled(motion.div)`
  background-color: #282828;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  position: fixed;
  z-index: 5001;
  font-size: 5rem;
  transition: 0.5s ease-in-out;
  ul {
    list-style: none;
    li {
      padding-left: 1.6rem;
      position: relative;
      color: #23d997;
    }
  }
`;

const Contact = styled(motion.div)`
  padding: 1rem;
  width: 100vw;
  color: #282828;
  background-color: #23d997;
  h2 {
    font-size: 50%;
    margin: 0;
  }
  p {
    color: #282828;
    margin: 0;
    padding: 0;
  }
  button {
    border: none;
    margin: 2rem 0;
    background-color: #282828;
    /* padding-left: 0; */
  }
`;

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Navbar>
        <h1>
          <NavLink id="logo" to="/">
            Capture
          </NavLink>
        </h1>
        <ul>
          <li>
            <NavLink className="styled-link" to="/">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="styled-link" to="/work">
              Our Work
            </NavLink>
          </li>
          <li>
            <NavLink className="styled-link" to="/subspack">
              Subscriptions
            </NavLink>
          </li>
          <li>
            <NavLink className="styled-link" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </Navbar>
      {/* Mobile responsive sidebar opens up on mobile devices */}
      <NavbarMobile>
        <h1>
          <NavLink id="logo" to="/">
            Capture
          </NavLink>
        </h1>
        <div className="box" onClick={() => setIsClicked(!isClicked)}>
          <div className={`btn ${isClicked ? "active" : "not-active"}`}>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
          </div>
        </div>
      </NavbarMobile>
      {isClicked ? (
        <Navmenu
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <ul>
            <li>
              <NavLink
                className="menu-link"
                to="/"
                onClick={() => setIsClicked(!isClicked)}
                style={(isClicked) => ({
                  color: isClicked && path === "/" ? "#23d997" : "#eee",
                })}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu-link"
                to="/work"
                onClick={() => setIsClicked(!isClicked)}
                style={(isClicked) => ({
                  color: isClicked && path === "/work" ? "#23d997" : "#eee",
                })}
              >
                Our Work
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu-link"
                to="/contact"
                onClick={() => setIsClicked(!isClicked)}
                style={(isClicked) => ({
                  color: isClicked && path === "/contact" ? "#23d997" : "#eee",
                })}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu-link"
                to="/subspack"
                onClick={() => setIsClicked(!isClicked)}
                style={(isClicked) => ({
                  color: isClicked && path === "/subspack" ? "#23d997" : "#eee",
                })}
              >
                Subscriptions
              </NavLink>
            </li>
          </ul>
          <Contact variants={titleAnimation} initial="hidden" animate="show">
            <p>Have an idea?</p>
            <h2>Let's Start something great together!</h2>
            <NavLink
              className="non-styled-link"
              to="/contact"
              onClick={() => setIsClicked(!isClicked)}
            >
              <motion.button variants={fade}>
                Book a call with us today
              </motion.button>
            </NavLink>
          </Contact>
        </Navmenu>
      ) : (
        ""
      )}
    </>
  );
};

export default Nav;
