import React from "react";
import "./Projects.css";
import PI from "../../assets/fitclub-gym-web-netlify-app.png"
import PI2 from "../../assets/quiz-app-emad.png"
import PI3 from "../../assets/Skill-Setu.png"
import PI4 from "../../assets/imaginify.png"

const Projects = () => {

  const email = "kaumatchobey@gmail.com";
  const password = "123456";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} copied to clipboard`);
    });
  };


  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={PI3} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Skill-Setu</h3>
            <p className="text-sm leading-5">
              SKILL_SETU is an intuitive Learning Management System designed to connect students and instructors,
              delivering engaging online education through interactive content, seamless communication,
              and modern learning tools.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/Ashish-kumarsn/SKILL_SETU"
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code Private
            </a>
            <a
              href="https://skill-setu.vercel.app/"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>

        </article>
        {/* single Project  */}

        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top ">
            <div className="portfolio_item-img bg-white pt-2">
              <img src={PI4} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Imaginify</h3>
            <p className="text-sm leading-5">
              Imaginify – AI-powered image editing & generation. Restore photos, generative fill, remove/recolor objects, remove backgrounds, and create images from prompts.
              Fast, intuitive, and built with Next.js for creators & designers.

            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/Ashish-kumarsn/Imaginify"
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
            <a
              href="https://imaginify-five-bay.vercel.app/"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>

        </article>
        {/* single Project  */}

        {/* single Project  */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img">
              <img src={PI} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">The Fitclub Gym</h3>
            <p className="text-sm leading-5">
              A static website for learning React structure, best practices,
              designing and simple animation with Framer motion.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href=""
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Client code
            </a>
            <a
              href=""
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* single Project  */}
        {/* single Project  */}
        {/* <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            {" "}
            <div className="portfolio_item-img">
              <img src={PI2} alt="" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3">Quiz App from LWS</h3>
            <p className="text-sm leading-5">
              A quiz app for learning React and Firebase. Routes are protected
              and each topic has 4 questions.
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-4 ">
            <a
              href="https://github.com/emaduddin678/Gym-Website.git"
              className="btn !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Client code
            </a>
            <a
              href="https://quiz-app-emad.netlify.app"
              className="btn btn-primary !py-1 !px-2 text-sm leading-7"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
        {/* single Project  */}
      </div>
    </section>
  );
};

export default Projects;
