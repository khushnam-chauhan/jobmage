import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './home.css';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    const homeHeading = gsap.utils.selector('.home-heading');
    const homePara = gsap.utils.selector('.home-para');
    const homeImage = gsap.utils.selector('.home-image');

    gsap.fromTo(
      homeHeading('span'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: '.home',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      homePara(),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: '.home',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      homeImage(),
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.home',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-left">
            <h1 className="home-heading">
              <span>Get closer to your</span>
              <span>Dream Job!</span>
            </h1>
            <p className="home-para">
              A comprehensive platform for CSE freshers in the industry.
            </p>
            <p className="home-para">
              Find job opportunities, enhance your skills, connect with professionals, self-assessment.
            </p>
            <button className="get-started-btn">
              <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                Get Started
              </Link>
            </button>
          </div>
          <div className="home-right">
            <div className="home-image">
              <img
                src="https://cdn.dribbble.com/users/2520294/screenshots/7269423/media/8db02365a1363822ae9f0554cf3d4469.gif"
                alt="coding gif"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;