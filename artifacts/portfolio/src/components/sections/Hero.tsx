import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import rohanPhoto from "../../assets/rohan-profile.jpg";

const titles = [
  "Frontend Developer",
  "React Developer",
  "Data Analysis Enthusiast",
  "Freelance Developer"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <p className="text-accent font-medium tracking-wider uppercase mb-4">Hello, I am</p>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              Rohan
            </h1>
            
            <div className="h-12 md:h-16 mb-6">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={titleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-4xl font-display font-semibold text-gradient"
                >
                  {titles[titleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>
            
            <p className="text-muted text-lg max-w-xl mb-10 leading-relaxed">
              Building scalable frontend experiences and solving real-world business problems through technology.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#projects" className="interactive">
                <Button className="bg-accent text-background hover:bg-accent/90 px-8 py-6 rounded-full text-base font-semibold transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                  View Projects
                </Button>
              </a>
              <a href="#contact" className="interactive">
                <Button variant="outline" className="border-border hover:bg-white/5 hover:text-accent px-8 py-6 rounded-full text-base font-semibold transition-all">
                  Contact Me
                </Button>
              </a>
              <a href="https://rohan126cv.tiiny.site" target="_blank" rel="noopener noreferrer" className="interactive">
                <Button variant="outline" className="border-border hover:bg-white/5 hover:text-accent px-6 py-6 rounded-full text-base font-semibold transition-all group">
                  <FaDownload className="mr-2 group-hover:text-accent transition-colors" /> Resume
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/rohan-326698300/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-accent hover:border-accent/50 transition-all interactive">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/terminalrohan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-accent hover:border-accent/50 transition-all interactive">
                <FaGithub className="text-xl" />
              </a>
              <a href="mailto:terminalrohan@gmail.com" className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-accent hover:border-accent/50 transition-all interactive">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-accent/30 border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-secondary/30"
              />
              
              {/* Avatar circle */}
              <div className="absolute inset-8 rounded-full border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.15)] overflow-hidden group">
                <img
                  src={rohanPhoto}
                  alt="Rohan"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-8 rounded-full bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
