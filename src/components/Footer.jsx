import { Github, Linkedin, Instagram, Link as LinkIcon, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aman-yadav-a01367283/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/amanydv777', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/aman.ydv20/', label: 'Instagram' },
    { icon: LinkIcon, href: 'https://linktr.ee/amanydv770', label: 'Linktree' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Aman<span className="text-primary-500">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating scalable web applications and robust backend systems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-500 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: amanydv770@gmail.com</li>
              <li>Phone: +91 7317208443</li>
              <li>Location: Kanpur, Uttar Pradesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Aman Yadav. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Developed & Designed with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Aman Yadav
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
