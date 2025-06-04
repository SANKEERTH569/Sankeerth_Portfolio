
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
      value: "sankeerthbalabhadra@gmail.com",
      href: "mailto:sankeerthbalabhadra@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9398958886",
      href: "tel:+919398958886"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "#"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "GitHub Profile",
      href: "#"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Chennai, India",
      href: "#"
    }
  ];
  
  return (
    <section id="contact" className="section-container bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title reveal" data-direction="up">Get In Touch</h2>
          <p className="section-subtitle reveal" data-direction="up" style={{ transitionDelay: '0.1s' }}>
            Let's connect and discuss opportunities to work together
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
                Whether you're looking for a full-stack developer, a data science enthusiast, 
                or someone passionate about IoT solutions, I'd love to hear from you.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Feel free to reach out through any of the contact methods listed, 
                and I'll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:sankeerthbalabhadra@gmail.com" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
