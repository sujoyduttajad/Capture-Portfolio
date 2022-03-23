import React from 'react'
import home1 from "../img/home1.png";
import styled from 'styled-components'

const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`; 
const ImageContainer = styled.div`
    flex: 1;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

const AboutSection = () => {
  return (
    <About>
        <Description>
            <div className='title'>
                <div className='hide'>
                    <h2>We work to make</h2>
                </div>
                <div className='hide'>
                    <h2>your <span>dreams</span> come</h2>
                </div>
                <div className='hide'>
                    <h2>true.</h2>
                </div>
            </div>
            <p>
                Contact us for any photography or videography ideas that you have. We
                have professionals with amazing skills. 
            </p>
            <button>Contact Us</button>
        </Description>
        <ImageContainer>
            <img src={home1} alt="guy with a camera" />
        </ImageContainer>
    </About>
  )
}

export default AboutSection