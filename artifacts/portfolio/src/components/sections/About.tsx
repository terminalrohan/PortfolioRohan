import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Projects Completed", value: "5+" },
  { label: "Freelance Projects", value: "3" },
  { label: "Technologies Used", value: "15+" },
  { label: "Certifications", value: "5" },
];

const badges = [
  "Freelance Experience",
  "Frontend Development",
  "Data Analysis",
  "AI Tools & Workflow",
  "Real Business Projects"
];

export default function About() {
  return (
    <SectionReveal id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Card className="glass border-border/50 bg-card/40 hover:bg-card/60 transition-colors duration-500">
              <CardContent className="p-8 md:p-10">
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Computer Science graduate with hands-on experience in frontend development, along with strong skills in problem-solving, data handling, and process-oriented work. During freelance and internship experience, I have worked on building applications, debugging issues, and collaborating with teams to deliver reliable solutions.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  These experiences have helped me develop attention to detail, structured thinking, and the ability to manage tasks efficiently.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {badges.map((badge, idx) => (
                    <motion.span 
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-foreground interactive"
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="glass border-border/50 bg-card/40 hover:bg-card/80 hover:border-accent/50 transition-all duration-300 text-center h-full flex flex-col justify-center interactive group">
                  <CardContent className="p-6">
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-muted font-medium uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
