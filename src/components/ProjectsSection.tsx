
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SectionTemplate from "@/components/SectionTemplate";

const ProjectsSection = () => {
  const videoProjects = [
    {
      title: "Car Video",
      description: "Professional car video editing with cinematic effects and smooth transitions showcasing automotive excellence.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      type: "Video Project",
      liveUrl: "https://drive.google.com/file/d/1DEHaKJn7ZT_rnlUL3nWPb1Opb9yYo_71/view?usp=sharing",
      note: "Edited and captured by me",
    },
    {
      title: "Website Preview Video",
      description: "Promotional video showcasing website features with professional editing and engaging visual storytelling.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      type: "Video Project",
      liveUrl: "https://ahmed2557.github.io/MyFriends/video.html",
      note: "Edited and made by me",
    },
  ];

  const webProjects = [
    {
      title: "GPU Website",
      description: "Modern website showcasing GPU specifications and comparisons with responsive design and interactive features.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://ahmed2557.github.io/GPU-Website/",
      type: "Web Development",
    },
    {
      title: "Friends Website",
      description: "Interactive social platform with user authentication, dynamic content, and modern user interface design.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://ahmed2557.github.io/MyFriends/",
      type: "Web Development",
      note: 'Login as "Mahmoud Hassan"',
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with modern design and smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "#home",
      type: "Web Development",
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

  const SubsectionTemplate = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
      </motion.div>
      {children}
    </div>
  );

  return (
    <SectionTemplate
      id="projects"
      title="Featured Projects"
      description="Here are some of my recent projects showcasing my skills in web development, video editing, and professional certifications."
      background="gradient"
    >
      {/* Video Projects */}
      <SubsectionTemplate title="Video Projects">
        <div className="grid md:grid-cols-2 gap-10">
          {videoProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </SubsectionTemplate>

      {/* Web Projects */}
      <SubsectionTemplate title="Web Development">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </SubsectionTemplate>

      {/* Certifications */}
      <SubsectionTemplate title="Certifications">
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
