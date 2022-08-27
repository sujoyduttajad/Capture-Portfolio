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
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 5000;
  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 2rem;
    position: relative;
    color: #23d997;
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
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="styled-link" to="/work">
            Our Work
          </NavLink>
        </li>
        <li>
          <NavLink className="styled-link" to="/contact">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </Navbar>
  );
};

export default Nav;
