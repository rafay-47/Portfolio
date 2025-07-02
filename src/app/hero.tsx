"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to Abdul Rafay&apos;s <br /> Software Engineering Portfolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Abdul Rafay, a Computer Science student at FAST NUCES, Islamabad, and 
            a passionate Full-Stack Software Engineer from Rawalpindi, Pakistan. 
            Specializing in AI/ML, mobile app development, and web technologies with 
            hands-on experience in Flutter, .NET, Python, and the MERN stack.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Get in touch
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input 
                color="gray" 
                label="Enter your email" 
                size="lg" 
                value="abdulrafay1747@gmail.com"
                disabled
              />
              <a href="#contact">
                <Button color="gray" className="w-full px-4 md:w-[12rem] hover:bg-gray-800">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500">
            Available for internships and{" "}
            <a href="#contact" className="font-medium underline transition-colors">
              collaborative projects
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="Abdul Rafay portfolio showcase"
          src={`${getImagePrefix()}image/home-right.png`}
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
