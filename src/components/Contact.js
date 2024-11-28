import React from "react";
import styles from "./Style.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" className={styles.input} />
        <input type="email" placeholder="Your Email" className={styles.input} />
        <textarea placeholder="Your Message" className={styles.textarea}></textarea>
        <button className={styles.button}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
