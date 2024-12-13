import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import { BsChatText } from "react-icons/bs";

import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#home");

 

    return (
      <nav>
       
         
            <a tooltipContent="This is a tooltip!"
            placement="top"
              href="#home"
              onClick={() => setActiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              <AiOutlineHome />
            </a>
         
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <AiOutlineUser />
          </a>
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            <BiCodeAlt />
          </a>
          <a
            href="#services"
            onClick={() => setActiveNav("#services")}
            className={activeNav === "#services" ? "active" : ""}
          >
            <MdOutlineDesignServices />
          </a>
          <a
            href="#portofolio"
            onClick={() => setActiveNav("#portofolio")}
            className={activeNav === "#portofolio" ? "active" : ""}
          >
            <BsBriefcase />
          </a>
          <a
            href="#education"
            onClick={() => setActiveNav("#education")}
            className={activeNav === "#education" ? "active" : ""}
          >
            <MdCastForEducation />
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <BsChatText />
          </a>
        
      </nav>
    );
    }


export default Nav;

/*{function Nav() {
  const [activeNav, setActiveNav] = useState("#home");

  return (
   
      <nav>
        <a
          href="#home"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiCodeAlt />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <MdOutlineDesignServices />
        </a>
        <a
          href="#portofolio"
          onClick={() => setActiveNav("#portofolio")}
          className={activeNav === "#portofolio" ? "active" : ""}
        >
          <BsBriefcase />
        </a>
        <a
          href="#education"
          onClick={() => setActiveNav("#education")}
          className={activeNav === "#education" ? "active" : ""}
        >
          <MdCastForEducation />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BsChatText />
        </a>
      </nav>
    
    
  );
}}*/

/*{function Nav() {
  const [activeComponent, setActiveComponent] = useState("componentOne");
 
  const handleSetActiveComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <>

      <nav>
      <a href="#home" className={activeComponent === 'componentOne' ? "active" : ""} onClick={() => handleSetActiveComponent('componentOne')}>
      <AiOutlineHome />
        </a>
        <a
          href="#about" className={activeComponent === 'componentTwo'? "active" : ""} onClick={() => handleSetActiveComponent('componentTwo')}>
          <AiOutlineUser />
        </a>
        <a
          href="#experience" className={activeComponent === 'componentThree' ? "active" : ""} onClick={() => handleSetActiveComponent('componentThree')}>
          <BiCodeAlt />
        </a>
        <a
          href="#services" className={activeComponent === 'componentFour' ? "active" : ""} onClick={() => handleSetActiveComponent('componentFour')}>
          <MdOutlineDesignServices />
        </a>
        <a
          href="#portofolio" className={activeComponent === 'componentFive' ? "active" : ""} onClick={() => handleSetActiveComponent('componentFive')}>
          <BsBriefcase />
        </a>
        <a
          href="#education" className={activeComponent === 'componentSix' ? "active" : ""} onClick={() => handleSetActiveComponent('componentSix')}>
          <MdCastForEducation />
        </a>
        <a
          href="#contact" className={activeComponent === 'componentSeven' ? "active" : ""} onClick={() => handleSetActiveComponent('componentSeven')}>
          <BsChatText />
        </a>
       
        </nav>
      <div>
        {activeComponent === "componentOne" && <Header />}
        {activeComponent === "componentTwo" && <About />}
        {activeComponent === "componentThree" && <Experience />}
        {activeComponent === "componentFour" && <Services />}
        {activeComponent === "componentFive" && <Portofolio />}
        {activeComponent === "componentSix" && <Education />}
        {activeComponent === "componentSeven" &&  <Contact />}
        
       </div>
       </>
         );
        };}*/
