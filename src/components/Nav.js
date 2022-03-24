import React from 'react'
import styled from 'styled-components'

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
    }
`;

const Nav = () => {
  return (
    <Navbar>
        <h1><a id='logo' href='#'>Capture</a></h1>
        <ul>
            <li>
                <a href='#'>About Us</a>
            </li>
            <li>
                <a href='#'>Our Work</a>
            </li>
            <li>
                <a href='#'>Contact Us</a>
            </li>
        </ul>
    </Navbar>
  )
}

export default Nav