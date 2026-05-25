import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 relative z-10 glass mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-xl font-bold text-gradient mb-2">Rohan.</p>
          <p className="text-muted text-sm">Designed & Developed by Rohan</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/rohan-326698300/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors interactive text-xl"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/terminalrohan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors interactive text-xl"
          >
            <FaGithub />
          </a>
          <a 
            href="mailto:terminalrohan@gmail.com" 
            className="text-muted hover:text-accent transition-colors interactive text-xl"
          >
            <FaEnvelope />
          </a>
        </div>
        
        <div className="text-muted text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
