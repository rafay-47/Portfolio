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
    <section className="section-padding px-8 bg-white">
      <div className="container mx-auto mb-20 text-center">
        <div className="mb-4">
          <Typography color="blue-gray" className="mb-2 font-bold uppercase text-sm tracking-wider text-blue-600">
            technical expertise
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-6 font-bold">
            Technology Stack & Skills
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-600 lg:w-10/12"
          >
            From AI/ML and mobile development to full-stack web applications, 
            I bring a comprehensive skill set to tackle diverse technical challenges 
            and deliver innovative solutions.
          </Typography>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((props, idx) => (
            <div 
              key={idx} 
              className="animate-fade-in-up" 
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <SkillCard {...props} />
            </div>
          ))}
        </div>

        {/* Additional Skills Overview */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <Typography variant="h3" color="blue-gray" className="mb-4 font-bold">
              Technical Proficiency Overview
            </Typography>
            <Typography variant="lead" className="text-gray-600">
              A breakdown of my technical skills and experience levels
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Typography variant="h5" className="text-white font-bold">15+</Typography>
              </div>
              <Typography variant="h6" className="mb-2 font-semibold text-gray-900">
                Projects
              </Typography>
              <Typography variant="small" className="text-gray-600">
                Completed across various domains
              </Typography>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <Typography variant="h5" className="text-white font-bold">10+</Typography>
              </div>
              <Typography variant="h6" className="mb-2 font-semibold text-gray-900">
                Technologies
              </Typography>
              <Typography variant="small" className="text-gray-600">
                Programming languages & frameworks
              </Typography>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Typography variant="h5" className="text-white font-bold">3+</Typography>
              </div>
              <Typography variant="h6" className="mb-2 font-semibold text-gray-900">
                Years
              </Typography>
              <Typography variant="small" className="text-gray-600">
                of development experience
              </Typography>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <Typography variant="h5" className="text-white font-bold">5+</Typography>
              </div>
              <Typography variant="h6" className="mb-2 font-semibold text-gray-900">
                Domains
              </Typography>
              <Typography variant="small" className="text-gray-600">
                AI/ML, Web, Mobile, Enterprise
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
