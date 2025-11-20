"use client";

import { Button } from "./ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface HeroProps {
  onViewProjects: () => void;
  onViewResume: () => void;
}

export function Hero({ onViewProjects, onViewResume }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-primary/30 rounded-full blur-2xl"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute top-1/2 right-20 w-24 h-24 bg-accent/30 rounded-2xl blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-20 h-20 bg-primary/20 rounded-full blur-2xl"
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* Left Column - Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
            }}
            className="space-y-6 sm:space-y-7 lg:space-y-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="space-y-3 sm:space-y-4">
              <p className="text-primary font-medium text-base sm:text-lg lg:text-xl">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Eddy Nibyose
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-600 dark:text-gray-300 leading-tight">
                Data Management & Web Developer
              </h2>
            </motion.div>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed"
            >
              I build data-driven tools and clean web experiences. Seeking data management internship & junior dev roles.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-2 sm:pt-4"
            >
              <Button
                size="lg"
                onClick={onViewProjects}
                className="hover:scale-105 hover:shadow-lg transition-all duration-300 min-h-[44px]"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={onViewResume}
                className="hover:scale-105 hover:shadow-lg transition-all duration-300 min-h-[44px]"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5NzYxOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional workspace"
                className="w-full h-auto object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                animate={{ opacity: [0.6, 0.9, 0.6] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
