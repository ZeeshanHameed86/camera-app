import React, { useTransition } from "react";
import card1 from "../assets/card1 1.png";
import card2 from "../assets/card2 1.png";
import card3 from "../assets/card3 1.png";
import wave from "../assets/wave.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Features = () => {
  const { scrollYProgress } = useScroll();

  const tranform = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="features-container">
      <section className="features">
        <motion.h2>Features</motion.h2>
        <div className="cards">
          <motion.div className="card">
            <img src={card1} alt="" />
            <h4>4k 60fps</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </motion.div>
          <div className="card">
            <img src={card2} alt="" />
            <h4>4k 60fps</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <motion.div className="card">
            <img src={card3} alt="" />
            <h4>4k 60fps</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </motion.div>
        </div>
      </section>
      <motion.img className="wave" src={wave} alt="" style={{ y: tranform }} />
    </div>
  );
};

export default Features;
