
import React, { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useRevealAnimation } from '../utils/animations';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  tools: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <div 
      className="reveal card-glass group overflow-hidden"
      style={{ transitionDelay: `${index * 0.1}s` }}
      data-direction="up"
    >
      <div className="h-40 bg-blue-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
          />
        ) : (
          <div className="text-4xl font-display font-bold highlight-gradient">
            {project.title.charAt(0) + project.title.split(' ').length > 1 ? project.title.split(' ')[1].charAt(0) : ''}
          </div>
        )}
      </div>
      
      <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground mb-4">
        {project.description}
      </p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-sm text-muted-foreground">Tools:</span>
        {project.tools.map((tool, idx) => (
          <span key={idx} className="text-sm text-muted-foreground">
            {tool}{idx < project.tools.length - 1 ? ',' : ''}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-3 mt-auto pt-2">
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={18} />
          </a>
        )}
        
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  const projects: Project[] = [
    {
      title: "Intelligent Crop Recommendation Model",
      description: "Uses historical data and ML to predict crop yields, helping farmers optimize crop selection and planting schedules.",
      technologies: ["Machine Learning", "IoT", "Android Studio"],
      tools: ["Visual Studio Code"],
      githubUrl: "#",
    },
    {
      title: "Churn Prediction",
      description: "Takes customer purchase details as input and predicts whether a customer is about to churn or not, outputting a binary result (0 or 1).",
      technologies: ["Machine Learning", "Data Analysis"],
      tools: ["Visual Studio Code", "Jupiter Notebook"],
      githubUrl: "#",
    },
    {
      title: "Enhancing CAPTCHA Security with Privacy-Preserving ML",
      description: "Uses historical data to learn bot vs human behavior patterns to create a new type of CAPTCHA experience.",
      technologies: ["Machine Learning", "Behavioral Analytics", "JavaScript-based Detection", "Rate Limiting", "Flask"],
      tools: ["Visual Studio Code", "Postgre SQL", "Postman", "NodeJS"],
      githubUrl: "#",
    },
    {
      title: "Hospital Management System",
      description: "A complete website for hospital management that streamlines operations with a modern tech stack.",
      technologies: ["React TS", "Node.js", "Flask", "PostgreSQL"],
      tools: ["Visual Studio Code", "Jupiter Notebook"],
      githubUrl: "#",
    }
  ];
  
  return (
    <section id="projects" className="section-container bg-secondary/50">
      <div className="text-center mb-16">
        <h2 className="section-title reveal" data-direction="up">My Projects</h2>
        <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
          Explore my latest work and technical projects
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
