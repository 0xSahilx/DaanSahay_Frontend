// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Donation from './components/Donation';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-my-image bg-cover bg-center bg-fixed min-h-screen w-[100%]">
      <Navbar />
      <Hero />
      <Donation />
      <Mission />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
