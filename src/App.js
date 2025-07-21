import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import DarkModeToggle from './components/DarkModeToggle';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <DarkModeToggle />
      <Hero />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
