import React from "react";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";

const FooterPage = () => {
  return (
    <footer className="bg-black text-white opacity-85 py-5 px-4 text-center">
      {/* Copyright Text */}
      <p className="text-sm md:text-base">
        Copyright © 2023 - 2024 | Structure Health & Fitness
      </p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-5 mt-3">
        <CiFacebook className="size-8 md:size-10 cursor-pointer hover:text-gray-400 transition" />
        <CiInstagram className="size-8 md:size-10 cursor-pointer hover:text-gray-400 transition" />
        <CiLinkedin className="size-8 md:size-10 cursor-pointer hover:text-gray-400 transition" />
      </div>
    </footer>
  );
};

export default FooterPage;
