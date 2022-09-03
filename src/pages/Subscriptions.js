import React from "react";
import ScrollTop from "../components/ScrollTop";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Subscriptions = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
    </motion.div>
  );
};

export default Subscriptions;
