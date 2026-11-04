

import './App.css'
import profilePhoto from './assets/mariam.jpg'
import restaurantImage from './assets/restaurant.png'
import fashionImage from './assets/fashion.png'

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <div className="container nav-content">

         <a href="#" className="logo">
  <span className="logo-icon">M</span>
  <span className="logo-name">
    MARIAM<span>.</span>
  </span>
</a>

          <div className="nav-links">
           <a href="#">Home</a>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#education">Education</a>
<a href="#certificates">Certificates</a>
<a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>

        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="container hero-content">

            <div className="hero-text">
              <span className="hero-label">
                WELCOME TO MY PORTFOLIO
              </span>

              <h1>
                Hi, I'm <span>Mariam.</span>
                <br />
                Front-End Developer
              </h1>

              <p>
                I create modern, clean, and user-friendly
                web experiences. I'm passionate about
                turning ideas into beautiful digital products.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>

                <a href="#contact" className="btn-secondary">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">
                <span className="visual-number">01</span>

                <img
                  src={profilePhoto}
                  alt="Mariam"
                  className="profile-photo"
                />

                <span className="visual-caption">
                  CREATIVE MIND
                </span>
              </div>
            </div>

          </div>
        </section>
        
        
        {/* ABOUT SECTION */}
        <section className="about" id="about">
          <div className="container about-content">

            <div className="about-heading">
              <span className="section-label">
                GET TO KNOW ME
              </span>

              <h2>
                A Little About <span>Me</span>
              </h2>
            </div>

            <div className="about-text">

              <p>
                I'm Mariam, a Computer Science student
                and aspiring Front-End Developer.
                I enjoy creating modern, clean, and
                user-friendly web experiences.
              </p>

              <p>
                I have hands-on experience in building
                web interfaces using HTML, CSS, and React.
                I also have an interest in UI/UX Design,
                where I enjoy creating user interfaces
                and interactive prototypes using Figma.
              </p>

              <p>
                I'm always eager to learn new technologies,
                improve my skills, and turn creative ideas
                into meaningful digital experiences.
              </p>

              <div className="about-details">

                <div>
                  <span>01</span>
                  <p>Computer Science Student</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Front-End Development</p>
                </div>

                <div>
                  <span>03</span>
                  <p>UI/UX Design Enthusiast</p>
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* SKILLS SECTION */}
        <section className="skills" id="skills">
          <div className="container">

            <div className="skills-heading">
              <span className="section-label">
                WHAT I WORK WITH
              </span>

              <h2>
                My <span>Skills</span>
              </h2>

              <p>
                Technologies and tools I use to create
                modern digital experiences.
              </p>
            </div>

            <div className="skills-content">

              <div className="skill-card">
                <div className="skill-icon">01</div>

                <h3>Front-End Development</h3>

                <p>
                  Building responsive and user-friendly
                  web interfaces.
                </p>

                <div className="skill-list">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>React</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">02</div>

                <h3>UI/UX Design</h3>

                <p>
                  Designing clean interfaces and
                  interactive prototypes.
                </p>

                <div className="skill-list">
                  <span>Figma Design</span>
                  <span>Figma Make</span>
                  <span>UI Design</span>
                  <span>Prototyping</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="projects" id="projects">
          <div className="container">

            <div className="projects-heading">
              <span className="section-label">
                MY RECENT WORK
              </span>

              <h2>
                Featured <span>Projects</span>
              </h2>

              <p>
                A selection of projects I've worked on
                while learning and improving my skills.
              </p>
            </div>

            <div className="projects-content">

              {/* Restaurant Project */}
              <div className="project-card">

                <div className="project-image">
  <img
    src={restaurantImage}
    alt="Restaurant Website homepage"
  />
</div>

                <div className="project-info">
                  <h3>Restaurant Website</h3>

                  <p>
                    A modern restaurant website featuring
                    an elegant design, organized layout,
                    and user-friendly interface.
                  </p>

                  <div className="project-tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                  </div>

                  <div className="project-actions">
                    <a
                      href="https://mariamza2004.github.io/Frist-pro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href="https://github.com/Mariamza2004/Frist-pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link secondary-link"
                    >
                      View Code ↗
                    </a>
                  </div>
                </div>

              </div>

              {/* Fashion Project */}
              <div className="project-card">

                <div className="project-image">
  <img
    src={fashionImage}
    alt="Urban Fashion Store homepage"
  />
</div>

                <div className="project-info">
                  <h3>Urban Fashion Store</h3>

                  <p>
                    A modern fashion store website showcasing
                    stylish collections, new arrivals,
                    and an elegant shopping experience.
                  </p>

                  <div className="project-tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                  </div>

                  <div className="project-actions">
                    <a
                      href="https://mariamza2004.github.io/urban-fashion-store/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href="https://github.com/Mariamza2004/urban-fashion-store"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link secondary-link"
                    >
                      View Code ↗
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
        {/* EDUCATION SECTION */}
        <section className="education" id="education">
          <div className="container">

            <div className="education-heading">
              <span className="section-label">
                MY ACADEMIC JOURNEY
              </span>

              <h2>
                My <span>Education</span>
              </h2>

              <p>
                My academic background and learning journey
                in the field of technology.
              </p>
            </div>

            <div className="education-content">

              <div className="education-card">

                <div className="education-icon">
                  <span>01</span>
                </div>

                <div className="education-info">
                  <span className="education-date">
                    2023 – 2027
                  </span>

                  <h3>
                    Bachelor's Degree in Computer Science
                  </h3>

                  <h4>
                    Faculty of Computers and Information
                  </h4>

                  <p>
                    Studying Computer Science and Information
                    Technology, with an interest in
                    Front-End Development and modern web technologies.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>
                {/* CERTIFICATES SECTION */}
        <section className="certificates" id="certificates">
          <div className="container">

            <div className="certificates-heading">
              <span className="section-label">
                MY ACHIEVEMENTS
              </span>

              <h2>
                My <span>Certificates</span>
              </h2>

              <p>
                Certifications and training programs
                that support my technical journey.
              </p>
            </div>

            <div className="certificates-content">

              {/* Front-End Diploma */}
              <div className="certificate-card">
                <div className="certificate-number">01</div>

                <div className="certificate-info">
                  <span className="certificate-year">2026</span>

                  <h3>Front-End Diploma (React JS)</h3>

                  <h4>SEF Academy</h4>

                  <p>
                    Successfully completed the Front-End
                    Development Diploma with a final grade
                    of 97.38%.
                  </p>
                </div>
              </div>

              {/* CCNA Certificate */}
              <div className="certificate-card">
                <div className="certificate-number">02</div>

                <div className="certificate-info">
                  <span className="certificate-year">2025</span>

                  <h3>CCNA Course Completion</h3>

                  <h4>Cisco</h4>

                  <p>
                    Completed the CCNA course covering
                    networking fundamentals and related
                    networking topics.
                  </p>
                </div>
              </div>

              {/* ITI Training */}
              <div className="certificate-card">
                <div className="certificate-number">03</div>

                <div className="certificate-info">
                  <span className="certificate-year">2025</span>

                  <h3>Web Development Training</h3>

                  <h4>ITI</h4>

                  <p>
                    Completed practical training in
                    HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
                    {/* CONTACT SECTION */}
        <section className="contact" id="contact">
          <div className="container">

            <div className="contact-heading">
              <span className="section-label">
                GET IN TOUCH
              </span>

              <h2>
                Let's Work <span>Together</span>
              </h2>

              <p>
                Have a project in mind or an opportunity
                to discuss? I'd love to hear from you.
              </p>
            </div>

            <div className="contact-content">

              <div className="contact-info">
                <h3>Let's Connect</h3>

                <p>
                  I'm always open to discussing new projects,
                  creative ideas, and opportunities to grow.
                </p>

              <div className="contact-links">

  <a href="mailto:mariamzahgar214@gmail.com">
    <span>Email:</span>
    mariamzahgar214@gmail.com ↗
  </a>

  <a href="tel:+201011270615">
    <span>Phone:</span>
    01011270615 ↗
  </a>

  <a
    href="https://github.com/mariamza2004"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>GitHub:</span>
    github.com/mariamza2004 ↗
  </a>

  <a
    href="https://www.linkedin.com/in/mariam-zahgar-b461b236b/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>LinkedIn:</span>
    linkedin.com/in/mariam-zahgar-b461b236b ↗
  </a>

</div>
              </div>

              <div className="contact-message">
                <span>HAVE AN IDEA?</span>

                <h3>
                  Let's create something meaningful.
                </h3>

                <a
                  href="mailto:mariamzahgar214@gmail.com"
                  className="contact-button"
                >
                  Get In Touch ↗
                </a>
              </div>

            </div>
          </div>
        </section>
              {/* FOOTER */}
      <footer className="footer">
        <div className="container">

          <div className="footer-content">

            <div className="footer-brand">
              <a href="#" className="footer-logo">
                MARIAM<span>.</span>
              </a>

              <p>
                Front-End Developer passionate about
                creating clean and user-friendly web experiences.
              </p>
            </div>

            <div className="footer-nav">
              <h4>Quick Links</h4>

              <a href="#">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#certificates">Certificates</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-social">
              <h4>Connect With Me</h4>

              <a href="mailto:mariamzahgar214@gmail.com">
                Email
              </a>

              <a
                href="https://github.com/mariamza2004"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mariam-zahgar-b461b236b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

          </div>

          <div className="footer-bottom">
            <p>
              © 2026 MARIAM. All Rights Reserved.
            </p>

            <a href="#">Back to Top ↑</a>
          </div>

        </div>
      </footer>
      </main>

    </div>
  )
}

export default App
