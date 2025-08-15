import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="bg-black bg-opacity-80 text-white h-16 flex items-center justify-between px-5 md:px-10 z-50 shadow-lg">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/Sturcture-logo.png"
          alt="Logo"
          height={50}
          width={70}
          className="cursor-pointer border-2 border-yellow-700"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 lg:space-x-10 text-sm lg:text-lg">
        <li>
          <Link href="/" className="hover:text-yellow-400 transition duration-200">Home</Link>
        </li>
        <li>
          <Link href="/Membership" className="hover:text-yellow-400 transition duration-200">Membership</Link>
        </li>
        <li>
          <Link href="/Branches" className="hover:text-yellow-400 transition duration-200">Our Branches</Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-yellow-400 transition duration-200">About Us</Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-yellow-400 transition duration-200">Contact</Link>
        </li>
      </ul>

      {/* Join Now Button */}
      <Link href="/membership" className="hidden md:block px-4 py-2 bg-yellow-300 text-black rounded-lg hover:border-l-4 border-yellow-500 transition duration-300">
        Join Now
      </Link>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <FaBars size={28} />
        </SheetTrigger>
        <SheetContent side="left" className="bg-black text-white w-64">
          <div className="flex flex-col items-center space-y-6 mt-10">
            <Link href="/" className="text-lg hover:text-yellow-400">Home</Link>
            <Link href="/membership" className="text-lg hover:text-yellow-400">Membership</Link>
            <Link href="#branches" className="text-lg hover:text-yellow-400">Our Branches</Link>
            <Link href="#about" className="text-lg hover:text-yellow-400">About Us</Link>
            <Link href="#contact" className="text-lg hover:text-yellow-400">Contact</Link>
            <Link href="/membership" className="w-40 py-2 bg-yellow-300 text-black rounded-lg hover:border-l-4 border-yellow-500 transition duration-300">
              Join Now
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
