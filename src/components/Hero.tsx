
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  const textToType = ["Developer", "IoT Specialist", "ML Enthusiast", "Full Stack Developer"];
  
  useEffect(() => {
    if (!typedTextRef.current) return;
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseDuration = 1000;
    
    const typeText = () => {
      const currentText = textToType[currentTextIndex];
      
      if (isDeleting) {
        // Deleting text
        currentCharIndex--;
        typingSpeed = 50; // Faster when deleting
      } else {
        // Typing text
        currentCharIndex++;
        typingSpeed = 150; // Normal typing speed
      }
      
      if (typedTextRef.current) {
        typedTextRef.current.textContent = currentText.substring(0, currentCharIndex);
      }
      
      // Check if word is complete
      if (!isDeleting && currentCharIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = pauseDuration; // Pause before deleting
      } 
      // Check if deletion is complete
      else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % textToType.length;
      }
      
      setTimeout(typeText, typingSpeed);
    };
    
    const typingTimeout = setTimeout(typeText, 1000);
    
    return () => clearTimeout(typingTimeout);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-8 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-8 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <p className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6 animate-fade-in">
            Welcome to my portfolio
          </p>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hi, I'm Balabhadra Sankeerth
          </h1>
          
          <div className="flex justify-center items-center h-12 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="font-display text-2xl md:text-3xl font-semibold text-muted-foreground">
              I'm a <span ref={typedTextRef} className="text-primary"></span>
              <span className="ml-1 animate-pulse-subtle">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Dedicated and disciplined team player committed to long-term learning and career advancement,
            ready to contribute to both organizational and personal growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
