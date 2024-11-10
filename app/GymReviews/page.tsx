import React from "react";
import Image from "next/image";





const ReviewsPage = () => {
  return (
    <div>
      <div className="absolute text-white  text-2xl  flex flex-col items-center">
        <h1 className="mb-16 mt-20 text-4xl ">TESTIMONIALS</h1>
        <p className="text-center ml-60 mr-60">
          I Joined Them Last Month And So Far Iam Having A Wonderful Experience
          Here. The Staff Is Friendly And Well Mannered. The Place Is Surrounded
          By Elite-class People As It Is One Of The Most Expensive Gyms And
          Fitness Clubs In Karachi. Iam Having Swimming Sessions There And So
          Far It Is My Best Experience.
        </p>

        {/* My Image */}

        <Image
          src={"/taha.jpg"}
          alt={"tahaPic"}
          width={100}
          height={100}
          className="rounded-full border-primary border-2"
        />
        <h3 className="text-white">MUHAMMAD TAHA</h3>
        <p className="text-primary">CROSSFIT PROFESSIONAL</p>
      </div>
      <div>
        <Image
          src={"/image1.jpg"}
          alt="Picture of the author "
          width={500}
          height={500}
          className="w-full h-full "
        />
      </div>

      {/* Gym FactS */}

      <div className="bg-primary h-96 text-white">
        <h3 className="text-center text-6xl p-7">GYM FACTS</h3>

        <div className="flex mt-40">
          <p>
            <span className="text-6xl font-medium mr-40 ml-4">12889</span>{" "}
            <br />
            Club Members
          </p>
          <p>
            <span className="text-6xl font-medium mr-40 ">40</span> <br />
            Club Trainers
          </p>
          <p>
            <span className="text-6xl font-medium mr-40 ">50</span> <br />
            Fitness Classes
          </p>
          <p>
            <span className="text-6xl font-medium mr-40 ">232</span> <br />
            Gym Equipment
          </p>
        </div>
      </div>

      {/* 2nd image Comfort Zone */}

      <div className="flex flex-row-reverse ">
        <div className="absolute text-white  mt-[500px]">
          <p className="text-5xl font-bold font-[oswald-sans-serif]">
            GET OUT OF YOUR
          </p>
          <p className="text-primary text-8xl font-[oswald-sans-serif] font-bold">
            COMFORT ZONE
          </p>
          <p>
            Success usually comes to those who are too busy to be looking for
            it. The body achieves what the mind believes.
          </p>
          <button
            type="button"
            className=" p-4 rounded-xl bg-primary hover:bg-yellow-600"
          >
            JOIN US TODAY
          </button>
        </div>
      </div>

      <div className="border-b-4 border-primary">
        <Image
          src={"/comfortGym.jpg"}
          alt={"comfort Zone"}
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ReviewsPage;
