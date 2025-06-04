
import React, { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useRevealAnimation } from '../utils/animations';

const Projects: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Next.js", "Socket.io", "MongoDB", "TypeScript"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather and forecasts with beautiful data visualizations and location-based services.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      github: "#",
      demo: "#"
    }
  ];
  
  return (
    <section id="projects" className="section-container bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="section-title reveal" data-direction="up">Featured Projects</h2>
        <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
          Some of the projects I've worked on recently
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="reveal card-glass" data-direction="up" style={{ transitionDelay: `${index * 0.1}s` }}>
            <h3 className="font-display text-xl font-bold mb-4">{project.title}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a 
                href={project.github}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">Code</span>
              </a>
              <a 
                href={project.demo}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
