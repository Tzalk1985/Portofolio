import React, { useState, useEffect } from "react";
import "./experience.css";
import SkillBar from "react-skillbars";

const Experience = () => {
  const [isShown, setIsShown] = useState(false);

  // Add useEffect to handle mobile and desktop
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsShown(isVisible);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      type: "HTML",
      level: 80,
      color: { bar: "#f44336", title: { text: "#fff", background: "#BA4848" } },
    },
    {
      type: "CSS",
      level: 70,
      color: { bar: "#0086ff", title: { text: "#fff", background: "#0086ff" } },
    },
    {
      type: "JAVASCRIPT",
      level: 60,
      color: { bar: "#ffd966", title: { text: "#000", background: "#fcf003" } },
    },
    {
      type: "TYPESCRIPT",
      level: 40,
      color: { bar: "#6fa8dc", title: { text: "#fff", background: "#0997e3" } },
    },
    {
      type: "BOOTSTRAP",
      level: 40,
      color: { bar: "#8c2d87", title: { text: "#fff", background: "#750573" } },
    },
    {
      type: "JQUREY",
      level: 50,
      color: { bar: "#f7e6f6", title: { text: "#000", background: "#f7e6f6" } },
    },
    {
      type: "REACT",
      level: 60,
      color: { bar: "#2a9ef7", title: { text: "#fff", background: "#0a161f" } },
    },
    {
      type: "ANGULAR",
      level: 40,
      color: { bar: "#f2e1e3", title: { text: "#fff", background: "#bd0d1f" } },
    },
    {
      type: "VUE.JS",
      level: 50,
      color: {
        bar: "#272840",
        title: { text: "#3c3d54", background: "#4ce660" },
      },
    },
    {
      type: "PYTHON",
      level: 60,
      color: {
        bar: "#426fd6",
        title: { text: "#000000", background: "#fff940" },
      },
    },
    {
      type: "PHP",
      level: 30,
      color: { bar: "#8e7cc3", title: { text: "#fff", background: "#465bd4" } },
    },
  ];

  return (
    <section
      id="experience"
      onClick={() => setIsShown(true)}
      onMouseEnter={() => setIsShown(true)}
      onTouchStart={() => setIsShown(true)}
    >
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="experience_container">
        <div className="experience_frontend">
          <h2>My Skills</h2>
          {isShown && <SkillBar skills={skills} />}
        </div>
      </div>
    </section>
  );
};

export default Experience;
