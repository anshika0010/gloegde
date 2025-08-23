import React from "react";

const StudyAbroadSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        India’s Most Trusted Study Abroad Consultants
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Y-Axis helps students like you find and apply to in-demand courses in
        international universities that lead to a rewarding career. Our{" "}
        <span className="font-semibold">Right Course, Right Path</span>{" "}
        methodology ensures you don’t just get an education but global mobility
        and a successful future.
      </p>

      {/* Two Column Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="border p-6 relative">
          <h3 className="font-semibold text-lg mb-4">
            Study abroad by country
          </h3>
          <ul className="space-y-3">
            {[
              "Study in Canada",
              "Study in Australia",
              "Study in Germany",
              "Study in UK",
              "Study in USA",
              "Study in Europe",
              "Study in Korea",
              "Study in Finland",
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-gray-800 hover:text-black cursor-pointer"
              >
                {item}
                <span className="text-red-600 font-bold">...</span>
              </li>
            ))}
          </ul>
          {/* Red underline */}
          <div className="absolute bottom-0 left-6 w-8 h-2 bg-red-600"></div>
        </div>

        {/* Right Card */}
        <div className="border p-6 relative">
          <h3 className="font-semibold text-lg mb-4">Study abroad by degree</h3>
          <ul className="space-y-3">
            {["Masters", "MBA", "B.TECH", "Bachelors"].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-gray-800 hover:text-black cursor-pointer"
              >
                {item}
                <span className="text-red-600 font-bold">...</span>
              </li>
            ))}
          </ul>
          {/* Red underline */}
          <div className="absolute bottom-0 left-6 w-8 h-2 bg-red-600"></div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadSection;
