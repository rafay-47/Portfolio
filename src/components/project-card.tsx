import {
  Card,
  CardBody,
  Typography,
  Chip,
  Button,
} from "@material-tailwind/react";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
  title: string;
  desc: string;
  category?: string;
  tech?: string;
  demoUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
}

export function ProjectCard({ title, desc, category, tech, demoUrl, githubUrl, websiteUrl }: ProjectCardProps) {
  const techStack = tech?.split('•').map(t => t.trim()).filter(Boolean) || [];
  
  return (
    <Card 
      className="card-hover border border-gray-200 hover:border-blue-300 bg-white shadow-md hover:shadow-xl group relative overflow-hidden"
      shadow={false}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardBody className="p-6 relative z-10">
        {/* Category Badge */}
        {category && (
          <div className="mb-4">
            <Chip
              value={category}
              className={`rounded-full text-xs font-medium px-3 py-1 ${
                category === 'AI/ML' ? 'bg-purple-100 text-purple-800' :
                category === 'Web Development' ? 'bg-blue-100 text-blue-800' :
                category === 'Mobile Development' ? 'bg-green-100 text-green-800' :
                category === 'Enterprise' ? 'bg-orange-100 text-orange-800' :
                category === 'Gaming' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}
            />
          </div>
        )}

        {/* Project Title */}
        <Typography 
          variant="h5" 
          className="mb-3 leading-snug text-blue-gray-900 group-hover:text-blue-600 transition-colors duration-300"
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography className="mb-6 font-normal !text-gray-600 text-sm leading-relaxed line-clamp-4">
          {desc}
        </Typography>

        {/* Tech Stack */}
        {tech && (
          <div className="mb-6">
            <Typography variant="small" className="font-semibold text-gray-800 mb-3">
              Technologies Used:
            </Typography>
            <div className="flex flex-wrap gap-2">
              {techStack.map((technology, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md hover:bg-gray-200 transition-colors"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {websiteUrl && (
            <Button
              size="sm"
              variant="outlined"
              color="green"
              className="flex items-center gap-2 hover:bg-green-50 border-green-300 text-green-600"
              onClick={() => window.open(websiteUrl, '_blank')}
            >
              <GlobeAltIcon className="h-4 w-4" />
              Website
            </Button>
          )}
          {demoUrl && (
            <Button
              size="sm"
              variant="outlined"
              color="blue"
              className="flex items-center gap-2 hover:bg-blue-50 border-blue-300 text-blue-600"
              onClick={() => window.open(demoUrl, '_blank')}
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              size="sm"
              variant="outlined"
              color="gray"
              className="flex items-center gap-2 hover:bg-gray-50"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <CodeBracketIcon className="h-4 w-4" />
              Code
            </Button>
          )}
        </div>

        {/* Hover indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
