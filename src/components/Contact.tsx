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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xblkwewg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please check your connection.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 lg:py-36 xl:py-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute w-[600px] h-[600px] bg-primary/40 rounded-full blur-[150px] -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500/40 rounded-full blur-[150px] bottom-0 right-0" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Looking for internship opportunities or interested in collaborating?
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold">Let's Connect</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  I'm currently seeking data management internships and junior
                  web developer positions. Feel free to reach out through any of
                  the following channels:
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {/* Email */}
                <Card className="p-4 sm:p-5 flex items-center gap-4 sm:gap-5 bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:nieddy03@gmail.com"
                      className="hover:text-primary transition-colors text-sm sm:text-base break-words"
                    >
                      nieddy03@gmail.com
                    </a>
                  </div>
                </Card>

                {/* Location */}
                <Card className="p-4 sm:p-5 flex items-center gap-4 sm:gap-5 bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-sm sm:text-base">Kigali, Rwanda</p>
                  </div>
                </Card>

                {/* LinkedIn */}
                <Card className="p-4 sm:p-5 flex items-center gap-4 sm:gap-5 bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/eddynibyose"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors text-sm sm:text-base break-words"
                    >
                      linkedin.com/in/eddynibyose
                    </a>
                  </div>
                </Card>

                {/* GitHub */}
                <Card className="p-4 sm:p-5 flex items-center gap-4 sm:gap-5 bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Github className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">GitHub</p>
                    <a
                      href="https://github.com/eddynibyose"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors text-sm sm:text-base break-words"
                    >
                      github.com/eddynibyose
                    </a>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 sm:p-8 lg:p-10 bg-slate-800/60 border border-slate-700 shadow-xl backdrop-blur">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 sm:py-12 text-center"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8 text-green-400" />
                    </div>
                    <h3 className="mb-2 text-lg sm:text-xl font-semibold">Message Sent!</h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-slate-900 border-slate-700 focus:ring-primary"
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
                        className="bg-slate-900 border-slate-700 focus:ring-primary"
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
                        className="bg-slate-900 border-slate-700 focus:ring-primary"
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
                        className="bg-slate-900 border-slate-700 focus:ring-primary"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-pink-500 hover:opacity-90 transition-all duration-300"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
