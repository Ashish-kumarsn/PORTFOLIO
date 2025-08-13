import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import DSA from "./components/DSA/DSA";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
// import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import LearningProjects from "./components/learningTimeProject/LearningProjects";

function App() {
  useEffect(() => {
    document.title = "Ashish Kumar | Portfolio";
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Projects />
      {/* <LearningProjects /> */}
      <DSA />
      <Education />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
