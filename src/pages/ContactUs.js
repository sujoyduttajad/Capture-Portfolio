import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h4>ContactUs</h4>
    </motion.div>
  );
};

export default ContactUs;
