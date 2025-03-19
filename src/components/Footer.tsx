
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-foreground text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <a href="#" className="font-display font-bold text-xl mb-6">
            Balabhadra Sankeerth
          </a>
          
          <div className="flex space-x-4 mb-6">
            <a 
              href="#" 
              className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:sankeerthbalabhadra@gmail.com" 
              className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-white/60 text-sm mb-8">
            <p>Thank you for visiting my portfolio. Let's connect!</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Balabhadra Sankeerth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
