
import React, { useEffect } from 'react';
import { Code, Database, Cloud, Wrench, Users, Globe, Cpu, BarChart3 } from 'lucide-react';
import { useRevealAnimation } from '../utils/animations';

const Skills: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "Flask", "Pandas", "NumPy", "Scikit-Learn"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "MongoDB Atlas"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "VS Code", "Jupyter Notebook", "Postman", "Android Studio"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & OS",
      skills: ["Linux (Red Hat)", "Windows", "Oracle Cloud", "OCI Foundations"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Technologies",
      skills: ["Machine Learning", "IoT", "Full Stack Development", "Data Science"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Visualization",
      skills: ["Power BI", "Matplotlib", "Data Visualization", "Statistical Analysis"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Soft Skills",
      skills: ["Team Work", "Communication", "Problem Solving", "Leadership"]
    }
  ];
  
  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title reveal" data-direction="up">Technical Skills</h2>
          <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
            A comprehensive overview of my technical expertise and competencies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="reveal card-glass group hover:shadow-lg transition-all duration-300"
              data-direction="up"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-display font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
