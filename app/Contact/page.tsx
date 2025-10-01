
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div>
        <Header />
    
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="p-6 md:p-11 bg-gray-300">
        <h2 className="text-center font-bold text-2xl md:text-3xl">
          CONTACT US
        </h2>
        <p className="text-center mt-2 text-gray-700">
          We’re here to answer your questions and support your fitness journey.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-12">
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2">📍 Address</h3>
          <p>Structure Health & Fitness</p>
          <p>Karachi DHA Phase II</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2">📞 Phone</h3>
          <p>+92 308 2520161</p>
          <p>+92 333 7654322</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2">📧 Email</h3>
          <p>info@structurefitness.com</p>
          <p>support@structurefitness.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="p-6 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Get In Touch
        </h2>
        <form className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="p-6 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Find Us On Map
        </h2>
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.571071730986!2d68.618!3d26.931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU1JzUxLjYiTiA2OMKwMzcnMDQuOCJF!5e0!3m2!1sen!2s!4v1699999999999"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default ContactPage;

