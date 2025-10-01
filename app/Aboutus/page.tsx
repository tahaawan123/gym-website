
import React from "react";
import Header from "@/components/Header";
import { FaDumbbell, FaUsers, FaHeartbeat } from "react-icons/fa";
import Image from "next/image";
import Footer from "@/components/Footer";

const trainers = [
  {
    name: "Taha Awan",
    role: "Head Trainer",
    image: "/taha.jpg",
  },
  {
    name: "Ahmed",
    role: "Nutrition Specialist",
    image: "/gym_nutirition .jpg",
  },
  {
    name: "Bilal Sheikh",
    role: "Strength Coach",
    image: "/trainer_coach.jpg",
  },
];

const AboutUs = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/about_hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            About <span className="text-primary">Our Gym</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Building stronger bodies and stronger communities since 2010.
          </p>
        </div>
      </section>

      {/* About Text Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who <span className="text-primary">We Are</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are Pakistan’s first community-based fitness center. Our goal is
            to provide a welcoming environment where people of all ages and
            fitness levels can achieve their health goals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From professional trainers to state-of-the-art equipment, we ensure
            you get the best fitness experience possible.
          </p>
        </div>
        <div>
          <Image
            src="/Gym.jpg"
            alt="Gym Interior"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="text-primary">Choose Us</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <FaDumbbell className="text-primary text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Modern Equipment</h3>
            <p className="text-gray-600">
              Train with the latest fitness technology and machines.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <FaUsers className="text-primary text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Community Vibes</h3>
            <p className="text-gray-600">
              Be part of a supportive and motivating community.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <FaHeartbeat className="text-primary text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Personal Guidance</h3>
            <p className="text-gray-600">
              Get tailored workout and diet plans from experts.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet Our <span className="text-primary">Trainers</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {trainers.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <Image
                src={t.image}
                alt={t.name}
                width={400}
                height={100}
                className="object-cover h-96 w-full"
              />
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl">{t.name}</h3>
                <p className="text-gray-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join our gym today and experience the difference of a true community-based
          fitness center.
        </p>
        <button className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 hover:text-black transition duration-300">
          Join Now
        </button>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutUs;
