
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LanguagesEducationSection from "@/components/LanguagesEducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Optimized Global Background */}
      <div className="fixed inset-0 z-0 will-change-transform">
        {/* Base solid background */}
        <div className="absolute inset-0 bg-slate-900"></div>
        
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/80 via-blue-800/80 to-cyan-700/80"></div>
        
        {/* Optimized animated color zones */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-purple-800/30 rounded-full blur-3xl will-change-transform"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-blue-600/30 to-blue-800/30 rounded-full blur-3xl will-change-transform"
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-600/30 to-cyan-800/30 rounded-full blur-3xl will-change-transform"
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>

        {/* Optimized floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content with higher z-index and optimized rendering */}
      <div className="relative z-10 will-change-scroll">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <LanguagesEducationSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
