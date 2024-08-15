import React from 'react';
import Sameerimg from '../assets/Sameerimg.jpeg';
import AdityaImag from '../assets/AdityaImag.jpg';
import { FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi'; // Assuming you're using React Icons

const AboutUs = () => {
  return (
    <div id="about" className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">About CodersHub</h2>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">What we provide</h3>
          <p className="mb-4">
          CodersHub is a premier platform dedicated to empowering individuals embarking on their tech journey. Whether you are a tech enthusiast just starting out, a first-year college student, or a recent high school graduate, CodersHub provides tailored roadmaps and comprehensive resources to guide you through various technology streams, including Web Development, App Development, Web3, DevOps, Data Science, and AI/ML.
          </p>
          <p className="mb-4 hidden md:block">
          In addition to structured learning paths, CodersHub offers invaluable pro tips for navigating the tech industry. This includes insights on coding platforms like Codeforces, CodeChef, HackerRank, LeetCode, and InterviewBit, along with advice on building a standout portfolio, skill assessments, and acquiring certifications. We also foster a vibrant community through Discord, Instagram influencers, and Telegram channels, providing a network for collaboration and support. Stay engaged with the latest events, hackathons, study jams, and open-source contributions, and seize opportunities for internships to accelerate your career in technology with CodersHub.
          </p>
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-4'>Our Team</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Team Member 1 */}
          <div className="bg-white shadow-md rounded-lg px-6 py-8 hover:bg-gray-200 transition duration-300">
            <img
              src={AdityaImag}
              alt="Aditya Kumar Singh"
              className="rounded-full mx-auto h-48 w-48 mb-4 object-cover"
            />
            <h2 className="text-black text-xl font-bold mb-2 text-center">Aditya Kumar Singh</h2>
            <p className="text-gray-600 text-center">Developer</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="mailto:adityandmb@gmail.com" className="text-blue-300 hover:underline">
                <FiMail className="inline-block text-4xl text-blue-300 hover:text-blue-500" />
              </a>
              <a href="https://www.linkedin.com/in/adityakumarsingh2005/" className="text-blue-300 hover:underline">
                <FiLinkedin className="inline-block text-4xl text-blue-300 hover:text-blue-500" />
              </a>
              <a href="https://twitter.com/adityasingh7211" className="text-blue-300 hover:underline">
                <FiTwitter className="inline-block text-4xl text-blue-300 hover:text-blue-500" />
              </a>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white shadow-md rounded-lg px-6 py-8 hover:bg-gray-200 transition duration-300">
            <img
              src={Sameerimg}
              alt="Sameer Yadav"
              className="rounded-full mx-auto h-48 w-48 mb-4 object-cover"
            />
            <h2 className="text-black text-xl font-bold mb-2 text-center">Sameer Yadav</h2>
            <p className="text-gray-600 text-center">AI Specialist</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="mailto:ysameer0026@gmail.com" className="text-blue-300 hover:underline">
                <FiMail className="inline-block text-4xl text-blue-300 hover:text-blue-500" />
              </a>
              <a href="https://www.linkedin.com/in/sameer-yadav-214a01282/" className="text-blue-300 hover:underline">
                <FiLinkedin className="inline-block text-4xl text-blue-300 hover:text-blue-500" />
              </a>
              <a href="https://x.com/ysameer001" className="text-blue-300 hover:underline">
                <FiTwitter className="inline-block text-4xl text-blue-300 hover:text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;