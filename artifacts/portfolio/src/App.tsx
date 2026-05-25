import React, { useEffect, useState } from "react";
import { Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator";
import AnimatedCursor from "@/components/ui/AnimatedCursor";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import DataProjects from "@/components/sections/DataProjects";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Extracurricular from "@/components/sections/Extracurricular";
import Contact from "@/components/sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <div className="relative min-h-screen selection:bg-accent/30 selection:text-white">
          <AnimatedCursor />
          <ScrollProgressIndicator />
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <DataProjects />
            <Certifications />
            <Education />
            <Extracurricular />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
