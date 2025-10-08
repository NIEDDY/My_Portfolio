"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "./ProjectCard";
import { ScrollArea } from "./ui/scroll-area";

interface ProjectDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetail({ project, isOpen, onClose }: ProjectDetailProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="relative">
            {/* Hero Image */}
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-white mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Actions */}
              <div className="flex gap-3">
                {project.demoUrl && (
                  <Button onClick={() => window.open(project.demoUrl, "_blank")}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                )}
                {project.repoUrl && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.repoUrl, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                )}
              </div>

              {/* Problem */}
              <div>
                <h3 className="mb-3 text-primary">Problem / Objective</h3>
                <p className="text-muted-foreground">{project.problem}</p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="mb-3 text-primary">Solution</h3>
                <p className="text-muted-foreground">{project.solution}</p>
              </div>

              {/* Role */}
              <div>
                <h3 className="mb-3 text-primary">My Role</h3>
                <p className="text-muted-foreground">{project.role}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="mb-3 text-primary">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div>
                <h3 className="mb-3 text-accent">Outcome / Results</h3>
                <p className="text-muted-foreground">{project.outcome}</p>
              </div>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <h3 className="mb-4 text-primary">Project Gallery</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden border border-border"
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Back Button */}
              <div className="pt-4 border-t border-border">
                <Button variant="outline" onClick={onClose}>
                  Back to Projects
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
