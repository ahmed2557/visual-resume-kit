import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-start order-1 lg:order-1"
          >
            <div className="relative">
              {/* Animated gradient lines around photo */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #06b6d4, #8b5cf6, #06b6d4)",
                  padding: "4px",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-slate-900"></div>
              </motion.div>
              
              {/* Second rotating gradient line */}
              <motion.div
                className="absolute inset-2 rounded-full"
                style={{
                  background: "conic-gradient(from 180deg, #f59e0b, #ec4899, #f59e0b)",
                  padding: "2px",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-slate-900"></div>
              </motion.div>

              <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <img 
                  src="/placeholder.svg" 
                  alt="Ahmed's Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 z-20"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-2"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <span className="text-white drop-shadow-lg">Hi, I'm </span>
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                Ahmed
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            >
              A passionate mechatronics engineering student at MSA University speaking{" "}
              <span className="font-bold text-cyan-300">Arabic</span>,{" "}
              <span className="font-bold text-blue-300">English</span> and{" "}
              <span className="font-bold text-purple-300">French</span> who loves building smart solutions that blend electronics, mechanical design, and software development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToProjects}
                className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent font-semibold px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:border-white/50"
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Mail, href: "#", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        className="absolute bottom-8 left-8 z-10"
      >
        <motion.button
          onClick={scrollToAbout}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Scroll to About section"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
