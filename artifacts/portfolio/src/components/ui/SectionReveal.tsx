import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionRevealProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export default function SectionReveal({ children, id, className = "", delay = 0 }: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      className={`min-h-screen py-24 flex flex-col justify-center relative z-10 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
