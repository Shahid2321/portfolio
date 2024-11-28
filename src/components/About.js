import React from "react";
import styles from "./Style.module.css";
import aboutImg from "../assets/2.jpg"

const About = () => {
  return (
    <section
     id="about" 
     className={styles.about}
     style={{
        backgroundImage: `url(${aboutImg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat"
      }}
     >
      <h2>About Me</h2>
      <p>
        •	Enthusiastic React developer with 1 Years of professional work experience in efficient Web Application design,
        development, and maintenance.<br />
        •	Experience in all phases of the Software Development Life Cycle (SDLC) from requirement gathering,
        analysis, design, development, documentation, testing, implementation, and maintenance of various Web Applications.<br />
        •	Experience in developing web Applications using React, JavaScript, HTML, CSS, Redux.<br />
        •	Proficient in integrating Web API into Web applications.<br />
        •	Working experience with Git and GitHub to manage code repositories and track project progress.<br />
        •	Experience in regular client communication to discuss the project’s technical requirements,
        further development opportunities, and task allocation.<br />
        •	Collaborated effectively with team members to ensure timely project delivery.<br />

        •	Proficient in integrating Web API into Web applications.<br />
        •	Working experience with Git and GitHub to manage code repositories and track project progress.<br />
        •	Experience in regular client communication to discuss the project’s technical requirements,
        further development opportunities, and task allocation.<br />
        •	Collaborated effectively with team members to ensure timely project delivery.<br />


        I am a self-taught developer with a passion for building responsive and
        user-friendly applications. My expertise lies in React, JavaScript,
        HTML and CSS.<br />

        I am a self-taught developer with a passion for building responsive and
        user-friendly applications. My expertise lies in React, JavaScript,
        HTML and CSS.<br />

        I am a self-taught developer with a passion for building responsive and
        user-friendly applications. My expertise lies in React, JavaScript,
        HTML and CSS.<br />

        I am a self-taught developer with a passion for building responsive and
        user-friendly applications. My expertise lies in React, JavaScript,
        HTML and CSS.<br />

        I am a self-taught developer with a passion for building responsive and
        user-friendly applications. My expertise lies in React, JavaScript,
        HTML and CSS.

      </p>
    </section>
  );
};

export default About;
