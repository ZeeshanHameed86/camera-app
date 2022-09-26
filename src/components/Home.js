import React, { useEffect } from "react";
import camera from "../assets/camera 1.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();

  const imageTransformY = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  const textTransformNegative = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-300%"]
  );
  const textTransformpositive = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "300%"]
  );

  return (
    <section className="home">
      <div className="showcase">
        <motion.h2 style={{ x: textTransformNegative }}>Leica M6</motion.h2>
        <motion.img src={camera} alt="" style={{ y: imageTransformY }} />
        <motion.div className="info" style={{ x: textTransformpositive }}>
          <h3>Small but powerful</h3>
          <p>
            The new Leica M6 offers 4k at 60fps, Raw Video & Full Frame Sensor.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
