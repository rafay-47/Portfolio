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
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: `Interest: ${formData.interestType}\n\nMessage: ${formData.message}`,
          subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          interestType: "Web Development"
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Get In Touch
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to start a project or just want to chat? Feel free to reach out 
          through the contact form, and let's discuss how we can work together.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Feel free to reach out for project collaborations or opportunities. 
                I&apos;ll get back to you within 24 hours.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +92 3115781747
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  abdulrafay1747@gmail.com
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  Rawalpindi, Pakistan
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-linkedin text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-twitter text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
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

              <form onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="eg. Lucas"
                    required
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="eg. Jones"
                    required
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="eg. lucas@mail.com"
                  required
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  What are you interested in?
                </Typography>
                <div className="-ml-3 mb-14">
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="interestType"
                    label="Web Development"
                    value="Web Development"
                    checked={formData.interestType === "Web Development"}
                    onChange={handleInputChange}
                  />
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="interestType"
                    label="Mobile App Development"
                    value="Mobile App Development"
                    checked={formData.interestType === "Mobile App Development"}
                    onChange={handleInputChange}
                  />
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="interestType"
                    label="AI/ML Projects"
                    value="AI/ML Projects"
                    checked={formData.interestType === "AI/ML Projects"}
                    onChange={handleInputChange}
                  />
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="interestType"
                    label="Collaboration"
                    value="Collaboration"
                    checked={formData.interestType === "Collaboration"}
                    onChange={handleInputChange}
                  />
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="interestType"
                    label="Other"
                    value="Other"
                    checked={formData.interestType === "Other"}
                    onChange={handleInputChange}
                  />
                </div>
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or how we can work together..."
                  required
                  rows={4}
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button 
                    className="w-full md:w-fit" 
                    color="gray" 
                    size="md"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
