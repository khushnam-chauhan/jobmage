import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './postForm.css';

const BannerForm = () => {
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !link) {
      alert('Please fill in all fields');
      return;
    }
    try {
      await axios.post('http://localhost:5001/api/sliderData', {
        image,
        link,
      });
      alert('Resource added successfully!');
      setImage('');
      setLink('');
    } catch (error) {
      console.error('Error adding resource:', error);
      alert('Failed to add resource. Please try again.');
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <div className="postform">
      <h1>Add Banner</h1>
      
      <label>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="postform-input"
          placeholder="Enter image URL"
          required
        />
      </label>
      
      <label>
        Link URL:
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="postform-input"
          placeholder="Enter link URL"
          required
        />
      </label>
      
      <button onClick={handleSubmit} className="postform-button">Add Banner</button>
      <button className="back-button" onClick={handleGoBack}>Back</button>
    </div>
  );
};

export default BannerForm;
