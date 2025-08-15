import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Membership = () => {
  return (
    <div>
      <Header />
      <section className="min-h-screen bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="font-extrabold text-4xl md:text-5xl text-black">
            Choose Your <span className="text-primary">Membership</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Select the plan that best fits your fitness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-primary">
            <h3 className="text-2xl font-bold mb-4 text-primary">Starter</h3>
            <h4 className="text-4xl font-extrabold mb-4">
              Rs. 2,999 <span className="text-base">/month</span>
            </h4>
            <ul className="text-gray-700 space-y-2 mb-8">
              <li>Gym Floor Access</li>
              <li>Changing Rooms</li>
              <li>Locker Facility</li>
            </ul>
            <button className="w-full bg-primary hover:bg-yellow-500 text-white py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-black text-white p-8 rounded-2xl shadow-xl border-b-4 border-primary scale-105">
            <h3 className="text-2xl font-bold mb-4">Standard</h3>
            <h4 className="text-4xl font-extrabold mb-4">
              Rs. 4,999 <span className="text-base">/month</span>
            </h4>
            <ul className="space-y-2 mb-8 opacity-90">
              <li>Starter Benefits</li>
              <li>1 Personal Training Session</li>
              <li>Free Group Classes</li>
            </ul>
            <button className="w-full bg-primary hover:bg-yellow-500 text-white py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-300 hover:border-primary transition">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <h4 className="text-4xl font-extrabold mb-4">
              Rs. 7,999 <span className="text-base">/month</span>
            </h4>
            <ul className="text-gray-700 space-y-2 mb-8">
              <li>Standard Benefits</li>
              <li>Weekly Diet Plan</li>
              <li>Unlimited Trainer Support</li>
              <li>Sauna + Recovery Lounge</li>
            </ul>
            <button className="w-full bg-primary hover:bg-yellow-500 text-white py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-black text-white p-8 rounded-2xl shadow-xl border-b-4 border-primary">
            <h3 className="text-2xl font-bold mb-4">Gold</h3>
            <h4 className="text-4xl font-extrabold mb-4">
              Rs. 9,999 <span className="text-base">/month</span>
            </h4>
            <ul className="space-y-2 mb-8 opacity-90">
              <li>Premium Benefits</li>
              <li>24/7 Access</li>
              <li>Free Merchandise</li>
              <li>Nutrition Consultation</li>
            </ul>
            <button className="w-full bg-primary hover:bg-yellow-500 text-white py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-300 hover:border-primary transition">
            <h3 className="text-2xl font-bold mb-4">Couple Plan</h3>
            <h4 className="text-4xl font-extrabold mb-4">
              Rs. 12,999 <span className="text-base">/month</span>
            </h4>
            <ul className="text-gray-700 space-y-2 mb-8">
              <li>Access for 2 Members</li>
              <li>Dedicated Couple Training</li>
              <li>Free Diet Plans</li>
              <li>Locker & Steam Room</li>
            </ul>
            <button className="w-full bg-primary hover:bg-yellow-500 text-white py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>

          {/* Card 6 */}
          <div className="bg-black text-white p-8 rounded-2xl shadow-xl border-b-4 border-primary">
            <h3 className="text-2xl font-bold mb-4">Family Pack</h3>
            <h4 className="text-4xl font-extrabold mb-4">
              Rs. 19,999 <span className="text-base">/month</span>
            </h4>
            <ul className="space-y-2 mb-8 opacity-90">
              <li>Access for 4 Members</li>
              <li>Custom Family Program</li>
              <li>Monthly Health Checkup</li>
              <li>All Premium Benefits</li>
            </ul>
            <button className="w-full bg-primary hover:bg-yellow-500 text-white py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <Footer/>

    </div>
  );
};

export default Membership;
