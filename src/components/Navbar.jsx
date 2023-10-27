import React from 'react';
import { Element, Events, animateScroll as scroll, scroller } from 'react-scroll';

function Navbar() {
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <header className='bg-black px-[75px] opacity-75 w-[100%] justify-between flex items-center '>
      <div className='px-[15px] h-[75px] flex flex-row items-center'>
        <img src="../src/assets/image/gallery/fin.png" alt="My Logo" className='h-[100%]' />
        <div className='text-white px-2 text-2xl'>Daan<span className='bg-orange'>Sahay.com</span></div>
      </div>
      <div className='text-white items-center justify-center no-underline leading-[75px] text-base capitalize '>
        <ul className='flex flex-row '>
          <li className='px-[15px] hover:bg-[#e43a47] transition duration-300 ease-in-out'>
            <a href="#Home" onClick={() => scrollToSection('Home')}>Home</a>
          </li>
          <li className='px-[15px] hover:bg-[#e43a47] transition duration-300 ease-in-out'>
            <a href="#donation" onClick={() => scrollToSection('donation')}>Donation</a>
          </li>
          <li className='px-[15px] hover-bg-[#e43a47] transition duration-300 ease-in-out'>
            <a href="#donation" onClick={() => scrollToSection('donation')}>Programs</a>
          </li>
          <li className='px-[15px] hover-bg-[#e43a47] transition duration-300 ease-in-out'>
            <a href="#mission-id" onClick={() => scrollToSection('mission-id')}>Mission</a>
          </li>
          <li className='px-[15px] hover-bg-[#e43a47] transition duration-300 ease-in-out'>
            <a href="#about" onClick={() => scrollToSection('about')}>About Us</a>
          </li>
          <li className='px-[15px] hover-bg-[#e43a47] transition duration-300 ease-in-out'>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Join Us</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
