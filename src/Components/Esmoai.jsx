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

  const boxStyle = {
    background: 'rgba(255, 255, 255, 0.4)', // More translucent background
    borderRadius: '8px',
    padding: '16px',
    margin: '2px',
    width: '100%',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    backdropFilter: 'blur(18px)', // Increased blur effect for more translucency
  };

  return (
    <div id="esmoai"
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
      {/* Beginner-Friendly Questions */}
      <div className="flex justify-center gap-4 mb-8">
        <div style={boxStyle} className="flex flex-col justify-center items-center">
          <p className="text-gray-800 font-medium">What is Machine learning?</p>
        </div>
        <div style={boxStyle} className="flex flex-col justify-center items-center">
          <p className="text-gray-800 font-medium">C Basics for beginners</p>
        </div>
      </div>
      {/* Input Bar */}
      <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg p-4 w-full max-w-lg">
        {/* Text Input */}
        <input
          type="text"
          placeholder="Type your doubts here..."
          className="flex-grow p-3 text-gray-600 bg-white border-none outline-none"
          style={{ fontSize: '1rem' }} // Increase font size for better readability
        />
        {/* Send Button */}
        <button className="bg-purple-600 p-3 rounded-lg flex items-center justify-center">
          <FiSend className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Esmoai;
