import React from 'react'
import styled from 'styled-components'

const Navbar = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    a {
        color: white;
        text-decoration: none;
    }
`;

const Nav = () => {
  return (
    <Navbar>
        <h1><a href='#'>Capture</a></h1>
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