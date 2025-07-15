function Projects() {
  return (
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A responsive personal portfolio to showcase my skills and projects.</p>
            <a href="https://your-portfolio-link.com" target="_blank" rel="noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <h3>E-commerce Landing Page</h3>
            <p>A modern landing page for an e-commerce site built with React and CSS modules.</p>
            <a href="https://your-landing-page-link.com" target="_blank" rel="noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <h3>Weather App</h3>
            <p>An app using an API to display real-time weather updates in your city.</p>
            <a href="https://your-weather-app-link.com" target="_blank" rel="noreferrer">View Project</a>
          </div>
        </div>
      </section>
  );
}
export default Projects;
