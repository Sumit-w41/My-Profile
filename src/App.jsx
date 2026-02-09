import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from "./sections/Hero"

import  TechnicalProficiency from './sections/TechnicalProficiency'
import AboutMe from './sections/AboutMe'
import MyProjects from "./sections/MyProjects"
import ContactMe from './sections/ContactMe'
import Footer from './sections/Footer'
import Experience from './sections/Experience';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    Home: homeRef,
    About: aboutRef,
    Projects: projectsRef,
    Contact: contactRef,
  };

  return (
    <div className="bg-[#1D1D1D] min-h-screen ">
      <Navbar sections={sections} />
      <section id="home" className="min-h-screen">
        <Hero/>
      </section>
      <section id="skills" className="min-h-screen">
        <TechnicalProficiency/>
      </section>
      <section id="about" className="min-h-screen">
        <AboutMe/>
      </section>


      {/* <section id="experience" className="min-h-screen">
        <Experience/>
      </section> */}



      <section id="projects" className="min-h-screen">
        <MyProjects/>
      </section>

      <section id="contact" className="h-screen">
        <ContactMe/>
      </section>

      {/* <section id="projects" className="">
        <Footer/>
      </section> */}

    </div>
  );
};

export default App;
