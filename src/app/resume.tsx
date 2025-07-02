"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children: "FAST NUCES, Islamabad - Bachelor of Science in Computer Science (2021-2025)",
    type: "education"
  },
  {
    icon: BriefcaseIcon,
    children: "InternnCraft Internship - Mobile App Development with Flutter & Firebase (June-Aug 2024)",
    type: "experience"
  },
  {
    icon: TrophyIcon,
    children: "LangChain for LLM Application Development - DeepLearning.AI Certification (Feb 2025)",
    type: "certification"
  },
];

export function Resume() {
  return (
    <section className="section-padding px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="col-span-1 animate-fade-in-left">
            <Typography color="blue-gray" className="mb-2 font-bold uppercase text-sm tracking-wider text-blue-600">
              about me
            </Typography>
            <Typography variant="h2" color="blue-gray" className="mb-6 font-bold">
              Education & Experience
            </Typography>
            <Typography className="mb-8 w-full font-normal !text-gray-600 leading-relaxed">
              Full-stack Software Engineer with internship experience in web, mobile, and 
              backend development. Currently pursuing Computer Science at FAST NUCES with 
              expertise in .NET, Flutter, Python, AI/ML, and MERN stack technologies.
            </Typography>

            {/* Key Highlights */}
            <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
              <Typography variant="h6" className="mb-4 font-semibold text-gray-900">
                Key Highlights
              </Typography>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <Typography variant="small" className="text-gray-700">
                    3+ years of development experience
                  </Typography>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <Typography variant="small" className="text-gray-700">
                    15+ projects across multiple domains
                  </Typography>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <Typography variant="small" className="text-gray-700">
                    Proficient in 10+ programming languages
                  </Typography>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <Typography variant="small" className="text-gray-700">
                    Specialized in AI/ML and full-stack development
                  </Typography>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="text"
                color="blue"
                className="flex items-center gap-2 hover:bg-blue-50 p-0"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View My Projects
                  <ArrowRightIcon
                    strokeWidth={3}
                    className="h-4 w-4 text-blue-600"
                  />
                </a>
              </Button>
            </div>
          </div>

          <div className="col-span-1 animate-fade-in-right">
            <div className="space-y-8">
              {RESUME_ITEMS.map((props, idx) => (
                <div 
                  key={idx} 
                  className="animate-fade-in-up" 
                  style={{animationDelay: `${idx * 0.2}s`}}
                >
                  <ResumeItem {...props} />
                </div>
              ))}
            </div>

            {/* Additional Info Card */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <Typography variant="h6" className="mb-4 font-semibold text-gray-900">
                Current Status
              </Typography>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between">
                  <Typography variant="small" className="text-gray-600">
                    Graduation Year
                  </Typography>
                  <Typography variant="small" className="font-medium text-gray-900">
                    2025
                  </Typography>
                </div>
                <div className="flex items-center justify-between">
                  <Typography variant="small" className="text-gray-600">
                    Availability
                  </Typography>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <Typography variant="small" className="font-medium text-green-700">
                      Open to Opportunities
                    </Typography>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Typography variant="small" className="text-gray-600">
                    Preferred Role
                  </Typography>
                  <Typography variant="small" className="font-medium text-gray-900">
                    Full-Stack Developer
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
