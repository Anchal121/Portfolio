import React from "react";
import "../styles/Contact.css";

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>

            <form className="contact-form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
