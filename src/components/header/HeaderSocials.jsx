import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Ashish-kumarsn" target="_blank">
        <BsGithub />
      </a>
      {/* <a href="#" target="_blank">
        <BsDribbble />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
