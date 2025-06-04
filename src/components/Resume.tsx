
import React, { useEffect } from 'react';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';
import { useRevealAnimation } from '../utils/animations';

const Resume: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  const education = [
    {
      institution: "Sathyabama Institute of Science and Technology",
      degree: "B.E., Computer Science Engineering (Specialization: IoT)",
      period: "June 2022 - Present",
      location: "Chennai, India",
      grade: "CGPA: 8.15"
    },
    {
      institution: "Tirumala Junior Kalasala",
      degree: "Board of Intermediate Education - MPC",
      period: "2018 - August 2021",
      location: "A.P, India",
      grade: "Percentage: 86.7%"
    }
  ];
  
  const workExperience = [
    {
      company: "Centre For Remote Sensing and Geoinformatics (SIST)",
      position: "Geospatial Technology Intern",
      period: "September 2024",
      location: "In-Office",
      achievements: [
        "Streamlined data collection and reporting procedures, reducing processing time by 20%",
        "Implemented process improvements and automation solutions, resulting in 15% increase in productivity",
        "Collaborated with 3+ cross-functional teams to gather requirements and define project scopes",
        "Produced 15+ comprehensive reports and presentations summarizing findings and recommendations",
        "Conducted in-depth market research and analysis, identifying 10+ key trends and insights"
      ]
    }
  ];
  
  const certifications = [
    {
      name: "Oracle Fusion Cloud Applications HCM Foundations Associate",
      issuer: "Oracle",
      date: "March 2023",
      description: "Validated foundational knowledge of Oracle Fusion HCM Cloud modules and core HR configurations"
    },
    {
      name: "Software Conceptual Design",
      issuer: "NPTEL",
      date: "March 2023",
      description: "Solidified understanding of software design principles, architectural patterns, and system modeling"
    },
    {
      name: "Data Science",
      issuer: "Teachnook",
      date: "March 2023",
      description: "Mastered core data science techniques including data preprocessing, visualization, and supervised ML model development"
    }
  ];
  
  return (
    <section id="resume" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title reveal" data-direction="up">Resume</h2>
        <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
          My educational background, work experience, and certifications
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
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {edu.location}
                  </div>
                  <div className="font-medium text-primary mt-1 sm:mt-0">
                    {edu.grade}
                  </div>
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
                  <Briefcase className="w-4 h-4 mr-1" />
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
        
        {/* Certifications */}
        <div className="reveal" data-direction="up" style={{ transitionDelay: '0.4s' }}>
          <h3 className="font-display text-2xl font-bold mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card-glass">
                <div className="flex items-start mb-3">
                  <Award className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <h4 className="font-display text-lg font-semibold leading-tight">{cert.name}</h4>
                </div>
                <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-3">{cert.date}</p>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
