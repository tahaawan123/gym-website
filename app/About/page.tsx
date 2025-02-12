import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="p-6 md:p-11 bg-gray-300">
        <h2 className="text-center font-bold text-2xl md:text-3xl">
          READY TO GET STARTED?
        </h2>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        <div className="relative group">
          <Image
            src="/GymClasses.jpg"
            alt="Gym Classes"
            width={600}
            height={400}
            className="w-full h-auto border-2 rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <h2 className="absolute inset-0 flex justify-center items-center text-white text-2xl md:text-4xl font-bold bg-black/50 rounded-lg opacity-90">
            OUR CLASSES
          </h2>
        </div>

        <div className="relative group">
          <Image
            src="/GymTrainer.jpg"
            alt="Gym Trainer"
            width={661}
            height={400}
            className="w-full h-auto border-2 rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <h2 className="absolute inset-0 flex justify-center items-center text-white text-2xl md:text-4xl font-bold bg-black/50 rounded-lg opacity-90">
            OUR TRAINERS
          </h2>
        </div>
      </div>

      {/* EQUIPMENT Section */}
      <div className="p-5">
        <h2 className="text-2xl md:text-4xl font-bold text-center">EQUIPMENT</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 mt-5">
          <p className="text-lg md:text-xl p-4 md:p-8 text-justify max-w-lg">
            At Structure Health & Fitness, we are dedicated to transforming your
            fitness aspirations into reality. Our range of fitness equipment is
            meticulously designed to cater to all your exercise needs.
          </p>
          <Image
            src="/Doumbble.jpg"
            alt="Equipment"
            width={600}
            height={400}
            className="w-full md:w-[50%] rounded-lg shadow-md shadow-black transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* COMMUNITY CARES Section */}
      <div className="p-5">
        <h2 className="text-2xl md:text-4xl font-bold text-center">COMMUNITY CARES</h2>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mt-5">
          <p className="text-lg md:text-xl p-4 md:p-8 text-justify max-w-lg">
            Welcome to our vibrant gym community, where support is the foundation
            of our fitness journey. Join us to experience a welcoming atmosphere
            filled with like-minded individuals.
          </p>
          <Image
            src="/trainer.jpg"
            alt="Community Cares"
            width={600}
            height={400}
            className="w-full md:w-[50%] rounded-lg shadow-md shadow-black transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* PERSONAL TRAINING Section */}
      <div className="p-5">
        <h2 className="text-2xl md:text-4xl font-bold text-center">PERSONAL TRAINING AT ITS BEST</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 mt-5">
          <p className="text-lg md:text-xl p-4 md:p-8 text-justify max-w-lg">
            Our personalized training program is designed to help you achieve your
            fitness goals efficiently. Our expert trainers not only guide you
            through effective workouts but also provide tailored diet charts to
            optimize your progress.
          </p>
          <Image
            src="/PersonalTraining.jpg"
            alt="Personal Training"
            width={600}
            height={400}
            className="w-full md:w-[50%] rounded-lg shadow-md shadow-black transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* OUR AMENITIES Section */}
      <div className="p-5">
        <h2 className="text-2xl md:text-4xl font-bold text-center">OUR AMENITIES</h2>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mt-5">
          <p className="text-lg md:text-xl p-4 md:p-8 text-justify max-w-lg">
            Experience a gym like no other with our top-notch amenities. Store
            your belongings in secure lockers, then unwind in our pool, jacuzzi,
            and sauna.
          </p>
          <Image
            src="/Pool.png"
            alt="Amenities"
            width={600}
            height={400}
            className="w-full md:w-[50%] rounded-lg shadow-md shadow-black transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
