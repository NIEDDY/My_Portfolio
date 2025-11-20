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
    <section id="resume" className="py-20 sm:py-28 lg:py-36 xl:py-40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Experience & Education
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              My journey in technology and continuous learning
            </p>
            <Button size="lg" onClick={handleViewResume} className="hover:scale-105 hover:shadow-lg transition-all duration-300 min-h-[44px]">
              <FileText className="mr-2 h-4 w-4" />
              View Full Resume (PDF)
            </Button>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Professional Experience</h3>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 sm:p-8 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                      <div className="flex-1">
                        <h3 className="mb-1.5 sm:mb-2 text-lg sm:text-xl font-semibold">{exp.title}</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          {exp.organization}
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-2.5 sm:space-y-3">
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
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-6 sm:p-8 border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                      <div className="flex-1">
                        <h3 className="mb-1.5 sm:mb-2 text-lg sm:text-xl font-semibold">{edu.degree}</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground font-medium whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{edu.description}</p>
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
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Key Achievements</h3>
            </div>

            <Card className="p-6 sm:p-8 lg:p-10 bg-secondary/50">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                  >
                    <span className="text-primary mt-0.5 text-lg sm:text-xl font-bold">✓</span>
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
