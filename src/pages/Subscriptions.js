import React from "react";
import ScrollTop from "../components/ScrollTop";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import SubsAndPacks from "../components/SubsAndPacks";

const Subscriptions = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <SubsAndPacks />
      <ScrollTop />
    </motion.div>
  );
};

export default Subscriptions;
