import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #23d997;
  height: 90vh;
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    height: 100%;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    height: 100%;
  }
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #1b1b1b;
  font-size: 48px;
  margin-bottom: 24px;
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    flex-wrap: wrap;
    width: 100%;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const PricingCard = styled(motion.div)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    &:hover {
      transform: none;
    }
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    width: 90vw;
    &:hover {
      transform: none;
    }
    &:nth-child(2) {
      margin: 24px 0;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;
  padding: 1rem;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f7f7f7;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;
const SubsAndPacks = () => {
  return (
    <PricingSection>
      <PricingWrapper>
        <PricingHeading>Subscriptions & Packages</PricingHeading>
        <PricingContainer>
          <PricingCard>
            <PricingCardInfo>
              <PricingCardIcon></PricingCardIcon>
              <PricingCardPlan>Starter Pack</PricingCardPlan>
              <PricingCardCost>$99.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>100 New Users</PricingCardFeature>
                <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                <PricingCardFeature>Retargeting analytics</PricingCardFeature>
              </PricingCardFeatures>
              <button>Choose Plan</button>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard>
            <PricingCardInfo>
              <PricingCardIcon></PricingCardIcon>
              <PricingCardPlan>Gold Rush</PricingCardPlan>
              <PricingCardCost>$299.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>1000 New Users</PricingCardFeature>
                <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
              </PricingCardFeatures>
              <button>Choose Plan</button>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard>
            <PricingCardInfo>
              <PricingCardIcon></PricingCardIcon>
              <PricingCardPlan>Diamond Kings</PricingCardPlan>
              <PricingCardCost>$999.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>Unlimited Users</PricingCardFeature>
                <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                <PricingCardFeature>24/7 Support</PricingCardFeature>
              </PricingCardFeatures>
              <button>Choose Plan</button>
            </PricingCardInfo>
          </PricingCard>
        </PricingContainer>
      </PricingWrapper>
    </PricingSection>
  );
};

export default SubsAndPacks;
