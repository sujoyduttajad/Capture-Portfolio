import React from "react";
import styled from "styled-components";
import { Layout } from "../styles";
import Toggle from "./Toggle";

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
  return (
    <FAQ className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      
        <Toggle title="How Do I Start?" >
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              dolor.
            </p>
          </div>
      </div>
      </Toggle>

      <div className="question">
        <h4>Daily Schedule</h4>
        <Toggle>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              dolor.
            </p>
          </div>
        </Toggle>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Different Payment Methods</h4>
        <Toggle>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              dolor.
            </p>
          </div>
        </Toggle>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>What products do you offer?</h4>
        <Toggle>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              dolor.
            </p>
          </div>
        </Toggle>
        <div className="faq-line"></div>
      </div>
    </FAQ>
  );
};

export default FaqSection;
