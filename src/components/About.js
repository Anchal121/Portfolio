import React from "react";
import "../styles/About.css";

function About() {
    return (
        <section id="about" className="about">
            <h2 className="section-title">About Me</h2>

            <div className="about-content">
                <p>
                    I am a motivated and passionate MCA student with a strong interest in
                    software development and modern web technologies. Throughout my
                    academic journey, I have built a solid foundation in programming
                    languages such as Java, JavaScript, and Python.
                </p>

                <p>
                    I have hands-on experience in frontend development using HTML, CSS,
                    and React. I enjoy building responsive and user-friendly web
                    applications that solve real-world problems.
                </p>

                <p>
                    My goal is to start my career as a software developer where I can
                    continuously enhance my technical skills, contribute to innovative
                    projects, and grow professionally in a dynamic environment.
                </p>

                <div className="about-highlights">
                    <div className="highlight-box">
                        <h3>3+</h3>
                        <span>Projects Completed</span>
                    </div>

                    <div className="highlight-box">
                        <h3>MCA</h3>
                        <span>Postgraduate Student</span>
                    </div>

                    <div className="highlight-box">
                        <h3>Software</h3>
                        <span>Engineer</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
