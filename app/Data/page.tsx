import React from "react";
import { FaChartBar } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";

import { FaMapSigns } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { FaAnchor } from "react-icons/fa";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { FaBolt } from "react-icons/fa6";

const DataPage = () => {
  return (
    <div className="h-[700px] bg-zinc-800 ">
      <h2 className="text-center p-10 text-white text-4xl">Our Process</h2>

      {/* Motivational Icons  */}

      <div className="flex text-white ">
        <div className="bg-zinc-700 rounded shadow-md shadow-slate-900 w-56 ml-20 h-64  flex flex-col items-center justify-center">
          <div className="text-4xl   bg-primary rounded-[120px] p-5 ">
            <FaChartBar />
          </div>
          Analyze Your Goal
        </div>
        <div className="bg-zinc-700 rounded shadow-md shadow-slate-900 w-56 ml-20 h-64  flex flex-col items-center justify-center">
          <div className="text-4xl bg-primary rounded-[120px] p-5 ">
            <FaFlask />
          </div>
          WORK HARD ON IT
        </div>
        <div className="bg-zinc-700 rounded shadow-md shadow-slate-900 w-56 ml-20 h-64  flex flex-col items-center justify-center">
          <div className="text-4xl   bg-primary rounded-[120px] p-5 ">
            <FaTachometerAlt />
          </div>
          IMPROVE YOU
        </div>
        <div className="bg-zinc-700 rounded shadow-md shadow-slate-900 w-56 ml-20 h-64  flex flex-col items-center justify-center">
          <div className="text-4xl   bg-primary rounded-[120px] p-5 ">
            <FaGem />
          </div>
          ACHIEVE GOALS
        </div>
      </div>

      {/* Gym Details */}

      <div className="flex text-white mt-16 ml-9">
        <div className=" bg-zinc-900 w-56 ml-1   h-64  flex flex-col items-center justify-center">
          <div className="text-4xl   p-5 ">
            <FaMapSigns />
          </div>
          <p className="text-2xl font-bold ">3</p>
          <p className="text-primary">Branches</p>
        </div>
        <div className=" bg-zinc-900 w-56 ml-1   h-64  flex flex-col items-center justify-center">
          <div className="text-4xl   p-5 ">
            <FaDumbbell />
          </div>
          <p className="text-2xl font-bold ">232+</p>

          <p className="text-primary">Machines </p>
        </div>
        <div className=" bg-zinc-900 w-56 ml-1   h-64  flex flex-col items-center justify-center">
          <div className="text-4xl p-5 ">
            <FaAnchor />
          </div>
          <p className="text-2xl font-bold ">40+</p>

          <p className="text-primary">Trainers </p>
        </div>
        <div className=" bg-zinc-900 w-56 ml-1    h-64  flex flex-col items-center justify-center">
          <div className="text-4xl  p-5 ">
            <LiaSwimmingPoolSolid />
          </div>
          <p className="text-2xl font-bold ">23</p>

          <p className="text-primary">Meters Pool</p>
        </div>
        <div className=" bg-zinc-900 w-56 ml-1    h-64  flex flex-col items-center justify-center">
          <div className="text-4xl  p-5 ">
            <FaBolt />
          </div>
          <p className="text-2xl font-bold ">12,889+</p>

          <p className="text-primary">Clients </p>
        </div>
      </div>
    </div>
  );
};

export default DataPage;
