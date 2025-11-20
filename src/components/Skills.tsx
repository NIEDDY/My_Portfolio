"use client";

import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { motion } from "motion/react";
import {
  Database,
  Globe,
  Code,
  Wrench,
  BarChart,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "HTML/CSS",
      "C++",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: [
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    icon: Database,
    title: "Database Systems",
    skills: [
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Database Design",
      "Data Management",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      "Git/GitHub",
      "VS Code",
      "Figma",
      "Node.js",
      "MongoDB",
    ],
  },
];

const technicalTags = [
  "Data collection & recording",
  "Team Coordination",
  "Teamwork",
  "Research",
  "Software development",
  "Machine learning",
  "UI/UX Design",
  "Problem Solving",
  "API Integration",
  "Responsive Design",
  "Version Control",
  "Agile Methodology",
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-36 xl:py-40 bg-secondary/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Technical proficiencies and tools I work with
            </p>
          </div>

          {/* Skill Categories - Without Progress Bars */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 sm:p-8 h-full hover:shadow-lg dark:hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/15 dark:group-hover:bg-primary/25 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors duration-200">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="secondary" className="text-sm px-4 py-2 font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Technical Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-6 sm:p-8 lg:p-10 border border-border shadow-sm dark:shadow-md hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <BarChart className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Additional Competencies</h3>
            </div>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {technicalTags.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="secondary" className="text-sm px-4 py-2 font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
