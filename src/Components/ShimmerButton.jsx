import React, { useState } from 'react';

const ShimmerButton = ({ children, className, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`relative overflow-hidden bg-black text-white py-2 px-4 rounded-lg border border-gray-300 shadow-lg ${className} ${isHovered ? 'border-purple-500' : ''}`}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <span className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {children}
      </span>
      <div
        className={`absolute inset-0 border-2 border-transparent rounded-lg ${isHovered ? 'border-purple-500' : 'border-gray-500'} bg-gradient-to-r ${isHovered ? 'from-purple-800 via-purple-600 to-purple-800' : 'from-gray-800 via-gray-600 to-gray-800'} opacity-50 ${isHovered ? 'animate-shimmer' : ''}`}
      />
    </button>
  );
};

export default ShimmerButton;
