import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const HeaderPage = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 text-white shadow-md z-50">
      <nav className="flex items-center justify-between px-5 h-16 md:px-10">
        {/* Logo */}
        <Image
          src="/Sturcture-logo.png"
          alt="Logo"
          height={50}
          width={70}
        
          className="border-2 border-yellow-700"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg">
          {["Home", "MemberShip", "Our Branches", "About Us", "Contact"].map((name, index) => (
            <li key={index}>
              <Link href="#" className="hover:text-yellow-400">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Join Now Button */}
        <button className="hidden md:block px-4 py-2 bg-yellow-300 text-black rounded-lg hover:border-l-4 border-yellow-500">
          Join Now
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label htmlFor="menu-toggle" className="cursor-pointer">
            <Menu size={30} className="text-white" />
          </label>

          {/* Mobile Menu */}
          <div
            className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-6 
            opacity-0 scale-95 transition-all duration-300 peer-checked:opacity-100 peer-checked:scale-100"
          >
            <label htmlFor="menu-toggle" className="absolute top-5 right-5 cursor-pointer">
              <X size={30} className="text-white" />
            </label>

            {["Home", "MemberShip", "Our Branches", "About Us", "Contact"].map((name, index) => (
              <Link key={index} href="#" className="text-lg hover:text-yellow-400">
                {name}
              </Link>
            ))}

            <button className="w-40 py-2 bg-yellow-300 text-black rounded-lg hover:border-l-4 border-yellow-500">
              Join Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderPage;
