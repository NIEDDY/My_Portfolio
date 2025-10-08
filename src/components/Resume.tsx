"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { FileText, Briefcase, GraduationCap, Award } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    title: "Data Management & Web Development Projects",
    organization: "Freelance / Academic",
    period: "2023 - Present",
    description:
      "Led development of multiple data-driven applications including inventory management systems, e-commerce platforms, and patient information systems. Specialized in database design, legacy system migration, and modern web technologies.",
    highlights: [
      "Built 4+ full-stack applications with focus on data integrity",
      "Implemented data migration strategies for legacy VB6 systems",
      "Achieved 85% reduction in data tracking errors through normalized database design",
    ],
  },
  {
    title: "E-commerce Platform Developer",
    organization: "Creative Corner Project",
    period: "2024",
    description:
      "Developed and launched a complete e-commerce solution for local artisans using WordPress and WooCommerce, including custom themes and payment integration.",
    highlights: [
      "Successfully onboarded 20+ vendors in first quarter",
      "Processed 100+ transactions with zero payment errors",
      "Expanded market reach by 300% through online presence",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Business & Information Technology",
    institution: "University of Rwanda",
    period: "2021 - 2025 (Expected)",
    description:
      "Final year student with focus on database management, web development, and business systems integration. Strong academic performance with hands-on project experience.",
  },
];

const achievements = [
  "Developed data normalization strategies reducing redundancy by 70%",
  "Built responsive web applications serving 500+ active users",
  "Completed 4 major projects combining business analysis and technical development",
];

export function Resume() {
  const handleViewResume = () => {
    alert(
      "Resume PDF would open here. Please upload your PDF resume and link it to this function."
    );
  };

  return (
    <section id="resume" className="py-24 sm:py-40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Experience & Education
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              My journey in technology and continuous learning
            </p>
            <Button size="lg" onClick={handleViewResume}>
              <FileText className="mr-2 h-4 w-4" />
              View Full Resume (PDF)
            </Button>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="mb-2 text-xl">{exp.title}</h3>
                        <p className="text-muted-foreground text-base">
                          {exp.organization}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-2 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-base text-muted-foreground"
                        >
                          <span className="text-accent mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl sm:text-3xl">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-8 border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="mb-2 text-xl">{edu.degree}</h3>
                        <p className="text-muted-foreground text-base">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-2 sm:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl">Key Achievements</h3>
            </div>

            <Card className="p-8 sm:p-10 bg-secondary/50">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-base"
                  >
                    <span className="text-primary mt-1 text-xl">✓</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
