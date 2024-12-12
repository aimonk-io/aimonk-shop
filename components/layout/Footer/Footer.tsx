// Footer.tsx
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections: FooterSection[];
  socialLinks: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({ sections, socialLinks }) => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-2" style={{ gridTemplateColumns: "50% 25% 25%" }}>
        <div className="container mx-auto px-2 py-6 grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* Section Links */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4
                className="font-sans proxima-nova, sans-serif, font-bold mb-2 text-xs"
                style={{ textTransform: "uppercase" }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="font-serif Georgia,sans-serif, text-xs hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="container mx-auto px-2 py-6 col-span-1 col-span-1">
          <h4 className="font-bold mb-4 text-xs uppercase">
            Join our list:
          </h4>
          <div className="space-y-4">
            {/* Checkbox Options */}
            <div className="flex items-center space-x-2">
              <Checkbox.Root
                className="flex items-center justify-center w-6 h-6 border border-gray-400 bg-white rounded"
                id="men"
              >
                <Checkbox.Indicator>
                  <CheckIcon className="w-6 h-6" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="men" className="text-xs">
                Mens
              </label>

              <Checkbox.Root
                className="flex items-center justify-center w-6 h-6 border border-gray-400 bg-white rounded"
                id="women"
              >
                <Checkbox.Indicator>
                  <CheckIcon className="w-6 h-6" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="women" className="text-xs">
                Womens
              </label>

              <Checkbox.Root
                className="flex items-center justify-center w-6 h-6 border border-gray-400 bg-white rounded"
                id="kids"
              >
                <Checkbox.Indicator>
                  <CheckIcon className="w-6 h-6" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="kids" className="text-xs">
                Kids
              </label>
            </div>

            {/* Terms and Policies */}
            <div>
              <label className="flex items-center space-x-2">
                <Checkbox.Root className="flex items-center justify-center w-6 h-6 border border-gray-400 bg-white  rounded">
                  <Checkbox.Indicator>
                    <CheckIcon className="w-6 h-6" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <span className="text-xs">
                  I agree to the terms and conditions, privacy policy, and cookie policy.
                </span>
              </label>
            </div>

            {/* Email Input */}
            <div className="flex items-center">
              <input
                type="email"
                placeholder="EMAIL"
                className="flex-grow border border-gray-400 rounded-l px-4 py-2 text-sm focus:outline-none"
              />
              <button className="bg-gray-800 text-white px-6 py-2 rounded-r text-sm">
                Submit
              </button>
            </div>
          </div>
        </div>


      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:underline">
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm mt-4 md:mt-0">&copy; 2024 Your Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
