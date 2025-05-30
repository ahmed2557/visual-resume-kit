
import { motion } from "framer-motion";
import { Globe, GraduationCap, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LanguagesEducationSection = () => {
  const languages = [
    {
      name: "Arabic",
      level: "Native Language",
      icon: <Globe className="w-5 h-5" />,
      description: "My mother tongue and primary language of communication."
    },
    {
      name: "French",
      level: "Fluent",
      icon: <GraduationCap className="w-5 h-5" />,
      description: "Studied at Collège De La Salle – Frères Daher, a distinguished French-language institution, where I completed my education in mathematics and science entirely in French. This experience provided me with a strong academic foundation and full fluency in French."
    },
    {
      name: "English",
      level: "Fluent",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Developed through multiple channels: school education, university studies, technical work, and ongoing academic and professional engagement. I have a strong command of both written and spoken English."
    }
  ];

  return (
    <section id="languages" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">🌍 Languages &amp; </span>
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white mr-3">
                      {language.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{language.name}</h3>
                      <p className="text-cyan-300 text-sm font-medium">{language.level}</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed text-sm">
                    {language.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesEducationSection;
