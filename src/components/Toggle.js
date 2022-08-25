import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  console.log(children);
  const [toggle, setToggle] = useState(true);

  return (
    <div onClick={() => setToggle(!toggle)}>
      <div className="header-inline"><motion.h4>{title}</motion.h4></div>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </div>
  );
};

export default Toggle;
