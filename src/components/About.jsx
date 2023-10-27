import React from 'react'

const About = () => {
  return (
    <section className="py-72  bg-blue-100" id="about">
    <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="lg:order-2 ml-[-150px]">
                <div className="heading text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold">What We Do & Why We Do</h2>
                </div>
                <p className="text-gray-800 text-lg lg:text-xl leading-relaxed mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur voluptatibus voluptatem
                    neque, dicta architecto minima amet suscipit deserunt delectus cumque ea excepturi fuga alias,
                    labore eaque placeat facere impedit quia?
                </p>
                <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur totam, perferendis
                    deleniti natus voluptatum. Distinctio consequuntur eum facilis et? Amet vero soluta distinctio
                    veniam eveniet? Corrupti laborum ex nobis.
                </p>
            </div>
            <div className="col-span-1 lg:col-span-1 lg:order-1">
                <img src="../src/assets/image/gallery/img-2.jpeg" alt="about" className="w-96 border-4 border-blue-900 rounded-2xl mx-auto lg:ml-0 mb-4 lg:mb-0" />
            </div>
        </div>
    </div>
</section>

  )
}

export default About