"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { 
  ArrowDownIcon, 
  DocumentArrowDownIcon, 
  EnvelopeIcon,
  MapPinIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";
import { getImagePrefix } from "../../utils/utils";

function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 min-h-screen flex items-center">
      <div className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto animate-fade-in-left">
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for Opportunities
          </div>

          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-6 lg:text-5xl !leading-tight text-3xl font-bold"
          >
            Welcome to{" "}
            <span className="gradient-text">Abdul Rafay's</span>
            <br />
            Software Engineering Portfolio!
          </Typography>
          
          <Typography
            variant="lead"
            className="mb-8 !text-gray-600 md:pr-16 xl:pr-28 leading-relaxed"
          >
            I'm Abdul Rafay, a Computer Science student at FAST NUCES, Islamabad, and 
            a passionate Full-Stack Software Engineer from Rawalpindi, Pakistan. 
            Specializing in AI/ML, mobile app development, and web technologies with 
            hands-on experience in Flutter, .NET, Python, and the MERN stack.
          </Typography>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <EnvelopeIcon className="h-5 w-5 text-blue-600" />
              <div>
                <Typography variant="small" className="font-medium text-gray-900">
                  Email
                </Typography>
                <Typography variant="small" className="text-gray-600">
                  abdulrafay1747@gmail.com
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <MapPinIcon className="h-5 w-5 text-blue-600" />
              <div>
                <Typography variant="small" className="font-medium text-gray-900">
                  Location
                </Typography>
                <Typography variant="small" className="text-gray-600">
                  Rawalpindi, Pakistan
                </Typography>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button 
              size="lg"
              className="btn-primary flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={scrollToContact}
            >
              <EnvelopeIcon className="h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg"
              variant="outlined"
              color="blue"
              className="flex items-center gap-2 hover:bg-blue-50"
              onClick={scrollToProjects}
            >
              <ArrowDownIcon className="h-5 w-5" />
              View My Work
            </Button>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 mb-8">
            <Typography variant="small" className="text-gray-600 font-medium">
              Connect with me:
            </Typography>
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.open('https://www.linkedin.com/in/abdul-rafay-sheikh-40273a298/', '_blank')}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors group"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button
                onClick={() => window.open('https://github.com/rafay-47', '_blank')}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-900 rounded-lg flex items-center justify-center transition-colors group"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <Typography variant="h4" className="font-bold text-blue-600 mb-1">
                15+
              </Typography>
              <Typography variant="small" className="text-gray-600">
                Projects Completed
              </Typography>
            </div>
            <div className="text-center">
              <Typography variant="h4" className="font-bold text-purple-600 mb-1">
                3+
              </Typography>
              <Typography variant="small" className="text-gray-600">
                Years Experience
              </Typography>
            </div>
            <div className="text-center">
              <Typography variant="h4" className="font-bold text-green-600 mb-1">
                10+
              </Typography>
              <Typography variant="small" className="text-gray-600">
                Technologies
              </Typography>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-right relative">
          {/* Background decorative elements */}
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          
          <Image
            width={1024}
            height={1024}
            alt="Abdul Rafay portfolio showcase"
            src={`${getImagePrefix()}image/home-right.png`}
            className="h-[36rem] w-full rounded-xl object-cover shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300"
            priority
          />
          
          {/* Floating badge */}
          <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="flex items-center gap-2">
              <AcademicCapIcon className="h-5 w-5 text-blue-600" />
              <div>
                <Typography variant="small" className="font-medium text-gray-900">
                  CS Student
                </Typography>
                <Typography variant="small" className="text-gray-600">
                  FAST NUCES
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
