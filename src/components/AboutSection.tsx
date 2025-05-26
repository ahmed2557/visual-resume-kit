
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
      description: "Building websites using HTML, CSS and JavaScript.",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Editing videos using Adobe Premiere and Clipchamp.",
    },
    {
      icon: Camera,
      title: "Video Production",
      description: "Capturing professional videos using simple methods.",
    },
  ];

  const education = [
    {
      school: "Lycee El Haram",
      period: "Till grade 2",
      logo: "/Images/lyceLogo.jpg"
    },
    {
      school: "College De La Salle",
      period: "From grade 3 to graduation",
      logo: "/Images/dlsLogo.jpg"
    },
    {
      school: "MSA University",
      period: "Current",
      logo: "/Images/msaLogo.png"
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate programmer and video editor who loves creating amazing digital experiences.
            I specialize in front-end development and professional video editing.
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardContent className="p-0">
                    <div className="text-blue-600 mb-4 flex justify-center">
                      <service.icon size={48} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Skills</h3>
            <p className="text-gray-600 mb-6">
              I have experience in various technologies and tools that help me create
              beautiful websites and professional videos.
            </p>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0 flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <GraduationCap className="text-blue-600" size={32} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {edu.school}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {edu.period}
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
