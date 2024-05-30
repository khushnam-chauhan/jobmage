import React from 'react';
import skillData from '../data/SkillData';
import './SkillLevel.css';
import { useParams, useNavigate } from 'react-router-dom';

function SkillLevelContent() {
  const navigate = useNavigate();
  const { card } = useParams();
  const cardData = skillData[card] || null;

  const handleBackButtonClick = () => {
    navigate('/self');
  };

  if (!cardData) {
    return (
      <div className="skill-level-container">
        <button className="back-button" onClick={handleBackButtonClick}>
          Back
        </button>
        <p className="no-data-message">No skill level data available for this card.</p>
      </div>
    );
  }

  const skillLevels = Object.keys(cardData);

  return (
    <div className="skill-level-container">
      <button className="back-button" onClick={handleBackButtonClick}>
        Back
      </button>
      <h1 className="skill-level-title">
        Skill Levels for {card.replace('-', ' ')}
      </h1>
      <div className="skill-level-grid">
        {skillLevels.length > 0 ? (
          skillLevels.map((skillLevel) => (
            <div key={skillLevel} className="skill-level-column">
              <h2 className="skill-level-heading">
                {skillLevel.charAt(0).toUpperCase() + skillLevel.slice(1)} Level
              </h2>
              <ul className="project-list">
                {cardData[skillLevel].map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="no-data-message">
            No skill level data available for this card.
          </p>
        )}
      </div>
    </div>
  );
}

export default SkillLevelContent;