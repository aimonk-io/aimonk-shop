import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { CollapsibleSectionProps } from '@/libs/Types/CollapsibleSection/Index';


const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, 
  children,
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

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
        <div className="px-2 pb-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;