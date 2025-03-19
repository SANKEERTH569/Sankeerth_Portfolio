
import React, { useEffect } from 'react';
import { GraduationCap, Briefcase, Calendar, Award } from 'lucide-react';
import { useRevealAnimation } from '../utils/animations';

const ResumeItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  organization: string;
  date: string;
  description?: string | React.ReactNode;
  index: number;
}> = ({ icon, title, organization, date, description, index }) => {
  return (
    <div 
      className="reveal card-glass hover:shadow-lg transition-all duration-300 group"
      style={{ transitionDelay: `${index * 0.1}s` }}
      data-direction="up"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-100 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold">{title}</h3>
          <p className="text-primary font-medium">{organization}</p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          {description && (
            typeof description === 'string' ? (
              <p className="text-muted-foreground">{description}</p>
            ) : (
              description
            )
          )}
        </div>
      </div>
    </div>
  );
};

const Resume: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  const education = [
    {
      title: "B.E, Computer Science With IOT",
      organization: "Sathyabama Institute Of Science And Technology, Chennai",
      date: "2022 - Present",
      description: "CGPA: 8.21"
    },
    {
      title: "Board of Intermediate Education",
      organization: "Tirumala Junior Kalasala, Andhra Pradesh",
      date: "2020 - 2022",
      description: "Percentage: 86.7%"
    },
    {
      title: "Board of Secondary Education",
      organization: "Tirumala E.M High School, Andhra Pradesh",
      date: "2019 - 2020",
      description: "CGPA: 10.0"
    }
  ];
  
  const certifications = [
    {
      title: "Data Science Certification",
      organization: "Teachnook",
      date: "2023",
    },
    {
      title: "Software Conceptual Design",
      organization: "NPTEL",
      date: "2023",
    },
    {
      title: "Generative AI Learning Path",
      organization: "Google",
      date: "2023",
    }
  ];
  
  const experiences = [
    {
      title: "Geospatical Technology and Application",
      organization: "Centre For Remote Sensing and Geoinformatics (SIST)",
      date: "September 2024",
      description: "Worked on Geospatical Technology, focusing on map visualization and information analysis."
    }
  ];
  
  return (
    <section id="resume" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title reveal" data-direction="up">My Resume</h2>
        <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
          My academic journey and professional development
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="font-display text-2xl font-bold mb-6 reveal" data-direction="up">Education</h3>
          <div className="space-y-6">
            {education.map((item, index) => (
              <ResumeItem 
                key={index}
                icon={<GraduationCap size={20} />}
                title={item.title}
                organization={item.organization}
                date={item.date}
                description={item.description}
                index={index}
              />
            ))}
          </div>
          
          <h3 className="font-display text-2xl font-bold mb-6 mt-12 reveal" data-direction="up">Experience</h3>
          <div className="space-y-6">
            {experiences.map((item, index) => (
              <ResumeItem 
                key={index}
                icon={<Briefcase size={20} />}
                title={item.title}
                organization={item.organization}
                date={item.date}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-display text-2xl font-bold mb-6 reveal" data-direction="up">Certifications</h3>
          <div className="space-y-6">
            {certifications.map((item, index) => (
              <ResumeItem 
                key={index}
                icon={<Award size={20} />}
                title={item.title}
                organization={item.organization}
                date={item.date}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-12 reveal" data-direction="up">
            <div className="card-glass">
              <h3 className="font-display text-2xl font-bold mb-4">Technical Skills</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Core Java', 'SQL', 'React TS', 'HTML 5', 'CSS', 'JS'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Developer Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Visual Studio Code', 'Jupyter Notebook', 'Github', 'IntelliJ IDEA', 'Git', 'Postman'].map((tool, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Familiar With</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Full Stack Web Development', 'Internet Of Things', 'Data Science', 'PowerBI'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Cloud/Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {['MySQL', 'Postgre SQL'].map((db, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {db}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Team Work', 'Communication'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Communication Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Telugu', 'English'].map((language, index) => (
                      <span key={index} className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
