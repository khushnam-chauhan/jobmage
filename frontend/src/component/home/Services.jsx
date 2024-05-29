import React, { useEffect, useRef } from 'react';
import './services.css';

function Services() {
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const servicesElement = servicesRef.current;
      const serviceItems = servicesElement.querySelectorAll('.service-item');

      const windowHeight = window.innerHeight;
      const servicesTop = servicesElement.getBoundingClientRect().top;

      if (servicesTop < windowHeight) {
        serviceItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('fade-in');
          }, index * 200);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="services" id="services" ref={servicesRef}>
      <div className="container">
        <h1 className="service-heading">What services we provide?</h1>
        <div className="service-items">
          <div className="service-item">
            <div className="service-content">
              <h2 className="service-head">Jobs and Internships</h2>
              <p className="service-para">
                Discover a one-stop destination for all your job and internship needs! Say goodbye to endless searches across various platforms. We provide a centralized hub for relevant and up-to-date information, ensuring you never miss out on the perfect opportunity.
              </p>
            </div>
            <div className="service-image">
              <img src="https://thumbs.dreamstime.com/b/internship-abstract-concept-vector-illustration-paid-opportunity-professional-growth-recent-college-graduate-job-find-first-208060368.jpg" alt="" />
            </div>
          </div>
          <div className="service-item reverse">
            <div className="service-content">
              <h2 className="service-head">Resources</h2>
              <p className="service-para">
                Gain access to a curated collection of online paid courses, now accessible for free on the internet. Elevate your skills and knowledge with these valuable resources, without any cost to you.
              </p>
            </div>
            <div className="service-image">
              <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_52683-84602.jpg" alt="" />
            </div>
          </div>
          <div className="service-item">
            <div className="service-content">
              <h2 className="service-head">Self-Assessment</h2>
              <p className="service-para">
                We offer assignments designed to assess your skills, providing valuable insights into your current standing and highlighting areas for improvement.
              </p>
            </div>
            <div className="service-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_hxgvGSDrTVKqwdsw_HqkF2SWj6sKzd-pgmRX2yzfA&s" alt="" />
            </div>
          </div>
          <div className="service-item reverse">
            <div className="service-content">
              <h2 className="service-head">Find Career advice and Roadmap by our Chatbot</h2>
              <p className="service-para">
                If you're feeling unsure and unsure of where to begin, our chatbot is here to help. It gathers information about your interests and provides you with a personalized roadmap to get started.
              </p>
            </div>
            <div className="service-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQWLDB-Fjg49kobDQy4fTAlhfEKOFQVTxnGsl3fEbXw&s" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;