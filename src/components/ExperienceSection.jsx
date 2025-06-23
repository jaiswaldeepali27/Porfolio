import React from 'react'
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Promodome Digital LLP",
    duration: "Sep 2022 - April 2025",
    description:
      "Developed scalable full-stack applications using React.js, Express.js, and MongoDB. Built RESTful APIs, ensured seamless frontend-backend integration, and led WordPress projects with a focus on performance and maintainability.",
  },
  {
    role: "Web Developer Intern",
    company: "Promodome Digital LLP",
    duration: "Jun 2022 - Aug 2022",
    description:
      "Contributed to building responsive web applications using React.js and Express.js, integrated basic MongoDB operations, collaborated with design teams, and supported WordPress project implementation.",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    duration: "Aug 2021 - May 2022",
    description:
      "Developed custom eCommerce and portfolio websites across industries, optimized WooCommerce for speed and security (PageSpeed >90%), deployed on DigitalOcean with OpenLiteSpeed, and provided ongoing SEO and performance maintenance.",
  },
];


const fadeInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const ExperienceCard = ({ role, company, duration, description, index }) => (
  <motion.div
    className="relative pl-10 border-l-4 border-primary"
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.6 }}
    variants={fadeInVariants}
  >
    <div className="absolute left-[-12px] top-2 w-5 h-5 gradient-border border-4 border-primary rounded-full"></div>
    <div className="gradient-border p-6 my-6 rounded-xl shadow-md hover:shadow-lg transition text-left">
      <h3 className="text-xl font-semibold text-primary">{role}</h3>
      <p className="text-sm text-gray-500">{company}</p>
      <p className="text-sm text-gray-400 mb-2">{duration}</p>
      <p className="text-white">{description}</p>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          My <span className="text-primary"> Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto relative">
          {experienceData.map((item, idx) => (
            <ExperienceCard key={idx} index={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection