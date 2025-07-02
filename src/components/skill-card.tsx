import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <Card 
      className="card-hover bg-white border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-xl group"
      shadow={false}
    >
      <CardBody className="grid justify-center text-center p-8">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
          <Icon className="h-8 w-8" strokeWidth={2} />
        </div>
        <Typography 
          variant="h5" 
          color="blue-gray" 
          className="mb-4 group-hover:text-blue-600 transition-colors duration-300 font-semibold"
        >
          {title}
        </Typography>
        <Typography className="px-4 font-normal !text-gray-600 leading-relaxed text-sm">
          {children}
        </Typography>
        <div className="mt-6 mx-auto w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
