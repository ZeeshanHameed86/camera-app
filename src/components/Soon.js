import React from "react";
import soon from "../assets/camera-soon-v2 1.png";
import circle from "../assets/circle.png";

const Soon = () => {
  return (
    <section className="soon">
      <h2>Coming Soon</h2>
      <img src={soon} alt="" />
      <img src={circle} alt="" className="circle" />
    </section>
  );
};

export default Soon;
