import React from 'react';
import './Projects.css';

function Projects() {
  const projectData = [
    {
      title: "Fleet Management System",
      tech: "React, Node.js, MySQL",
      description: "Built a full-stack fleet management platform with user booking, alerts, and profile modules."
    },
    {
      title: "MealMingle – AI Recipe Generator",
      tech: "Flask, React, OpenAI API",
      description: "AI-powered recipe generator with chatbot UI using OpenAI API integration."
    },
    {
      title: "Vendor & Tender Management",
      tech: "Java, Servlets, MySQL",
      description: "Web app for managing vendors and tender bidding with authentication."
    },
    {
      title: "Book Recommendation System",
      tech: "PHP, HTML, CSS, JS",
      description: "Recommends books based on user interests with a simple PHP backend."
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p><strong>Tech:</strong> {project.tech}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
