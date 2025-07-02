"use client";

import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

const TESTIMONIALS = [
  {
    rating: 5,
    title: "Exceptional Technical Skills & Professional Approach",
    content: "Abdul Rafay demonstrated exceptional skills during his internship at InternnCraft. His proficiency in Flutter development, Firebase integration, and ability to implement CI/CD pipelines impressed the entire team. He consistently delivered high-quality code and showed great problem-solving abilities. A dedicated and talented developer with strong potential for growth.",
    author: "Development Team Lead",
    position: "InternnCraft - Mobile Development Team",
    company: "InternnCraft"
  },
  {
    rating: 5,
    title: "Outstanding Academic Performance & Innovation",
    content: "Abdul Rafay has consistently shown excellence in his computer science studies at FAST NUCES. His projects, particularly in AI/ML and mobile development, demonstrate both technical proficiency and creative problem-solving. His work on the LeafSpec plant classification app and MLOps environmental monitoring system showcases his ability to apply theoretical knowledge to real-world challenges.",
    author: "Academic Supervisor",
    position: "FAST NUCES, Islamabad - Computer Science Department",
    company: "FAST NUCES"
  },
];

export function Testimonial() {
  return (
    <section className="section-padding px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container max-w-6xl mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography color="blue-gray" className="mb-2 font-bold uppercase text-sm tracking-wider text-blue-600">
            testimonials
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-6 font-bold">
            Professional Recognition
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-600 lg:w-8/12"
          >
            Feedback from colleagues and supervisors during internships and 
            collaborative projects. Building strong professional relationships 
            through quality work and dedication.
          </Typography>
        </div>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card 
              key={index}
              className="card-hover bg-white border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl group"
              shadow={false}
            >
              <CardBody className="p-8">
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>

                {/* Quote Icon */}
                <div className="text-center mb-4">
                  <svg className="w-8 h-8 mx-auto text-blue-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                {/* Title */}
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-6 font-bold text-center group-hover:text-blue-600 transition-colors duration-300"
                >
                  &quot;{testimonial.title}&quot;
                </Typography>
                
                {/* Content */}
                <Typography className="mb-8 text-center font-normal !text-gray-600 italic leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </Typography>
                
                {/* Author Info */}
                <div className="border-t border-gray-200 pt-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Typography variant="h6" className="text-white font-bold">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </Typography>
                  </div>
                  <Typography variant="h6" color="blue-gray" className="mb-1 font-semibold">
                    {testimonial.author}
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal !text-gray-500 mb-1"
                  >
                    {testimonial.position}
                  </Typography>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <Typography variant="small" className="font-medium text-gray-700">
              Available for new opportunities and collaborations
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
