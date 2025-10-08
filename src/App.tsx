"use client";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/ThemeProvider";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewResume = () => {
    scrollToSection("#resume");
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main>
          <Hero
            onViewProjects={() => scrollToSection("#projects")}
            onViewResume={handleViewResume}
          />
          
          <About onViewResume={() => scrollToSection("#resume")} />
          
          <Projects />
          
          <Skills />
          
          <Resume />
          
          <Contact />
        </main>
        
        <Footer />
        
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
