import Navbar from "./navbar";

const navLinks = [
  {
    href: "/about",
    label: "About",
    submenu: [
      { href: "/about/team", label: "Team" },
      { href: "/about/company", label: "Company" },
    ],
  },
  {
    href: "/products",
    label: "Products",
    submenu: [
      { href: "/products/software", label: "Software" },
      { href: "/products/hardware", label: "Hardware" },
    ],
  },
  {
    href: "/solutions",
    label: "Solutions",
    submenu: [
      { href: "/solutions/cloud", label: "Cloud" },
      { href: "/solutions/on-premise", label: "On-Premise" },
    ],
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  // Pass null or an empty object if the Navbar expects a session prop
  return <Navbar navLinks={navLinks} />;
}
