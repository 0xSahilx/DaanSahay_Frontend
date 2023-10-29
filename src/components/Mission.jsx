import React from 'react'

const Mission = () => {
    return (
       
        <section className="p-28 bg-white" id="mission-id">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-[#e43a47]">Our Missions</h2>
                    <p className="text-2xl font-semibold pt-2 text-black">We have delivered <span className="text-[#e43a47]">Wastage</span> or <span className="text-[#e43a47]">Donations</span> to needy Peoples</p>
                </div>
                <div className="mt-8">
                    <div className="flex flex-wrap justify-center gap-4 p-2">
                        <div className="h-52 w-72 bg-white shadow-md cursor-pointer overflow-hidden">
                            <img src="../src/assets/image/miss/1.jpg" alt="img" className="h-full w-full border-4 border-gray-300 object-cover transition-transform duration-200 transform hover:scale-110" />
                        </div>
                        <div className="h-52 w-72 bg-white shadow-md cursor-pointer overflow-hidden">
                            <img src="../src/assets/image/miss/2.jpg" alt="img" className="h-full w-full border-4 border-gray-300 object-cover transition-transform duration-200 transform hover:scale-110" />
                        </div>
                        <div className="h-52 w-72 bg-white shadow-md cursor-pointer overflow-hidden">
                            <img src="../src/assets/image/miss/3.jpg" alt="img" className="h-full w-full border-4 border-gray-300 object-cover transition-transform duration-200 transform hover:scale-110" />
                        </div>
                        <div className="h-52 w-72 bg-white shadow-md cursor-pointer overflow-hidden">
                            <img src="../src/assets/image/miss/4.jpg" alt="img" className="h-full w-full border-4 border-gray-300 object-cover transition-transform duration-200 transform hover:scale-110" />
                        </div>
                        <div className="h-52 w-72 bg-white shadow-md cursor-pointer overflow-hidden">
                            <img src="../src/assets/image/miss/5.jpg" alt="img" className="h-full w-full border-4 border-gray-300 object-cover transition-transform duration-200 transform hover:scale-110" />
                        </div>
                        <div className="h-52 w-72 bg-white shadow-md cursor-pointer overflow-hidden">
                            <img src="../src/assets/image/miss/6.jpg" alt="img" className="h-full w-full border-4 border-gray-300 object-cover transition-transform duration-200 transform hover:scale-110" />
                        </div>
                    </div>
                </div>
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 hidden">
                    <span className="absolute top-32 right-16 text-5xl font-bold text-white cursor-pointer z-50">&times;</span>
                    <img src="img/gallery/1.jpg" alt="gallery-img" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white w-96 object-cover"/>
                </div>
            </div>
        </section>
        
    )
}

export default Mission