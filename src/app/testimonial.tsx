"use client";

import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

export function Testimonial() {
  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Professional Recognition
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Feedback from colleagues and supervisors during internships and 
            collaborative projects. Building strong professional relationships 
            through quality work and dedication.
          </Typography>
        </div>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          <Card color="transparent" shadow={true} className="p-8 border border-gray-200">
            <CardBody className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-6 font-bold"
              >
                "Exceptional Technical Skills & Professional Approach"
              </Typography>
              <Typography className="mb-6 text-lg font-normal !text-gray-600 italic">
                "Abdul Rafay demonstrated exceptional skills during his internship at InternnCraft. 
                His proficiency in Flutter development, Firebase integration, and ability to 
                implement CI/CD pipelines impressed the entire team. He consistently delivered 
                high-quality code and showed great problem-solving abilities. A dedicated and 
                talented developer with strong potential for growth."
              </Typography>
              <div className="border-t border-gray-200 pt-6">
                <Typography variant="h6" color="blue-gray" className="mb-1 font-semibold">
                  Development Team Lead
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal !text-gray-500"
                >
                  InternnCraft - Mobile Development Team
                </Typography>
              </div>
            </CardBody>
          </Card>

          <Card color="transparent" shadow={true} className="p-8 border border-gray-200">
            <CardBody className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-6 font-bold"
              >
                "Outstanding Academic Performance & Innovation"
              </Typography>
              <Typography className="mb-6 text-lg font-normal !text-gray-600 italic">
                "Abdul Rafay has consistently shown excellence in his computer science studies at FAST NUCES. 
                His projects, particularly in AI/ML and mobile development, demonstrate both technical proficiency 
                and creative problem-solving. His work on the LeafSpec plant classification app and MLOps 
                environmental monitoring system showcases his ability to apply theoretical knowledge to real-world challenges."
              </Typography>
              <div className="border-t border-gray-200 pt-6">
                <Typography variant="h6" color="blue-gray" className="mb-1 font-semibold">
                  Academic Supervisor
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal !text-gray-500"
                >
                  FAST NUCES, Islamabad - Computer Science Department
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
