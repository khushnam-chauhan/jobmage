import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './all.css'; // Make sure the CSS file name matches your import

const Testimonials = () => {
  const [testimonials] = useState([
    {
      name: 'John Doe',
      quote: 'This is the best product I have ever used. Highly recommended!',
    },
    {
      name: 'Jane Smith',
      quote: 'I am extremely satisfied with this service. It exceeded my expectations.',
    },
    {
      name: 'Bob Johnson',
      quote: 'The customer support is outstanding. They really care about their customers.',
    },
  ]);

  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '100px',
    arrows: false,
    focusOnSelect: true,
    afterChange: (index) => setCenterIndex(index),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
        },
      },
    ],
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonial-heading">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial-card ${index === centerIndex ? 'center' : ''}`}>
            <blockquote className="quote">{testimonial.quote}</blockquote>
            <p className="name">- {testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
