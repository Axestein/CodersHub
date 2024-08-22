import React, { useState } from 'react';
import Expand from '../assets/Expand.png'; // Ensure the path to your image is correct
import { IoClose } from 'react-icons/io5'; // Import the close icon

const Roadmap = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  // Data for each box
  const boxData = [
    { title: 'Frontend', description: 'A Frontend Developer creates the visual and interactive elements of websites and apps.', links: ['https://drive.google.com/file/d/1NZ2JURtTNxn5zMnboZV_26h3Hc-Th3St/view?usp=sharing', 'https://docs.google.com/spreadsheets/d/1FLGMNx0uQu2AiY_QFeNn1XrnsuvI9tbb/edit?gid=487603146#gid=487603146', 'https://youtu.be/l1EssrLxt7E?si=_wgqWgSs9fflO6rS', 'https://www.coursera.org/professional-certificates/meta-front-end-developer?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_meta-front-end-developer_meta_ftcof_professional-certificates_arte_oct-23_dr_sem_rsa_gads_lg-all&campaignid=20672771440&adgroupid=159938653196&device=c&keyword=meta%20front%20end%20developer%20professional%20certificate&matchtype=p&network=g&devicemodel=&adposition=&creativeid=696893433115&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnOPPZeeFLJCx9G4JaO3o66Ai19rZiCNkIzupFIFXp3N1U4nlTZmIQMaAnQEEALw_wcB'] },
    { title: 'Backend', description: 'A Backend Developer builds and maintains the server-side logic, databases, and APIs.', links: ['https://drive.google.com/file/d/1ka-1z8fM4VtNFrTTn5OMNk7_dnwqOCKU/view?usp=sharing', 'https://docs.google.com/spreadsheets/d/1Fb1imZLhidPB_sYU0vBskgRHCU06TztR/edit?gid=1723041662#gid=1723041662', 'https://www.youtube.com/watch?v=T55Kb8rrH1g&list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH', 'https://www.coursera.org/professional-certificates/meta-back-end-developer'] },
    { title: 'DSA', description: 'Solve complex problems and optimize performance in software development.', links: ['https://drive.google.com/file/d/16Pb3lO__0IpseCBMCyk3OIu5kezs23kY/view?usp=sharing', 'DSA Resources Link', 'https://www.youtube.com/watch?v=EAR7De6Goz4&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&index=3', 'https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_Keyword_Beta_Prof_la.EN_cc.India&campaigntype=Search&portfolio=India&language=EN&product=Course&test=&audience=Keyword&topic=Data_Structures&priority=Beta&utm_content=deal4584&utm_term=_._ag_160754673973_._ad_696237452587_._kw_dsa+course_._de_c_._dm__._pl__._ti_kwd-380230881530_._li_9299829_._pd__._&matchtype=b&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnOCQsV_1dG2t7EomiOHWVuekKfUfrZvj7IEQJJCge0PEJX-MxXVvloaAg0-EALw_wcB&couponCode=SKILLS4SALEA'] },
    { title: 'AI/ML', description: 'Create systems that learn from data, make decisions, and improve over time.', links: ['https://drive.google.com/file/d/1IipyMKvbaXigWMQ1ySQp6694S2JgRwGz/view?usp=sharing', 'AI/ML Resources Link', 'https://www.youtube.com/watch?v=xaAdbDCX0XI', 'https://aws.amazon.com/certification/certified-machine-learning-specialty/'] },
    { title: 'Data Science', description: 'Extract insights and patterns from data to drive decision-making and innovation.', links: ['https://drive.google.com/file/d/1b11GQPgVIM04_jNlqK0FSw5Mj3W9mY-n/view?usp=sharing', 'Data Science Resources Link', 'https://www.youtube.com/watch?v=-ETQ97mXXF0', 'https://www.coursera.org/professional-certificates/ibm-data-science?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_ibm-data-science_ibm_ftcof_professional-certificates_arte_mar-24_dr_pmax_gads_lg-all&campaignid=21085118520&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adposition=&creativeid=&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnMR5eJ9x8j3zF59nwAQ0QzMShmkdCxUGmmyeLd9QD-9_0-dnqgZJckaAn_nEALw_wcB'] },
    { title: 'Blockchain', description: 'Develop decentralized systems for secure, transparent, and proof transactions.', links: ['https://drive.google.com/file/d/1QCUvDpuCqY2wZFPtAPGV0zkMvw8Z6iDi/view?usp=sharing', 'Blockchain Resources Link', 'https://youtu.be/gyMwXuJrbJQ?si=zH3bHzJUTa5aOn-i', 'https://harkirat.classx.co.in/new-courses/13-complete-web3-blockchain-cohort'] },
    { title: 'Data Analyst', description: 'Analyze and interpret data to provide insights and support business decisions.', links: ['https://drive.google.com/file/d/17k_ID82VtWISDiyRWw-Dg7b9WOQA9994/view?usp=sharing', 'Data Analyst Resources Link', 'https://www.youtube.com/watch?v=rGx1QNdYzvs&list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF', 'https://www.coursera.org/professional-certificates/meta-data-analyst?utm_source=gg&utm_medium=sem&utm_campaign=b2c_india_meta-data-analyst_meta_ftcof_professional_arte_may-24_dr_sem_rsa_gads_lg-all&utm_content=b2c&campaignid=21279571082&adgroupid=161798354866&device=c&keyword=data%20analyst%20professional%20certificate&matchtype=p&network=g&devicemodel=&adpostion=&creativeid=699201262528&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnOp-S6bqwA0KcBoGKCFH9sL0BZwyv1qx39QI11APEqBol09rRqk7cAaAmEoEALw_wcB'] },
    { title: 'Dev Ops', description: 'Optimize and automate development and operations for faster, reliable delivery.', links: ['https://drive.google.com/file/d/1LUG1KXicESjwpLPoU9oBzyyb9E8Ix8mT/view?usp=sharing', 'Dev Ops Resources Link', 'https://www.youtube.com/watch?v=hQcFE0RD0cQ', 'https://education.oracle.com/oracle-cloud-infrastructure-2024-certified-devops-professional/trackp_OCI2024DOPOCP'] },
    { title: 'UX Design', description: 'Design user-centered interfaces that enhance usability and improve experience.', links: ['https://drive.google.com/file/d/1mwOvBsykxHm8ou4eO5gI1G5stEqSOikh/view?usp=sharing', 'UX Design Resources Link', 'https://www.youtube.com/watch?v=BU_afT-aIn0', 'https://www.coursera.org/professional-certificates/google-ux-design?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_google-ux-design_google_ftcof_professional-certificates_arte_dec-22_dr_sem_rsa_gads_lg-all&campaignid=19073950701&adgroupid=164950135572&device=c&keyword=google%20certificate%20courses%20ui%20ux&matchtype=p&network=g&devicemodel=&adposition=&creativeid=696893433043&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnPQlUfGLgA-Y5gzr4NxRe8EUt-dGDRYpOCVrjgrgQsTQDUEGEzpMPoaAoKJEALw_wcB'] },
    { title: 'Android', description: 'Build and optimize apps for the Android operating system.', links: ['https://drive.google.com/file/d/1Ruayr-aEwEfGDTup0CyN3Rk9Ub5O-nEB/view?usp=sharing', 'Android Resources Link', 'https://youtu.be/InigFUSiPl8?si=ltsp2tGO1fhnSds2', 'https://androidatc.com/pages/Eng/Android-Certified-Application-Developer'] },
    { title: 'Cybersecurity', description: 'Protect systems and data from cyber threats and vulnerabilities.', links: ['https://drive.google.com/file/d/1WjcLcnlVPZfSUAdZI8R_Y7_7FXKMi__y/view?usp=sharing', 'Cybersecurity Resources Link', 'https://www.youtube.com/watch?v=hXSFdwIOfnE', 'https://www.isc2.org/certifications/cc'] },
    { title: 'iOS', description: 'Create and maintain applications for Apple\'s iOS devices.', links: ['https://drive.google.com/file/d/1k5liwkTIjgp3FS5hnQFM2pI-xZVU6GMY/view?usp=sharing', 'iOS Resources Link', 'https://www.youtube.com/watch?v=b1oC7sLIgpI', 'https://www.coursera.org/learn/introduction-to-ios-mobile-application-development?specialization=meta-ios-developer&utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_ios_mobile_development_sitelink_Gads&campaignid=21457261156&adgroupid=164111526403&device=c&keyword=ios%20development%20course&matchtype=p&network=g&devicemodel=&adposition=&creativeid=705251443177&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnNJZec7NJh3yIkbk6PUSOQkmkk0U5_joN62C4ETH7hcX2hM5HSwv2saApXAEALw_wcB'] },
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
