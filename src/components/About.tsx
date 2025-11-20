"use client";

import React from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GraduationCap, Target, Heart } from "lucide-react";
import { motion } from "motion/react";



interface AboutProps {
  onViewResume: () => void;
}

export function About({ onViewResume }: AboutProps) {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 xl:py-40 bg-secondary/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              A passionate technologist bridging business and IT
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-2xl" />
                <ImageWithFallback
                  src="/eddy-profile.jpg"
                  alt="Eddy Nibyose"
                  className="relative rounded-full w-full h-full object-cover shadow-xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                I'm a final-year Business & Information Technology student at
                the University of Rwanda with a passion for building efficient,
                data-driven solutions that solve real-world problems.
              </p>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex gap-4 sm:gap-5">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg font-semibold">Education</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Business & Information Technology, University of Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-5">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Target className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg font-semibold">Career Goals</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Seeking data management internships and junior web
                      developer roles to apply my technical skills
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-5">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg font-semibold">Values</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Clean code, continuous learning, and creating meaningful
                      impact through technology
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <Button size="lg" onClick={onViewResume} className="hover:scale-105 hover:shadow-lg transition-all duration-300 min-h-[44px]">
                  View Full Resume
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
