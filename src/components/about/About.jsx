import React, { useEffect } from "react";
import "./About.css";
import ME from "../../assets/Ashish2.png";
import HTMLIcon from "../../assets/html-icon.png";
import JSIcon from "../../assets/js-icon.png";
import ReactIcon from "../../assets/react-icon.png";

function About() {
  // Add scroll animation effect
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="about">
      {/* <h5 className="intro-label">— WHO I AM —</h5> */}
      <h2 className="about-heading">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Ashish Kumar Profile" className="avatar-img" />
            {/* Floating icons */}
            <img src={HTMLIcon} alt="HTML" className="tech-icon html" />
            <img src={JSIcon} alt="JavaScript" className="tech-icon js" />
            <img src={ReactIcon} alt="React" className="tech-icon react" />
          </div>
        </div>

        <div className="about__content">
          <p className="fade-in">
            Hi, I'm <strong>Ashish Kumar</strong>, a passionate and dedicated Frontend-focused MERN Stack Developer and an enthusiastic DSA problem solver. I am a Computer Science student with a deep interest in technology.
          </p>

          <p className="fade-in">
            I have solved <span className="highlight">300+ problems on LeetCode</span> and <span className="highlight">200+ problems on GeeksforGeeks</span>, which has strengthened my foundation in Data Structures and Algorithms. I'm consistently improving my problem-solving and coding skills to crack competitive programming and technical interviews.
          </p>

          <p className="fade-in">
            My core frontend skills include HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React.js, Redux, and Next.js. On the backend, I possess intermediate-level expertise in Node.js, Express.js, and MongoDB. I also have experience with Firebase authentication and JWT (JSON Web Tokens).
          </p>

          <p className="fade-in">
            I’m passionate about continuously learning new technologies, frameworks, and sharpening my DSA skills to keep up with today’s fast-evolving tech world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
