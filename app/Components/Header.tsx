import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/Sturcture-logo.png";
const HeaderPage = () => {
  return (
    <div>
      <header>
        <nav className="fixed top-0 left-0 right-0   text-white  flex h-16 items-center justify-between p-5  bg-black bg-opacity-50">
          <Image
            src={logo}
            alt={"Logo"}
            height={50}
            width={70}
            className="ml-10 border-2 border-yellow-700 "
          />
          <ul className="flex ">
            <li className="mr-16 ">
              <Link href="#" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li className="mr-16 ">
              <Link href="#" className="hover:text-primary">
                MemberShip
              </Link>
            </li>
            <li className="mr-16 ">
              <Link href="#" className="hover:text-primary">
                Our Branches
              </Link>
            </li>
            <li className="mr-16 ">
              <Link href="#" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li className="mr-16 ">
              <Link href="#" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
          <button className=" p-3 bg-yellow-300 rounded-lg hover:border-l-4 border-yellow-500">
            Join Now
          </button>
        </nav>
      </header>
    </div>
  );
};

export default HeaderPage;
