import React from 'react';

const PrimaryButton = ({ href, target, children, variant = "primary" }) => {
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };

  return (
    <a 
      href={href} 
      target={target} 
      className={`${variantStyles[variant]} px-4 py-2 rounded-md transition-colors duration-200 flex items-center space-x-2`}
    >
      {children}
    </a>
  );
};

export default PrimaryButton;