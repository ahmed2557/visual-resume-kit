
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LanguagesEducationSection from "@/components/LanguagesEducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactsSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Highly optimized background for better performance */}
      <div className="fixed inset-0 z-0 will-change-transform">
        {/* Base solid background */}
        <div className="absolute inset-0 bg-slate-900"></div>
        
        {/* Single optimized gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/70 via-blue-800/70 to-cyan-700/70"></div>
        
        {/* Reduced animated elements for better performance */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-full blur-3xl will-change-transform"
            animate={{
              x: [0, 80, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 rounded-full blur-3xl will-change-transform"
            animate={{
              x: [0, -60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 6
            }}
          />
        </div>

        {/* Reduced floating particles for better performance */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content with optimized rendering */}
      <div className="relative z-10">
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
