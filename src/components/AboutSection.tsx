
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Cpu, 
  Smartphone, 
  Wrench, 
  Car, 
  Video, 
  GraduationCap,
  Code,
  Zap,
  Settings,
  Camera
} from "lucide-react";
import SectionTemplate from "@/components/SectionTemplate";

const AboutSection = () => {
  const skills = [
    {
      category: "🔌 Embedded Systems & Robotics",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      projects: [
        "Smart Home System with ESP32 & Flutter app",
        "Maze-Solving Robot with IR sensors",
        "Wall-Following Robot with PID control",
        "QR File Sharing System"
      ]
    },
    {
      category: "⚙️ Mechanical & Circuit Design", 
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      projects: [
        "Gear assemblies in Autodesk Inventor",
        "PCB design in KiCad",
        "Proteus circuit simulations",
        "Transmission systems design"
      ]
    },
    {
      category: "🚗 Automotive Repair & Customization",
      icon: <Car className="w-8 h-8" />,
      color: "from-red-500 to-orange-500", 
      projects: [
        "Toyota KP30 Android screen installation",
        "Peugeot 405 GL maintenance",
        "Toyota Yaris troubleshooting",
        "Custom audio system installation"
      ]
    },
    {
      category: "💻 PC, Laptop & Mobile Repairs",
      icon: <Wrench className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      projects: [
        "Hardware diagnostics and repair",
        "Soldering and component replacement", 
        "Software troubleshooting",
        "Mobile device repairs"
      ]
    },
    {
      category: "📱 Mobile App Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      projects: [
        "Flutter smart home controller",
        "Real-time hardware integration",
        "HTTP/JSON communication",
        "Responsive UI design"
      ]
    },
    {
      category: "👨‍🏫 Education & Team Leadership",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-500",
      projects: [
        "Front-end web training workshops",
        "HTML/CSS teaching",
        "Community learning management",
        "Team project coordination"
      ]
    },
    {
      category: "🎞 Video & Photo Editing",
      icon: <Video className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      projects: [
        "Adobe Premiere Pro editing",
        "Clipchamp video production",
        "Educational video creation",
        "Social media content"
      ]
    }
  ];

  const tools = [
    {
      category: "Programming",
      items: ["C/C++", "Dart", "Flutter", "HTML", "CSS", "JavaScript"]
    },
    {
      category: "Hardware", 
      items: ["ESP32", "IR/MQ sensors", "Ultrasonic", "MPU9250"]
    },
    {
      category: "Electronics",
      items: ["KiCad", "Proteus", "Soldering tools", "PCB Design"]
    },
    {
      category: "Mechanical",
      items: ["Autodesk Inventor", "Gear Design", "CAD Modeling"]
    },
    {
      category: "Development",
      items: ["Visual Studio Code", "Flutter", "Firebase", "GitHub"]
    },
    {
      category: "Media",
      items: ["Adobe Premiere Pro", "Clipchamp", "Photo Editing"]
    }
  ];

  return (
    <SectionTemplate
      id="about"
      title="About Me"
      subtitle="Passionate mechatronics engineering student at MSA University"
      description="Whether it's automating a smart home, solving a maze with a robot, designing gear systems, or editing high-quality videos, I enjoy making ideas come to life through hands-on projects."
      background="white"
    >
      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {skill.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {skill.category}
                </h3>
                
                <ul className="space-y-2">
                  {skill.projects.map((project, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {project}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tools Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🧰 Tools I Use
          </h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((toolCategory, index) => (
            <motion.div
              key={toolCategory.category}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                    {toolCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {toolCategory.items.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Personal Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-blue-50 to-purple-50 shadow-xl">
          <CardContent className="p-12">
            <div className="text-6xl mb-6">💡</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 font-light italic leading-relaxed">
              "I believe technology should make life easier and more connected. 
              Every project I work on aims to bridge the gap between complex engineering 
              and practical, user-friendly solutions."
            </blockquote>
            <div className="mt-6">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionTemplate>
  );
};

export default AboutSection;
