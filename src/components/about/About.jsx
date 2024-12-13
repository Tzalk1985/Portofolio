import React from "react";
import "./about.css";
import ME from "../../assets/photo1 dark.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";

const About = () => {
  

    
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Aboutpic" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article
              
              id="about_card"
              className="about_card"
            >
              <span>
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>2+ Years Web Developer</small>
              </span>
            </article>

            <article
             
              id="about_card"
              className="about_card"
            >
              <span>
                <FiUsers className="about_icon" />
                <h5>Clients</h5>
                <small>4+</small>
              </span>
            </article>
            <article  className="about_card">
              <span>
                <BsFolderCheck className="about_icon" />
               <a href="#portofolio"> <h5>Projects</h5>
                <small>12+ Completed</small></a>
              </span>
            </article>
          </div>
          <p>
            Junior Web Developer with 2 years of experience is seeking to obtain
            a creative and challenging position that utilizes current knowledge
            of web development and design. Having a positive outlook and am
            always willing to learn new traits. I work well both independently
            and as part of a team.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
