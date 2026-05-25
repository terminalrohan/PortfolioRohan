import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission since no backend
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <SectionReveal id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full mb-6" />
          <p className="text-muted max-w-2xl text-lg">
            Currently open for new opportunities and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass border-border/50 bg-card/40">
                <CardContent className="p-8 space-y-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-6">Contact Details</h3>
                  
                  <div className="space-y-6">
                    <a href="mailto:terminalrohan@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <FaEnvelope className="text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-muted uppercase tracking-wider mb-1">Email</p>
                        <p className="font-medium text-white group-hover:text-accent transition-colors">terminalrohan@gmail.com</p>
                      </div>
                    </a>
                    
                    <a href="tel:+919717921215" className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <FaPhoneAlt className="text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-muted uppercase tracking-wider mb-1">Phone</p>
                        <p className="font-medium text-white group-hover:text-accent transition-colors">+91-9717921215</p>
                      </div>
                    </a>
                  </div>

                  <div className="pt-8 border-t border-border/50">
                    <p className="text-sm text-muted uppercase tracking-wider mb-4">Social Profiles</p>
                    <div className="flex gap-4">
                      <a href="https://www.linkedin.com/in/rohan-326698300/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-background transition-all interactive text-white">
                        <FaLinkedin className="text-xl" />
                      </a>
                      <a href="https://github.com/terminalrohan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-background transition-all interactive text-white">
                        <FaGithub className="text-xl" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="glass border-border/50 h-full">
                <CardContent className="p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                        <Input 
                          id="name" 
                          required 
                          placeholder="John Doe" 
                          className="bg-background/50 border-border/50 focus:border-accent/50 text-white h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          placeholder="john@example.com" 
                          className="bg-background/50 border-border/50 focus:border-accent/50 text-white h-12"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                      <Input 
                        id="subject" 
                        required 
                        placeholder="Project Inquiry" 
                        className="bg-background/50 border-border/50 focus:border-accent/50 text-white h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="Tell me about your project..." 
                        className="bg-background/50 border-border/50 focus:border-accent/50 text-white min-h-[150px] resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-accent to-secondary hover:opacity-90 text-background font-bold text-lg transition-opacity interactive rounded-lg"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
