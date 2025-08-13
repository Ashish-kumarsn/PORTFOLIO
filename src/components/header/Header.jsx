import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/Ashish2.jpg";
import HeaderSocials from "./HeaderSocials";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <header className="container">
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1 style={{ fontWeight: "600" }}>Ashish Kumar</h1>
        
        <h5 className="text-light">
          <span style={{ color: 'cyan', fontWeight: 'bold' }}>
            <Typewriter
              words={[
                'MERN Stack Developer',
                'DSA Enthusiast',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </span>
        </h5>

        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down <AiOutlineArrowDown />
        </a>
      </div>

      <div className="me">
        <img src={ME} alt="me" />
      </div>
    </header>
  );
};

export default Header;
