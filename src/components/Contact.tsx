"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Mail, MapPin, Phone, CheckCircle, Send } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
        body: JSON.stringify({
          name: `${formState.firstName} ${formState.lastName}`,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
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
      className="relative py-20 sm:py-28 lg:py-36 xl:py-40 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, 30, 0], 
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, -30, 0], 
          x: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 lg:mb-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Looking for internship opportunities or interested in collaborating? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <Card className="overflow-hidden shadow-2xl dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border border-border/80 dark:border-border/30 bg-card">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Left Column - Contact Information (Dark Gradient) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800')] bg-cover bg-center blur-md" />
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
              />
              
              <div className="relative z-10 space-y-8 sm:space-y-10">
                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 sm:gap-5 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border-2 border-white/40 bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-accent/60 group-hover:bg-accent/25 group-hover:shadow-lg group-hover:shadow-accent/20"
                    >
                      <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-white group-hover:text-accent transition-colors" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wider mb-2">Location</h3>
                      <p className="text-lg sm:text-xl lg:text-2xl text-accent font-semibold leading-relaxed">
                        Kigali, Rwanda
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 sm:gap-5 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border-2 border-white/40 bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-accent/60 group-hover:bg-accent/25 group-hover:shadow-lg group-hover:shadow-accent/20"
                    >
                      <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white group-hover:text-accent transition-colors" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wider mb-2">Contact</h3>
                      <motion.a
                        href="tel:+250787695070"
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="inline-block text-lg sm:text-xl lg:text-2xl text-accent hover:text-accent/80 transition-colors font-semibold hover:underline underline-offset-4"
                      >
                        +250 787 695 070
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 sm:gap-5 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border-2 border-white/40 bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-accent/60 group-hover:bg-accent/25 group-hover:shadow-lg group-hover:shadow-accent/20"
                    >
                      <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-white group-hover:text-accent transition-colors" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wider mb-2">Email</h3>
                      <motion.a
                        href="mailto:nieddy03@gmail.com"
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="inline-block text-lg sm:text-xl lg:text-2xl text-accent hover:text-accent/80 transition-colors font-semibold hover:underline underline-offset-4 break-all"
                      >
                        nieddy03@gmail.com
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form (Light Background) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-white dark:bg-gray-50 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center justify-center py-12 text-center relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="h-10 w-10 text-accent" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-900"
                  >
                    Message Sent!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-base text-gray-600 dark:text-gray-600"
                  >
                    Thank you for reaching out. I'll get back to you soon.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative z-10"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-900 mb-8 sm:mb-10 text-center"
                  >
                    Send Us A Message
                  </motion.h2>
                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    {/* Name Fields - Side by Side */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Label htmlFor="firstName" className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-700 uppercase tracking-wide mb-3 block">
                        TELL US YOUR NAME *
                      </Label>
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formState.firstName}
                            onChange={handleChange}
                            placeholder="First name"
                            required
                            className="bg-white dark:bg-white border-gray-300 dark:border-gray-300 text-gray-900 dark:text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-accent/50"
                          />
                        </motion.div>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formState.lastName}
                            onChange={handleChange}
                            placeholder="Last name"
                            required
                            className="bg-white dark:bg-white border-gray-300 dark:border-gray-300 text-gray-900 dark:text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-accent/50"
                          />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Label htmlFor="email" className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-700 uppercase tracking-wide mb-3 block">
                        ENTER YOUR EMAIL *
                      </Label>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Eg. mugabo@gmail.com"
                          required
                          className="bg-white dark:bg-white border-gray-300 dark:border-gray-300 text-gray-900 dark:text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-accent/50"
                        />
                      </motion.div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <Label htmlFor="phone" className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-700 uppercase tracking-wide mb-3 block">
                        ENTER PHONE NUMBER
                      </Label>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="Eg. +1 250 780000"
                          className="bg-white dark:bg-white border-gray-300 dark:border-gray-300 text-gray-900 dark:text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-accent/50"
                        />
                      </motion.div>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <Label htmlFor="message" className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-700 uppercase tracking-wide mb-3 block">
                        MESSAGE *
                      </Label>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Write us a message"
                          rows={6}
                          required
                          className="bg-white dark:bg-white border-gray-300 dark:border-gray-300 text-gray-900 dark:text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-accent focus:border-accent resize-y transition-all duration-200 hover:border-accent/50"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-accent hover:bg-accent/90 text-white font-semibold uppercase tracking-wide py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          <span className="flex items-center justify-center gap-2">
                            Send Message
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                            >
                              <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                          </span>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </motion.div>
              )}
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
}
