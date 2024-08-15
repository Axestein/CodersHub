import React, { useState } from 'react';
import Expand from '../assets/Expand.png'; // Ensure the path to your image is correct
import { IoClose } from 'react-icons/io5'; // Import the close icon

const Roadmap = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to handle the open popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to handle the close popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center pt-24 lg:pt-0 relative overflow-hidden">
      {/* Centered "Roadmap" Text */}
      <div className="text-center mb-12 mx-4 lg:mx-0 relative z-20">
        <h1 className="text-4xl font-extrabold mb-4">
          ROADMAPS
        </h1>
      </div>

      {/* Grid Layout for Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mx-auto relative z-20">
        {[
          { title: 'Frontend', description: 'A Frontend Developer creates the visual and interactive elements of websites and apps.' },
          { title: 'Backend', description: 'A Backend Developer builds and maintains the server-side logic, databases, and APIs.' },
          { title: 'DSA', description: 'Solve complex problems and optimize performance in software development.' },
          { title: 'AI/ML', description: 'Create systems that learn from data, make decisions, and improve over time.' },
          { title: 'Data Science', description: 'Extract insights and patterns from data to drive decision-making and innovation.' },
          { title: 'Blockchain', description: 'Develop decentralized systems for secure, transparent, and proof transactions.' },
          { title: 'Data Analyst', description: 'Analyze and interpret data to provide insights and support business decisions.' },
          { title: 'Dev Ops', description: 'Optimize and automate development and operations for faster, reliable delivery.' },
          { title: 'UX Design', description: 'Design user-centered interfaces that enhance usability and improve experience.' },
          { title: 'Android', description: 'Build and optimize apps for the Android operating system.' },
          { title: 'Cybersecurity', description: 'Protect systems and data from cyber threats and vulnerabilities.' },
          { title: 'iOS', description: 'Create and maintain applications for Apple\'s iOS devices.' },
        ].map((box, index) => (
          <div
            key={index}
            className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md cursor-pointer"
            onClick={openPopup}
          >
            <div className="flex items-center mb-2">
              <p className="text-lg font-semibold">{box.title}</p>
              <img src={Expand} alt="Expand Icon" className="w-5 h-5 ml-2" />
            </div>
            <p className="text-sm font-thin text-left">{box.description}</p>
          </div>
        ))}
      </div>

      {/* Popup Box */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-30">
          <div className="bg-black p-6 rounded-lg max-w-md w-full relative">
            <IoClose
              onClick={closePopup}
              className="absolute top-2 right-2 w-6 h-6 cursor-pointer text-white"
            />
            <h2 className="text-2xl font-bold mb-4">Options</h2>
            <div className="space-y-4">
              <button className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full">Roadmaps</button>
              <button className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full">Resources</button>
              <button className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full">YouTube</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;
