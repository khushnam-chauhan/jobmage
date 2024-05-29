import React from 'react';
import SliderCard from './slidercard/SliderCard';
import Courses from './books/courses'
import Books from './books/Books';
import './resources.css';
import Footer from '../../component/footer/Footer';

function Resources() {
  return (
    <div className='resources'>
      <div className="banners">
        <SliderCard />
      </div>

      <div className="content">
        <div className="courses-section">
          <h2 className="section-title">Popular Courses</h2>
          <Courses />
        </div>

        <div className="books-section">
          <h2 className="section-title">Featured Books</h2>
          <Books />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resources;
