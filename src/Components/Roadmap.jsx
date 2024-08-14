import React from 'react';
import Expand from '../assets/Expand.png'; // Ensure the path to your image is correct

const Roadmap = () => {
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
        {/* Box 1 */}
        <div className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md">
          <div className="flex items-center mb-2">
            <p className="text-lg font-semibold">Frontend</p>
            <img src={Expand} alt="Expand Icon" className="w-5 h-5 ml-2" />
          </div>
          <p className="text-sm font-thin text-center">A Frontend Developer creates the visual and interactive elements of websites and apps.</p>
        </div>
        {/* Box 2 */}
        <div className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md">
          <div className="flex items-center mb-2">
            <p className="text-lg font-semibold">Backend</p>
            <img src={Expand} alt="Expand Icon" className="w-5 h-5 ml-2" />
          </div>
          <p className="text-sm font-thin text-center">A Backend Developer builds and maintains the server-side logic, databases, and APIs.</p>
        </div>
        {/* Box 3 */}
        <div className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md">
          <div className="flex items-center mb-2">
            <p className="text-lg font-semibold">DSA</p>
            <img src={Expand} alt="Expand Icon" className="w-5 h-5 ml-2" />
          </div>
          <p className="text-sm font-thin text-center">Solve complex problems and optimize performance in software development.</p>
        </div>
        {/* Box 4 */}
        <div className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md">
          <div className="flex items-center mb-2">
            <p className="text-lg font-semibold">AI/ML</p>
            <img src={Expand} alt="Expand Icon" className="w-5 h-5 ml-2" />
          </div>
          <p className="text-sm font-thin text-center">Create systems that learn from data, make decisions, and improve over time.</p>
        </div>
        {/* Box 5 */}
        <div className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md">
          <div className="flex items-center mb-2">
            <p className="text-lg font-semibold">Data Science</p>
            <img src={Expand} alt="Expand Icon" className="w-5 h-5 ml-2" />
          </div>
          <p className="text-sm font-thin text-center">Extract insights and patterns from data to drive decision-making and innovation.</p>
        </div>
        {/* Box 6 */}
        <div className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md">
          <div className="flex items-center mb-2">
            <p className="text-lg font-semibold">Blockchain</p>
            <img src={Expand} alt="Expand Icon" className="w-5 h-5 ml-2" />
          </div>
          <p className="text-sm font-thin text-center">Develop decentralized systems for secure, transparent, and proof transactions.</p>
        </div>
        {/* Box 7 */}
        <div className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md">
          <div className="flex items-center mb-2">
            <p className="text-lg font-semibold">Data Analyst</p>
            <img src={Expand} alt="Expand Icon" className="w-5 h-5 ml-2" />
          </div>
          <p className="text-sm font-thin text-center">Analyze and interpret data to provide insights and support business decisions.</p>
        </div>
        {/* Box 8 */}
        <div className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md">
          <div className="flex items-center mb-2">
            <p className="text-lg font-semibold">Dev Ops</p>
            <img src={Expand} alt="Expand Icon" className="w-5 h-5 ml-2" />
          </div>
          <p className="text-sm font-thin text-center">Optimize and automate development and operations for faster, reliable delivery.</p>
        </div>
        {/* Box 9 */}
        <div className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md">
          <div className="flex items-center mb-2">
            <p className="text-lg font-semibold">UX Design</p>
            <img src={Expand} alt="Expand Icon" className="w-5 h-5 ml-2" />
          </div>
          <p className="text-sm font-thin text-center">Design user-centered interfaces that enhance usability and improve experience.</p>
        </div>
        {/* Box 10 */}
        <div className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md">
          <div className="flex items-center mb-2">
            <p className="text-lg font-semibold">Android</p>
            <img src={Expand} alt="Expand Icon" className="w-5 h-5 ml-2" />
          </div>
          <p className="text-sm font-thin text-center">Build and optimize apps for the Android operating system.</p>
        </div>
        {/* Box 11 */}
        <div className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md">
          <div className="flex items-center mb-2">
            <p className="text-lg font-semibold">Cybersecurity</p>
            <img src={Expand} alt="Expand Icon" className="w-5 h-5 ml-2" />
          </div>
          <p className="text-sm font-thin text-center">Protect systems and data from cyber threats and vulnerabilities.</p>
        </div>
        {/* Box 12 */}
        <div className="bg-black border border-gray-300 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:border-purple-500 max-w-xs mx-auto sm:max-w-sm lg:max-w-md">
          <div className="flex items-center mb-2">
            <p className="text-lg font-semibold">iOS</p>
            <img src={Expand} alt="Expand Icon" className="w-5 h-5 ml-2" />
          </div>
          <p className="text-sm font-thin text-center">Create and maintain applications for Apple's iOS devices.</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
