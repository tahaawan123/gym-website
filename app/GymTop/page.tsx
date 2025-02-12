import React from "react";
import Image from "next/image";

const Gympage = () => {
  return (
    <div className="border-b-4 border-primary relative">
      {/* Responsive Image */}
      <div className="relative w-full h-[80vh] md:h-[90vh]">
        <Image src="/Gym.jpg" alt="GymPic" layout="fill" objectFit="cover" />
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-3xl md:text-5xl font-extrabold max-w-4xl">
          WE ARE ONE OF PAKISTANS FIRST COMMUNITY-BASED GYMS
        </h1>

        {/* Button */}
        <button
          type="button"
          className="bg-primary text-white text-lg md:text-xl font-semibold px-6 py-4 mt-6 rounded-lg hover:bg-yellow-500 transition duration-300"
        >
          See Our Classes
        </button>
      </div>
    </div>
  );
};

export default Gympage;
