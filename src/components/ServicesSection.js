import React from 'react'
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { Layout, Description, ImageContainer, Hide } from '../styles'
import styled from 'styled-components'

const Services = styled(Layout)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0 4rem 0;
    }
`;
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ServicesSection = () => {
  return (
    <Services>
        <Description>
            <h2>High <span>quality</span> services</h2>
            <Cards className='cards'>
                <div className='card'>
                    <div className='icon'>
                        <img src={clock} alt="icon"/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='card'>
                    <div className='icon'>
                        <img src={teamwork} alt="icon"/>
                        <h3>Teamwork</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='card'>
                    <div className='icon'>
                        <img src={diaphragm} alt="icon"/>
                        <h3>Diaphragm</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='card'>
                    <div className='icon'>
                        <img src={money} alt="icon"/>
                        <h3>Affordable</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </Cards>
        </Description>
        <div className='image'>
            <img src={home2} alt="" />
        </div>
    </Services>
  )
}

export default ServicesSection