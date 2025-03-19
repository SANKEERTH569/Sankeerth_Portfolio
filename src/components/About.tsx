
import React, { useEffect } from 'react';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';
import { useRevealAnimation } from '../utils/animations';

const About: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  return (
    <section id="about" className="section-container bg-secondary/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="reveal" data-direction="left">
            <h2 className="section-title highlight-gradient">About Me</h2>
            <p className="text-lg mb-6">
              I'm a Computer Science student specializing in Internet of Things at Sathyabama Institute Of Science And Technology, Chennai.
              I'm passionate about using technology to solve real-world problems and continuously expanding my skill set in various domains.
            </p>
            <p className="text-lg mb-6">
              My academic journey has equipped me with a strong foundation in computer science fundamentals,
              while my personal projects have allowed me to apply this knowledge in practical scenarios.
            </p>
            <p className="text-lg mb-6">
              I'm particularly interested in Machine Learning, IoT, and Full Stack Web Development, and I'm always eager to collaborate on innovative projects.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span>+91 9398958886</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <a href="mailto:sankeerthbalabhadra@gmail.com" className="hover:text-primary transition-colors">
                  sankeerthbalabhadra@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github size={18} className="text-primary" />
                <a href="#" className="hover:text-primary transition-colors">
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={18} className="text-primary" />
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            <a href="#resume" className="btn-primary">
              View My Resume
            </a>
          </div>
        </div>
        
        <div className="reveal" data-direction="right">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 p-1">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                <div className="text-3xl font-display font-bold highlight-gradient">BS</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-200 rounded-full blur-3xl -z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
