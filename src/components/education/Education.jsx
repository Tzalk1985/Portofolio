import React from "react";
import "./education.css";
import EIM1 from "../../assets/EIM1.png";
import EIM2 from "../../assets/EIM2.png";
import EIM3 from "../../assets/EIM3.png";
import EIM4 from "../../assets/EIM4.png";
import EIM5 from "../../assets/EIM5.png";
import EIM6 from "../../assets/EIM6.png";
import EIM7 from "../../assets/EIM7.png";
import EIM8 from "../../assets/EIM8.png";
import EIM9 from "../../assets/EIM9.png";
import EIM10 from "../../assets/EIM10.png";
import EIM11 from "../../assets/EIM11.jpg";
import jspcc from "../../assets/jspcc.jpg";
import estore from "../../assets/estore.jpg";
import wordpress from "../../assets/wordpress.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    picture: EIM11,
    name: "Ultimate Web Development for Εxperts with React 16, Angular 7, Vue.js 2, HTML, JavaScript, jQuery και Bootstrap 4",
    review:
      "Οι εκπαιδευόμενοι ολοκληρώνοντας το πρόγραμμα θα μπορούν να δημιουργήσουν όχι μόνο απλές ιστοσελίδες αλλά ολοκληρωμένα και εντυπωσιακά websites, μέχρι και web εφαρμογές με React 16, Αngular 7 και Vue.JS.",
    udemy:
      "https://elearningekpa.gr/courses/ultimate-web-development-for-experts-with-react-16-angular-7-vue-js-2-html-javascript-jquery-kai-bootstrap-4",
  },
  {
    picture: jspcc,
    name: "Javascript Practicals Crash Course",
    review:
      "Learn javascript Concepts With Javascript Practical Demonstrations",
    udemy: "https://www.udemy.com/course/javascript-practicals-crash-course/",
  },
  {
    picture: EIM2,
    name: "The Complete ReactJs Course - Basics to Advanced (2021)",
    review:
      "Build a Fully Customized E-Commerce Site with Product Categories, Shopping Cart, and Checkout Page in React.",
    udemy: "https://www.udemy.com/course/react-js-basics-to-advanced/",
  },
  {
    picture: estore,
    name: "Build a Custom E-Commerce Site in React + JavaScript Basics",
    review:
      "Learn React JS from scratch with hands-on practice assignments and projects.",
    udemy:
      "https://www.udemy.com/course/build-a-custom-e-commerce-site-in-react-javascript-basics/",
  },
  {
    picture: wordpress,
    name: "Wordpress For Beginners",
    review:
      "Create An Amazing Website In Less Than Two Hours Have A Crisp-Clear Understanding Of How Wordpress Works",
    udemy:
      "https://www.udemy.com/course/build-a-wordpress-website/",
  },
  {
    picture: EIM1,
    name: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
    review:
      "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    udemy: "https://www.udemy.com/course/100-days-of-code/",
  },
  {
    picture: EIM3,
    name: "The Python Programming A-Z Definitive Diploma in 2022",
    review:
      "The Hands-On Guide to Master Modern Python and Data, to Advance your Dev and Data Career in no time!",
    udemy:
      "https://www.udemy.com/course/the-ultimate-python-programming-a-z-masterclass/",
  },
  {
    picture: EIM4,
    name: "Python And Flask Framework Complete Course",
    review:
      "Depth Introduction To Python Programming And Python Web framework Flask.",
    udemy:
      "https://www.udemy.com/course/flask-framework-complete-course-for-beginners/",
  },
  {
    picture: EIM5,
    name: "Web Development Ultimate Guide 2022",
    review: "Everything you need to know about Web Development",
    udemy: "https://www.udemy.com/course/web-development-ultimate-course/",
  },
  {
    picture: EIM6,
    name: "CSS3 and Bootstrap for Absolute Beginners : 4 courses in 1",
    review: "Learn CSS3, Bootstrap from Scratch using step by step process",
    udemy: "https://www.udemy.com/course/learn-css-and-bootstrap-from-scratch/",
  },
  {
    picture: EIM7,
    name: "jQuery for Absolute Beginners : From Beginning to Advanced",
    review:
      "Learn jQuery : Client Side Web Development using jQuery through Step by Step Learning, JavaScript Library jQuery",
    udemy:
      "https://www.udemy.com/course/learn-jquery-from-beginning-to-advanced/",
  },
  {
    picture: EIM8,
    name: "CSS, JavaScript And PHP Complete Course For Beginners",
    review:
      "Learn CSS and JavaScript and PHP programming language with practical interaction",
    udemy:
      "https://www.udemy.com/course/css-javascript-and-php-complete-course-for-beginners/",
  },
  {
    picture: EIM9,
    name: "Building Android Widgets from Scratch ( Learn 8 Widgets)",
    review:
      "Build 8 fully functional widgets for Android devices - Right from Scratch in just 2 hours",
    udemy:
      "https://www.udemy.com/course/learn-to-build-8-android-widgets-in-2-hours/",
  },
  {
    picture: EIM10,
    name: "Modern PHP Web Development w/ MySQL, GitHub & Heroku",
    review:
      "Learn to develop data driven web applications using PHP and MySQL (PDO) , manage them with GitHub and deploy to Heroku",
    udemy:
      "https://www.udemy.com/course/advanced-php-web-development-w-mysql-github-bootstrap-4/",
  },
];

const education = () => {
  return (
    <section id="education">
      <h5>Completed</h5>
      <h2>Education</h2>

      <Swiper
        className="container education_container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ picture, name, review, udemy }, index) => {
          return (
            <SwiperSlide key={index} className="education">
              <a href={udemy} target="_blank" rel="noreferrer">
                <div className="education_picture">
                  <img src={picture} alt="EducationImage1" />
                </div>
              </a>
              <h5 className="lesson_name">{name}</h5>
              <small className="education_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default education;
