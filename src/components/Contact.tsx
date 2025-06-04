
import React, { useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { useRevealAnimation } from '../utils/animations';

const Contact: React.FC = () => {
  const { setupObserver } = useRevealAnimation();
  
  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, []);
  
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "john@example.com",
      href: "mailto:john@example.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/johndoe",
      href: "#"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/johndoe",
      href: "#"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "New York, NY",
      href: "#"
    }
  ];
  
  return (
    <section id="contact" className="section-container bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title reveal" data-direction="up">Get In Touch</h2>
          <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
            Let's connect and discuss opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal" data-direction="left">
            <div className="card-glass">
              <h3 className="font-display text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.href}
                    className="flex items-center p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="text-primary mr-4 group-hover:scale-110 transition-transform">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium">{contact.label}</p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="reveal" data-direction="right">
            <div className="card-glass">
              <h3 className="font-display text-2xl font-bold mb-6">Let's Work Together</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a website, web application, or just want to chat about tech, 
                I'd love to hear from you.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Feel free to reach out through any of the contact methods listed, 
                and I'll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:john@example.com" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
