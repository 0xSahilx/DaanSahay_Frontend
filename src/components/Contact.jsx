import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className='antialiased ' id='contact'>
            <div className='flex w-full min-h-screen justify-center items-center'>
                <div className=' flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0  bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden'>
                    <div className='flex flex-col space-y-8 justify-between'>
                        <div>
                            <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                            <p className='pt-2 text-cyan-100 text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo saepe vitae hic in tempore? Molestiae
                                fugiat eius harum magnam vero possimus maiores, error quo dolores excepturi veritatis, at exercitationem in.</p>
                        </div>

                        <div className='flex flex-col space-y-6'>
                            <div className='inline-flex space-x-2 items-center'>
                                <FaPhone className='text-teal-300 text-xl' />
                                <span>+91 7985179107</span>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                                <MdEmail className='text-teal-300 text-xl' />
                                <span>+91 7985179107</span>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                                <FaMapMarkerAlt className='text-teal-300 text-xl' />
                                <span>+91 7985179107</span>
                            </div>
                        </div>
                        <div className='flex space-x-4 text-lg'>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28'></div>
                        <div className='absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16'></div>
                        <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
                            <form action="" className='flex flex-col space-y-4'>
                                <div>
                                    <label htmlFor="" className='text-sm'>Your Name</label>
                                    <input type="text" placeholder='Your Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300' />
                                </div>
                                <div>
                                    <label htmlFor="" className='text-sm'>Mobile No.</label>
                                    <input type="text" placeholder='Your Mobile Number' className='ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300' />
                                </div>
                                <div class="col-span-12">
                                    <select name="donation" id="donation" class="w-full ring-1 ring-gray-300 rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300">
                                        <option value="">Choose Donation or Wastage</option>
                                        <option value="food">Food</option>
                                        <option value="clothes">Clothes</option>
                                        <option value="footware">Footwear</option>
                                        <option value="books">Books</option>
                                        <option value="fund">Fund</option>
                                        <option value="gadget">Ele. Gadgets</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="" className='text-sm'>Message</label>
                                    <textarea type="text" placeholder='Message' rows={4} className='ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300' />
                                </div>                                
                                <button className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 text-sm'>SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact