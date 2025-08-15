import React from "react";
import Image from "next/image";

const Gympage = () => {
  return (
    <section className="relative w-full h-screen border-b-4 border-primary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Gym.jpg"
          alt="Gym Background"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Left Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 max-w-2xl">
        <p className="text-primary font-semibold tracking-widest uppercase mb-2">
          #1 Community Gym in Pakistan
        </p>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Train Like  
          <span className="text-primary"> Never Before</span>
        </h1>
        <div className="w-20 h-[3px] bg-primary mt-4 mb-6"></div>
        <p className="text-white/80 text-lg md:text-xl leading-relaxed">
          Experience world-class training facilities, expert coaching,  
          and a community that pushes you to be your best every day.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-primary hover:bg-yellow-500 text-white text-lg font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg">
            Join Now
          </button>
          <button className="border border-white hover:bg-white text-white hover:text-black text-lg font-semibold px-6 py-3 rounded-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gympage;
