"use client";

import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GraduationCap, Target, Heart } from "lucide-react";
import { motion } from "motion/react";

interface AboutProps {
  onViewResume: () => void;
}

export function About({ onViewResume }: AboutProps) {
  return (
    <section id="about" className="py-24 sm:py-40 bg-secondary/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mb-6">
            About Me
          </h2>
          <p className="text-center text-muted-foreground text-lg sm:text-xl mb-16 max-w-2xl mx-auto">
            A passionate technologist bridging business and IT
          </p>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-2xl" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTk4MDU0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Eddy Nibyose"
                  className="relative rounded-full w-64 h-64 object-cover shadow-xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                I'm a final-year Business & Information Technology student at
                the University of Rwanda with a passion for building efficient,
                data-driven solutions that solve real-world problems.
              </p>

              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg">Education</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      Business & Information Technology, University of Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Target className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg">Career Goals</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      Seeking data management internships and junior web
                      developer roles to apply my technical skills
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg">Values</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      Clean code, continuous learning, and creating meaningful
                      impact through technology
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" onClick={onViewResume} className="mt-8">
                View Full Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
