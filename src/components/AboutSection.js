import React from "react";
import home1 from "../img/home1.png";
import { Layout, Description, ImageContainer, Hide } from "../styles";
// Animation
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  // Framer-motion variant
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 0.8,
        when: "afterChildren",
      },
    },
  };

  return (
    <Layout>
      <Description style={{ zIndex: 2 }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              <span>true.</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <ImageContainer>
        <motion.img
          variants={photoAnimation}
          initial="hidden"
          animate="show"
          src={home1}
          alt="guy with a camera"
        />
      </ImageContainer>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
