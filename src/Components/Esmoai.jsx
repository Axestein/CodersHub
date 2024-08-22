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
    display: 'inline',
    fontSize: '3rem', // Reduced font size for better fit
    zIndex: 10,
    lineHeight: '1.2',
    textAlign: 'center',
  };

  const boxStyle = {
    background: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '8px',
    padding: '12px', // Reduced padding for better fit
    margin: '2px',
    width: '100%',
    maxWidth: '250px', // Reduced max width
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    backdropFilter: 'blur(18px)',
  };

  return (
    <div
      id="esmoai"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white py-8 px-4 overflow-hidden"
      style={{ 
        backgroundImage: `url(${grid})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        zIndex: 1,
      }}
    >
      {/* Heading */}
      <h1 className="font-extrabold mt-4 mb-2" style={headingStyle}>
        ESMO AI
      </h1>
      {/* Subheading */}
      <h2 className="text-lg font-medium text-white z-10 mb-4">
        Ask Your Doubts to Esmo
      </h2>

      {/* Chatbot Container */}
      <div className="w-full flex justify-center mb-6">
        <div className="w-full max-w-lg">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/NbJvaDWe0XDa1H-zkh6zg"
            width="100%"
            style={{ height: '100%', minHeight: '500px', border: 'none' }}
            frameBorder="0"
            title="Chatbot"
          />
        </div>
      </div>
    </div>
  );
}

export default Esmoai;
