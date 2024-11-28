import React from "react";
import styles from "./Style.module.css";
import backgroundImage from "../assets/1.jpg"


const Hero = () => {
  return (
    <section
      id="hero" className={styles.hero}
      style={{
        backgroundImage: `url(${backgroundImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat"
      }}
      >
      <div className={styles.content}>
        <h1>
          Hello, I'm <span>Shahid</span>
        </h1>
        <p>A passionate Frontend Developer creating modern web experiences.</p>
      </div>
      <img
        src="profile.jpg"
        alt="Hero"
        className={styles.image}
      />
    </section>
  );
};

export default Hero;
