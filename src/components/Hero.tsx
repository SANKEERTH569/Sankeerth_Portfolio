
import React, { useEffect } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { useRevealAnimation } from '../utils/animations';

const Hero: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal" data-direction="up">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="highlight-gradient">Balabhadra Sankeerth</span>
          </h1>
        </div>
        
        <div className="reveal" data-direction="up" style={{ transitionDelay: '0.2s' }}>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium">
            Computer Science Engineer | IoT Specialist | Full-Stack Developer
          </h2>
        </div>
        
        <div className="reveal" data-direction="up" style={{ transitionDelay: '0.4s' }}>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Results-oriented engineering student passionate about building scalable applications, 
            leveraging data science for actionable insights, and creating innovative IoT solutions 
            that make a real-world impact.
          </p>
        </div>
        
        <div className="reveal" data-direction="up" style={{ transitionDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="mailto:sankeerthbalabhadra@gmail.com" 
              className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-lg"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a 
              href="#" 
              className="btn-secondary inline-flex items-center gap-2 px-8 py-3 text-lg"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="reveal" data-direction="up" style={{ transitionDelay: '0.8s' }}>
          <button 
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary/50"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
