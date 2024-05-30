import React from 'react';
import videoBackground from '../../assets/tech.mp4';
import './all.css'

const VideoBackground = () => {
  return (
    <div className="video-background-container">
      <video autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
      </video>
      <div className="video-overlay">
        <h2>Inspiring Quote</h2>
        <p>"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill</p>
      </div>
    </div>
  );
};

export default VideoBackground;