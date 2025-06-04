
import React, { useEffect } from 'react';
import { useRevealAnimation } from '../utils/animations';

const About: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  return (
    <section id="about" className="section-container bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title reveal" data-direction="up">About Me</h2>
          <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
            Get to know more about my background and passion for technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal" data-direction="left">
            <div className="card-glass">
              <h3 className="font-display text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                meaningful digital experiences. With over 5 years of experience in web development, 
                I've had the privilege of working with startups and established companies alike.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity and has evolved into a career where I get to 
                solve complex problems and bring creative ideas to life through code.
              </p>
            </div>
          </div>
          
          <div className="reveal" data-direction="right">
            <div className="card-glass">
              <h3 className="font-display text-2xl font-bold mb-6">What I Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Design and develop responsive web applications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Create intuitive user interfaces and experiences</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Optimize applications for performance and scalability</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Collaborate with teams to deliver high-quality solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
