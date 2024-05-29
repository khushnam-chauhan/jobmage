import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './postForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [apply, setApply] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/books', {
        title,
        image,
        apply,
      });
      alert('Book added successfully!');
      setTitle('');
      setImage('');
      setApply('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="postform">
      <h1>Add Book</h1>
      
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="postform-input"
        />
      </label>
      
      <label>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="postform-input"
        />
      </label>
      
      <label>
        Apply URL:
        <input
          type="text"
          value={apply}
          onChange={(e) => setApply(e.target.value)}
          className="postform-input"
        />
      </label>
      
      <button onClick={handleSubmit} className="postform-button">Add Book</button>
      <button className='bac-button' onClick={handleGoBack}>Back</button>
    </div>
  );
};

export default BookForm;
