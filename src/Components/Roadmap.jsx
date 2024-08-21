import React, { useState } from 'react';
import Expand from '../assets/Expand.png'; // Ensure the path to your image is correct
import { IoClose } from 'react-icons/io5'; // Import the close icon

const Roadmap = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  // Data for each box
  const boxData = [
    { title: 'Frontend', description: 'A Frontend Developer creates the visual and interactive elements of websites and apps.', links: ['https://drive.google.com/file/d/1NZ2JURtTNxn5zMnboZV_26h3Hc-Th3St/view?usp=sharing', 'https://docs.google.com/spreadsheets/d/1FLGMNx0uQu2AiY_QFeNn1XrnsuvI9tbb/edit?gid=487603146#gid=487603146', 'Frontend YouTube Link', 'Frontend Get Certified Link'] },
    { title: 'Backend', description: 'A Backend Developer builds and maintains the server-side logic, databases, and APIs.', links: ['https://drive.google.com/file/d/1ka-1z8fM4VtNFrTTn5OMNk7_dnwqOCKU/view?usp=sharing', 'https://docs.google.com/spreadsheets/d/1Fb1imZLhidPB_sYU0vBskgRHCU06TztR/edit?gid=1723041662#gid=1723041662', 'Backend YouTube Link', 'Backend Get Certified Link'] },
    { title: 'DSA', description: 'Solve complex problems and optimize performance in software development.', links: ['https://drive.google.com/file/d/16Pb3lO__0IpseCBMCyk3OIu5kezs23kY/view?usp=sharing', 'DSA Resources Link', 'DSA YouTube Link', 'DSA Get Certified Link'] },
    { title: 'AI/ML', description: 'Create systems that learn from data, make decisions, and improve over time.', links: ['https://drive.google.com/file/d/1IipyMKvbaXigWMQ1ySQp6694S2JgRwGz/view?usp=sharing', 'AI/ML Resources Link', 'AI/ML YouTube Link', 'AI/ML Get Certified Link'] },
    { title: 'Data Science', description: 'Extract insights and patterns from data to drive decision-making and innovation.', links: ['https://drive.google.com/file/d/1b11GQPgVIM04_jNlqK0FSw5Mj3W9mY-n/view?usp=sharing', 'Data Science Resources Link', 'Data Science YouTube Link', 'Data Science Get Certified Link'] },
    { title: 'Blockchain', description: 'Develop decentralized systems for secure, transparent, and proof transactions.', links: ['https://drive.google.com/file/d/1QCUvDpuCqY2wZFPtAPGV0zkMvw8Z6iDi/view?usp=sharing', 'Blockchain Resources Link', 'Blockchain YouTube Link', 'Blockchain Get Certified Link'] },
    { title: 'Data Analyst', description: 'Analyze and interpret data to provide insights and support business decisions.', links: ['https://drive.google.com/file/d/17k_ID82VtWISDiyRWw-Dg7b9WOQA9994/view?usp=sharing', 'Data Analyst Resources Link', 'Data Analyst YouTube Link', 'Data Analyst Get Certified Link'] },
    { title: 'Dev Ops', description: 'Optimize and automate development and operations for faster, reliable delivery.', links: ['https://drive.google.com/file/d/1LUG1KXicESjwpLPoU9oBzyyb9E8Ix8mT/view?usp=sharing', 'Dev Ops Resources Link', 'Dev Ops YouTube Link', 'Dev Ops Get Certified Link'] },
    { title: 'UX Design', description: 'Design user-centered interfaces that enhance usability and improve experience.', links: ['https://drive.google.com/file/d/1mwOvBsykxHm8ou4eO5gI1G5stEqSOikh/view?usp=sharing', 'UX Design Resources Link', 'UX Design YouTube Link', 'UX Design Get Certified Link'] },
    { title: 'Android', description: 'Build and optimize apps for the Android operating system.', links: ['https://drive.google.com/file/d/1Ruayr-aEwEfGDTup0CyN3Rk9Ub5O-nEB/view?usp=sharing', 'Android Resources Link', 'Android YouTube Link', 'Android Get Certified Link'] },
    { title: 'Cybersecurity', description: 'Protect systems and data from cyber threats and vulnerabilities.', links: ['https://drive.google.com/file/d/1WjcLcnlVPZfSUAdZI8R_Y7_7FXKMi__y/view?usp=sharing', 'Cybersecurity Resources Link', 'Cybersecurity YouTube Link', 'Cybersecurity Get Certified Link'] },
    { title: 'iOS', description: 'Create and maintain applications for Apple\'s iOS devices.', links: ['https://drive.google.com/file/d/1k5liwkTIjgp3FS5hnQFM2pI-xZVU6GMY/view?usp=sharing', 'iOS Resources Link', 'iOS YouTube Link', 'iOS Get Certified Link'] },
  ];

  // Function to handle opening a specific popup
  const openPopup = (index) => {
    setSelectedBox(index);
  };

  // Function to handle closing the popup
  const closePopup = () => {
    setSelectedBox(null);
  };

  return (
    <div id="roadmap" className="bg-black text-white min-h-screen flex flex-col items-center justify-center pt-24 lg:pt-0 relative overflow-hidden">
      {/* Centered "Roadmap" Text */}
      <div className="text-center mb-12 mx-4 lg:mx-0 relative z-20">
        <h1 className="text-4xl font-extrabold mb-4">
          ROADMAPS
        </h1>
      </div>

      {/* Grid Layout for Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mx-auto relative z-20">
        {boxData.map((box, index) => (
          <div
            key={index}
            className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md cursor-pointer"
            onClick={() => openPopup(index)}
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
      {selectedBox !== null && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-30">
          <div className="bg-black p-6 rounded-lg max-w-md w-full relative flex flex-col">
            {/* Close Icon and Title Container */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">{boxData[selectedBox].title}</h2>
              <IoClose
                onClick={closePopup}
                className="w-6 h-6 cursor-pointer text-white"
              />
            </div>
            <div className="space-y-4">
              {boxData[selectedBox].links.map((link, idx) => (
                <a key={idx} href={link} className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full block text-center" target="_blank" rel="noopener noreferrer">
                  {idx === 0 ? 'Roadmap' : idx === 1 ? 'Resources' : idx === 2 ? 'YouTube' : 'Get Certified'}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;
