import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";

const dataProjects = [
  {
    title: "Sales Analysis Dashboard",
    stack: "Power BI, SQL, Excel",
    desc: "Interactive dashboard visualizing sales trends and customer behavior. Features SQL aggregations, Excel data cleaning, and Power BI reporting.",
    github: "https://github.com/terminalrohan/PIZZA-DASHBOARD"
  },
  {
    title: "Customer Churn Analysis",
    stack: "Python, SQL, Power BI, Machine Learning",
    desc: "Predictive churn analysis system using Random Forest classification. Includes customer retention insights and predictive ML models.",
    github: "https://github.com/terminalrohan/churn-Analysis"
  },
  {
    title: "Banking Analysis",
    stack: "Python, SQL, Power BI",
    desc: "Banking customer segmentation and retention analytics dashboard. End-to-end data pipeline to visualization.",
    github: "https://github.com/terminalrohan/banking-analysis"
  },
  {
    title: "Driver Drowsiness Detection",
    stack: "Python, OpenCV, DLib, NumPy",
    desc: "Computer vision-based safety system detecting real-time driver drowsiness using EAR detection algorithm and real-time alerts.",
    github: "https://github.com/terminalrohan/DDDS"
  }
];

export default function DataProjects() {
  return (
    <SectionReveal id="data-projects" className="bg-background relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMTExIi8+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Data <span className="text-gradient">Analysis</span>
          </h2>
          <div className="w-24 h-1 bg-secondary rounded-full mb-6" />
          <p className="text-muted max-w-2xl text-lg">
            Transforming raw data into actionable insights through visualization, statistical analysis, and machine learning models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="glass bg-card/60 border-border/50 h-full overflow-hidden group interactive hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
                      {project.stack}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm flex-grow mb-6">
                    {project.desc}
                  </p>
                  
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors mt-auto w-fit"
                  >
                    <FaGithub /> View Source
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
