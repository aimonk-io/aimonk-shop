import Footer from "./Footer";

const footerSections = [
  {
    title: "Shop",
    links: [
      { label: "Mens", href: "/mens" },
      { label: "Womens", href: "/womens" },
      { label: "Kids", href: "/kids" },
      { label: "Treats", href: "/treats" },
      { label: "Brands", href: "/brands" },
    ],
  },
  {
    title: "Aimonk",
    links: [
      { label: "About", href: "/about" },
      { label: "News", href: "/news" },
      { label: "Locations", href: "/locations" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Aimonk", href: "/aimonk" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Footwear Sizing", href: "/footwear-sizing" },
      { label: "Returns/Exchanges", href: "/returns-exchanges" },
      { label: "FAQs", href: "/faqs" },
      { label: "The Loyalty Program", href: "/loyalty" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Privacy Statement", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Facebook", href: "https://facebook.com" },
];


export default function Foter(){
    return <Footer sections={footerSections} socialLinks={socialLinks} />
};
