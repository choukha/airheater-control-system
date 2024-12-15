import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Section = ({ 
  title, 
  icon: Icon, 
  children, 
  defaultOpen = true,
  className = "",
  collapsible = true 
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultOpen);
  
  const headerClasses = collapsible 
    ? "cursor-pointer hover:bg-gray-50" 
    : "";

  return (
    <div className={`mb-8 bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <div 
        className={`px-6 py-4 flex justify-between items-center ${headerClasses}`}
        onClick={() => collapsible && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          {Icon && <Icon className="h-6 w-6 text-blue-600 mr-3" />}
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        {collapsible && (
          isExpanded ? 
            <ChevronUp className="h-6 w-6 text-gray-500" /> : 
            <ChevronDown className="h-6 w-6 text-gray-500" />
        )}
      </div>
      
      {(!collapsible || isExpanded) && (
        <div className="px-6 py-4 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

export default Section;