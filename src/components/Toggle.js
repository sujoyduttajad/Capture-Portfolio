import React, { useState } from "react";
import { motion } from "framer-motion";
import { rotateSvg } from "../animation";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle)

  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.div layout className="header-inline">
        <motion.h4>{title}</motion.h4>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 60 90"
          // initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        >
          <motion.line
            x1="1%"
            y1="30%"
            x2="100%"
            y2="95%"
            stroke="#00cc88"
            custom={2}
            variants={rotateSvg}
          />
          <motion.line
            x1="1%"
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
