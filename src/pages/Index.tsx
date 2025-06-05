
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ScrollNavigation from "@/components/ScrollNavigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Optimized background for better performance */}
      <div className="fixed inset-0 z-0">
        {/* Base solid background */}
        <div className="absolute inset-0 bg-slate-900"></div>
        
        {/* Single optimized gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/50 via-blue-800/50 to-cyan-700/50"></div>
        
        {/* Reduced to just 2 animated elements for better performance */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/15 to-purple-800/15 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-600/15 to-cyan-800/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 10
          }}
        />
      </div>

      {/* Content with optimized rendering */}
      <div className="relative z-10">
        <ScrollNavigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
