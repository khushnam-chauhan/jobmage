import React, { useState } from 'react';
import Navbar from '../component/navbar/Navbar';
import Home from '../component/home/Home';
import Services from '../component/home/Services';
import Contact from '../component/Contact/Contact';
import Footer from '../component/footer/Footer';
import useUserData from '../component/Hooks/useUserdata';
import Loader from '../component/Loader/loader';

function LandingPage() {
  const { userData, isLoading } = useUserData();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar userData={userData} />
      <Home />
      <Services />
      <Contact  />
      <Footer />
    </div>
  );
}

export default LandingPage
