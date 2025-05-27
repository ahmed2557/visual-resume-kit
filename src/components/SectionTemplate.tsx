
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTemplateProps {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  background?: "white" | "gray" | "gradient";
  className?: string;
}

const SectionTemplate = ({ 
  id, 
  title, 
  subtitle, 
  description, 
  children, 
  background = "white",
  className = ""
}: SectionTemplateProps) => {
  return (
    <section 
      id={id} 
      className={`py-24 relative ${className}`}
    >
      {/* Section background overlay for better content visibility - smoother transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/80 via-slate-900/80 to-slate-900/90 backdrop-blur-sm"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {title.split(' ').map((word, index) => (
              <span key={index}>
                {index === title.split(' ').length - 1 ? (
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word + ' '
                )}
              </span>
            ))}
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          
          {subtitle && (
            <h3 className="text-2xl font-semibold text-white/90 mb-4 drop-shadow-md">
              {subtitle}
            </h3>
          )}
          
          {description && (
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
              {description}
            </p>
          )}
        </motion.div>

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
};

export default SectionTemplate;
