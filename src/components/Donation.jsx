import React from 'react'

const Donation = () => {
  return (
    <section class="py-16 bg-indigo-200" id="donation">
    <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-10">
            <h2 class="text-3xl font-semibold border-l-4 border-indigo-600 px-4 inline-block">
                We Manage Wastage or Donation like..
            </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div class="p-6 bg-white mb-10 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <img src="../src/assets/image/don/shopping-bag.png" alt="img" class="w-20 mx-auto mb-4"/>
                <h3 class="text-xl font-semibold mb-2">Food</h3>
                <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
                <a href="#contact" class="btn1 inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full no-underline hover:bg-indigo-200 hover:text-indigo-600">Donate Now</a>
            </div>
            <div class="p-6 bg-white mb-10 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <img src="../src/assets/image/don/clothing.png" alt="img" class="w-20 mx-auto mb-4"/>
                <h3 class="text-xl font-semibold mb-2">Clothes</h3>
                <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
                <a href="#contact" class="btn1 inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full no-underline hover:bg-indigo-200 hover:text-indigo-600">Donate Now</a>
            </div>
            <div class="p-6 bg-white mb-10 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <img src="../src/assets/image/don/gadgets.png" alt="img" class="w-20 mx-auto mb-4"/>
                <h3 class="text-xl font-semibold mb-2">Gadgets</h3>
                <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
                <a href="#contact" class="btn1 inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full no-underline hover:bg-indigo-200 hover:text-indigo-600">Donate Now</a>
            </div>
            <div class="p-6 bg-white mb-10 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <img src="../src/assets/image/don/sneakers.png" alt="img" class="w-20 mx-auto mb-4"/>
                <h3 class="text-xl font-semibold mb-2">Sneakers</h3>
                <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
                <a href="#contact" class="btn1 inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full no-underline hover:bg-indigo-200 hover:text-indigo-600">Donate Now</a>
            </div>
            <div class="p-6 bg-white mb-10 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <img src="../src/assets/image/don/book.png" alt="img" class="w-20 mx-auto mb-4"/>
                <h3 class="text-xl font-semibold mb-2">Book</h3>
                <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
                <a href="#contact" class="btn1 inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full no-underline hover:bg-indigo-200 hover:text-indigo-600">Donate Now</a>
            </div>
            {/* <div class="p-6 bg-white mb-10 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <img src="../src/assets/image/don/salary.png" alt="img" class="w-20 mx-auto mb-4"/>
                <h3 class="text-xl font-semibold mb-2">Salary</h3>
                <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
                <a href="#contact" class="btn1 inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full no-underline hover:bg-indigo-200 hover:text-indigo-600">Donate Now</a>
            </div> */}
         
        </div>
    </div>
</section>
  )
}

export default Donation