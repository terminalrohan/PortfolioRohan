import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <SectionReveal id="education">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 md:p-10 rounded-2xl border border-border/50 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent to-secondary" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-lg text-muted-foreground font-medium">
                  Maharaja Surajmal Institute of Technology (GGSIPU)
                </p>
                <p className="text-sm text-accent mt-1">Minor: Artificial Intelligence</p>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-bold mb-2">
                  CGPA: 8.540
                </span>
                <p className="text-sm text-muted uppercase tracking-wider">
                  Dec 2021 – May 2025
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <FaGraduationCap className="text-secondary text-lg" /> Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {["Data Structures & Algorithms", "OOPs", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"].map((course, idx) => (
                  <span key={idx} className="px-3 py-1 bg-background/50 rounded-md text-sm text-muted-foreground border border-border/50">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-6 rounded-2xl border border-border/50"
            >
              <span className="text-xs text-muted uppercase tracking-widest block mb-1">Class 12</span>
              <h4 className="text-lg font-bold text-foreground mb-1">Kendriya Vidyalaya Paschim Vihar</h4>
              <span className="text-accent font-bold">76%</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass p-6 rounded-2xl border border-border/50"
            >
              <span className="text-xs text-muted uppercase tracking-widest block mb-1">Class 10</span>
              <h4 className="text-lg font-bold text-foreground mb-1">Kendriya Vidyalaya Shakur Basti</h4>
              <span className="text-secondary font-bold">77.8%</span>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
