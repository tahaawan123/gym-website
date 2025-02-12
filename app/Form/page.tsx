import React from "react";
import Image from "next/image";

const FormPage = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image Full Height */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/pic.jpg"
          alt="Gym Equipment"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
      </div>

      {/* Main Content Container */}
      <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 text-white space-y-6 sm:space-y-10 py-10 md:py-16">
        
        {/* Text Section */}
        <div className="w-full max-w-lg text-center space-y-3 sm:space-y-4">
          <p className="text-base sm:text-lg md:text-2xl font-bold border-l-4 sm:border-l-8 border-primary pl-3 sm:pl-4">
            WE ARE NOT LIKE ANY OTHER GYM IN PAKISTAN
          </p>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            Whether you want to get in shape with a personalized fitness training
            plan, break a sweat in a team environment, or reach peak athletic
            performance, our expert fitness coaches and community members are here
            to help you be your best self, every day.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-sm sm:max-w-md bg-black bg-opacity-80 p-5 sm:p-7 md:p-8 rounded-lg shadow-lg">
          <p className="bg-white text-black text-center text-sm sm:text-lg md:text-xl font-bold p-2 sm:p-3 rounded">
            Special Trial Offer
          </p>
          <p className="mt-2 text-xs sm:text-sm text-center">
            Sign up to begin your 3-day trial membership for only 3,000 PKR
          </p>

          <form action="./form" className="mt-4 space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 text-xs sm:text-sm rounded text-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 text-xs sm:text-sm rounded text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 text-xs sm:text-sm rounded text-black"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 text-xs sm:text-sm rounded text-black"
            />
            <button
              type="submit"
              className="w-full bg-primary p-3 sm:p-4 hover:bg-yellow-600 rounded-lg text-xs sm:text-sm md:text-base font-semibold transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default FormPage;
