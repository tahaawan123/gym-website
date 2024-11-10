import React from "react";
import Image from "next/image";








const AboutPage = () => {
  return (
    <div>
      <div className="p-11 bg-gray-300">
        <h2 className="text-center font-bold text-3xl   ">
          READY TO GET STARTED?{" "}
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex">
        <Image
          src={"/GymClasses.jpg"}
          alt="GymClasses"
          width={600}
          height={400}
          className="border-x-2"
        />
        <h2 className="absolute text-primary m-52 text-4xl font-bold">
          OUR CLASSES
        </h2>
        <Image
          src={"/GymTrainer.jpg"}
          alt="GymTrainer"
          width={661}
          height={400}
          className=" border-x-2"
        />
        <h2 className="absolute text-primary text-4xl font-bold m-52 ml-[700px] ">
          OUR TRAINERS
        </h2>
      </div>

      {/* EQUIPMENT */}

      <h2 className="mt-10 ml-16 text-4xl mb-3 font-serif font-serifc font-[600]">
        EQUIPMENT
      </h2>
      <div className="flex font-mono">
        <p className="ml-12 text-xl p-12">
          At Structure Health & Fitness, we are dedicated to transforming your
          fitness aspirations into reality. Our range of fitness equipment is
          meticulously designed to cater to all your exercise needs, whether you
          are a beginner or a seasoned athlete. From treadmills that propel you
          towards your cardio goals to weightlifting apparatus that build
          strength, our high-quality products ensure a holistic workout
          experience. Join us on the path to a healthier lifestyle, backed by
          the reliability of Structure Health & Fitness.
        </p>
        <Image
          src={"/Doumbble.jpg"}
          alt="GymTrainer"
          width={600}
          height={400}
          className="mr-12 rounded shadow-md shadow-black"
        />
      </div>

      {/* COMMUNITY CARES */}

      <h2 className="mt-10 flex  ml-[700px] text-4xl mb-3 font-serifc font-[600]">
        COMMUNITY CARES
      </h2>
      <div className="flex font-mono">
        <Image
          src={"/trainer.jpg"}
          alt="GymTrainer"
          width={600}
          height={400}
          className="ml-12 rounded shadow-md shadow-black"
        />

        <p className="ml-12 text-xl p-12">
          Welcome to our vibrant gym community, where support is the foundation
          of our fitness journey. Join us to experience a welcoming atmosphere
          filled with like-minded individuals. Our monthly challenges keep you
          motivated and striving for your goals, while our online platforms
          proudly showcase your transformation to inspire others.
        </p>
      </div>

      {/* Personal Training At Its Best */}

      <h2 className="mt-10 ml-16 text-4xl mb-3 font-serif font-serifc font-[600]">
        PERSONAL TRAINING AT ITS BEST
      </h2>
      <div className="flex font-mono">
        <p className="ml-12 text-xl p-12">
          Our personalized training program is designed to help you achieve your
          fitness goals efficiently. Our expert trainers not only guide you
          through effective workouts but also provide tailored diet charts to
          optimize your progress. Attain your fitness potential with our
          transformative program. Start your journey today.
        </p>
        <Image
          src={"/PersonalTraining.jpg"}
          alt="personalTrainer"
          width={600}
          height={400}
          className="mr-12 rounded shadow-md shadow-black"
        />
      </div>

      {/* Our Amenities */}

      <h2 className="mt-10 flex  ml-[700px] text-4xl mb-3 font-serifc font-[600]">
        OUR AMENITIES
      </h2>
      <div className="flex font-mono">
        <Image
          src={"/Pool.png"}
          alt="pool"
          width={600}
          height={400}
          className="ml-12 rounded shadow-md shadow-black"
        />

        <p className="ml-12 text-xl p-12">
          Experience a gym like no other with our top-notch amenities. Store
          your belongings in secure lockers, then unwind in our pool, jacuzzi,
          and sauna. Treat yourself to a rejuvenating massage at our spa or grab
          a healthy refreshment at our health bar. Our well-maintained shower
          facilities ensure you leave feeling refreshed and ready to conquer the
          day. Discover the perfect balance of fitness and relaxation at
          Structure Health & Fitness.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
