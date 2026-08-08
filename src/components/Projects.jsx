
const projects = [
  {
    title: 'Heart Disease Prediction System',
    category: 'Full Stack + Machine Learning',
    description:
      'An end-to-end application for real-time heart disease prediction using clinical user inputs, with a full-stack architecture connecting the frontend, backend, machine learning inference, and database.',
    technologies: ['Spring Boot', 'React', 'ML', 'MySQL'],
    year: '2026',
    github: 'https://github.com/Mithuna-spec/heart-disease-prediction-fullstack',
  },
  {
    title: 'Heart Disease Prediction',
    category: 'Machine Learning',
    description:
      'A machine learning classification project using the UCI Heart Disease dataset. Multiple classifiers were compared and Random Forest achieved 87% classification accuracy.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
    ],
    year: '2026',
    github: 'https://github.com/Mithuna-spec/heart-disease-prediction',
  },
  {
    title: 'AI-Based URL Shortener',
    category: 'Full Stack',
    description:
      'A full-stack URL shortening application with a React frontend, Node.js backend, and MongoDB database for efficient URL mapping and redirection.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Python'],
    year: '2025',
    github: 'https://github.com/Mithuna-spec/URL-Shortner',
  },

  {
  title: 'Road Damage Report',
  category: 'Full Stack',
  description:
    'A web application for reporting and managing road damage, allowing users to submit road damage reports and helping streamline the reporting process.',
  technologies: ['React', 'Node.js', 'MongoDB'],
  year: '2026',
  github: 'https://github.com/Mithuna-spec/Road-damage-report-deploy',
  live: 'https://road-damage-report-deploy-m97g.vercel.app/',
},
]

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <h2>Projects</h2>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">
              0{index + 1}
            </div>

            <div className="project-content">
              <div className="project-top">
                <span className="project-category">
                  {project.category}
                </span>

                <span className="project-year">
                  {project.year}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                className="project-github"
                target="_blank"
                rel="noreferrer"
                >
                View on GitHub ↗
                </a>
                {project.live && (
                    <a
                    href={project.live}
                    className="project-live"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Live Demo ↗
                    </a>
                )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects