import { Typography, Button } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

const QUICK_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                AR
              </div>
              <Typography variant="h5" className="font-bold text-white">
                Abdul Rafay
              </Typography>
            </div>
            <Typography className="text-gray-300 mb-4 leading-relaxed">
              Full-Stack Software Engineer specializing in AI/ML, web development, 
              and mobile applications. Building innovative solutions with cutting-edge technologies.
            </Typography>
            <div className="flex items-center gap-2 text-gray-300">
              <Typography variant="small">Made with</Typography>
              <HeartIcon className="h-4 w-4 text-red-500" />
              <Typography variant="small">by Abdul Rafay</Typography>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <Typography variant="h6" className="font-bold text-white mb-4">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Typography
                    as="a"
                    href={link.href}
                    variant="small"
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer block py-1"
                  >
                    {link.name}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-span-1">
            <Typography variant="h6" className="font-bold text-white mb-4">
              Get in Touch
            </Typography>
            <div className="space-y-2 mb-4">
              <Typography variant="small" className="text-gray-300">
                abdulrafay1747@gmail.com
              </Typography>
              <Typography variant="small" className="text-gray-300">
                +92 3115781747
              </Typography>
              <Typography variant="small" className="text-gray-300">
                Rawalpindi, Pakistan
              </Typography>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.open('https://www.linkedin.com/in/abdul-rafay-sheikh-40273a298/', '_blank')}
                className="w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button
                onClick={() => window.open('https://github.com/rafay-47', '_blank')}
                className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Typography className="text-gray-400 text-center md:text-left">
              &copy; {CURRENT_YEAR} Abdul Rafay. All rights reserved. Built with{" "}
              <a 
                href="https://www.material-tailwind.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Material Tailwind
              </a>{" "}
              and{" "}
              <a 
                href="https://nextjs.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Next.js
              </a>
            </Typography>
            
            <div className="flex items-center gap-4">
              <Button 
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
