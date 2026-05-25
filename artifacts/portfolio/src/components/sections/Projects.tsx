import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { Card, CardContent } from "@/components/ui/card";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "SHIV CARRIER Weighbridge Terminal",
    type: "Freelance Project | Apr 2026 – May 2026",
    link: "https://shivcarrier-weighbridge.vercel.app",
    desc: "A browser-based weighbridge slip printing system optimized for dot-matrix printers. Built to replace expensive proprietary software while improving operational efficiency.",
    features: ["Real-time print preview", "Automated weight calculations", "Continuous-paper dot-matrix printing", "Smart workflow automation"],
    stack: ["React.js", "Tailwind CSS"],
    impact: "Reduced operational costs and removed dependency on expensive vendor software."
  },
  {
    title: "ThermalBill – Tally Thermal Print App",
    type: "Freelance Project | Jul 2025 – Aug 2025",
    link: "https://playful-empanada-fae0a4.netlify.app/",
    desc: "Browser-based thermal printing application for converting Tally XML invoices into editable thermal print formats.",
    features: ["XML invoice parsing", "Multi-file upload", "Dynamic print queue", "Live preview"],
    stack: ["React.js", "Tailwind CSS", "WebUSB API"],
    impact: "Reduced paper waste and eliminated TDL integration costs."
  },
  {
    title: "coINsight",
    type: "College Minor Project | Sep 2024 – Nov 2024",
    link: "https://coinsight-one.vercel.app",
    desc: "Cryptocurrency dashboard displaying real-time top 100 crypto coins with analytics and comparison tools.",
    features: ["Real-time API data", "Interactive charts", "Coin comparison", "Responsive dashboard UI"],
    stack: ["React.js", "Axios", "Chart.js", "JavaScript"],
    impact: "Provides clean real-time financial tracking interface."
  },
  {
    title: "AI-Powered Interview Prep App",
    type: "Personal Learning Project",
    link: "https://interview-prep-mmsp.vercel.app/",
    desc: "Full-stack AI-powered interview preparation platform using Gemini AI API.",
    features: ["AI-generated interview Q&A", "JWT authentication", "Role-based sessions", "Personalized preparation"],
    stack: ["MERN Stack", "Gemini AI API", "Tailwind CSS"],
    impact: "Accelerates candidate preparation through dynamic mock scenarios."
  },
  {
    title: "B Music Production Portfolio",
    type: "Freelance Project | Jan 2026 – Apr 2026",
    link: "#",
    desc: "A cinematic single-page portfolio website for a music studio and production brand.",
    features: ["Animated hero section", "Framer Motion interactions", "Embedded media sections"],
    stack: ["React.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    impact: "Elevated brand presence with premium frontend aesthetic."
  }
];

export default function Projects() {
  return (
    <SectionReveal id="projects">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Development <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full mb-6" />
          <p className="text-muted max-w-2xl text-lg">
            A selection of frontend applications, freelance solutions, and full-stack projects built to solve specific business and user needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={idx === 0 ? "lg:col-span-2" : ""}
            >
              <Card className="glass border-border/50 h-full overflow-hidden group interactive hover:border-accent/40 transition-colors">
                <CardContent className="p-0 h-full flex flex-col relative">
                  {/* Subtle gradient background effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="p-8 md:p-10 flex-grow z-10 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
                          {project.type}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      {project.link !== "#" && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:text-accent hover:bg-accent/10 transition-all shrink-0"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 text-lg">
                      {project.desc}
                    </p>
                    
                    <div className="mb-8 flex-grow">
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <FaCode className="text-accent" /> Key Features
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-secondary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="p-4 bg-background/50 rounded-lg border border-white/5 mb-6">
                        <span className="text-xs text-muted uppercase tracking-wider block mb-1">Impact</span>
                        <p className="text-sm text-white font-medium">{project.impact}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
