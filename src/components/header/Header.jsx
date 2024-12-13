import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/centralme.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>;

  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Konstantinos Tzallas</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>

        <HeaderSocials />
        <a href="#portofolio">
          <div className="me">
            <img src={ME} id="ME" alt="Headerpic" />
          </div>
        </a>
    
      </div>

    </header>
  );
};

export default Header;
