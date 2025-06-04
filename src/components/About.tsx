
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
              <h3 className="font-display text-2xl font-bold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Results-oriented Computer Science Engineering student specializing in IoT and Full-Stack Development, 
                with demonstrated success in building scalable applications and leveraging data science for actionable insights.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Proficient in Python, Java, JavaScript frameworks (React, Node.js), and cloud platforms. 
                Eager to contribute technical expertise and problem-solving skills to challenging software engineering 
                roles at a leading technology company.
              </p>
            </div>
          </div>
          
          <div className="reveal" data-direction="right">
            <div className="card-glass">
              <h3 className="font-display text-2xl font-bold mb-6">Key Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Streamlined data collection and reporting procedures, reducing processing time by 20%</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Implemented automation solutions resulting in 15% increase in productivity</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Collaborated with 3+ cross-functional teams on strategic projects</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Achieved 89% accuracy in customer churn prediction models</span>
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
