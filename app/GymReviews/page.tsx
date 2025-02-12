import React from "react";
import Image from "next/image";

const ReviewsPage = () => {
  return (
    <div className="text-white">
       <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-white px-4 md:px-12 py-12">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image1.jpg"
          alt="Gym"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
      </div>

      {/* Overlay Section */}
      <div className="relative flex flex-col items-center text-center bg-black bg-opacity-70 p-6 sm:p-10 rounded-lg shadow-lg max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">TESTIMONIALS</h1>
        <p className="text-base md:text-lg">
          I joined them last month, and so far, I am having a wonderful experience
          here. The staff is friendly and well-mannered. The place is surrounded
          by elite-class people as it is one of the most expensive gyms and
          fitness clubs in Karachi. I am having swimming sessions there, and so
          far, it is my best experience.
        </p>

        {/* Profile Section */}
        <div className="flex flex-col items-center mt-6">
          <Image
            src="/taha.jpg"
            alt="Muhammad Taha"
            width={80}
            height={80}
            className="rounded-full border-2 border-primary"
          />
          <h3 className="text-lg font-semibold mt-2">MUHAMMAD TAHA</h3>
          <p className="text-primary text-sm">CROSSFIT PROFESSIONAL</p>
        </div>
      </div>
    </div>
      {/* Gym Facts Section */}
      <div className="bg-primary py-12 text-center">
        <h3 className="text-3xl md:text-5xl font-bold mb-8">GYM FACTS</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg md:text-2xl font-semibold">
          <div>
            <p className="text-4xl md:text-6xl font-bold">12889</p>
            <p>Club Members</p>
          </div>
          <div>
            <p className="text-4xl md:text-6xl font-bold">40</p>
            <p>Club Trainers</p>
          </div>
          <div>
            <p className="text-4xl md:text-6xl font-bold">50</p>
            <p>Fitness Classes</p>
          </div>
          <div>
            <p className="text-4xl md:text-6xl font-bold">232</p>
            <p>Gym Equipment</p>
          </div>
        </div>
      </div>

      {/* Comfort Zone Section */}
<div className="relative w-full">
  <Image
    src="/comfortGym.jpg"
    alt="Comfort Zone"
    width={500}
    height={500}
    className="w-full h-auto object-cover"
  />
  
  {/* Text Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 sm:px-4 md:px-8 lg:px-12 bg-black bg-opacity-50">
    <p className="text-base xs:text-lg sm:text-2xl md:text-4xl font-bold text-white">
      GET OUT OF YOUR
    </p>
    <p className="text-primary text-xl xs:text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
      COMFORT ZONE
    </p>
    <p className="max-w-xs sm:max-w-md text-xs xs:text-sm md:text-lg text-white">
      Success usually comes to those who are too busy to be looking for it. The body achieves what the mind believes.
    </p>
    <button className="mt-4 px-3 py-2 xs:px-4 xs:py-2 sm:px-6 sm:py-3 bg-primary text-white text-xs xs:text-sm sm:text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300">
      JOIN US TODAY
    </button>
  </div>
</div>

    </div>
  );
};

export default ReviewsPage;
