import React from "react";
import ytlogo from "../assets/yt-logo.png";
import twitterlogo from "../assets/twitter-logo.png";
import instagramlogo from "../assets/instagram-logo.png";

const Footer = () => {
  return (
    <footer>
      <h1>Leica 2022</h1>
      <ul>
        <li>
          <a href="#">
            <img src={ytlogo} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitterlogo} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagramlogo} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
