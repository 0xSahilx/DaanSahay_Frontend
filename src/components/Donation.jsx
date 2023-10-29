import React from 'react';
import foodImage from '../assets/image/don/shopping-bag.png'; // Import your images
import clothingImage from '../assets/image/don/clothing.png';
import gadgetsImage from '../assets/image/don/gadgets.png';
import sneakersImage from '../assets/image/don/sneakers.png';
import bookImage from '../assets/image/don/book.png';

const Donation = () => {
  return (
    <section className="py-16 bg-indigo-200" id="donation">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold border-l-4 border-indigo-600 px-4 inline-block">
            We Manage Wastage or Donation like..
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="p-6 bg-white mb-10 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img src={foodImage} alt="img" className="w-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Food</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
            <a
              href="#contact"
              className="btn1 inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full no-underline hover:bg-indigo-200 hover:text-indigo-600"
            >
              Donate Now
            </a>
          </div>
          <div className="p-6 bg-white mb-10 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img src={clothingImage} alt="img" className="w-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clothes</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
            <a
              href="#contact"
              className="btn1 inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full no-underline hover:bg-indigo-200 hover:text-indigo-600"
            >
              Donate Now
            </a>
          </div>
          <div className="p-6 bg-white mb-10 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img src={gadgetsImage} alt="img" className="w-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gadgets</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
            <a
              href="#contact"
              className="btn1 inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full no-underline hover:bg-indigo-200 hover:text-indigo-600"
            >
              Donate Now
            </a>
          </div>
          <div className="p-6 bg-white mb-10 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img src={sneakersImage} alt="img" className="w-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sneakers</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
            <a
              href="#contact"
              className="btn1 inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full no-underline hover:bg-indigo-200 hover:text-indigo-600"
            >
              Donate Now
            </a>
          </div>
          <div className="p-6 bg-white mb-10 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img src={bookImage} alt="img" className="w-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Book</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
            <a
              href="#contact"
              className="btn1 inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full no-underline hover:bg-indigo-200 hover:text-indigo-600"
            >
              Donate Now
            </a>
          </div>
          {/* ... (repeat for other images) */}
        </div>
      </div>
    </section>
  );
};

export default Donation;
