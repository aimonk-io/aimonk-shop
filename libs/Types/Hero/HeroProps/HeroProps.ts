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
  