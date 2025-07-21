import React from 'react';
import './Certifications.css';

function Certifications() {
  const certs = [
    "Java Programming Masterclass – Udemy (2025)",
    "Prompt Engineering – IBM (2024)",
    "AWS Cloud Foundations – AWS Academy (2024)",
    "Microsoft Azure Fundamentals – Microsoft (2024)",
    "Python for Beginners – Infosys Springboard (2024)",
    "UI Design with Material Design 3 – Coursera (2025)"
  ];

  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <ul>
        {certs.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
