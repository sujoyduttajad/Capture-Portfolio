import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 2rem;
    position: relative;
    color: #23d997;
  }
  h3 {
    font-weight: 600;
  }
`;

const Nav = () => {
  return (
    <Navbar>
      <h1>
        <NavLink id="logo" to="/">
          Capture
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink className="styled-link" to="/">
            <h3>About Us</h3>
          </NavLink>
        </li>
        <li>
          <NavLink className="styled-link" to="/work">
            <h3>Our Work</h3>
          </NavLink>
        </li>
        <li>
          <NavLink className="styled-link" to="/contact">
            <h3>Contact Us</h3>
          </NavLink>
        </li>
      </ul>
    </Navbar>
  );
};

export default Nav;
