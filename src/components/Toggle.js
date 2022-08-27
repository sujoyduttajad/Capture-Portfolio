import React, { useState } from "react";
import { motion } from "framer-motion";
import { rotateSvg } from "../animation";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.div layout className="header-inline">
        <motion.h4>{title}</motion.h4>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 60 90"
          animate={toggle ? "visible" : "hidden"}
        >
          <motion.line
            x1="10%"
            y1="30%"
            x2="110%"
            y2="95%"
            stroke="#00cc88"
            custom={2.5}
            variants={rotateSvg}
          />
          <motion.line
            x1="8%"
            y1="95%"
            x2="100%"
            y2="30%"
            stroke="#00cc88"
            custom={2.5}
            variants={rotateSvg}
          />
        </motion.svg>
      </motion.div>
      {toggle ? children : ""}
      <motion.div layout className="faq-line"></motion.div>
    </motion.div>
  );
};

export default Toggle;
