"use client";

import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Card } from "./ui/card";
import { motion } from "motion/react";
import {
  Database,
  Globe,
  Code,
  Wrench,
  BarChart,
  FileCode,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "PHP", level: 70 },
      { name: "Visual Basic 6", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: [
      { name: "React", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "WordPress", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    icon: Database,
    title: "Database & Data Management",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MS Access", level: 90 },
      { name: "Data Normalization", level: 85 },
      { name: "Database Design", level: 80 },
      { name: "Data Migration", level: 75 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "WooCommerce", level: 85 },
      { name: "MS Office Suite", level: 95 },
      { name: "Figma", level: 70 },
    ],
  },
];

const technicalTags = [
  "Data Analysis",
  "API Integration",
  "Responsive Design",
  "Database Optimization",
  "E-commerce",
  "Legacy System Migration",
  "Report Generation",
  "Version Control",
  "Agile Methodology",
  "Problem Solving",
  "Technical Documentation",
  "UI/UX Principles",
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

          {/* Skill Categories with Progress */}
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
                  <Card className="p-6 sm:p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">{category.title}</h3>
                    </div>
                    <div className="space-y-4 sm:space-y-5">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm sm:text-base font-medium">{skill.name}</span>
                            <span className="text-xs sm:text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
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
            className="bg-card rounded-xl p-6 sm:p-8 lg:p-10 border border-border"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <BarChart className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Additional Competencies</h3>
            </div>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {technicalTags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm px-4 py-2">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
