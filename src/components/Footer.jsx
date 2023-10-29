import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16" id='footer'>
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <div className="text-white">
                            <h4 className="text-xl font-semibold mb-5">I.E.T Lucknow</h4>
                            <p>Address: Aryabhatt Hostel, engineering chauraha 226021</p>
                            <p>Contact No: <a href="tel:+917985179107">+91 7985179107</a></p>
                            <p>Email: <a href="mailto:sahayDaan@gmail.com">foundation@code.com</a></p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="text-white">
                            <h4 className="text-xl font-semibold mb-5">Important Links</h4>
                            <ul>
                                <li><a href="#home" className="text-white no-underline hover:underline">Home</a></li>
                                <li><a href="#donation" className="text-white no-underline hover:underline">Donations</a></li>
                                <li><a href="#mission-id" className="text-white no-underline hover:underline">Missions</a></li>
                                <li><a href="#about" className="text-white no-underline hover:underline">About us</a></li>
                                <li><a href="#contact" className="text-white no-underline hover:underline">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="text-white">
                            <h4 className="text-xl font-semibold mb-5">Social Media</h4>
                            <div className="social space-x-4 flex mb-10">
                                <a href="#"><FaFacebook /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaLinkedin /></a>
                                <a href="#"><FaInstagram /></a>
                            </div>
                            <p>Copyright &copy; 2022 | All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
