import React from "react";
import styled from "styled-components";
import { Layout } from "../styles";
import Toggle from "./Toggle";
import { NavLink } from "react-router-dom";
// Animation
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "../hooks/useScroll";

const FAQ = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  h4 {
    font-size: 1.7em;
    letter-spacing: 1.5px;
    cursor: pointer;
  }
  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 0.5rem 0rem;
    svg {
      cursor: pointer;
    }
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
      font-size: 1.2rem;
      letter-spacing: 1.5px;
    }
    ul {
      list-style-type: circle;
      li {
        margin-left: 2rem;
        color: #23d997;
        font-size: 1.1rem;
      }
    }
  }
  .header-inline {
    display: flex;
    justify-content: space-between;
  }
  line {
    stroke-width: 10px;
    stroke-linecap: round;
    fill: transparent;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 3rem;
    }
    .question, .answer {
      width: 100%;
      font-size: 0.7rem;
    }
  }
`;

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <FAQ initial="hidden" ref={element} className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Let's have some meaningful conversations</p>
            <p>
              Easiest way to communicate with us is to email us with all the
              information you want to include describing your idea,
              requirements, and project budget. Nevertheless, to secure the
              next meetup visit the
              <NavLink
                className="styled-link"
                to="/contact"
                style={{ width: "fit-content", color: "#23d997" }}
              >
                Contact Us
              </NavLink>
            </p>
          </div>
        </Toggle>
        <Toggle title="Why work with us?">
          <div className="answer">
            <p>
              <b>
                <em>CONTENT THAT CUTS THROUGH</em>
              </b>
            </p>
            <p>
              Rise above the clutter with remarkable video content that engages
              your target audience, inspires action and makes an impact.
            </p>
            <p>
              <b>
                <em>REACH MORE OF YOUR TARGET AUDIENCE</em>
              </b>
            </p>
            <p>
              Content creation is just the beginning at Skeleton. We maximise
              your video content's reach throughout the buyer's journey with
              social edits, optimisation techniques and paid promotion.
            </p>
            <p>
              <b>
                <em>A STRESS-FREE PROCESS</em>
              </b>
            </p>
            <p>
              With over 15 years of experience creating remarkable vidoes for
              world-class brands, our process is simple, smooth and
              straightforward from day one. No worries.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>We offer a bunch of payment methods.</p>
            <p>
              We accept primarily{" "}
              <b>
                <em>VISA/Maestro</em>
              </b>{" "}
              debit card and credit card payment, which will include payback
              points that you will earn with every subscriptions. Take a look at
              our
              <NavLink
                className="styled-link"
                to="/subspack"
                style={{ width: "fit-content", color: "#23d997" }}
              >
                Subscriptions & Packages
              </NavLink>
            </p>
          </div>
        </Toggle>
        <Toggle title="What services do you offer?">
          <div className="answer">
            <p>
              We offer three kinds of services
              <ul>
                <li>Video Production</li>
                <li>Creative Production</li>
                <li>Emerging Media</li>
              </ul>
            </p>
            <p>
              We specialize in Brand Marketing, Corporate, Animation, Social,
              and Product Video. Apart from that we also have trained experts in
              Drones, AR/VR videography/photography
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQ>
  );
};

export default FaqSection;
