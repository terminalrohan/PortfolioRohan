import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "HackWithIndia 2024",
    role: "Participant",
    detail: "Top 40 out of 1500+ teams nationwide",
    color: "from-accent to-blue-600"
  },
  {
    title: "ENVA'24 (MSIT College Fest)",
    role: "Volunteer",
    detail: "Event coordination and management",
    color: "from-secondary to-purple-600"
  }
];

export default function Extracurricular() {
  return (
    <SectionReveal id="extracurricular" className="min-h-[60vh]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Extracurricular <span className="text-gradient">Activities</span>
          </h2>
          <div className="w-24 h-1 bg-secondary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <Card className="glass border-border/50 h-full overflow-hidden relative group interactive">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />
                <CardContent className="p-8">
                  <span className="text-xs font-bold text-muted uppercase tracking-widest block mb-2">
                    {item.role}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-lg text-white font-medium">
                    {item.detail}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
