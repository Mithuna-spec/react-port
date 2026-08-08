
const achievements = [
  {
    title: '200+ DSA Problems',
    organization: 'GeeksforGeeks',
    description:
      'Solved more than 200 Data Structures and Algorithms problems.',
    type: 'Coding',
  },
  {
    title: '200+ Problems Solved',
    organization: 'LeetCode',
    description:
      'Solved more than 200 programming and algorithmic problems.',
    type: 'Coding',
  },
]

function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-heading">
        <h2>Achievements</h2>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <article
            className="achievement-card"
            key={achievement.title}
          >
            <span className="achievement-type">
              {achievement.type}
            </span>

            <h3>{achievement.title}</h3>

            <p className="achievement-organization">
              {achievement.organization}
            </p>

            <p className="achievement-description">
              {achievement.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Achievements