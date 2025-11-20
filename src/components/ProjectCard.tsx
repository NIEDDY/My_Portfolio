"use client";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

export interface Project {
  id: string;
  title: string;
  summary: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl?: string;
  repoUrl?: string;
  problem: string;
  solution: string;
  role: string;
  techStack: string[];
  outcome: string;
  gallery: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden cursor-pointer group border hover:border-primary/20 dark:hover:border-primary/30 hover:shadow-xl dark:hover:shadow-2xl hover:shadow-primary/5 dark:hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-video overflow-hidden bg-muted rounded-t-xl">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-black/80 dark:via-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-2 p-4">
            {project.demoUrl && (
              <Button
                size="sm"
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.demoUrl, "_blank");
                }}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            )}
            {project.repoUrl && (
              <Button
                size="sm"
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.repoUrl, "_blank");
                }}
              >
                <Github className="h-4 w-4 mr-2" />
                Repo
              </Button>
            )}
          </div>
        </div>

        <div className="p-6 space-y-4 bg-card dark:bg-card/80 backdrop-blur-sm" onClick={onClick}>
          <div>
            <h3 className="mb-2 font-semibold text-lg group-hover:text-primary transition-colors duration-200">{project.title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-medium">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
