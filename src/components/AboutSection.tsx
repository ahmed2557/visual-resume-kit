
import { motion } from "framer-motion";
import { Code, Video, Camera, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Video Editing", level: 90 },
    { name: "Video Production", level: 80 },
  ];

  const services = [
    {
      icon: Code,
      title: "Front End Development",
      description: "Building responsive and modern websites using HTML, CSS, JavaScript, and modern frameworks.",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing using Adobe Premiere Pro, Clipchamp, and other industry-standard tools.",
    },
    {
      icon: Camera,
      title: "Video Production",
      description: "Complete video production services from concept to final delivery with professional techniques.",
    },
  ];

  const education = [
    {
      school: "Lycee El Haram",
      period: "Till grade 2",
      description: "Foundation years of education",
      logo: "/Images/lyceLogo.jpg"
    },
    {
      school: "College De La Salle",
      period: "From grade 3 to graduation",
      description: "Comprehensive secondary education",
      logo: "/Images/dlsLogo.jpg"
    },
    {
      school: "MSA University",
      period: "Current",
      description: "Pursuing higher education in technology",
      logo: "/Images/msaLogo.png"
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate programmer and video editor who loves creating amazing digital experiences.
            I specialize in front-end development and professional video editing, bringing creativity and technical expertise to every project.
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I <span className="text-blue-600">Do</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are the main services I offer to help bring your digital projects to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="p-0 text-center">
                    <motion.div 
                      className="text-blue-600 mb-6 flex justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <service.icon size={64} />
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                My <span className="text-blue-600">Skills</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I have experience in various technologies and tools that help me create
                beautiful websites and professional videos. Here's my expertise level in each area.
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-sm border"
                >
                  <div className="flex justify-between mb-3">
                    <span className="text-lg font-semibold text-gray-900">{skill.name}</span>
                    <span className="text-lg font-bold text-blue-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full shadow-sm"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                My <span className="text-blue-600">Education</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                My educational journey has shaped my foundation in technology and creativity.
              </p>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-blue-600">
                    <CardContent className="p-0 flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <GraduationCap className="text-white" size={24} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {edu.school}
                        </h4>
                        <p className="text-blue-600 font-semibold mb-2">
                          {edu.period}
                        </p>
                        <p className="text-gray-600">
                          {edu.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
