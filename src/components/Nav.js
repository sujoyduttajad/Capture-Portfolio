import React from 'react'
import { Link } from 'react-router-dom';
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
        <h1><Link id='logo' to='#'>Capture</Link></h1>
        <ul>
            <li>
                <Link to='/'>About Us</Link>
            </li>
            <li>
                <Link to='/work'>Our Work</Link>
            </li>
            <li>
                <Link to='/contact'>Contact Us</Link>
            </li>
        </ul>
    </Navbar>
  )
}

export default Nav