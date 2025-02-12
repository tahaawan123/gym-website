import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa"; // React Icon for Mobile Menu
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className=" bg-black bg-opacity-80 text-white h-16 flex items-center justify-between px-5 md:px-10 z-50 shadow-lg">
      {/* Logo */}
      <Image src="/Sturcture-logo.png" alt="Logo" height={50} width={70} className="border-2 border-yellow-700" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 lg:space-x-10 text-sm lg:text-lg">
        {["Home", "MemberShip", "Our Branches", "About Us", "Contact"].map((name, index) => (
          <li key={index}>
            <Link href="#" className="hover:text-yellow-400 transition duration-200">
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Join Now Button */}
      <button className="hidden md:block px-4 py-2 bg-yellow-300 text-black rounded-lg hover:border-l-4 border-yellow-500 transition duration-300">
        Join Now
      </button>

      {/* Mobile Menu using ShadCN Sheet */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <FaBars size={28} /> {/* React Icon for Menu */}
        </SheetTrigger>
        <SheetContent side="left" className="bg-black text-white w-64">
          <div className="flex flex-col items-center space-y-6 mt-10">
            {["Home", "MemberShip", "Our Branches", "About Us", "Contact"].map((name, index) => (
              <Link key={index} href="#" className="text-lg hover:text-yellow-400">
                {name}
              </Link>
            ))}
            <button className="w-40 py-2 bg-yellow-300 text-black rounded-lg hover:border-l-4 border-yellow-500 transition duration-300">
              Join Now
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
