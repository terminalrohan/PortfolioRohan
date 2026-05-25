import React from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex flex-col items-center"
      >
        <div className="relative w-24 h-24 mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-accent opacity-75"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-b-2 border-l-2 border-secondary opacity-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-display font-bold text-gradient">R</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-sm tracking-widest text-muted uppercase font-sans"
        >
          Initializing Portfolio
        </motion.div>
        
        <div className="w-48 h-1 bg-border mt-6 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-accent to-secondary rounded-full w-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
