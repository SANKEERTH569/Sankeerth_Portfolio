
import React, { useEffect } from 'react';
import { useRevealAnimation } from '../utils/animations';

const Skills: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "JavaScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "FastAPI"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "Linux", "CI/CD"]
    }
  ];
  
  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title reveal" data-direction="up">Skills & Technologies</h2>
          <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
            The tools and technologies I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="reveal card-glass"
              data-direction="up"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <h3 className="font-display font-semibold text-xl mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
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
