
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Languages", href: "#languages" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      window.scrollTo(0, window.pageYOffset);
      const targetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ease-out ${
        isScrolled 
          ? "backdrop-blur-lg shadow-lg" 
          : ""
      }`}
    >
      {/* Animated RGB Light Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving RGB lights */}
        <motion.div
          className="absolute -top-2 -left-10 w-20 h-20 bg-red-500/30 rounded-full blur-xl"
          animate={{
            x: [0, 200, 400, 200, 0],
            y: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -top-2 left-1/3 w-16 h-16 bg-green-500/30 rounded-full blur-xl"
          animate={{
            x: [0, 150, 300, 150, 0],
            y: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
        <motion.div
          className="absolute -top-2 right-1/4 w-18 h-18 bg-blue-500/30 rounded-full blur-xl"
          animate={{
            x: [0, -100, -200, -100, 0],
            y: [0, 8, 0, -8, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
        />
        <motion.div
          className="absolute -top-2 -right-10 w-14 h-14 bg-purple-500/30 rounded-full blur-xl"
          animate={{
            x: [0, -150, -300, -150, 0],
            y: [0, -6, 0, 6, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />
        
        {/* Background overlay */}
        <div className={`absolute inset-0 transition-all duration-300 ${
          isScrolled 
            ? "bg-slate-800/90" 
            : "bg-slate-800/60"
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10"
          >
            Ahmed
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 relative z-10">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-cyan-400 transition-all duration-300 ease-out font-medium px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-10">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-cyan-400 hover:bg-white/10 transition-all duration-200 ease-out"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden pb-4 bg-slate-800/90 backdrop-blur-lg rounded-lg border border-slate-700/50 mt-2 relative z-10"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 px-4 text-white hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 ease-out rounded-lg mx-2 first:mt-2 last:mb-2"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
