import React from "react";
import Image from "next/image";

import img from "/public/Gym.jpg";

const Gympage = () => {
  return (
    <div className="border-b-4 border-primary">
      <Image src={img} alt="GymPic" />
      <div className="text-white absolute top-72 left-0 font-extrabold size-96 text-6xl">
        <h1>WE ARE ONE OF PAKISTAN FIRST COMMUNITY BASED GYM</h1>
      </div>
      <button
        type="button"
        className="bg-primary w-[300px] h-24  rounded-lg absolute top-[700px] text-xl hover:bg-yellow-500  "
      >
        See Our Classes
      </button>
    </div>
  );
};

export default Gympage;
