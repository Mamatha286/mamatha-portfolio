import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';
import profilePic from '../assets/profile.jpg';

function Hero() {
  return (
    <section className="hero">
      <img src={profilePic} alt="Mamatha H" className="hero-img" />
      <h1>Mamatha H</h1>
      <TypeAnimation
        sequence={[
          'Full Stack Developer',
          2000,
          'MCA Graduate',
          2000,
          'React | Node.js | MySQL',
          2000
        ]}
        wrapper="p"
        cursor={true}
        repeat={Infinity}
        className="typing"
      />
    </section>
  )
}

export default Hero;
