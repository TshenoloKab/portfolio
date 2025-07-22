import React from "react";
import logo from './assets/tk-logo.png';
import recipe from './assets/recipe.jpg';
import expense from './assets/expense-tracker2.jpg';
import property from './assets/property.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <img src={logo} alt="TK Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h2 className="fade-in">Hi, I'm Tshenolo Kabikwa</h2>
          <h3 className="fade-in-delay">Frontend Developer</h3>
          <a href="#projects" className="btn pulse">View My Projects</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I’m a frontend developer passionate about building clean, responsive, and user-friendly web applications. 
            With a solid foundation in <strong>React, JavaScript, HTML</strong> and <strong>CSS</strong>, 
            I focus on delivering seamless digital experiences.
          </p>
          <p>
            I enjoy turning design concepts into functional, beautiful interfaces and 
            continuously learning modern web technologies.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="skills-content">
          <h2>Skills</h2>
          <div className="skills-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Git & GitHub</span>
            <span>Responsive Design</span>
            <span>APIs</span>
            <span>Vite</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="section-content">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <img src={expense} alt="Expense Tracker Screenshot" className="project-image" />
              <h3>Expense Tracker</h3>
              <p>A responsive expense tracker built with React (Phase 1 - Static). Dynamic features like transaction management are planned in the next phase.</p>
              <a href="https://expense-tracker-tkdev.netlify.app" target="_blank" rel="noreferrer" className="btn">View Project</a>
            </div>
            <div className="project-card">
              <img src={recipe} alt="Recipe App Screenshot" className="project-image" />
              <h3>Recipe App</h3>
              <p>A recipe discovery app where users will browse, search, and save favorite recipes with a clean React UI. (Coming Soon...)</p>
              <a href="https://coming-soon-tk.netlify.app/" target="_blank" rel="noreferrer" className="btn">View Project</a>
            </div>
            <div className="project-card">
              <img src={property} alt="Property Screenshot" className="project-image" />
              <h3>Property Rental Finder</h3>
              <p>A rental finder app where users will search, filter, and explore rentals globally with responsive layouts and real-time listings. (Coming Soon...)</p>
              <a href="https://coming-soon-tk.netlify.app/" target="_blank" rel="noreferrer" className="btn">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-content">
          <h2>Contact Me</h2>
          <p>Have a role or project in mind? Reach out - I'd love to hear from you!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 @TK. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
