
import React, { useEffect, useState } from 'react';
import { useRevealAnimation } from '../utils/animations';

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.level);
    }, index * 100);
    
    return () => clearTimeout(timer);
  }, [skill.level, index]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  const skills: Skill[] = [
    // Programming Languages
    { name: "Python", level: 90, category: "languages" },
    { name: "Java", level: 85, category: "languages" },
    { name: "SQL", level: 80, category: "languages" },
    { name: "JavaScript", level: 75, category: "languages" },
    { name: "HTML/CSS", level: 85, category: "languages" },
    { name: "TypeScript", level: 70, category: "languages" },
    
    // Technologies/Frameworks
    { name: "Machine Learning", level: 80, category: "technologies" },
    { name: "IoT", level: 85, category: "technologies" },
    { name: "React", level: 75, category: "technologies" },
    { name: "Data Science", level: 80, category: "technologies" },
    { name: "Full Stack Development", level: 75, category: "technologies" },
    { name: "Database Management", level: 80, category: "technologies" },
    
    // Tools
    { name: "VS Code", level: 95, category: "tools" },
    { name: "Jupyter Notebook", level: 90, category: "tools" },
    { name: "Git/GitHub", level: 85, category: "tools" },
    { name: "Postman", level: 80, category: "tools" },
    { name: "IntelliJ IDEA", level: 75, category: "tools" },
    { name: "PowerBI", level: 70, category: "tools" },
  ];
  
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title reveal" data-direction="up">My Skills</h2>
        <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
          A comprehensive overview of my technical abilities and expertise
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {categories.map((category, categoryIndex) => (
          <div key={category} className="reveal" data-direction="up" style={{ transitionDelay: `${categoryIndex * 0.2}s` }}>
            <div className="card-glass h-full">
              <h3 className="font-display text-xl font-bold mb-6 capitalize">
                {category}
              </h3>
              
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
