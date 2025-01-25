import React from "react";

interface ButtonProps {
  text: string;
  link?: string;
  size?: "small" | "medium" | "large";
  type?: "link" | "submit" | "email";
  onClick?: () => void;
  email?: string;
  variant?: "white" | "black" | "dynamic"; // Added dynamic variant
}

export const Button: React.FC<ButtonProps> = ({
  text,
  link,
  size = "medium",
  type = "link",
  onClick,
  email,
  variant = "dynamic", // Changed default to dynamic
}) => {
  const sizeClasses = {
    small: "px-4 py-1 text-sm",
    medium: "px-5 py-2 text-base",
    large: "px-6 py-2 text-lg",
  };

  // Updated color scheme classes with dark mode support
  const colorClasses = {
    white: "border-white text-white hover:bg-white hover:text-black",
    black: "border-black text-black hover:bg-black hover:text-white",
    dynamic: "border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
  };

  // Get current variant colors considering dark mode
  const getCurrentColor = () => {
    if (variant === 'dynamic') {
      return 'black dark:white';
    }
    return variant;
  };

  // Get hover state colors considering dark mode
  const getHoverColor = () => {
    if (variant === 'dynamic') {
      return 'white dark:black';
    }
    return variant === 'white' ? 'black' : 'white';
  };

  // Button Content
  const buttonContent = (
    <>
      {/* Button Text */}
      <span className="transition-colors duration-100 antialiased tracking-wide font-thin leading-6 text-[1rem] font-[Sora, sans-serif]">
        {text}
      </span>

      {/* Button Icon */}
      <div className="relative flex items-center px-3">

        {/* Default state icon */}
        <div className="absolute flex opacity-100 transition-opacity duration-100 group-hover:opacity-0">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="8" y="8" width="10" height="10" rx="5" />
          </svg>
        </div>
        {/* Hover state icon */}
        <div className="absolute flex opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="22"
              height="22"
              rx="11"
              className={`fill-black dark:fill-white ${variant !== 'dynamic' ? `fill-${getCurrentColor()}` : ''}`}
            />
            <path
              d="M8.7 8.7v1.163h4.608L8.288 14.887l.825.825 5.02-5.02v4.607h1.172V8.7H8.7z"
              className={`fill-white dark:fill-black ${variant !== 'dynamic' ? `fill-${getHoverColor()}` : ''}`}
            />
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="11.5"
              className={`stroke-black dark:stroke-white ${variant !== 'dynamic' ? `stroke-${getCurrentColor()}` : ''}`}
            />
          </svg>
        </div>
      </div>
    </>
  );

  const baseClasses = `group relative flex items-center justify-center gap-2 border bg-transparent rounded-full font-thin uppercase transition-all duration-200 ${sizeClasses[size]} ${colorClasses[variant]}`;

  // Render based on type
  if (type === "link" && link) {
    return (
      <a href={link} className={`${baseClasses} no-underline`}>
        {buttonContent}
      </a>
    );
  }

  if (type === "email" && email) {
    return (
      <a href={`mailto:${email}`} className={`${baseClasses} no-underline`}>
        {buttonContent}
      </a>
    );
  }

  if (type === "submit") {
    return (
      <button type="submit" onClick={onClick} className={baseClasses}>
        {buttonContent}
      </button>
    );
  }

  // Fallback: Render as a normal button
  return (
    <button onClick={onClick} className={baseClasses}>
      {buttonContent}
    </button>
  );
};

export default Button;