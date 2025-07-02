"use client";

import { ProjectCard } from "@/components";
import { Typography, Button } from "@material-tailwind/react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

// AI/ML & Data Science Projects
const AI_ML_PROJECTS = [
  {
    title: "CyberCrack Interview Trainer",
    desc: "AI-powered desktop application for cybersecurity interview preparation. Integrates OpenAI Whisper for real-time audio transcription, GPT-based intelligent feedback system, screenshot-based code review, and enterprise license management with usage analytics via Prometheus metrics.",
    category: "AI/ML",
    tech: "Python • Tkinter • OpenAI Whisper • GPT API • Prometheus",
    websiteUrl: "https://www.getcybercrack.com/"
  },
  {
    title: "LeafSpec - Plant Species Classification (FYP)",
    desc: "Advanced Flutter application leveraging deep learning for plant species identification. Trained and compared multiple CNN architectures (LeNet-5, AlexNet, EfficientNet) with ResNet achieving optimal accuracy. Features include real-time classification, 25+ plant attributes display, Google Sign-In integration, and MongoDB backend with ModelBit deployment for scalable inference.",
    category: "AI/ML",
    tech: "Flutter • TensorFlow • Python • MongoDB • ModelBit • Firebase",
    githubUrl: "https://github.com/rafay-47/LeafSpec"
  },
  {
    title: "MLOps Environmental Monitoring & Prediction",
    desc: "Production-ready MLOps pipeline for real-time air quality forecasting. Implements ARIMA and LSTM time-series models with automated retraining, data versioning via DVC, experiment tracking with MLflow, and comprehensive monitoring using Prometheus/Grafana. Containerized Flask API provides scalable AQI predictions with live performance dashboards.",
    category: "AI/ML",
    tech: "Python • MLflow • DVC • Flask • Prometheus • Grafana • Docker",
    githubUrl: "https://github.com/rafay-47/Environmental-Monitoring-and-Pollution-Prediction-System"
  },
  {
    title: "Video Frame Prediction System",
    desc: "Research-focused deep learning system comparing ConvLSTM, PredRNN, and Transformer architectures for video frame prediction on UCF101 dataset. Features engineered preprocessing pipelines, Flask REST API for model inference, and interactive dashboard for frame sequence visualization and video reconstruction download.",
    category: "AI/ML",
    tech: "TensorFlow • Python • Flask • Computer Vision • Deep Learning",
    githubUrl: "https://github.com/rafay-47/Video-Prediction-using-deep-learning"
  },
  {
    title: "Time-Table Scheduling Problem Solver",
    desc: "Advanced optimization solution for academic timetabling using machine learning algorithms. Implements genetic algorithms and constraint satisfaction techniques to solve complex scheduling problems. Features conflict resolution, resource optimization, and automated timetable generation with Jupyter Notebook analysis and visualization.",
    category: "AI/ML",
    tech: "Python • Jupyter Notebook • Genetic Algorithms • Optimization • Machine Learning",
    githubUrl: "https://github.com/rafay-47/Time-Table-Scheduling-Problem"
  },
];

// Web Development Projects
const WEB_PROJECTS = [
  {
    title: "SOW Parts App - Automotive E-commerce Platform",
    desc: "Comprehensive automotive parts procurement ecosystem with multi-role architecture. Next.js responsive web portal for quote management and order tracking, NestJS backend with MySQL for inventory and lifecycle management, plus dedicated admin panel for user approval and supplier/driver coordination across the entire supply chain.",
    category: "Web Development",
    tech: "Next.js • NestJS • MySQL • React Native • TypeScript"
  },
  {
    title: "SBMTech Cybersecurity Consultancy Website",
    desc: "Modern, responsive consultancy platform built with Next.js 15 and Tailwind CSS. Features real-time cybersecurity news integration, dynamic service pages, server-side MailerSend API for contact forms, and fully optimized mobile-first design with custom reusable UI components for professional client engagement.",
    category: "Web Development",
    tech: "Next.js 15 • TypeScript • Tailwind CSS • MailerSend API"
  },
  {
    title: "Banking Application - Headless Architecture",
    desc: "Enterprise-grade banking system using modern headless architecture. Blazor WebAssembly frontend with ASP.NET Core Web API backend, Entity Framework Core database-first integration, comprehensive banking operations (transfers, deposits, withdrawals), customer profile management, and third-party API integration for Scottish bank holidays.",
    category: "Web Development",
    tech: "Blazor WebAssembly • ASP.NET Core • EF Core • SQL Server"
  },
  {
    title: "Homeschooling Resource Hub",
    desc: "Comprehensive educational platform with intelligent content categorization by age, class, and region. Features dual-interface design with admin dashboard for content management and moderation, plus responsive public portal with advanced filtering capabilities for seamless resource discovery by parents, teachers, and students.",
    category: "Web Development",
    tech: "React • HTML5 • CSS3 • JavaScript • Responsive Design"
  },
];

// Mobile Development Projects
const MOBILE_PROJECTS = [
  {
    title: "Dairy Product Delivery App - Full E-commerce Suite",
    desc: "Complete dairy delivery ecosystem with dual interfaces for customers and administrators. Features comprehensive e-commerce functionality including product browsing, cart management, subscription services, order tracking, push notifications, secure payment integration with Stripe, digital wallet functionality, and analytics reporting dashboard.",
    category: "Mobile Development",
    tech: "Flutter • Firebase • Stripe API • Push Notifications • Analytics",
    githubUrl: "https://github.com/rafay-47/DairyApp"
  },
  {
    title: "Expense Tracker App",
    desc: "Personal finance management application built with Flutter for cross-platform compatibility. Features expense categorization, budget tracking, visual analytics with charts and graphs, recurring transaction management, and comprehensive financial reporting. Demonstrates clean architecture principles and modern mobile app development practices.",
    category: "Mobile Development",
    tech: "Flutter • Dart • Local Storage • Charts • Financial Analytics",
    githubUrl: "https://github.com/rafay-47/Expense-Tracker-App"
  },
  {
    title: "Auto Assist - Car Care & Maintenance App",
    desc: "Comprehensive automotive care platform connecting car owners with certified mechanics. Features real-time chat functionality, intelligent appointment booking system, digital repair history tracking, integrated marketplace for car parts and supplies, inquiry management system, and intuitive UI/UX designed with Figma for optimal user experience.",
    category: "Mobile Development",
    tech: "Flutter • Dart • Firebase • Figma • Real-time Chat",
    githubUrl: "https://github.com/rafay-47/Auto_Assist"
  },
  {
    title: "Mentor Me - Professional Networking Platform",
    desc: "LinkedIn-style networking application specifically designed for mentor-mentee relationships. Built with native Android development using Kotlin, features intelligent matching based on expertise domains and interests, real-time Firebase chat integration, professional profile management, and goal-oriented mentorship tracking systems.",
    category: "Mobile Development",
    tech: "Kotlin • Android SDK • Firebase • Real-time Database",
    githubUrl: "https://github.com/rafay-47/MentorMe"
  },
];

// Enterprise Solutions
const ENTERPRISE_PROJECTS = [
  {
    title: "FLEX University Management System",
    desc: "Robust academic management platform streamlining university operations at enterprise scale. Comprehensive features include student enrollment automation, course registration workflows, intelligent timetable scheduling, performance tracking analytics, administrative efficiency tools, and centralized data management using ASP.NET and SQL Server architecture.",
    category: "Enterprise",
    tech: "ASP.NET • SQL Server • Entity Framework • Academic Management",
    githubUrl: "https://github.com/rafay-47/Flex-Management-System"
  },
];

// Gaming & Assembly Projects
const GAMING_PROJECTS = [
  {
    title: "Brick-Breaker Game",
    desc: "Classic arcade-style Brick Breaker game implemented entirely in Assembly language. Demonstrates low-level programming skills, memory management, and game logic implementation using assembly instructions. Features collision detection, scoring system, paddle controls, and multiple levels with increasing difficulty.",
    category: "Gaming",
    tech: "Assembly Language • Low-level Programming • Game Development",
    githubUrl: "https://github.com/rafay-47/Brick-Breaker"
  },
];

const ALL_PROJECTS = [
  ...AI_ML_PROJECTS,
  ...WEB_PROJECTS,
  ...MOBILE_PROJECTS,
  ...ENTERPRISE_PROJECTS,
  ...GAMING_PROJECTS,
];

const CATEGORIES = ['All', 'AI/ML', 'Web Development', 'Mobile Development', 'Enterprise', 'Gaming'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(project => project.category === selectedCategory);

  const renderProjectSection = (projects: any[], title: string, description: string) => (
    <div className="mb-20 animate-fade-in-up">
      <div className="mb-16 text-center">
        <Typography variant="h3" color="blue-gray" className="mb-4 font-bold">
          {title}
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-600 lg:w-8/12"
        >
          {description}
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((props, idx) => (
          <div key={idx} className="animate-fade-in-up" style={{animationDelay: `${idx * 0.1}s`}}>
            <ProjectCard {...props} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="section-padding px-8 bg-gray-50">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-6 font-bold">
          Project Portfolio
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-600 lg:w-6/12 mb-8"
        >
          A comprehensive showcase of my development expertise across AI/ML, web development, 
          mobile applications, and enterprise solutions. Each project demonstrates practical 
          implementation of cutting-edge technologies and real-world problem-solving.
        </Typography>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <FunnelIcon className="h-5 w-5 text-gray-500 mt-2 mr-2" />
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={selectedCategory === category ? "filled" : "outlined"}
              color={selectedCategory === category ? "blue" : "gray"}
              className={`${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                  : "hover:bg-gray-100"
              } transition-all duration-300`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto">
        {selectedCategory === 'All' ? (
          <>
            {renderProjectSection(
              AI_ML_PROJECTS,
              "AI/ML & Data Science",
              "Advanced machine learning projects featuring deep learning, computer vision, MLOps pipelines, and AI-powered applications with production-ready deployment and monitoring."
            )}
            
            {renderProjectSection(
              WEB_PROJECTS,
              "Web Development",
              "Full-stack web applications built with modern frameworks, featuring responsive design, API integration, database management, and scalable architecture patterns."
            )}
            
            {renderProjectSection(
              MOBILE_PROJECTS,
              "Mobile Development",
              "Cross-platform and native mobile applications with intuitive UI/UX, real-time features, cloud integration, and comprehensive user engagement systems."
            )}
            
            {renderProjectSection(
              ENTERPRISE_PROJECTS,
              "Enterprise Solutions",
              "Large-scale enterprise applications designed for academic institutions and business operations with robust data management and workflow automation."
            )}
            
            {renderProjectSection(
              GAMING_PROJECTS,
              "Gaming & Assembly",
              "Low-level programming projects demonstrating assembly language proficiency and game development skills with direct hardware interaction and memory management."
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="animate-fade-in-up" style={{animationDelay: `${idx * 0.1}s`}}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
