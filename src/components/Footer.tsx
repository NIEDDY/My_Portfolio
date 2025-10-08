"use client";

import { Mail, Github, Linkedin, Heart } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:eddy.nibyose@example.com",
    label: "Email",
  },
  {
    icon: Github,
    href: "https://github.com/eddynibyose",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/eddynibyose",
    label: "LinkedIn",
  },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">Eddy Nibyose</h3>
            <p className="text-muted-foreground mb-4">
              Data Management & Web Developer building efficient, data-driven
              solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Kigali, Rwanda</li>
              <li>
                <a
                  href="mailto:eddy.nibyose@example.com"
                  className="hover:text-foreground transition-colors"
                >
                  eddy.nibyose@example.com
                </a>
              </li>
              <li className="pt-2">
                <span className="text-sm">Open to internship opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eddy Nibyose. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-accent fill-accent" />{" "}
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
