import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { Card, CardContent } from "@/components/ui/card";

const certs = [
  { name: "Prompt Engineering", issuer: "Infosys Springboard" },
  { name: "Python", issuer: "Infosys Springboard" },
  { name: "SQL", issuer: "HackerRank" },
  { name: "JavaScript Essentials", issuer: "Cisco" },
  { name: "Oracle Certified AI Foundations Associate", issuer: "Oracle University" }
];

export default function Certifications() {
  return (
    <SectionReveal id="certifications">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="glass border-border/50 interactive group hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-xl group-hover:bg-accent/40 transition-colors" />
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 relative z-10 group-hover:text-white">
                    {cert.name}
                  </h3>
                  <p className="text-sm font-medium text-accent relative z-10">
                    {cert.issuer}
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
