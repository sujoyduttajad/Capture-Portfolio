import React from 'react'
import styled from 'styled-components'
import { Layout, Description } from '../styles'

const FAQ = styled(Layout)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
`;

const FaqSection = () => {
  return (
    <FAQ className='faq'>
        <h2>Any Questions <span>FAQ</span></h2>
        <div className='question'>
            <h4>How Do I Start?</h4>
            <div className='answer'>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolor.</p>
            </div>
        </div>
        <div className='question'>
            <h4>Daily Schedule</h4>
            <div className='answer'>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolor.</p>
            </div>
        </div>
        <div className='question'>
            <h4>Different Payment Methods</h4>
            <div className='answer'>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolor.</p>
            </div>
        </div>
        <div className='question'>
            <h4>What products do you offer?</h4>
            <div className='answer'>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolor.</p>
            </div>
        </div>
    </FAQ>
  )
}

export default FaqSection