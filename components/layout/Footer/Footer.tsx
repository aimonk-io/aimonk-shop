// Footer.tsx
import { FooterProps, FooterSection } from "@/libs/Types/Footer/Index";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { ChevronDown, ChevronUp } from "lucide-react";

import React, { useState } from "react";


// Collapsible Section Component
const CollapsibleSection: React.FC<FooterSection> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-2 flex justify-between items-center"
      >
        <h4 className="font-sans proxima-nova font-bold text-xs uppercase">
          {title}
        </h4>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {isOpen && (
        <ul className="px-2 pb-4 space-y-2">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="font-serif Georgia text-xs hover:underline block py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ sections, socialLinks }) => {
    return (
      <footer className="bg-gray-100 text-gray-800">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Mobile/Tablet View */}
          <div className="lg:hidden">
            {sections.map((section, index) => (
              <CollapsibleSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
  
          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-[50%_25%_25%] gap-2">
            <div className="container px-2 py-6 grid grid-cols-4 gap-2">
              {sections.map((section, index) => (
                <div key={index}>
                  <h4 className="font-sans proxima-nova font-bold mb-2 text-xs uppercase">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          className="font-serif Georgia text-xs hover:underline"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
  
            {/* Newsletter Signup */}
            <div className="px-2 py-6">
              <h4 className="font-bold mb-4 text-xs uppercase">Join our list:</h4>
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
                  <label htmlFor="men" className="text-xs">Mens</label>
  
                  <Checkbox.Root
                    className="flex items-center justify-center w-6 h-6 border border-gray-400 bg-white rounded"
                    id="women"
                  >
                    <Checkbox.Indicator>
                      <CheckIcon className="w-6 h-6" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label htmlFor="women" className="text-xs">Womens</label>
  
                  <Checkbox.Root
                    className="flex items-center justify-center w-6 h-6 border border-gray-400 bg-white rounded"
                    id="kids"
                  >
                    <Checkbox.Indicator>
                      <CheckIcon className="w-6 h-6" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label htmlFor="kids" className="text-xs">Kids</label>
                </div>
  
                {/* Terms and Policies */}
                <div>
                  <label className="flex items-center space-x-2">
                    <Checkbox.Root className="flex items-center justify-center w-8 h-6 border border-gray-400 bg-white rounded">
                      <Checkbox.Indicator>
                        <CheckIcon className="w-5 h-6" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <span className="text-xs ml-2">
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
  
          {/* Newsletter Section for Mobile/Tablet */}
          <div className="lg:hidden mt-6 px-2">
            <h4 className="font-bold mb-4 text-xs uppercase">Join our list:</h4>
            <div className="space-y-4">
              {/* Checkbox Options */}
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center space-x-2">
                  <Checkbox.Root
                    className="flex items-center justify-center w-6 h-6 border border-gray-400 bg-white rounded"
                    id="men-mobile"
                  >
                    <Checkbox.Indicator>
                      <CheckIcon className="w-6 h-6" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <span className="text-xs">Mens</span>
                </label>
  
                <label className="flex items-center space-x-2">
                  <Checkbox.Root
                    className="flex items-center justify-center w-6 h-6 border border-gray-400 bg-white rounded"
                    id="women-mobile"
                  >
                    <Checkbox.Indicator>
                      <CheckIcon className="w-6 h-6" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <span className="text-xs">Womens</span>
                </label>
  
                <label className="flex items-center space-x-2">
                  <Checkbox.Root
                    className="flex items-center justify-center w-6 h-6 border border-gray-400 bg-white rounded"
                    id="kids-mobile"
                  >
                    <Checkbox.Indicator>
                      <CheckIcon className="w-6 h-6" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <span className="text-xs">Kids</span>
                </label>
              </div>
  
              {/* Terms and Policies */}
              <div>
                <label className="flex items-center space-x-2">
                  <Checkbox.Root className="flex items-center justify-center w-6 h-6 border border-gray-400 bg-white rounded">
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
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0">
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full border border-gray-400 rounded-t sm:rounded-l sm:rounded-t-none px-4 py-2 text-sm focus:outline-none"
                />
                <button className="w-full sm:w-auto bg-gray-800 text-white px-6 py-2 rounded-b sm:rounded-r sm:rounded-b-none text-sm">
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
