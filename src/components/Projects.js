import React from "react";
import "../styles/Projects.css";

function Projects() {

    const projectData = [
        {
            title: "Movie Search App",
            description: "SCreated a  movie search application using React, Node.js, and MongoDB with TMDb/OMDb APIs, featuring search, pagination, and theme switching",
            tech: ["React", "TMDB API"],
            githubUrl: "https://github.com/Anchal121/Movie-Explorer"
        },
        {
            title: "Personalized Diet Recommendation System",
            description: "Built a machine learning system using Scikit-learn and XGBoost to provide personalized diet and exercise recommendations based on health data.",
            tech: ["React", "Django"],
            githubUrl: "https://github.com/Anchal121/Diet-Recommendation"
        },
        {
            title: "Social Network Graph Analysis System",
            description: "Developed a web-based system to analyze and visualize social networks using graph algorithms like BFS, DFS, Dijkstra, Prim, and Kruskal. Implemented features such as shortest path detection and friend recommendations..",
            tech: ["HTML", "CSS", "JS", "Flask", "SQLAlchemy"],
            githubUrl: "https://github.com/Anchal121/Social-Network-Graph"
        },
    ];

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>

            <div className="project-grid">
                {projectData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <div className="tech-stack">
                            {project.tech.map((techItem, i) => (
                                <span key={i}>{techItem}</span>
                            ))}
                        </div>

                        <div className="project-buttons">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button>GitHub</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
