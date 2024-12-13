import React from "react";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Portofolio from "./components/portofolio/Portofolio";
import Services from "./components/services/Services";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Portofolio />
      <Services />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

/*{  const [activeComponent, setActiveComponent] = useState("componentOne");
 
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
        {activeComponent === "componentEight" &&  <Footer />}
       </div>
       </>
         );
        };



      }*/

/*{}*/
