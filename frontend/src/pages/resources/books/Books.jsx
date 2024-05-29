import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../card/Card';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="books">
      <Card items={books} />
    </div>
  );
};

export default Books;
