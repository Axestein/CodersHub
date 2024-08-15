import React from 'react';
import Globe1 from '../assets/Globe1.png';
import Globe2 from '../assets/Globe2.png';

const Findevents = () => {
  return (
    <div className="relative min-h-screen bg-black text-white py-16 px-4 overflow-hidden">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">Events and Tips</h1>

      {/* Globe Images */}
      <img
        src={Globe1}
        alt="Globe 1"
        className="absolute top-[-10%] left-4 w-70 h-70 object-contain opacity-90 hidden md:block"
      />
      <img
        src={Globe2}
        alt="Globe 2"
        className="absolute bottom-2 right-4 w-70 h-70 object-contain opacity-90 hidden md:block"
      />

      {/* Content */}
      <div className="text-center text-lg mb-8">
        <p>Discover the latest events and tips to help you stay informed and engaged.</p>
      </div>

      {/* Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {/* Box 1 */}
        <div className="bg-black border border-white p-6 rounded-lg shadow-lg relative z-10 transition-transform duration-300 transform hover:scale-105 hover:border-blue-600">
          <h2 className="text-xl font-bold mb-2">Find Hackathons</h2>
          <ul className="list-disc list-inside">
            <li><a href="https://devfolio.co/discover" className="text-blue-400 hover:underline">DevFolio</a></li>
            <li><a href="https://unstop.com/hackathons" className="text-blue-400 hover:underline">Unstop</a></li>
            <li><a href="https://mlh.io/" className="text-blue-400 hover:underline">Major League Hacking</a></li>
            <li><a href="https://devpost.com/" className="text-blue-400 hover:underline">Devpost</a></li>
            <li><a href="https://www.hackalist.org/" className="text-blue-400 hover:underline">Hacklist</a></li>
          </ul>
        </div>
        
        {/* Box 2 */}
        <div className="bg-black border border-white p-6 rounded-lg shadow-lg relative z-10 transition-transform duration-300 transform hover:scale-105 hover:border-blue-600">
          <h2 className="text-xl font-bold mb-2">Stay Updated</h2>
          <ul className="list-disc list-inside">
            <li><a href="https://daily.dev/" className="text-blue-400 hover:underline">Daily Dev</a></li>
            <li><a href="https://stackoverflow.com/" className="text-blue-400 hover:underline">Stack Overflow</a></li>
            <li><a href="https://in.linkedin.com/" className="text-blue-400 hover:underline">LinkedIn</a></li>
            <li><a href="https://www.producthunt.com/" className="text-blue-400 hover:underline">Product Hunt</a></li>
            <li><a href="/community" className="text-blue-400 hover:underline">Join Communities</a></li>
          </ul>
        </div>
        
        {/* Box 3 */}
        <div className="bg-black border border-white p-6 rounded-lg shadow-lg relative z-10 transition-transform duration-300 transform hover:scale-105 hover:border-blue-600">
          <h2 className="text-xl font-bold mb-2">Start Coding Prep</h2>
          <ul className="list-disc list-inside">
            <li><a href="https://www.geeksforgeeks.org/" className="text-blue-400 hover:underline">GeeksForGeeks</a></li>
            <li><a href="https://takeuforward.org/" className="text-blue-400 hover:underline">Take You Forward</a></li>
            <li><a href="https://www.interviewbit.com/practice/" className="text-blue-400 hover:underline">InterviewBit</a></li>
            <li><a href="https://www.codechef.com/" className="text-blue-400 hover:underline">CodeChef</a></li>
            <li><a href="https://leetcode.com/problemset/" className="text-blue-400 hover:underline">LeetCode</a></li>
          </ul>
        </div>
        
        {/* Box 4 */}
        <div className="bg-black border border-white p-6 rounded-lg shadow-lg relative z-10 transition-transform duration-300 transform hover:scale-105 hover:border-blue-600">
          <h2 className="text-xl font-bold mb-2">For UI/UX</h2>
          <ul className="list-disc list-inside">
            <li><a href="https://www.easyui.pro/templates" className="text-blue-400 hover:underline">Easy UI</a></li>
            <li><a href="https://magicui.design/" className="text-blue-400 hover:underline">Magic UI</a></li>
            <li><a href="https://www.figma.com/" className="text-blue-400 hover:underline">Figma</a></li>
            <li><a href="https://app.eraser.io/" className="text-blue-400 hover:underline">Eraser.io</a></li>
            <li><a href="https://whimsical.com/" className="text-blue-400 hover:underline">Whimsical</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Findevents;
