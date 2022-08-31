import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Layout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    @media only screen and (min-width: 821px) and (max-width: 1200px) {
      padding: 3rem 5rem;
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
`;
export const Hide = styled.div`
    overflow: hidden;
`;