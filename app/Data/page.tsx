import React from "react";
import { FaChartBar, FaFlask, FaGem, FaTachometerAlt, FaMapSigns, FaDumbbell, FaAnchor, FaBolt } from "react-icons/fa";
import { LiaSwimmingPoolSolid } from "react-icons/lia";

const DataPage = () => {
  return (
    <div className="bg-zinc-800 py-10">
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-8">Our Process</h2>

      {/* Motivational Icons - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-5 md:px-20">
        {[
          { icon: <FaChartBar />, text: "Analyze Your Goal" },
          { icon: <FaFlask />, text: "WORK HARD ON IT" },
          { icon: <FaTachometerAlt />, text: "IMPROVE YOU" },
          { icon: <FaGem />, text: "ACHIEVE GOALS" },
        ].map((item, index) => (
          <div key={index} className="bg-zinc-700 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <div className="text-4xl bg-primary p-4 rounded-full">{item.icon}</div>
            <p className="text-white text-lg font-semibold mt-4">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Gym Details - Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-5 md:px-20 mt-12">
        {[
          { icon: <FaMapSigns />, number: "3", label: "Branches" },
          { icon: <FaDumbbell />, number: "232+", label: "Machines" },
          { icon: <FaAnchor />, number: "40+", label: "Trainers" },
          { icon: <LiaSwimmingPoolSolid />, number: "23", label: "Meters Pool" },
          { icon: <FaBolt />, number: "12,889+", label: "Clients" },
        ].map((item, index) => (
          <div key={index} className="bg-primary rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <div className="text-4xl p-4">{item.icon}</div>
            <p className="text-2xl font-bold text-white">{item.number}</p>
            <p className="text-primary">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataPage;
