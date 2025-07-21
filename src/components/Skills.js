import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    "Java", "Python", "React.js", "Node.js",
    "HTML", "CSS", "JavaScript", "MySQL",
    "MongoDB", "AWS", "Azure"
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
