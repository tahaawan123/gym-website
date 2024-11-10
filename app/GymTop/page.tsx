import React from "react";
import Image from "next/image";



const Gympage = () => {
  return (
    <div className="border-b-4 border-primary">
      <Image src={"/Gym.jpg"} alt="GymPic" width={1500} height={900}/>
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
