function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-content">
        <p>
          Feel free to reach out if you'd like to connect,
          collaborate, discuss an idea, or simply have a conversation to build something.
        </p>

        <div className="contact-details">
          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="contact-item"
          >
            <span>Email</span>
            <strong>thirunagarimithuna1@gmail.com</strong>
          </a>

          <a
            href="tel:+91XXXXXXXXXX"
            className="contact-item"
          >
            <span>Phone</span>
            <strong>+91 75692 28697</strong>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact