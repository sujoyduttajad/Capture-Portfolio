import React, { useState } from "react";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Toggle = ({ children, title }) => {
  console.log(children);
  const [toggle, setToggle] = useState(true);

  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.div layout className="header-inline">
        <motion.h4>{title}</motion.h4>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 60 90"
          initial="hidden"
          animate="visible"
        >
          <motion.line
            x1="2%"
            y1="30%"
            x2="100%"
            y2="90%"
            stroke="#00cc88"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="2%"
            y1="90%"
            x2="100%"
            y2="30%"
            stroke="#00cc88"
            variants={draw}
            custom={2.5}
          />
        </motion.svg>
      </motion.div>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
