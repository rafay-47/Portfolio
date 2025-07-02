import { Typography, Button } from "@material-tailwind/react";

const LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Abdul Rafay - Software Engineer Portfolio.{" "}
            Built with{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Material Tailwind
            </a>{" "}
            and Next.js
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link.name}>
                <Typography
                  as="a"
                  href={link.href}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  {link.name}
                </Typography>
              </li>
            ))}
            <Button color="gray" className="hover:bg-gray-800">Get Resume</Button>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
