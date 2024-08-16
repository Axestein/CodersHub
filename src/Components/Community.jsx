import React from 'react';
import { FaDiscord, FaReddit, FaTwitter } from 'react-icons/fa';
import maps from '../assets/maps.png'; // Ensure the path to your map image is correct

const Community = () => {
  return (
    <div id="community" className="bg-black text-white min-h-screen flex flex-col items-center justify-center pt-24 lg:pt-0 relative overflow-hidden px-4">
      {/* Text and Image Container */}
      <div className="text-center max-w-3xl mx-auto">
        {/* Bold Text */}
        <h1 className="text-3xl font-extrabold mb-4">
          JOIN TECH COMMUNITIES
        </h1>
        {/* Smaller Text */}
        <p className="text-lg mb-8">
          Ask Questions to anyone from anywhere in the world
        </p>
        {/* Map Image */}
        <img 
          src={maps} 
          alt="Map" 
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto" 
        />
        <p className="text-lg font-thin mt-8 mb-12">
          Join a dynamic coding community to connect, learn, and grow with passionate 
          tech enthusiasts and professionals. Share your projects, learn in public, and seek referrals based on your achievements.
        </p>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative">
            <h2 className="text-xl font-bold mb-2 flex items-center justify-center">
              Discord Servers
            </h2>
            {/* List of Discord Servers */}
            <div className="mb-4">
              <a href="https://discord.com/invite/programming" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaDiscord className="mr-2 text-blue-500" /> The Programmer's Hangout
              </a>
              <a href="https://discord.com/invite/code" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaDiscord className="mr-2 text-blue-500" /> The Coding Den
              </a>
              <a href="https://discord.com/invite/reactiflux?source=post_page-----c673b8ab3a1c------------------------------" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaDiscord className="mr-2 text-blue-500" /> Reactiflux
              </a>
              <a href="https://discord.com/invite/tccpp" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaDiscord className="mr-2 text-blue-500" /> Together C and C++
              </a>
              <a href="https://discord.com/invite/python" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaDiscord className="mr-2 text-blue-500" /> Python
              </a>
              <a href="https://discord.com/invite/devcord?source=post_page-----c673b8ab3a1c--------------------------------" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaDiscord className="mr-2 text-blue-500" /> DevCord
              </a>
              <a href="https://discord.com/invite/WDrH3zuWFb" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaDiscord className="mr-2 text-blue-500" /> Chai aur Code
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative">
            <h2 className="text-xl font-bold mb-2 flex items-center">
              Reddit Servers
            </h2>
            <div className="mb-4">
              <a href="https://www.reddit.com/r/webdevelopment/" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaReddit className="mr-2 text-red-500" /> Web Development
              </a>
              <a href="https://www.reddit.com/r/programming/" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaReddit className="mr-2 text-red-500" /> Programming
              </a>
              <a href="https://www.reddit.com/r/learnmachinelearning/" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaReddit className="mr-2 text-red-500" /> Machine Learning
              </a>
              <a href="https://www.reddit.com/r/devops/" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaReddit className="mr-2 text-red-500" /> DevOps
              </a>
              <a href="https://www.reddit.com/r/SideProject/" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaReddit className="mr-2 text-red-500" /> SideProject
              </a>
              <a href="https://www.reddit.com/r/developersIndia/" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaReddit className="mr-2 text-red-500" /> Developers India
              </a>
              <a href="https://www.reddit.com/r/ProgrammerHumor/" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaReddit className="mr-2 text-red-500" /> Programming Humor
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative">
            <h2 className="text-xl font-bold mb-2 flex items-center">
              Twitter Servers
            </h2>
            <div className="mb-4">
              <a href="https://x.com/codenewbies" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaTwitter className="mr-2 text-blue-400" /> CodeNewbies
              </a>
              <a href="https://x.com/gitconnected" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaTwitter className="mr-2 text-blue-400" /> Developer Community
              </a>
              <a href="https://x.com/indianswhocode" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaTwitter className="mr-2 text-blue-400" /> Indianswhocode
              </a>
              <a href="https://x.com/taskonxyz" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaTwitter className="mr-2 text-blue-400" /> Web3 Community
              </a>
              <a href="https://x.com/cryptooindia" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaTwitter className="mr-2 text-blue-400" /> Crypto India
              </a>
              <a href="https://x.com/i/communities/1699807431709041070" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaTwitter className="mr-2 text-blue-400" /> Software Developer
              </a>
              <a href="https://x.com/DataSciFact" className="block underline hover:text-purple-400 mb-2 flex items-center">
                <FaTwitter className="mr-2 text-blue-400" /> DataScience
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
