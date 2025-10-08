"use client";

import { useState } from "react";
import { ProjectCard, type Project } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

const projects: Project[] = [
  {
    id: "1",
    title: "Inventory Management Dashboard",
    summary:
      "Legacy VB6 system with modern data migration plan, featuring data normalization and advanced reporting capabilities.",
    image:
      "https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlbnRvcnklMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc1OTgwMzc2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["VB6", "MS Access", "Data Migration"],
    category: "Data",
    problem:
      "Small businesses struggled with manual inventory tracking, leading to stock discrepancies and inefficient ordering processes.",
    solution:
      "Developed a comprehensive inventory management system using VB6 and MS Access with real-time tracking, automated alerts, and detailed reporting. Designed a migration path to modern web technologies.",
    role: "Lead Developer & Database Designer - Designed the database schema, implemented core features, and created data normalization strategies.",
    techStack: ["Visual Basic 6", "MS Access", "SQL", "Crystal Reports"],
    outcome:
      "Reduced inventory tracking errors by 85%, automated reordering processes, and created a scalable database structure ready for modernization.",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1OTgxMjQxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlbnRvcnklMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc1OTgwMzc2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: "2",
    title: "Creative Corner E-commerce",
    summary:
      "Modern e-commerce platform for local artisans to showcase and sell handmade products with integrated payment processing.",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1OTgyMDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["WordPress", "WooCommerce", "PHP"],
    category: "Web",
    demoUrl: "#",
    problem:
      "Local artisans lacked an accessible online platform to reach customers beyond their immediate geographic area.",
    solution:
      "Built a full-featured e-commerce website using WordPress and WooCommerce with custom themes, product categorization, shopping cart, and secure payment integration.",
    role: "Full-Stack Developer - Handled site architecture, custom theme development, payment gateway integration, and deployment.",
    techStack: ["WordPress", "WooCommerce", "PHP", "JavaScript", "CSS"],
    outcome:
      "Successfully launched platform serving 20+ local artisans, processed 100+ orders in first 3 months, and expanded market reach by 300%.",
    gallery: [
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1OTgyMDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTk3Nzg1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: "3",
    title: "CHUK Patient Information System",
    summary:
      "Prototype patient management system for hospital with secure data handling and appointment scheduling.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1OTgxMjQxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["JavaScript", "MySQL", "Data Security"],
    category: "Data",
    problem:
      "Hospital needed a centralized system to manage patient records, appointments, and medical history efficiently and securely.",
    solution:
      "Developed a prototype patient information system with secure authentication, patient record management, appointment scheduling, and data export features.",
    role: "Database Developer & Systems Analyst - Designed database schema with security best practices, implemented CRUD operations, and created reporting features.",
    techStack: ["JavaScript", "MySQL", "HTML/CSS", "Node.js"],
    outcome:
      "Prototype demonstrated 60% reduction in record retrieval time and provided foundation for full-scale system implementation.",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1OTgxMjQxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTk3Nzg1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: "4",
    title: "Portfolio Analytics Dashboard",
    summary:
      "Data visualization tool for tracking and analyzing personal project metrics and performance indicators.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1OTgxMjQxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Chart.js", "Data Viz"],
    category: "Tools",
    repoUrl: "#",
    problem:
      "Needed a centralized way to track project progress, time investments, and skill development across multiple initiatives.",
    solution:
      "Created an interactive dashboard using React and Chart.js to visualize project timelines, skill improvements, and productivity metrics.",
    role: "Front-End Developer - Designed UI/UX, implemented data visualization components, and integrated real-time updates.",
    techStack: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    outcome:
      "Improved project time estimation accuracy by 40% and enabled data-driven decisions for skill development priorities.",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1OTgxMjQxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
];

const categories = ["All", "Web", "Data", "Tools"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  return (
    <section id="projects" className="py-24 sm:py-40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mb-6">
            Projects
          </h2>
          <p className="text-center text-muted-foreground text-lg sm:text-xl mb-16 max-w-2xl mx-auto">
            A showcase of my technical work and problem-solving approach
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-5 py-2.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
                {category === "All" && ` (${projects.length})`}
                {category !== "All" &&
                  ` (${projects.filter((p) => p.category === category).length})`}
              </Badge>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetail
        project={selectedProject}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </section>
  );
}
