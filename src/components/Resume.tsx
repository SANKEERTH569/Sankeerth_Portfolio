
import React, { useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useRevealAnimation } from '../utils/animations';

const Resume: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  const education = [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      period: "2018 - 2022",
      location: "New York, NY"
    },
    {
      institution: "Tech Academy",
      degree: "Full-Stack Web Development Bootcamp",
      period: "2017 - 2018",
      location: "San Francisco, CA"
    }
  ];
  
  const workExperience = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Full-Stack Developer",
      period: "2022 - Present",
      location: "Remote",
      achievements: [
        "Led development of 3 major web applications serving 10,000+ users",
        "Improved application performance by 40% through optimization",
        "Mentored 5 junior developers and conducted code reviews"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      period: "2020 - 2022",
      location: "Austin, TX",
      achievements: [
        "Built responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Reduced bundle size by 30% through code splitting and optimization"
      ]
    }
  ];
  
  return (
    <section id="resume" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title reveal" data-direction="up">Resume</h2>
        <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
          My educational background and work experience
        </p>
      </div>
      
      <div className="space-y-16">
        {/* Education */}
        <div className="reveal" data-direction="up">
          <h3 className="font-display text-2xl font-bold mb-8 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="card-glass">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h4 className="font-display text-xl font-semibold">{edu.institution}</h4>
                  <div className="flex items-center text-muted-foreground text-sm mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                </div>
                <p className="text-lg font-medium mb-2">{edu.degree}</p>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  {edu.location}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Work Experience */}
        <div className="reveal" data-direction="up" style={{ transitionDelay: '0.2s' }}>
          <h3 className="font-display text-2xl font-bold mb-8 text-center">Work Experience</h3>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <div key={index} className="card-glass">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="font-display text-xl font-semibold">{work.company}</h4>
                    <p className="text-lg font-medium text-primary">{work.position}</p>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {work.period}
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {work.location}
                </div>
                <ul className="space-y-2">
                  {work.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
