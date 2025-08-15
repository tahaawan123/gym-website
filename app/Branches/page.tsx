import React from "react";
import Header from "@/components/Header";
import { FaMapMarkerAlt } from "react-icons/fa";
import Footer from "@/components/Footer";

const branches = [
  {
    name: "Downtown Karachi",
    address: "Shahrah-e-Faisal, Karachi",
    timing: "6:00 AM – 11:00 PM",
    image: "/branch1.jpg",
  },
  {
    name: "North Nazimabad",
    address: "Block H, Karachi",
    timing: "6:30 AM – 10:00 PM",
    image: "/branch2.jpg",
  },
  {
    name: "DHA Phase 6",
    address: "Kh-e-Ittehad, Karachi",
    timing: "5:30 AM – 11:30 PM",
    image: "/branch3.jpg",
  },
];

const OurBranches = () => {
  return (
    <div>
      <Header />

      <section
        className="min-h-screen py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/gym-back.jpg')" }}
      >
        <div className="bg-black/70 py-16 px-6 min-h-screen">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="font-extrabold text-4xl md:text-5xl text-white">
              Our <span className="text-primary">Branches</span>
            </h2>
            <p className="mt-4 text-gray-300 md:text-lg">
              Visit one of our premium locations & join the community.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {branches.map((b, idx) => (
              <div
                key={idx}
                className="
     backdrop-blur-md bg-white/10 border border-white/30 
     rounded-xl p-10 flex flex-col items-center justify-center 
     hover:scale-105 hover:-translate-y-2 hover:shadow-2xl 
     transition-all duration-300
 "
              >
                <div className="bg-yellow-400 rounded-full p-6 mb-6 flex items-center justify-center shadow-lg">
                  <FaMapMarkerAlt className="text-4xl text-white" />
                </div>
                <h3 className="text-xl font-bold tracking-wide text-white">
                  {b.name}
                </h3>
                <p className="text-gray-300 mt-1 text-center text-sm">
                  {b.address}
                </p>
                <p className="text-primary mt-1 text-sm font-semibold">
                  {b.timing}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default OurBranches;
