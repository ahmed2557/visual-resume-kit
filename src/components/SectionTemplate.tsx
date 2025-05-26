
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
  const backgroundStyles = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-gray-50 to-blue-50"
  };

  return (
    <section 
      id={id} 
      className={`py-24 ${backgroundStyles[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {title.split(' ').map((word, index) => (
              <span key={index}>
                {index === title.split(' ').length - 1 ? (
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word + ' '
                )}
              </span>
            ))}
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          
          {subtitle && (
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              {subtitle}
            </h3>
          )}
          
          {description && (
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
