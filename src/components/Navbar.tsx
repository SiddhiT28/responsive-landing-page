import { ChevronDownIcon } from "lucide-react";
import { FloatingNav } from "./ui/floating-navbar";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/about",
    icon: <ChevronDownIcon size={20} />,
  },
  {
    name: "Resources",
    link: "/about",
    icon: <ChevronDownIcon size={20} />,
  },
  {
    name: "Pricing",
    link: "/contact",
  },
];

export function Navbar() {
  return (
    <div className="">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
