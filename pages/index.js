import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Home;
