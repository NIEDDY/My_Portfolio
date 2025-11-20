"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { FileText, Briefcase, GraduationCap, User, Code, Award, Languages, Users } from "lucide-react";
import { motion } from "motion/react";

const professionalExperience = [
  {
    title: "Web developer intern",
    organization: "k-Lab",
    location: "Kigali, Rwanda",
    period: "Aug 2025 - Present",
    highlights: [
      "Developed an interactive and user-friendly front-end and backend of an e-commerce website using React Js, and Node.js with MongoDB to enhance online shopping experience",
    ],
  },
  {
    title: "UI/UX Designer intern",
    organization: "k-Lab",
    location: "Kigali, Rwanda",
    period: "Aug 2025 - Present",
    highlights: [
      "Worked with a team of four, to design and develop a Billboard Advertising. This is a web platform that connects billboard owners and companies using the React framework and Node.js to help companies find available billboards and get in contact with owners to negotiate an agreement.",
    ],
  },
];

const projects = [
  {
    title: "Smart Cooperative Hub",
    role: "UI Designer",
    period: "Oct 2025 - Sept 2025",
    description:
      "Designed and implemented responsive user interfaces using React, Tailwind CSS, and modern UI/UX principles. Collaborated with a multidisciplinary team to enhance user experience, improve navigation, and optimize platform performance.",
  },
  {
    title: "Creative Corner E-commerce Website",
    role: "Developer",
    period: "Aug 2025 - Present",
    description:
      "Developed an e-commerce Website by using the React framework and Node JS, which will support Creative Corner Ltd to sell, and advertise their product and services online.",
  },
  {
    title: "Portfolio Website",
    role: "Designer & Developer",
    period: "July 2025 - Aug 2025",
    description:
      "Designed my Personal portfolio website by using Figma and React Framework.",
  },
];

const extracurricular = [
  {
    title: "UNICEF Girls' Education Programme, Endline Evaluation",
    role: "Data Enumerator",
    period: "02nd - 26th March 2023",
    location: "Nyabihu, Kayonza, and Nyaruguru Districts",
    highlights: [
      "Worked as a Data Enumerator in Nyabihu, Kayonza, and Nyaruguru Districts",
    ],
  },
  {
    title: "Girl Effect",
    role: "Participant",
    period: "September 2022",
    highlights: [
      "Participated in data collection.",
      "Assisted in data translation and transcription.",
    ],
  },
];

const certifications = [
  {
    title: "Web Developer Certificate – kLab TechUp Skills Program",
    issuer: "kLab",
    status: "In Progress",
    period: "August 2025 - Present",
    description:
      "Training in modern full-stack development using React.js, Node.js, Typescript, and Tailwind CSS.",
  },
  {
    title: "Alx AI Career Essentials Program",
    issuer: "Alx",
    status: "Completed",
    period: "March 2024 - May 2024",
    description:
      "Completed an 8-week programme in AI Augmented Professional Development Skills in the digital age.",
  },
];

const skills = [
  "Programming (React, HTML, JavaScript, C++)",
  "Database systems (Postgres, SQL Server, MongoDB)",
  "Data collection & recording skills",
  "Dynamics and Team Coordination",
  "Teamwork",
  "Research",
  "Software development (web)",
  "Machine learning",
];

const additionalSkills = [
  "Tangerine application",
  "Kobo Collect application",
  "Research skills",
];

const languages = [
  { language: "English", proficiency: "Full Professional Proficiency" },
  { language: "French", proficiency: "Basic" },
  { language: "Kinyarwanda", proficiency: "Mother tongue, Full Professional Proficiency" },
];

const references = [
  {
    name: "Eng. Simukai Sibanda",
    title: "Operations Director | Primson Management Services",
    email: "simukai@primson.org",
  },
  {
    name: "Elisa DUSHIMIYIMANA",
    title: "",
    email: "elisadushimtech@gmail.com",
  },
  {
    name: "Dr. Jedidiah Mbabazi",
    title: "",
    email: "mbjedid02@gmail.com",
  },
];

export function Resume() {
  const handleViewResume = () => {
    alert(
      "Resume PDF would open here. Please upload your PDF resume and link it to this function."
    );
  };

  return (
    <section id="resume" className="py-20 sm:py-28 lg:py-36 xl:py-40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <Card className="p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
            <div className="text-center space-y-4 sm:space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
              >
                Eddy NIBYOSE
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-2 text-sm sm:text-base text-muted-foreground"
              >
                <p>Rwandan | KK 35 AVE, Kigali, Rwanda | +250787695070</p>
                <p>
                  <a
                    href="mailto:nieddy03@gmail.com"
                    className="text-primary hover:text-primary/80 hover:underline transition-colors"
                  >
                    nieddy03@gmail.com
                  </a>
                </p>
              </motion.div>
            </div>
          </Card>

          {/* Summary Section */}
          <Card className="p-6 sm:p-8 mb-8 sm:mb-12 border-l-4 border-l-primary">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 uppercase tracking-wide">Summary</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Aspiring Web Developer, with a strong background in Business and Information Technology, seeking opportunities to further develop my skills and knowledge in Web.
              </p>
            </motion.div>
          </Card>

          {/* Educational Background */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold uppercase tracking-wide">Educational Background</h2>
            </motion.div>

            <Card className="p-6 sm:p-8 border-l-4 border-l-accent hover:shadow-lg dark:hover:shadow-xl hover:shadow-accent/5 dark:hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-0.5 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/5 dark:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                  <div className="flex-1">
                    <h3 className="mb-1.5 sm:mb-2 text-lg sm:text-xl font-semibold group-hover:text-accent transition-colors duration-200">
                      BSc(Hons) Business Information Technology
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-medium">
                      University Of Rwanda – Huye, Rwanda
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground font-medium whitespace-nowrap">
                    May 2022 – Oct 2025
                  </span>
                </div>
                <div className="mt-4 sm:mt-6">
                  <p className="text-xs sm:text-sm font-semibold text-foreground mb-2">Relevant Coursework:</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Completed coursework in Programming, Database Management, Web Development, Systems Analysis, and Information Systems Security. Studied Business Management, Project Management, E-Commerce, Entrepreneurship, and Strategic Management. Gained practical experience through Data Analytics, Research Methods, and a final-year capstone project with an industrial internship.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Professional Work Experience */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold uppercase tracking-wide">Professional Work Experience</h2>
            </motion.div>

            <div className="space-y-6 sm:space-y-8">
              {professionalExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 sm:p-8 border-l-4 border-l-primary dark:border-l-primary/80 hover:shadow-lg dark:hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/5 dark:to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                        <div className="flex-1">
                          <h3 className="mb-1.5 sm:mb-2 text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                            {exp.title}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground font-medium">
                            {exp.organization} {exp.location && `– ${exp.location}`}
                          </p>
                        </div>
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2 sm:space-y-3">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                          >
                            <span className="text-accent mt-1 text-lg font-bold">•</span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Code className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold uppercase tracking-wide">Projects</h2>
            </motion.div>

            <div className="space-y-6 sm:space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 sm:p-8 border-l-4 border-l-primary dark:border-l-primary/80 hover:shadow-lg dark:hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/5 dark:to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                        <div className="flex-1">
                          <h3 className="mb-1.5 sm:mb-2 text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                            {project.title}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground font-medium">
                            {project.role}
                          </p>
                        </div>
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium whitespace-nowrap">
                          {project.period}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold uppercase tracking-wide">Extracurricular Activities</h2>
            </motion.div>

            <div className="space-y-6 sm:space-y-8">
              {extracurricular.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 sm:p-8 border-l-4 border-l-accent dark:border-l-accent/80 hover:shadow-lg dark:hover:shadow-xl hover:shadow-accent/5 dark:hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-0.5 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/5 dark:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                        <div className="flex-1">
                          <h3 className="mb-1.5 sm:mb-2 text-lg sm:text-xl font-semibold group-hover:text-accent transition-colors duration-200">
                            {activity.title}
                          </h3>
                          {activity.role && (
                            <p className="text-sm sm:text-base text-muted-foreground font-medium mb-1">
                              {activity.role}
                            </p>
                          )}
                          {activity.location && (
                            <p className="text-sm sm:text-base text-muted-foreground">
                              {activity.location}
                            </p>
                          )}
                        </div>
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium whitespace-nowrap">
                          {activity.period}
                        </span>
                      </div>
                      {activity.highlights && (
                        <ul className="space-y-2 sm:space-y-3 mt-4">
                          {activity.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                            >
                              <span className="text-accent mt-1 text-lg font-bold">●</span>
                              <span className="leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold uppercase tracking-wide">Certifications</h2>
            </motion.div>

            <div className="space-y-6 sm:space-y-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 sm:p-8 border-l-4 border-l-primary dark:border-l-primary/80 hover:shadow-lg dark:hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/5 dark:to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                        <div className="flex-1">
                          <h3 className="mb-1.5 sm:mb-2 text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                            {cert.title}
                          </h3>
                          {cert.issuer && (
                            <p className="text-sm sm:text-base text-muted-foreground font-medium mb-1">
                              {cert.issuer}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-xs sm:text-sm text-muted-foreground font-medium whitespace-nowrap">
                            {cert.period}
                          </span>
                          {cert.status && (
                            <span className={`text-xs font-semibold px-2 py-1 rounded ${
                              cert.status === "Completed" 
                                ? "bg-accent/10 text-accent" 
                                : "bg-primary/10 text-primary"
                            }`}>
                              {cert.status}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Code className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold uppercase tracking-wide">Skills</h2>
            </motion.div>

            <Card className="p-6 sm:p-8 lg:p-10 bg-secondary/50 dark:bg-secondary/30 hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300 border-2 border-border/50 dark:border-border/30">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                  >
                    <span className="text-primary mt-0.5 text-lg sm:text-xl font-bold">●</span>
                    <span className="leading-relaxed">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Additional Skills */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center flex-shrink-0">
                <User className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold uppercase tracking-wide">Additional Skills</h2>
            </motion.div>

            <Card className="p-6 sm:p-8 lg:p-10 bg-secondary/50 dark:bg-secondary/30 hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300 border-2 border-border/50 dark:border-border/30">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {additionalSkills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                  >
                    <span className="text-accent mt-0.5 text-lg sm:text-xl font-bold">●</span>
                    <span className="leading-relaxed">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Languages */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Languages className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold uppercase tracking-wide">Languages</h2>
            </motion.div>

            <Card className="p-6 sm:p-8 lg:p-10 bg-secondary/50 dark:bg-secondary/30 hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300 border-2 border-border/50 dark:border-border/30">
              <ul className="space-y-4 sm:space-y-5">
                {languages.map((lang, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start justify-between gap-4"
                  >
                    <span className="text-sm sm:text-base font-semibold text-foreground">{lang.language}:</span>
                    <span className="text-sm sm:text-base text-muted-foreground text-right">{lang.proficiency}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </div>

          {/* References */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <User className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold uppercase tracking-wide">References</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {references.map((ref, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 sm:p-8 h-full hover:shadow-lg dark:hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 group">
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors">
                        {ref.name}
                      </h3>
                      {ref.title && (
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {ref.title}
                        </p>
                      )}
                      <a
                        href={`mailto:${ref.email}`}
                        className="text-xs sm:text-sm text-primary hover:text-primary/80 hover:underline transition-colors break-words block"
                      >
                        {ref.email}
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12 sm:mt-16"
          >
            <Button size="lg" onClick={handleViewResume} className="hover:scale-105 hover:shadow-lg transition-all duration-300 min-h-[44px]">
              <FileText className="mr-2 h-4 w-4" />
              View Full Resume (PDF)
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
