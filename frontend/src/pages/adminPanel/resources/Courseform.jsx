import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './postForm.css';

const CourseForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [apply, setApply] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !image || !apply) {
      alert('Please fill in all fields');
      return;
    }
    try {
      await axios.post('http://localhost:5001/api/courses', {
        title,
        image,
        apply,
      });
      alert('Course added successfully!');
      setTitle('');
      setImage('');
      setApply('');
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="postform">
      <h1>Add Course</h1>
      
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="postform-input"
          placeholder="Enter title"
          required
        />
      </label>
      
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
        Apply URL:
        <input
          type="text"
          value={apply}
          onChange={(e) => setApply(e.target.value)}
          className="postform-input"
          placeholder="Enter apply URL"
          required
        />
      </label>
      
      <button onClick={handleSubmit} className="postform-button">Add Course</button>
      <button className='back-button' onClick={handleGoBack}>Back</button>
    </div>
  );
};

export default CourseForm;
