import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-6 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Gym Name / Logo */}
        <div>
          <h2 className="text-3xl font-extrabold text-primary mb-3">
            IRON<span className="text-white">FLEX</span>
          </h2>
          <p className="text-gray-300">
            Pakistan’s leading community-based gym empowering you to become your absolute best.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-xl mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#about" className="hover:text-primary">About Us</a></li>
            <li><a href="#classes" className="hover:text-primary">Classes</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-xl mb-3">Contact</h4>
          <p className="text-gray-300">Main Shahrah-e-Faisal, Karachi</p>
          <p className="text-gray-300">Phone: 0308-2520161</p>
          <p className="text-gray-300">Email: tahaawan598@gmail.com</p>

          <div className="flex mt-4 gap-3">
            <a href="#" className="p-2 bg-primary rounded-full hover:bg-yellow-500">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-primary rounded-full hover:bg-yellow-500">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-primary rounded-full hover:bg-yellow-500">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-xl mb-3">Join Our Newsletter</h4>
          <p className="text-gray-300 mb-3">Get latest offers & fitness tips:</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 w-full text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-primary hover:bg-yellow-500 px-4 py-2 rounded-r-md text-white font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} IronFlex Gym — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
