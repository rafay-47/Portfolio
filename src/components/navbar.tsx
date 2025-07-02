import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "About",
    icon: UserCircleIcon,
    href: "#about",
  },
  {
    name: "Projects",
    icon: RectangleStackIcon,
    href: "#projects",
  },
  {
    name: "Skills",
    icon: CommandLineIcon,
    href: "#skills",
  },
  {
    name: "Contact",
    icon: Squares2X2Icon,
    href: "#contact",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target="_self"
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-blue-500 transition-colors"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  // Add smooth scroll behavior
  React.useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const id = target.href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setOpen(false); // Close mobile menu
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Typography 
          as="a" 
          href="#home"
          color="blue-gray" 
          className="text-lg font-bold cursor-pointer hover:text-blue-500 transition-colors"
        >
          Abdul Rafay
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="text" className="hover:bg-gray-100">Resume</Button>
          <a href="#contact">
            <Button color="gray" className="hover:bg-gray-800">Hire Me</Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <Button variant="text" className="hover:bg-gray-100">Resume</Button>
            <a href="#contact">
              <Button color="gray" className="hover:bg-gray-800">Hire Me</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
