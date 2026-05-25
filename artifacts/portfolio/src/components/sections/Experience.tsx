import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "Freelance Frontend Developer",
    company: "Hitech Innotech Green Water Pvt Ltd",
    duration: "July 2025 – Dec 2025",
    location: "Delhi, India",
    responsibilities: [
      "Debugged and resolved UI issues.",
      "Coordinated with third-party development teams.",
      "Developed ThermalBill application.",
      "Improved operational workflow and reduced business costs."
    ],
    align: "left"
  },
  {
    id: 2,
    title: "Frontend Software Engineer Intern",
    company: "Coltri Marthub Pvt. Ltd.",
    duration: "Aug 2024 – Oct 2024",
    location: "Noida, India",
    responsibilities: [
      "Contributed to frontend development of a business website.",
      "Built responsive UI components using React.js and JavaScript.",
      "Worked on usability and client requirements.",
      "Delivered polished client-approved live website."
    ],
    align: "right"
  }
];

export default function Experience() {
  return (
    <SectionReveal id="experience">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-1/2 z-0" />
          
          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  exp.align === 'left' ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Timeline Icon */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-accent flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                  <FaBriefcase className="text-accent text-sm" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                  exp.align === 'left' ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'
                }`}>
                  <div className="glass p-8 rounded-2xl border-border/50 hover:border-accent/30 transition-colors group interactive">
                    <span className="text-accent text-sm font-bold tracking-wider uppercase mb-2 block">
                      {exp.duration}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-secondary font-medium mb-4">{exp.company} • {exp.location}</p>
                    
                    <ul className={`space-y-2 text-muted-foreground ${
                      exp.align === 'left' ? 'md:ml-auto md:text-right' : ''
                    }`}>
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                          <span className={`w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0 ${
                            exp.align === 'left' ? 'md:order-2 md:mt-1.5 md:ml-2 md:mr-0' : 'mr-2'
                          }`} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
