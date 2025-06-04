
import React, { useEffect, useState } from 'react';
import { 
  Code, 
  Database, 
  Monitor, 
  Smartphone, 
  Cloud, 
  GitBranch,
  FileCode,
  Globe,
  Server,
  BarChart3,
  Brain,
  Cpu,
  Settings
} from 'lucide-react';
import { useRevealAnimation } from '../utils/animations';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
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
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="text-primary">{skill.icon}</div>
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
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
    { name: "Python", level: 90, category: "Programming Languages", icon: <Code size={16} /> },
    { name: "Java", level: 85, category: "Programming Languages", icon: <Code size={16} /> },
    { name: "JavaScript", level: 85, category: "Programming Languages", icon: <FileCode size={16} /> },
    { name: "TypeScript", level: 80, category: "Programming Languages", icon: <FileCode size={16} /> },
    { name: "SQL", level: 85, category: "Programming Languages", icon: <Database size={16} /> },
    { name: "HTML5", level: 90, category: "Programming Languages", icon: <Globe size={16} /> },
    { name: "CSS", level: 85, category: "Programming Languages", icon: <Globe size={16} /> },
    
    // Frameworks & Libraries
    { name: "React.js", level: 85, category: "Frameworks & Libraries", icon: <Monitor size={16} /> },
    { name: "Node.js", level: 80, category: "Frameworks & Libraries", icon: <Server size={16} /> },
    { name: "Express.js", level: 80, category: "Frameworks & Libraries", icon: <Server size={16} /> },
    { name: "Flask", level: 75, category: "Frameworks & Libraries", icon: <Server size={16} /> },
    { name: "Pandas", level: 85, category: "Frameworks & Libraries", icon: <BarChart3 size={16} /> },
    { name: "NumPy", level: 85, category: "Frameworks & Libraries", icon: <BarChart3 size={16} /> },
    { name: "Scikit-Learn", level: 80, category: "Frameworks & Libraries", icon: <Brain size={16} /> },
    { name: "Matplotlib", level: 75, category: "Frameworks & Libraries", icon: <BarChart3 size={16} /> },
    
    // Databases
    { name: "PostgreSQL", level: 85, category: "Databases", icon: <Database size={16} /> },
    { name: "MySQL", level: 80, category: "Databases", icon: <Database size={16} /> },
    { name: "MongoDB", level: 75, category: "Databases", icon: <Database size={16} /> },
    
    // Tools & Platforms
    { name: "Git", level: 90, category: "Tools & Platforms", icon: <GitBranch size={16} /> },
    { name: "Docker", level: 70, category: "Tools & Platforms", icon: <Settings size={16} /> },
    { name: "Power BI", level: 75, category: "Tools & Platforms", icon: <BarChart3 size={16} /> },
    { name: "VS Code", level: 95, category: "Tools & Platforms", icon: <Monitor size={16} /> },
    { name: "Jupyter Notebook", level: 90, category: "Tools & Platforms", icon: <Monitor size={16} /> },
    { name: "Postman", level: 85, category: "Tools & Platforms", icon: <Monitor size={16} /> },
    { name: "Android Studio", level: 75, category: "Tools & Platforms", icon: <Smartphone size={16} /> },
    { name: "IntelliJ IDEA", level: 80, category: "Tools & Platforms", icon: <Monitor size={16} /> },
    
    // Cloud & OS
    { name: "Linux (Red Hat)", level: 75, category: "Cloud & OS", icon: <Cpu size={16} /> },
    { name: "Windows", level: 90, category: "Cloud & OS", icon: <Cpu size={16} /> },
    { name: "MongoDB Atlas", level: 70, category: "Cloud & OS", icon: <Cloud size={16} /> },
    { name: "Oracle Cloud", level: 65, category: "Cloud & OS", icon: <Cloud size={16} /> }
  ];
  
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title reveal" data-direction="up">Technical Skills</h2>
        <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
          A comprehensive overview of my technical expertise and proficiency levels
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, categoryIndex) => (
          <div key={category} className="reveal" data-direction="up" style={{ transitionDelay: `${categoryIndex * 0.1}s` }}>
            <div className="card-glass h-full">
              <h3 className="font-display text-xl font-bold mb-6 text-center">
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
