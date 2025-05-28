
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
      className="will-change-transform"
    >
      <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
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
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <Award className="text-white" size={20} />
              </div>
            </div>
          )}

          {/* Type badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 backdrop-blur-sm text-white text-xs rounded-full font-semibold shadow-lg border border-white/20">
              {project.type}
            </span>
          </div>
        </div>

        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-white/80 mb-6 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-200 text-xs rounded-full font-medium border border-cyan-400/30 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Note */}
          {project.note && (
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-l-4 border-cyan-400 p-3 mb-6 rounded-r backdrop-blur-sm">
              <p className="text-cyan-200 text-sm italic">{project.note}</p>
            </div>
          )}

          {/* Action Button */}
          <Button
            variant="outline"
            size="lg"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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
