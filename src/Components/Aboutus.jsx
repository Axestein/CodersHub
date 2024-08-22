import React from 'react';
import Sameerimg from '../assets/Sameerimg.jpeg';
import AdityaImag from '../assets/AdityaImag.jpg';
import { FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi'; // Assuming you're using React Icons

const AboutUs = () => {
  return (
    <div id="aboutus" className="bg-black text-white py-20">
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
      </div>
    </div>
  );
};

export default AboutUs;