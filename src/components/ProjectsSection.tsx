
import { motion } from "framer-motion";
import { ExternalLink, Award, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const videoProjects = [
    {
      title: "Car Video",
      description: "Professional car video editing with cinematic effects and smooth transitions.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      type: "Video Project",
      liveUrl: "https://drive.google.com/file/d/1DEHaKJn7ZT_rnlUL3nWPb1Opb9yYo_71/view?usp=sharing",
      note: "Edited and captured by me",
    },
    {
      title: "Website Preview Video",
      description: "Promotional video showcasing website features with professional editing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      type: "Video Project",
      liveUrl: "https://ahmed2557.github.io/MyFriends/video.html",
      note: "Edited and made by me",
    },
  ];

  const webProjects = [
    {
      title: "GPU Website",
      description: "Modern website showcasing GPU specifications and comparisons with responsive design.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://ahmed2557.github.io/GPU-Website/",
      type: "Web Development",
    },
    {
      title: "Friends Website",
      description: "Interactive social platform with user authentication and dynamic content.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://ahmed2557.github.io/MyFriends/",
      type: "Web Development",
      note: 'Login as "Mahmoud Hassan"',
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with modern design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#home",
      type: "Web Development",
    },
  ];

  const certifications = [
    {
      title: "Building Website",
      description: "Certificate in website development fundamentals and best practices.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      pdfUrl: "PDF/Ahmed_Building a Website.pdf",
    },
    {
      title: "HTML Certification",
      description: "Professional certification in HTML markup and semantic web development.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      pdfUrl: "PDF/Ahmed_HTML.pdf",
    },
    {
      title: "CSS Certification",
      description: "Advanced certification in CSS styling and responsive design techniques.",
      image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=600&h=400&fit=crop",
      pdfUrl: "PDF/Ahmed_CSS.pdf",
    },
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          {project.type === "Video Project" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900">
              {project.title}
            </h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
              {project.type}
            </span>
          </div>
          <p className="text-gray-600 mb-4 text-sm">
            {project.description}
          </p>
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          {project.note && (
            <p className="text-blue-600 text-sm mb-4 italic">{project.note}</p>
          )}
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
              onClick={() => window.open(project.liveUrl || project.pdfUrl, "_blank")}
            >
              <ExternalLink size={16} />
              <span>{project.pdfUrl ? "View PDF" : project.type === "Video Project" ? "Watch Video" : "Visit Site"}</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in web development,
            video editing, and professional certifications.
          </p>
        </motion.div>

        {/* Video Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Video Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {videoProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Web Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Web Development
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Certifications
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    <div className="absolute top-4 right-4">
                      <Award className="text-yellow-500" size={24} />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {cert.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2"
                      onClick={() => window.open(cert.pdfUrl, "_blank")}
                    >
                      <ExternalLink size={16} />
                      <span>View Certificate</span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
