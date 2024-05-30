import React from 'react';
import SelfCard from './components/selfcard/SelfCard';
import SkillLevelContent from './components/skillLevel/SkillLevel';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './self.css';

const cardData = [
    { title: "Software Development", image: "../../assests/softwaredeveloper.png" },
    { title: "UX Designer", image: "ui_designer.jpg" },
    { title: "QA Tester", image: "QA.png" },
    { title: "UI Designer", image: "ui_designer.jpg" },
    { title: "AI & ML", image: "AIML.jpg" },
    { title: "Cyber Security", image: "cybersecurity.jpg" },
    { title: "Data Science Bigdata", image: "big_data.jpg" },
    { title: "Cloud Computing", image: "cloud_computing.jpg" },
    { title: "Mobile App Development", image: "mobile_app_development.jpg" },
    { title: "Web Development", image: "web_development.jpg" },
    { title: "Database Management", image: "database_management.jpg" },
    { title: "Networking", image: "networking.png" },
    { title: "Embedded System", image: "embedded_system.jpg" }
];

function SelfAssessment() {
    const navigate = useNavigate();
  
    const handleTestYourSkill = (card) => {
      console.log('Card clicked:', card); // Log the card parameter
      navigate(`/skill/${card}`);
    };

    const handleGoBack = () => {
      navigate('/after');
    };
  
    return (
      <div className="self-assessment">
        <div className='self-cont'>
        <h1 className="self-assessment-title">Self Assessment Projects</h1>
        <button onClick={handleGoBack} className='back-button goback'>Go Back</button>
        </div>
        <div className="self-assessment-cards">
          {cardData.map((card, index) => (
            <SelfCard
              key={index}
              title={card.title}
              onTestYourSkill={() =>
                handleTestYourSkill(card.title.toLowerCase().replace(/\s+/g, '-'))
              }
            />
          ))}
        </div>
        
        <Routes>
          <Route path="/skill/:card" element={<SkillLevelContent />} />
        </Routes>
      </div>
    );
  }
  
  export default SelfAssessment;
