import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const FooterPage = () => {
  return (
    <div>
      <footer className="h-20 text-white bg-black opacity-85">
        <p className="text-center ">
          Copyright © 2023 - 2024 | Structure Health & Fitness
        </p>

        <div className="flex">
          <CiFacebook className="mr-7 size-14" />
          <CiInstagram className="mr-7 size-14" />
          <CiLinkedin className="mr-7 size-14" />
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;
