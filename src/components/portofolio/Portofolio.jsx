import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/counter-clock.webp";
import IMG2 from "../../assets/protech-dmpp.jpg";
import IMG3 from "../../assets/calculator.png";
import IMG4 from "../../assets/tips.png";
import IMG5 from "../../assets/crud.png";
import IMG6 from "../../assets/coloflipper.webp";
import IMG7 from "../../assets/simplecounter.png";
import IMG8 from "../../assets/Acrylic-Mirror-Digital-clock.jpg";
import IMG9 from "../../assets/eshop.avif";
import IMG10 from "../../assets/weather.webp";
import IMG11 from "../../assets/Rokani.png";
import IMG12 from "../../assets/Labohemebistro.png";
import eurochem from "../../assets/eurochem.png";
import { GrView } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

const data = [
  {
    id: 1,
    image: IMG12,
    title: "Labohemebistro.gr",
    github: "",
    demo: "https://labohemebistro.gr/",
    comment: "Website for Local cafe-pub with Html Css Javascript",
  },
  {
    id: 2,
    image: eurochem,
    title: "EuroChem",
    github: "https://github.com/Tzalk1985/dmpp",
    demo: "https://calculatordmpp.netlify.app/login",
    comment: "Chemicals Calculation with Crud system and Users system",
  },
  {
    id: 3,
    image: IMG11,
    title: "Rokani Sudios ",
    github: "",
    demo: "https://rokanistudios.gr/",
    comment: "Rental Studios Booking with wordpress",
  },
  {
    id: 4,
    image: IMG10,
    title: "Weather app",
    github: "https://github.com/Tzalk1985/weatherapp",
    demo: "/weatherapp.html",
    comment: "WeatherApp with Api from OpenWeather with JavaScript HTML CSS",
  },
  {
    id: 5,
    image: IMG5,
    title: "CRUD",
    github: "https://github.com/Tzalk1985/Crud",
    demo: "/PinakasDmpp.html",
    comment:
      "CRUD system that use database Index DB with Bootstrap JavaScript HTML CSS ",
  },
  {
    id: 6,
    image: IMG9,
    title: "E-Store",
    github: "https://github.com/Tzalk1985/e-store",
    demo: "https://github.com/Tzalk1985/e-store",
    comment: " React eshop with JavaScript HTML CSS ",
  },

  {
    id: 7,
    image: IMG2,
    title: "DMPP project",
    github: "https://github.com/Tzalk1985/Dmpp-Project",
    demo: "/Starter.php",
    comment:
      "database and fetch the data to a table PHP SQL HTML JavaScript HTML CSS  ",
  },
  {
    id: 8,
    image: IMG4,
    title: "Tip Calculator",
    github: "https://github.com/Tzalk1985/TipCalculator",
    demo: "/tipcalculator.html",
    comment: "Calculate the tips for you with JavaScript HTML CSS",
  },
 
  {
    id: 9,
    image: IMG6,
    title: "Color Flipper",
    github: "https://github.com/Tzalk1985/colorflipper",
    demo: "/colorflipper.html",
    comment: "Change random color for you with JavaScript HTML CSS",
  },
  {
    id: 10,
    image: IMG7,
    title: "Simple Counter",
    github: "https://github.com/Tzalk1985/Simple-Counter",
    demo: "/simplecounter.html",
    comment:
      "Increase Dicreace Numbers and reset counter with JavaScript HTML CSS",
  },
  {
    id: 11,
    image: IMG8,
    title: "Digital Clock",
    github: "https://github.com/Tzalk1985/DigitaClock",
    demo: "/digitalClock.html",
    comment:
      "Digital clock that change the backround day and night with JavaScript HTML CSS",
  },
  {
    id: 12,
    image: IMG1,
    title: "Counter Clock",
    github: "https://github.com/Tzalk1985/Counter",
    demo: "/CLOCK.html",
    comment: "Count second minutes and hours with JavaScript HTML CSS ",
  },
  {
    id: 13,
    image: IMG3,
    title: "Calculator Light/Dark",
    github: "https://github.com",
    demo: "/calculator.html",
    comment: "calculator app with light and dark mode with JavaScript HTML CSS",
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio_container">
        {data.map(({ id, image, title, github, demo, comment }) => {
          return (
            <article key={id} className="portofolio_item">
              <div className="portofolio_item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portofolio_item cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>
                    <GrGithub />
                  </p>
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  <p>
                    <GrView />
                  </p>
                  Live Demo
                </a>
              </div>
              <h5>
                <p>{comment}</p>
              </h5>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
