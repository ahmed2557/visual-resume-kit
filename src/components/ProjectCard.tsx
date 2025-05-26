
import { motion } from "framer-motion";
import { ExternalLink, Play, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    type: string;
    liveUrl?: string;
    pdfUrl?: string;
    technologies?: string[];
    note?: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isVideo = project.type === "Video Project";
  const isCertification = project.type === "Certification";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Play button for videos */}
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <Play className="text-white ml-1" size={24} />
              </motion.div>
            </div>
          )}

          {/* Certification badge */}
          {isCertification && (
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <Award className="text-white" size={20} />
              </div>
            </div>
          )}

          {/* Type badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs rounded-full font-semibold shadow-lg">
              {project.type}
            </span>
          </div>
        </div>

        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs rounded-full font-medium border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Note */}
          {project.note && (
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-6 rounded-r">
              <p className="text-blue-700 text-sm italic">{project.note}</p>
            </div>
          )}

          {/* Action Button */}
          <Button
            variant="outline"
            size="lg"
            className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
            onClick={() => window.open(project.liveUrl || project.pdfUrl, "_blank")}
          >
            <ExternalLink size={16} className="mr-2" />
            <span>
              {project.pdfUrl 
                ? "View Certificate" 
                : isVideo 
                  ? "Watch Video" 
                  : "Visit Site"
              }
            </span>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
