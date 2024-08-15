import React from 'react';
import grid from '../assets/grid.png'; // Ensure the path to your grid image is correct
import { FiSend } from 'react-icons/fi'; // Import the send icon from react-icons

const Esmoai = () => {
  const headingStyle = {
    background: 'linear-gradient(to right, #FF8C8C, #9B4F9F)', // Light pink to dark purple gradient
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline', // Change to inline to keep text in one line
    fontSize: '4rem', // Adjust size if necessary
    zIndex: 10, // Ensures it is above other content
    lineHeight: '1.2', // Adjust line height to make sure text fits well
    textAlign: 'center', // Center text alignment
  };

  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white py-16 px-4 overflow-hidden"
      style={{ 
        backgroundImage: `url(${grid})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        zIndex: 1 // Ensure the container is below the text content
      }}
    >
      {/* Heading */}
      <h1 className="font-extrabold mt-8 mb-4" style={headingStyle}>
        ESMO AI
      </h1>
      {/* Subheading */}
      <h2 className="text-xl font-medium text-white z-10 mb-6">
        Ask Your Doubts to Esmo
      </h2>
      {/* Input Bar */}
      <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg p-2 w-full max-w-md">
        {/* Text Input */}
        <input
          type="text"
          placeholder="Type your doubts here..."
          className="flex-grow p-2 text-gray-600 bg-white border-none outline-none"
        />
        {/* Send Button */}
        <button className="bg-purple-600 p-2 rounded-lg flex items-center justify-center">
          <FiSend className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Esmoai;
