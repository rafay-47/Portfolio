"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Programming Languages",
    children:
      "Proficient in Python, C++, C#, Dart, Kotlin, Java, JavaScript, and SQL. Strong foundation in object-oriented programming and algorithm implementation.",
  },
  {
    icon: FingerPrintIcon,
    title: "AI & Machine Learning",
    children:
      "Experience with TensorFlow, Scikit-learn, NumPy, Pandas for building predictive models, CNNs, LSTMs, and implementing MLOps practices with MLflow and DVC.",
  },
  {
    icon: SwatchIcon,
    title: "Mobile App Development",
    children:
      "Specialized in Flutter and Dart for cross-platform mobile applications. Experience with Firebase Authentication, Cloud Firestore, and building responsive UIs.",
  },
  {
    icon: HashtagIcon,
    title: "Web Development",
    children:
      "Full-stack development with React.js, Next.js, Express.js, Nest.js, ASP.NET Core, and Blazor. Experienced in building scalable web applications and RESTful APIs.",
  },
  {
    icon: EyeIcon,
    title: "Cloud & DevOps",
    children:
      "Hands-on experience with AWS, Google Cloud, Firebase, Docker, Jenkins, Git, and CI/CD pipelines. Familiar with monitoring tools like Prometheus and Grafana.",
  },
  {
    icon: DocumentTextIcon,
    title: "Database Management",
    children:
      "Experience with SQL Server, MySQL, MongoDB, and Firebase Firestore. Proficient in database design, optimization, and Entity Framework Core integration.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          technical expertise
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Technology Stack & Skills
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          From AI/ML and mobile development to full-stack web applications, 
          I bring a comprehensive skill set to tackle diverse technical challenges 
          and deliver innovative solutions.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
