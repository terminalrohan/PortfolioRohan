import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiPython, SiPowerbi, SiMysql, SiPostman } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "REST APIs", level: 80 }
    ]
  },
  {
    title: "Data Analysis",
    skills: [
      { name: "Power BI", level: 85 },
      { name: "Excel", level: 90 },
      { name: "Pandas", level: 80 },
      { name: "Matplotlib", level: 75 },
      { name: "Machine Learning", level: 70 }
    ]
  },
  {
    title: "Programming & Tools",
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL / MySQL", level: 80 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 95 }
    ]
  },
  {
    title: "Other Competencies",
    skills: [
      { name: "AI-Assisted Dev", level: 95 },
      { name: "Problem Solving", level: 90 },
      { name: "Debugging", level: 85 },
      { name: "UI Optimization", level: 85 },
      { name: "Workflow Setup", level: 80 }
    ]
  }
];

export default function Skills() {
  return (
    <SectionReveal id="skills">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full mb-6" />
          <p className="text-muted max-w-2xl">
            A comprehensive overview of my technical stack, focusing on frontend technologies, data analysis tools, and problem-solving methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <Card className="glass border-border/50 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-display font-bold text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-accent">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + (idx * 0.1), ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-accent to-secondary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
