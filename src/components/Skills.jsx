import {
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiSpringboot,
  SiNodedotjs,
  SiScikitlearn,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      {
        name: 'Python',
        icon: SiPython,
        color: '#3776AB',
      },
      {
        name: 'Java',
        icon: SiOpenjdk,
        color: '#F89820',
      },
      {
        name: 'JavaScript',
        icon: SiJavascript,
        color: '#F7DF1E',
      },
      {
        name: 'HTML',
        icon: SiHtml5,
        color: '#E34F26',
      },
      {
        name: 'CSS',
        icon: SiCss,
        color: '#1572B6',
      },
    ],
  },

  {
    title: 'Development',
    skills: [
      {
        name: 'React',
        icon: SiReact,
        color: '#61DAFB',
      },
      {
        name: 'Spring Boot',
        icon: SiSpringboot,
        color: '#6DB33F',
      },
      {
        name: 'Node.js',
        icon: SiNodedotjs,
        color: '#339933',
      },
    ],
  },

  {
    title: 'Machine Learning & Data',
    skills: [
      {
        name: 'Scikit-learn',
        icon: SiScikitlearn,
        color: '#F7931E',
      },
      {
        name: 'TensorFlow',
        icon: SiTensorflow,
        color: '#FF6F00',
      },
      {
        name: 'Pandas',
        icon: SiPandas,
        color: '#150458',
      },
      {
        name: 'NumPy',
        icon: SiNumpy,
        color: '#013243',
      },
    ],
  },

  {
    title: 'Databases',
    skills: [
      {
        name: 'MySQL',
        icon: SiMysql,
        color: '#4479A1',
      },
      {
        name: 'MongoDB',
        icon: SiMongodb,
        color: '#47A248',
      },
      {
        name: 'Firebase',
        icon: SiFirebase,
        color: '#FFCA28',
      },
    ],
  },

  {
    title: 'Tools',
    skills: [
      {
        name: 'Git',
        icon: SiGit,
        color: '#F05032',
      },
      {
        name: 'GitHub',
        icon: SiGithub,
        color: '#FFFFFF',
      },
      {
        name: 'Postman',
        icon: SiPostman,
        color: '#FF6C37',
      },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <span>03</span>
        <h2>Tech Stack</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div
            className="skill-category"
            key={category.title}
          >
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map(
                ({ name, icon: Icon, color }) => (
                  <span
                    className="skill-item"
                    key={name}
                  >
                    <Icon
                      size={20}
                      color={color}
                    />

                    <span>{name}</span>
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills