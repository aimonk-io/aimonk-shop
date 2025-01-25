import React from 'react';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({ className = '', ...props }) => {
  return (
    <textarea
      {...props}
      className={`bg-transparent border-b border-black/20 md:px-2 py-1 text-[14px] lg:text-[16px] placeholder:text-left placeholder:text-[14px] lg:placeholder:text-[16px] focus:outline-none focus:border-blue-500 transition-colors resize-none ${className}`}
      rows={1}
    />
  );
};