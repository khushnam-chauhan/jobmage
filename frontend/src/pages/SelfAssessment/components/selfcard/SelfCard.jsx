// SelfCard.jsx
import React from 'react';
import './SelfCard.css';

function SelfCard({ title, onTestYourSkill }) {
  const handleTestYourSkill = () => {
    const card = title.toLowerCase().replace(/\s+/g, '-');
    console.log('Card parameter:', card); // Log the card parameter
    onTestYourSkill(card);
  };

  return (
    <div className="self-card">
      <h2 className="self-card-title">{title}</h2>
      <button className="self-card-button" onClick={handleTestYourSkill}>
        Test Your Skill
      </button>
    </div>
  );
}

export default SelfCard;