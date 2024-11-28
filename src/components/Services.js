// // src/components/Services.js
// import React from "react";
// import styles from "./Style.module.css"; // Importing the module CSS file

// const Services = () => {
//   return (
//     <section id="services" className={styles.servicesSection}>
//       <h2 className={styles.servicesTitle}>My Services</h2>
//       <div className={styles.servicesCards}>
//         {["Web Development", "UI/UX Design", "API Integration"].map((service, idx) => (
//           <div className={styles.servicesCard} key={idx}>
//             <h3 className={styles.cardTitle}>{service}</h3>
//             <p className={styles.cardDescription}>
//               High-quality {service.toLowerCase()} services tailored to your needs.
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;



// src/components/Services.js
import React from "react";
import styles from "./Style.module.css";
import serviceImg from "../assets/3.jpg"

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building modern and responsive websites tailored to your business needs.",
    },
    {
      title: "UI/UX Design",
      description: "Crafting user-friendly and aesthetically pleasing interface designs.",
    },
    {
      title: "API Integration",
      description: "Seamlessly integrating APIs to enhance functionality and data flow.",
    },
    {
      title: "SEO Optimization",
      description: "Improving your website's visibility on search engines for better traffic.",
    },
    {
      title: "Content Creation",
      description: "Creating engaging content that resonates with your target audience.",
    },
    {
      title: "Cloud Deployment",
      description: "Deploying scalable and secure cloud solutions for your applications.",
    },
  ];

  return (
    <section
     id="services" 
     className={styles.servicesSection}
     style={{
        backgroundImage: `url(${serviceImg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat"
      }}
     >
      <h2 className={styles.servicesTitle}>My Services</h2>
      <div className={styles.servicesCards}>
        {services.map((service, idx) => (
          <div className={styles.servicesCard} key={idx}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
