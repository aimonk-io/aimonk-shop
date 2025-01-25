import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({ className = '', ...props }) => {
  return (
    <input
      {...props}
      className={`bg-transparent border-b border-black/20 md:px-2 py-1 text-[14px] lg:text-[16px]  placeholder:text-left placeholder:text-[14px] lg:placeholder:text-[16px] focus:outline-none focus:border-blue-500 transition-colors ${className}`}
    />
  );
};