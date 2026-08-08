const certifications = [
  {
    title: 'Programming in Java',
    organization: 'NPTEL',
    year: '2026',
  },
  {
    title: 'Certificate on AIML',
    organization: 'Samsung Innovation Campus (SIC)',
    year: '2026',
  },
  {
    title: 'Python Foundation Certificate',
    organization: 'Infosys Springboard',
    year: '2026',
  },
  {
    title: 'Java Programming Fundamentals',
    organization: 'Infosys Springboard',
    year: '2026',
  },
  {
    title: 'AWS Fundamentals Certification',
    organization: 'Scalar',
    year: '2026',
  },
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    organization: 'TCS Forage',
    year: '2026',
  },
]

function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="section-heading">
        
        <h2>Certifications</h2>
      </div>

      <div className="certifications-grid">
        {certifications.map((certification) => (
          <article
            className="certification-card"
            key={certification.title}
          >
            <div className="certification-year">
              {certification.year}
            </div>

            <div className="certification-content">
              <h3>{certification.title}</h3>
              <p>{certification.organization}</p>
            </div>

            <span className="certification-arrow">
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications