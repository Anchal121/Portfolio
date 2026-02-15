import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import profile from "../assets/images/profile.png";
import resume from "../assets/resume.pdf";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">
                <h3 className="greeting">Hello, It's Me</h3>

                <h1 className="title">
                    Anchal <br /> Thayat
                </h1>


                <p>
                    Building digital experiences that merge creativity with technology.
                </p>

                <a href={resume} download>
                    <button className="btn">Download CV</button>
                </a>
            </div>

            <motion.div
                className="hero-img"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
            >
                <img src={profile} alt="profile" />
            </motion.div>

        </section>
    );
}

export default Hero;
