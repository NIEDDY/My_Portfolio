"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 sm:py-40 bg-secondary/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mb-6">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground text-lg sm:text-xl mb-16 max-w-2xl mx-auto">
            Looking for internship opportunities or interested in collaborating?
            I'd love to hear from you!
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 text-2xl">Let's Connect</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  I'm currently seeking data management internships and junior
                  web developer positions. Feel free to reach out through any of
                  the following channels:
                </p>
              </div>

              <div className="space-y-5">
                <Card className="p-5 flex items-center gap-5 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:eddy.nibyose@example.com"
                      className="hover:text-primary transition-colors text-base"
                    >
                      eddy.nibyose@example.com
                    </a>
                  </div>
                </Card>

                <Card className="p-5 flex items-center gap-5 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-base">Kigali, Rwanda</p>
                  </div>
                </Card>

                <Card className="p-5 flex items-center gap-5 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/eddynibyose"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors text-base"
                    >
                      linkedin.com/in/eddynibyose
                    </a>
                  </div>
                </Card>

                <Card className="p-5 flex items-center gap-5 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Github className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                    <a
                      href="https://github.com/eddynibyose"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors text-base"
                    >
                      github.com/eddynibyose
                    </a>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 sm:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me more..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
