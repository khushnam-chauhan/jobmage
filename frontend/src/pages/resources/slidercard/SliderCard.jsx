import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import './slider.css';

const SliderCard = () => {
  const [slides, setSlides] = useState([]);

  // Fetch slider data from the server
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/sliderData');
        setSlides(response.data);
      } catch (error) {
        console.error('Error fetching slides:', error);
      }
    };
    fetchSlides();
  }, []);

  // Ensure links have the correct format
  const formatLink = (link) => {
    if (!/^https?:\/\//i.test(link)) {
      return `https://${link}`;
    }
    return link;
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <div className="slider-card">
      <Slider {...settings}>
        {slides.map(({ _id, image, link }) => (
          <div key={_id} className="slider-card-container">
            <a href={formatLink(link)} target="_blank" rel="noopener noreferrer" className="slider-link">
              <img src={image} alt={`Slide ${_id}`} className="slider-card-image" />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCard;
