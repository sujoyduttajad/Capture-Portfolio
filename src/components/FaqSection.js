import React, {useState} from 'react'
import styled from 'styled-components'
import { Layout } from '../styles'

const FAQ = styled(Layout)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background-color: #ccc;
        height: 0.2rem;
        /* margin: 2rem 0; */
        width: 100%;
    }
    .question {
        padding: 3rem 0;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0;
        p {
            padding: 1rem 0;
        }
    }
`;

const FaqSection = () => {
  
  const [faqToggle, setFaqToggle] = useState(false);

  return (
    <FAQ className='faq'>
        <h2>Any Questions <span>FAQ</span></h2>
        <div onClick={() => setFaqToggle(!faqToggle)} className='question'>
            <h4>How Do I Start?</h4>
            <div className='answer'>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolor.</p>
            </div>
            <div className='faq-line'></div>
        </div>
        <div className='question'>
            <h4>Daily Schedule</h4>
            <div className='answer'>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolor.</p>
            </div>
            <div className='faq-line'></div>
        </div>
        <div className='question'>
            <h4>Different Payment Methods</h4>
            <div className='answer'>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolor.</p>
            </div>
            <div className='faq-line'></div>
        </div>
        <div className='question'>
            <h4>What products do you offer?</h4>
            <div className='answer'>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolor.</p>
            </div>
            <div className='faq-line'></div>
        </div>
    </FAQ>
  )
}

export default FaqSection