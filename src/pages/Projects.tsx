import React from "react";

interface Project {
  title: string;
  image: string;
  description: string;
  role: string;
  outcome: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "AI-Assisted Publishing Pipeline",
    image: "/images/project1.jpg",
    description:
      "An AI-assisted pipeline for organizing and transforming archived blog content into structured published works.",
    role: "AI Developer",
    outcome:
      "Created a structured workflow for organizing and analyzing archived content.",
    technologies: [
      "Python",
      "Flask",
      "JavaScript",
      "TypeScript",
      "Machine Learning",
      "RAG",
      "MongoDB",
      "Data Analysis"
    ]
  },
  {
    title: "ML-Based Firewall",
    image: "/images/project2.jpg",
    description:
      "A machine learning system designed to detect suspicious network traffic.",
    role: "ML Developer",
    outcome:
      "Developed a system for identifying potentially suspicious network activity.",
    technologies: [
      "Python",
      "SQL",
      "Flask",
      "JavaScript",
      "Machine Learning"
    ]
  }
];

function Projects() {
  return (
    <section className="projects-page">

      <div className="projects-header">
        <h1>My Projects</h1>
        <p>
          A collection of my academic and personal software engineering,
          artificial intelligence, and machine learning projects.
        </p>
      </div>

      <div className="projects-container">

        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <div className="project-image">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                />
              ) : (
                <div className="image-placeholder">
                  Project Image
                </div>
              )}
            </div>

            <div className="project-content">

              <h2>{project.title}</h2>

              <p className="project-description">
                {project.description}
              </p>

              <p>
                <strong>Role:</strong> {project.role}
              </p>

              <p>
                <strong>Outcome:</strong> {project.outcome}
              </p>

              <div className="technologies">
                {project.technologies.map((technology) => (
                  <span
                    className="technology"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;