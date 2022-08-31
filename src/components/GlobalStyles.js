import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media screen and (max-width: 1700px){
            /* font-size: 90%; */
        }
    }
    body {
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }
    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover {
            background-color: #23d997;
            color: #1b1b1b;
        }
    }
    h2 {
        font-weight: 500;
        font-size: 4rem;
    }
    h3 {
        color: white;
    }
    h4 {
        font-weight: 500;
        color: #23d997;
        font-size: 2rem;
    }
    span {
        font-weight: 500;
        color: #23d997;
    }
    a {
        font-size: 1.1rem;
        color: white;
        text-decoration: none;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding: 0;
        position: relative;
        white-space: nowrap;
        border: none;
        text-decoration: none !important;
        &::after {
            background-color: #23d997;
            position: absolute;
            bottom: -4px;
            left: 0;
            content: "";
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s ease 0s;
            width: 100%;
            height: 2px;
        }
        &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
    #logo {
        font-size: 1.8rem;
        color: #23d997;
        text-decoration: none !important;
        text-decoration: none;
        font-family: "Lobster", cursive;
        font-weight: lighter;
        &::after {
            background-color: transparent;
        }
        &:hover::after {
            transform: none;
        }
    }
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyles;
