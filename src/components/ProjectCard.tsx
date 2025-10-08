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
      <Card className="overflow-hidden cursor-pointer group border border-border hover:shadow-xl transition-all duration-300">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-2 p-4">
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

        <div className="p-6 space-y-4" onClick={onClick}>
          <div>
            <h3 className="mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {project.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
