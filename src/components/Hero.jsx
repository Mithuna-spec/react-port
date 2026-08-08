import profilePhoto from '../assets/Profile Photo.jpeg'
function Hero() {
  return (
    <header id="home" className="hero">
      <div className="hero-content">

        <div className="hero-photo-wrapper">
          <img
            src={profilePhoto}
            alt="Mithuna Thirunagari"
            className="hero-photo"
          />
        </div>

        <p className="hero-label">MITHUNA THIRUNAGARI</p>

        <h1>
          Building with
          <span> Code & Intelligence.</span>
        </h1>

        <p className="hero-description">
          Computer Science undergraduate exploring software development,
          machine learning, and data-driven solutions.
        </p>
      </div>
    </header>
  )
}

export default Hero