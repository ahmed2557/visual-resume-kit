
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      console.log('Current scroll:', currentScrollY, 'Last scroll:', lastScrollY, 'Visible:', isVisible);
      
      // Set background blur when scrolled
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show navigation based on scroll direction
      if (currentScrollY === 0) {
        // Always show at top of page
        console.log('At top - showing nav');
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide nav
        console.log('Scrolling down - hiding nav');
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show nav
        console.log('Scrolling up - showing nav');
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible]);

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
      initial={{ y: 0 }} 
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }} 
      transition={{ 
        duration: 0.3, 
        ease: "easeInOut",
        type: "tween"
      }}
      className={`fixed top-0 w-full z-[9999] transition-all duration-300 ease-out ${
        isScrolled 
          ? "backdrop-blur-lg shadow-lg" 
          : ""
      }`}
    >
      {/* Background overlay */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-800/80" 
          : "bg-transparent"
      }`}></div>

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
