import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Layout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    /* iPad Pro tablet */
    @media only screen and (min-width: 821px) and (max-width: 1200px) {
      padding: 3rem 5rem;
    }
    /* Kindel and iPad tablet  */
    @media only screen and (min-width: 540px) and (max-width: 820px) {
        padding: 3rem;
        flex-direction: column;
        justify-content: center;
    }
    /* Mobile devices iPhone, Pixel */
    @media only screen and (min-width: 320px) and (max-width: 539px) {

    }
`;
export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`; 
export const ImageContainer = styled.div`
    flex: 1;
    z-index: 2;
    overflow: hidden;
    img {
        width: 100%;
        height: 45em;
        object-fit: cover;
        -webkit-user-drag: none;
    }
     /* Kindel and iPad tablet  */
     @media only screen and (min-width: 540px) and (max-width: 820px) {
        img {
            margin-top: 2rem;
            height: 100%;
            width: 35rem;
        }
    }
`;
export const Hide = styled.div`
    overflow: hidden;
`;