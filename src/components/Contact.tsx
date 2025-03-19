
import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useRevealAnimation } from '../utils/animations';

const Contact: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  return (
    <section id="contact" className="section-container bg-secondary/50">
      <div className="text-center mb-16">
        <h2 className="section-title reveal" data-direction="up">Get In Touch</h2>
        <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
          Have a project in mind or want to discuss potential opportunities? Let's connect!
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="reveal" data-direction="left">
          <div className="card-glass h-full">
            <h3 className="font-display text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg text-primary mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 9398958886</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg text-primary mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:sankeerthbalabhadra@gmail.com" className="hover:text-primary transition-colors">
                      sankeerthbalabhadra@gmail.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="mailto:42732006@sathyabama.ac.in" className="hover:text-primary transition-colors">
                      42732006@sathyabama.ac.in
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg text-primary mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="reveal" data-direction="right">
          <div className="card-glass">
            <h3 className="font-display text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
