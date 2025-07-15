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
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h2>Hi, I'm Tshenolo Kabikwa</h2>
          <h3>Frontend Developer</h3>
          <p><strong>Tech Stack:</strong> HTML • CSS • JavaScript • React</p>
          <a href="#projects" className="btn">View My Projects</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm, a frontend developer passionate about 
            building clean, responsive, and user-friendly web applications. With a 
            strong foundation in <strong>HTML, CSS, JavaScript,</strong> and <strong>React</strong>, 
            I focus on delivering seamless digital experiences.
          </p>
          <p>
            I enjoy turning design concepts into functional, beautiful interfaces and 
            continuously learning modern web technologies.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="section-content">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <img src={recipe} alt="Recipe App Screenshot" className="project-image" />
              <h3>Recipe App</h3>
              <p>An interactive recipe app where users can browse, search, and save favorite recipes. Built with React, it features a clean UI, recipe categories, and an API for fetching recipe data dynamically.</p>
              <a href="https://github.com/username/portfolio" target="_blank" rel="noreferrer" className="btn">View Project</a>
            </div>
            <div className="project-card">
              <img src={property} alt="Property Screenshot" className="project-image" />
              <h3>Property Rental Finder</h3>
              <p>A rental finder app designed to simplify rental property discovery, enabling users to search, filter, and explore properties globally. Built with responsive layouts, dynamic property cards, and API-powered real-time listings.</p>
              <a href="https://github.com/username/todo-app" target="_blank" rel="noreferrer" className="btn">View Project</a>
            </div>
            <div className="project-card">
              <img src={expense} alt="Expense Tracker Screenshot" className="project-image" />
              <h3>Expense Tracker</h3> 
              <p>A responsive web app to track income and expenses. Features include dynamic charts, adding/deleting transactions, and local storage for saving data across sessions.</p>
              <a href="https://github.com/username/recipe-explorer" target="_blank" rel="noreferrer" className="btn">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-content">
          <h2>Contact Me</h2>
          <p>Have a role or project in mind? Let's discuss!</p>
          <a href="mailto:tckabikwa@gmail.com" className="btn">Get in Touch</a>
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
