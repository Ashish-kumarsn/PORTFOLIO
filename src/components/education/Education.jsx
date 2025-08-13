import React from "react";
import "./Education.css";
import bitSindriLogo from "../../assets/bitsindri.jpeg";
import akanshaLogo from "../../assets/akansha-40.webp"
import jnvLogo from "../../assets/jnv1.jpg"; 


const Education = () => {
  return (
    <section id="education" className="education">
      <h5>My Academic Journey</h5>
      <h2>Education</h2>

      <div className="education-item">
        <img src={bitSindriLogo} alt="BIT Sindri Logo" />
        <div className="education-details">
          <h3>B.Tech in Computer Science & Engineering</h3>
          <p className="university">BIT Sindri, Jharkhand</p>
          <p className="duration">2022 - 2026</p>
        </div>
      </div>

      <div className="education-item">
        <img src={akanshaLogo} alt="Akansha 40 Logo" />
        <div className="education-details">
          <h3>JEE Mains & Advanced Preparation</h3>
          <p className="institution">Akansha 40 (State Top Batch)</p>
          <p className="duration">2020 - 2022</p>
        </div>
      </div>

      <div className="education-item">
        <img src={jnvLogo} alt="JNV Logo" />
        <div className="education-details">
          <h3>Secondary & Senior Secondary Education</h3>
          <p className="institution">Agarwala High School (JAC)</p>
          <p className="duration">2018 - 2020</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
