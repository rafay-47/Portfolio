"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "FAST NUCES, Islamabad - Bachelor of Science in Computer Science (2021-2025)",
  },
  {
    icon: PuzzlePieceIcon,
    children: "InternnCraft Internship - Mobile App Development with Flutter & Firebase (June-Aug 2024)",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "LangChain for LLM Application Development - DeepLearning.AI Certification (Feb 2025)",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            Education & Experience
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Full-stack Software Engineer with internship experience in web, mobile, and 
            backend development. Currently pursuing Computer Science at FAST NUCES with 
            expertise in .NET, Flutter, Python, AI/ML, and MERN stack technologies.
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            <a href="#projects" className="flex items-center gap-2">
              view my projects
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-gray-900"
              />
            </a>
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
