
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SectionTemplate from "@/components/SectionTemplate";

const ProjectsSection = () => {
  const embeddedProjects = [
    {
      title: "Smart Home System",
      description: "Complete ESP32-based system with custom Flutter app featuring door control, smoke detection, soil monitoring, and custom PCB design in KiCad.",
      image: "https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=600&h=400&fit=crop",
      type: "Embedded Systems",
      technologies: ["ESP32", "Flutter", "KiCad", "IR Sensors", "MQ-7"],
      note: "Custom PCB designed and tested",
    },
    {
      title: "Maze-Solving Robot",
      description: "Autonomous robot using 4 IR sensors and right-hand rule algorithm, upgraded with MPU9250 gyroscope and encoders for precise movement.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      type: "Robotics",
      technologies: ["C++", "IR Sensors", "MPU9250", "Encoders", "Wokwi"],
      note: "Tested on real hardware and simulation",
    },
    {
      title: "Wall-Following Robot with PID",
      description: "Advanced robot with dynamic PID control via web interface, featuring 3 ultrasonic sensors and real-time parameter tuning dashboard.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      type: "Robotics",
      technologies: ["PID Control", "Ultrasonic", "Web Dashboard", "Real-time"],
      note: "Profile-based tuning system",
    },
  ];

  const videoProjects = [
    {
      title: "Car Video",
      description: "Professional car video editing with cinematic effects and smooth transitions showcasing automotive excellence.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      type: "Video Project",
      liveUrl: "https://drive.google.com/file/d/1DEHaKJn7ZT_rnlUL3nWPb1Opb9yYo_71/view?usp=sharing",
      technologies: ["Adobe Premiere Pro", "Color Grading", "Motion Graphics"],
      note: "Edited and captured by me",
    },
    {
      title: "Website Preview Video",
      description: "Promotional video showcasing website features with professional editing and engaging visual storytelling.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      type: "Video Project",
      liveUrl: "https://ahmed2557.github.io/MyFriends/video.html",
      technologies: ["Clipchamp", "Video Editing", "Storytelling"],
      note: "Edited and made by me",
    },
  ];

  const webProjects = [
    {
      title: "GPU Website",
      description: "Modern website showcasing GPU specifications and comparisons with responsive design and interactive features.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://ahmed2557.github.io/GPU-Website/",
      type: "Web Development",
    },
    {
      title: "Friends Website",
      description: "Interactive social platform with user authentication, dynamic content, and modern user interface design.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      liveUrl: "https://ahmed2557.github.io/MyFriends/",
      type: "Web Development",
      note: 'Login as "Mahmoud Hassan"',
    },
    {
      title: "QR File Sharing System",
      description: "Upload images/videos and generate scannable QR codes for easy file sharing and distribution.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      technologies: ["QR Generation", "File Upload", "Web Storage"],
      type: "Web Development",
      note: "Scan and share instantly",
    },
  ];

  const mechanicalProjects = [
    {
      title: "Inventor Gear Systems",
      description: "Complex gear assemblies, shafts, and transmission systems designed in Autodesk Inventor with detailed animations.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      type: "Mechanical Design",
      technologies: ["Autodesk Inventor", "CAD", "3D Modeling", "Simulations"],
      note: "Complete transmission system designs",
    },
    {
      title: "Circuit Simulations",
      description: "Comprehensive sensor-based circuits designed and tested in Proteus for real-world implementation.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      type: "Circuit Design",
      technologies: ["Proteus", "Circuit Analysis", "Sensor Integration"],
      note: "Validated before hardware implementation",
    },
  ];

  const certifications = [
    {
      title: "Building Website",
      description: "Certificate in website development fundamentals, covering modern web technologies and best practices.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      pdfUrl: "PDF/Ahmed_Building a Website.pdf",
      type: "Certification",
    },
    {
      title: "HTML Certification",
      description: "Professional certification in HTML markup, semantic web development, and accessibility standards.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      pdfUrl: "PDF/Ahmed_HTML.pdf",
      type: "Certification",
    },
    {
      title: "CSS Certification",
      description: "Advanced certification in CSS styling, responsive design techniques, and modern layout methods.",
      image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=600&h=400&fit=crop",
      pdfUrl: "PDF/Ahmed_CSS.pdf",
      type: "Certification",
    },
  ];

  const SubsectionTemplate = ({ title, emoji, children }: { title: string; emoji: string; children: React.ReactNode }) => (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="text-5xl mb-4">{emoji}</div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </motion.div>
      {children}
    </div>
  );

  return (
    <SectionTemplate
      id="projects"
      title="Featured Projects"
      description="Here's a showcase of my recent projects spanning embedded systems, robotics, web development, mechanical design, and multimedia creation."
      background="gradient"
    >
      {/* Embedded Systems & Robotics */}
      <SubsectionTemplate title="Embedded Systems & Robotics" emoji="🤖">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {embeddedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </SubsectionTemplate>

      {/* Web Development */}
      <SubsectionTemplate title="Web Development" emoji="💻">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </SubsectionTemplate>

      {/* Mechanical & Circuit Design */}
      <SubsectionTemplate title="Mechanical & Circuit Design" emoji="⚙️">
        <div className="grid md:grid-cols-2 gap-10">
          {mechanicalProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </SubsectionTemplate>

      {/* Video Projects */}
      <SubsectionTemplate title="Video & Multimedia" emoji="🎬">
        <div className="grid md:grid-cols-2 gap-10">
          {videoProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </SubsectionTemplate>

      {/* Certifications */}
      <SubsectionTemplate title="Professional Certifications" emoji="🏆">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <ProjectCard key={cert.title} project={cert} index={index} />
          ))}
        </div>
      </SubsectionTemplate>
    </SectionTemplate>
  );
};

export default ProjectsSection;
