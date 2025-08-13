import React, { useEffect, useState } from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsFillRocketFill } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi"; // 🆕 for My React Projects


const Nav = () => {
  const [active, setActive] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight * 0.5 &&
          scrollPosition < sectionTop + sectionHeight * 0.5
        ) {
          setActive(`#${section.id}`);
        }
      });

      if (scrollPosition === 0) {
        setActive("#");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <a
        href="#"
        className={active === "#" ? "active" : ""}
        onClick={() => setActive("#")}
        title="Home"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
        title="About Me"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        className={active === "#skills" ? "active" : ""}
        onClick={() => setActive("#skills")}
        title="Skills"
      >
        <HiBadgeCheck />
      </a>
      <a
        href="#projects"
        className={active === "#projects" ? "active" : ""}
        onClick={() => setActive("#projects")}
        title="Projects"
      >
        <BiCodeAlt />
      </a>
      <a
        href="#dsa"
        className={active === "#dsa" ? "active" : ""}
        onClick={() => setActive("#dsa")}
        title="DSA Journey"
      >
        <BsFillRocketFill />
      </a>
      <a
        href="#education"
        className={active === "#education" ? "active" : ""}
        onClick={() => setActive("#education")}
        title="Education"
      >
        <FaGraduationCap />
      </a>
      <a
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
        title="Contact"
      >
        <MdMessage />
      </a>
    </nav>
  );
};

export default Nav;
