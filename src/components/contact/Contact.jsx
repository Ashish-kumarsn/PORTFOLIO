import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { BiSend } from "react-icons/bi";

function Contact() {
  const formRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_brck1ba",          // ✅ Your Service ID
        "template_uq20n6q",         // ✅ Your Template ID
        formRef.current,
        "gsdq_W45Ftt8pIkQ5"         // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Failed to send the message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="mx-auto" />
            <h4>Email</h4>
            <h5>kaumatchobey@gmail.com</h5>
            <a href="mailto:kaumatchobey@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="mx-auto" />
            <h4>LinkedIn</h4>
            <h5>Ashish Kumar</h5>
            <a
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect via LinkedIn
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="mx-auto" />
            <h4>WhatsApp</h4>
            <h5>+91 6200859744</h5>
            <a
              href="https://wa.me/+916200859744"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ display: "flex", alignItems: "center", gap: ".3rem" }}
          >
            Send Message <BiSend />
          </button>
          {successMessage && (
            <p className="message-feedback">{successMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
