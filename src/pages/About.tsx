import "./pages.css";

function About() {
  const skills = [
    "Python",
    "C#",
    "TypeScript",
    "React",
    "JavaScript",
    "SQL",
    "Machine Learning",
    "Git & GitHub"
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <span className="about-subtitle">GET TO KNOW ME</span>
        <h1 className="about-title">About Me</h1>

        <div className="about-bio">
          <p>
            Hello! My name is Syeda Anamta Aziz. I am a Software Engineering
            Technology - Artificial Intelligence student at Centennial College.
          </p>
          <p>
            I am interested in software development, artificial intelligence,
            machine learning, and web development. I enjoy building projects
            that combine technology with practical solutions.
          </p>
          <p>
            I have experience working with Python, C#, Java, JavaScript, React,
            and other software development tools.
          </p>
          <p>
            My goal is to continue developing my technical skills and gain
            professional experience through software engineering and AI-focused
            projects.
          </p>
        </div>

        <div className="button-container">
          <a 
            href="/Resume.docx" 
            download="Syeda_Anamta_Aziz_Resume.docx" 
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>

        <div className="skills-section">
          <h2 className="skills-title">My Skills</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;