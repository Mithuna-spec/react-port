const profiles = [
  {
    name: 'GitHub',
    description: 'Projects, repositories and development work',
    url: 'https://github.com/Mithuna-spec',
  },
  {
    name: 'LinkedIn',
    description: 'Professional profile and experiences',
    url: 'https://www.linkedin.com/in/mithuna-thirunagari-b630a0390/',
  },
  {
    name: 'LeetCode',
    description: '200+ problems solved',
    url: 'https://leetcode.com/u/Mithuna_Thirunagari1/',
  },
  {
    name: 'GeeksforGeeks',
    description: '200+ DSA problems solved',
    url: 'https://www.geeksforgeeks.org/profile/mithunathirunagari',
  },
]

function Profiles() {
  return (
    <section id="profiles" className="profiles-section">
      <div className="section-heading">

        <h2>Coding & Profiles</h2>
      </div>

      <div className="profiles-grid">
        {profiles.map((profile) => (
          <a
            href={profile.url}
            className="profile-card"
            target="_blank"
            rel="noreferrer"
            key={profile.name}
          >
            <div>
              <h3>{profile.name}</h3>
              <p>{profile.description}</p>
            </div>

            <span className="profile-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Profiles