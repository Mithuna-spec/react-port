function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-heading">
        <h2>Education</h2>
      </div>

      <div className="education-list">
        <article className="education-card">
          <div className="education-year">
            2024 — 2028
          </div>

          <div className="education-details">
            <h3>B.Tech in Computer Science and Engineering</h3>
            <p className="education-institute">
              Institute of Aeronautical Engineering (IARE)
            </p>

            <div className="education-stats">
              <div>
                <span>CGPA</span>
                <strong>9.58</strong>
              </div>

              <div>
                <span>Expected Graduation</span>
                <strong>May 2028</strong>
              </div>
            </div>
          </div>
        </article>

        <article className="education-card">
          <div className="education-year">
            2022 — 2024
          </div>

          <div className="education-details">
            <h3>Intermediate</h3>
            <p className="education-institute">
              Meluha Junior College
            </p>

            <div className="education-stats">
              <div>
                <span>Score</span>
                <strong>990 / 1000</strong>
              </div>
            </div>
          </div>
        </article>

        <article className="education-card">
          <div className="education-year">
            2022
          </div>

          <div className="education-details">
            <h3>SSC</h3>
            <p className="education-institute">
              GHS Jummerathpet High School
            </p>

            <div className="education-stats">
              <div>
                <span>CGPA</span>
                <strong>10.0</strong>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Education