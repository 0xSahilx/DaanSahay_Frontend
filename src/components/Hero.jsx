// Hero.js
import React from 'react';

function Hero() {
  return (
    <section className='w-[1240px] h-screen' id='home' >
      <div className='pl-[100px]'>
        <h1 className='mt-[230px] inline-block text-6xl text-black w-[45%] leading-21 font-semibold'>Together We Can <span className='text-white font-poppins bg-[#fe5555] inline-block leading-15 px-3 py-1 mt-2 font-semibold rounded-md'>Save Lives</span></h1>
        <p className='text-black w-[50%] text-shadow-0 text-shadow-0 text-shadow-2 text-shadow-black mt-3 leading-6 font-poppins text-xl'>.
        Together we can save lives – one act of kindness at a time. Our mission is to inspire and empower individuals to make a difference in the world. Whether it's through donating to a cause. Join us on this journey of compassion and impact, as we work hand in hand to create a brighter, healthier future for all.</p>
        <button className='bg-[#e43a47]  text-white font-semibold  rounded-md px-4 py-3 mt-5'>Start with a little</button>
      </div>
    </section>
  );
}

export default Hero;
