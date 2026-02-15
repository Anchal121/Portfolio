import React, { useState } from "react";
import "../styles/Skills.css";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiCplusplus, SiMysql } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaJava } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

function Skills() {
    const skills = [
        {
            name: "React",
            icon: <FaReact size={80} color="#61DBFB" />,
            description: "Building modern UI with reusable components."
        },
        {
            name: "JavaScript",
            icon: <FaJs size={80} color="#f7df1e" />,
            description: "Writing clean and efficient ES6+ code."
        },
        {
            name: "HTML",
            icon: <FaHtml5 size={80} color="#e34c26" />,
            description: "Creating structured and semantic web pages."
        },
        {
            name: "CSS",
            icon: <FaCss3Alt size={80} color="#264de4" />,
            description: "Designing responsive and modern layouts."
        },
        {
            name: "C++",
            icon: <SiCplusplus size={80} color="#00599C" />,
            description: "Strong foundation in OOP concepts."
        },
        {
            name: "MySQL",
            icon: <SiMysql size={80} color="#00758f" />,
            description: "Managing relational databases."
        },
        {
            name: "Machine Learning",
            icon: <SiTensorflow size={80} color="#FF6F00" />,
            description: "Building predictive models and ML algorithms."
        },
        {
            name: "Java",
            icon: <FaJava size={80} color="#f89820" />,
            description: "Object-oriented programming and application development."
        }



    ];

    const [[index, direction], setIndex] = useState([0, 0]);

    const paginate = (newDirection) => {
        setIndex([
            (index + newDirection + skills.length) % skills.length,
            newDirection
        ]);
    };

    return (
        <section id="skills" className="skills-section">
            <h2>My Skills</h2>

            <div className="skill-slider">

                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={index}
                        className="skill-card"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, { offset, velocity }) => {
                            if (offset.x > 100) paginate(-1);
                            else if (offset.x < -100) paginate(1);
                        }}
                        initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {skills[index].icon}
                        <h3>{skills[index].name}</h3>
                        <p>{skills[index].description}</p>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}

export default Skills;
