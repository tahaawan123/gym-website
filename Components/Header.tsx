import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderPage = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 text-white h-16 flex items-center justify-between px-5 md:px-10 z-50">
      {/* Logo */}
      <Image src="/Sturcture-logo.png" alt="Logo" height={50} width={70} className="border-2 border-yellow-700" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 lg:space-x-10 text-sm lg:text-lg">
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
    </header>
  );
};

export default HeaderPage;
