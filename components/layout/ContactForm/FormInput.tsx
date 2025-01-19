import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({ className = '', ...props }) => {
  return (
    <input
      {...props}
      className={`bg-transparent border-b border-black/20 md:px-2 py-1 text-center placeholder:text-left md:placeholder:text-center  placeholder:text-[14px] focus:outline-none focus:border-blue-500 transition-colors ${className}`}
    />
  );
};