import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../card/Card';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="courses">
      <Card items={courses} />
    </div>
  );
};

export default Courses;
