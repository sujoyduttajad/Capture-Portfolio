import React from 'react'
import AboutSection from '../components/AboutSection'
import FaqSection from '../components/FaqSection'
import ServicesSection from '../components/ServicesSection'
import { motion } from "framer-motion"
import { pageAnimation } from '../animation'

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation}>
        <AboutSection/>
        <ServicesSection/>
        <FaqSection/>
    </motion.div>
  )
}

export default AboutUs