import React from "react";
import Image from "next/image";

import img from "../../public/pic.jpg";

const FormPage = () => {
  return (
    <div>
      <div className="absolute w-[600px] text-white ml-11 mt-44">
        <p className="text-5xl font-bold border-l-8 border-primary">
          WE ARE NOT LIKE ANY OTHER GYM IN PAKISTAN
        </p>
        <p className="text-2xl">
          Whether you want to get in shape with a personalized fitness training
          plan, break a sweat in a team environment, or reach peak athletic
          performance, our group of expert fitness coaches and community members
          are here to help you be your best self, every day.
        </p>
      </div>
      {/* GYM FORM */}
      <div className=" absolute  ml-[800px] mt-44  text-white">
        <p className="bg-white p-4 text-center font-bold text-4xl rounded text-black">
          Special Trial Offer
        </p>
        <div className="bg-black opacity-75 p-8 h-96 ">
          <p className=" w-60 mb-3 ">
            Sign up to begin your 3 day trial membership for only 3,000 PKR
          </p>
          <form action="./form">
            <input type="text" placeholder="First Name" />
            <br />
            <br />
            <input type="text" placeholder="Last Name" />
            <br />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <br />
            <input type="tel" placeholder="Phone Number" />
            <br />
            <br />
            <button
              type="button"
              className="bg-primary p-2 hover:bg-yellow-600 rounded-lg"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <div>
        <Image
          src={img}
          alt={"machineimage"}
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default FormPage;
