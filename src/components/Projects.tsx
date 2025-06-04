
import React, { useEffect } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { useRevealAnimation } from '../utils/animations';

const Projects: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  const projects = [
    {
      title: "Intelligent Crop Recommendation Model",
      period: "December 2023 - February 2024",
      description: "Engineered an IoT-based smart agricultural system using Python (Scikit-Learn) and environmental sensors to provide real-time, data-driven crop recommendations via an Android application.",
      technologies: ["Python", "Scikit-Learn", "IoT", "Android Studio", "Machine Learning"],
      achievements: [
        "Achieved significant accuracy in real-time crop suggestions by integrating sensor data",
        "Improved farming decision-making efficiency and sustainability",
        "Leveraged data-driven insights to optimize agricultural productivity"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Enhancing CAPTCHA Security with Privacy-Preserving ML",
      period: "September 2023 - October 2023",
      description: "Developed a privacy-preserving machine learning model (using Random Forest) integrated with JavaScript behavioral analytics to enhance CAPTCHA security.",
      technologies: ["Python", "Random Forest", "JavaScript", "Flask", "PostgreSQL", "Postman"],
      achievements: [
        "Achieved 31% improvement in bot detection accuracy",
        "Incorporated privacy-preserving techniques for secure data usage",
        "Increased CAPTCHA bypass resistance by 31%"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Hospital Management System",
      period: "July 2023 - August 2023",
      description: "Architected and developed a full-stack Hospital Management System featuring secure user authentication (JWT) and role-based access control.",
      technologies: ["React TS", "Node.js", "Flask", "PostgreSQL", "JWT"],
      achievements: [
        "Improved operational efficiency by 40%",
        "Implemented secure authentication and optimized data flow",
        "Facilitated streamlined hospital workflows"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Churn Prediction System",
      period: "July 2023 - August 2023",
      description: "Designed and implemented a customer churn prediction model using Logistic Regression and Scikit-Learn, achieving 89% accuracy on telecom customer data.",
      technologies: ["Python", "Logistic Regression", "Scikit-Learn", "Data Analysis"],
      achievements: [
        "Achieved 89% accuracy in churn prediction",
        "Enhanced customer retention strategies",
        "Delivered actionable insights to stakeholders"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "B2B Inventory and Order Management System",
      period: "July 2023 - August 2023",
      description: "Built a real-time B2B inventory and order management web application using the MERN stack, incorporating JWT authentication.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      achievements: [
        "Achieved 98% uptime with real-time tracking features",
        "Enhanced user experience with secure login and dynamic analytics",
        "Reduced manual errors by 45%"
      ],
      github: "#",
      demo: "#"
    }
  ];
  
  return (
    <section id="projects" className="section-container bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="section-title reveal" data-direction="up">Projects</h2>
        <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
          A showcase of my technical projects and achievements
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="reveal" data-direction="up" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="card-glass h-full flex flex-col">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-xl font-bold">{project.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.period}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-border">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
