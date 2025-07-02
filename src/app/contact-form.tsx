"use client";

import React, { useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
  Alert,
} from "@material-tailwind/react";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/solid";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  interestType: string;
};

type SubmitStatus = "success" | "error" | null;

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    interestType: "Web Development"
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        interestType: "Web Development"
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-6 font-bold">
          Get In Touch
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-600"
        >
          Ready to start a project or just want to chat? Feel free to reach out 
          through the contact form, and let&apos;s discuss how we can work together.
        </Typography>
      </div>

      <div className="container mx-auto">
        <Card shadow={true} className="border border-gray-200 overflow-hidden">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 gap-0">
            {/* Contact Information Side */}
            <div className="w-full col-span-3 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 lg:p-12">
              <Typography variant="h4" color="white" className="mb-4 font-bold">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mb-10 text-gray-300 leading-relaxed"
              >
                Feel free to reach out for project collaborations or opportunities. 
                I&apos;ll get back to you within 24 hours.
              </Typography>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <PhoneIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <Typography variant="small" className="text-gray-300 mb-1">
                      Phone Number
                    </Typography>
                    <Typography variant="h6" color="white">
                      +92 3115781747
                    </Typography>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <EnvelopeIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <Typography variant="small" className="text-gray-300 mb-1">
                      Email Address
                    </Typography>
                    <Typography variant="h6" color="white">
                      abdulrafay1747@gmail.com
                    </Typography>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <Typography variant="small" className="text-gray-300 mb-1">
                      Location
                    </Typography>
                    <Typography variant="h6" color="white">
                      Rawalpindi, Pakistan
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <Typography variant="h6" color="white" className="mb-4">
                  Follow Me
                </Typography>
                <div className="flex items-center gap-4">
                  <IconButton 
                    variant="text" 
                    color="white"
                    className="hover:bg-white/10 transition-colors"
                    onClick={() => window.open('https://www.linkedin.com/in/abdul-rafay-sheikh-40273a298/', '_blank')}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </IconButton>
                  <IconButton 
                    variant="text" 
                    color="white"
                    className="hover:bg-white/10 transition-colors"
                    onClick={() => window.open('https://github.com/rafay-47', '_blank')}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </IconButton>
                </div>
              </div>
            </div>

            {/* Contact Form Side */}
            <div className="w-full col-span-4 p-8 lg:p-12 bg-white">
              {submitStatus === "success" && (
                <Alert color="green" className="mb-6">
                  <Typography variant="h6" color="white">
                    Message sent successfully! 
                  </Typography>
                  <Typography color="white">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </Typography>
                </Alert>
              )}
              
              {submitStatus === "error" && (
                <Alert color="red" className="mb-6">
                  <Typography variant="h6" color="white">
                    Error sending message
                  </Typography>
                  <Typography color="white">
                    Please try again or contact me directly at abdulrafay1747@gmail.com
                  </Typography>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="outlined"
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="outlined"
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>

                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="outlined"
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />

                <div>
                  <Typography
                    variant="small"
                    className="mb-4 font-medium text-gray-900"
                  >
                    What are you interested in?
                  </Typography>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["Web Development", "Mobile App Development", "AI/ML Projects", "Collaboration", "Other"].map((option) => (
                      <div key={option}>
                        {/* @ts-ignore */}
                        <Radio
                          color="blue"
                          name="interestType"
                          label={option}
                          value={option}
                          checked={formData.interestType === option}
                          onChange={handleInputChange}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="outlined"
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="form-input"
                />

                <div className="flex justify-end">
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-8 py-3 flex items-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
