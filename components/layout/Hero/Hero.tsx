import { Button } from "@radix-ui/themes";
import React from "react";


export interface HeroProps {
  heading: string;
  subheading: string;
  callToActions: {
    label: string;
    href: string;
    style?: string; // Additional styles for specific buttons
  }[];
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ heading, subheading, callToActions, backgroundImage }) => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col justify-end text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-gradient-to-t from-black via-transparent to-transparent w-full h-full flex flex-col justify-end px-8 py-16">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{heading}</h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl">{subheading}</p>

        {/* Call to Action Buttons */}
        <div className="flex space-x-4 justify-end">
          {callToActions?.map((cta, index) => (
            <Button color="gray" variant="outline" highContrast key={index} asChild
              className={`px-6 py-2 text-sm md:text-base font-thin font-semibold transition hover:text-black ${cta.style || "bg-white text-black"}`}
            >
              <a href={cta.href}>{cta.label}</a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
