import React from "react";
import { CheckCircle } from "lucide-react"; // for green check icons

const SuperSaverPackage = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto border rounded-sm shadow-sm p-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Study Abroad Super Saver Package
        </h2>
        <p className="mt-2 text-gray-600">
          Get all the services mentioned above for a discounted price.
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-8">
          {[
            "Expert counseling",
            "Course selection",
            "Admissions services",
            "Student visa services",
            "Statement of purpose",
            "Letters of Recommendation",
            "Any one coaching solution",
            "Dedicated support",
          ].map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" />
              <span className="text-gray-800">{service}</span>
            </div>
          ))}
        </div>

        {/* Chat Button */}
        <div className="mt-8">
          <button className="relative bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 flex items-center gap-2 mx-auto shadow-md">
            Chat with us <span className="text-lg">→</span>
            {/* small red bar at right side */}
            <span className="absolute right-0 top-0 h-full w-1 bg-red-600"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuperSaverPackage;
