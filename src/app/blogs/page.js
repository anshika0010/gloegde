import BlogSection from "../../components/BlogSection";
import React from "react";

const page = () => {
  return (
    <div className="mt-20">
      <section className="relative w-full bg-gradient-to-r from-yellow-100 to-yellow-50 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Build Your Future <br /> with{" "}
              <span className="text-yellow-500">Confidence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              We provide trusted services to help you achieve your goals, from
              career consultation to personalized guidance.
            </p>

            {/* CTA Buttons */}
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600 transition">
                Get Started
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://i.pinimg.com/736x/5c/14/72/5c14720afdd38dad4e842657263dbfc5.jpg"
              alt="Hero Illustration"
              className="rounded-2xl shadow-lg w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </section>
      <BlogSection />
    </div>
  );
};

export default page;
