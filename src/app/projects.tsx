"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/blog-1.svg`,
    title: "LeafSpec - Plant Species Classification",
    desc: "Flutter app with TensorFlow CNN model for plant species classification from leaf images. Integrated MongoDB backend and deployed using ModelBit.",
  },
  {
    img: `${getImagePrefix()}image/blog2.svg`,
    title: "SOW Parts App - Automotive Platform",
    desc: "Cross-platform system using Next.js, NestJS, React Native, and MySQL for automotive parts procurement targeting maintenance centers and suppliers.",
  },
  {
    img: `${getImagePrefix()}image/blog3.svg`,
    title: "MLOps Environmental Monitoring",
    desc: "End-to-end MLOps pipeline with ARIMA/LSTM models for air quality prediction, using DVC, MLflow, Flask API, and Prometheus monitoring.",
  },
  {
    img: `${getImagePrefix()}image/blog4.svg`,
    title: "Banking Application",
    desc: "Blazor WebAssembly and .NET Web API headless banking system with Entity Framework Core, featuring customer management and transactions.",
  },
  {
    img: `${getImagePrefix()}image/blog-1.svg`,
    title: "Video Frame Prediction System",
    desc: "ConvLSTM and Transformer-based architectures for predicting future video frames on UCF101 dataset with Flask API and visualization dashboard.",
  },
  {
    img: `${getImagePrefix()}image/blog2.svg`,
    title: "CyberCrack Interview Trainer",
    desc: "Desktop application with Tkinter, OpenAI Whisper for real-time transcription, GPT-powered feedback, and license management system.",
  },
  {
    img: `${getImagePrefix()}image/blog3.svg`,
    title: "Dairy Product Delivery App",
    desc: "Flutter mobile application with Firebase backend featuring e-commerce functionality, admin dashboard, payment integration, and subscription services.",
  },
  {
    img: `${getImagePrefix()}image/blog4.svg`,
    title: "FLEX University Management System",
    desc: "ASP.NET and SQL Server platform for academic operations including student enrollment, course registration, and performance tracking.",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Featured Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          A showcase of my development work spanning AI/ML applications, 
          mobile development, web platforms, and enterprise solutions. 
          Each project demonstrates practical implementation of cutting-edge technologies.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
