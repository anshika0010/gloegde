import React from "react";

const TopUniversityPlacements = () => {
  const universities = {
    "United States": [
      "https://www.y-axis.com/lp/study/images/universities/us/pennstate.png",
      "https://www.y-axis.com/lp/study/images/universities/us/purdue.png",
      "https://www.y-axis.com/lp/study/images/universities/us/UC-Berkeley.png",
      "https://www.y-axis.com/lp/study/images/universities/uk/edinburgh.png",
    ],
    "United Kingdom": [
          "https://www.y-axis.com/lp/study/images/universities/us/pennstate.png",
      "https://www.y-axis.com/lp/study/images/universities/us/purdue.png",
      "https://www.y-axis.com/lp/study/images/universities/us/UC-Berkeley.png",
      "https://www.y-axis.com/lp/study/images/universities/uk/edinburgh.png",
    ],
    Australia: [
      "https://www.y-axis.com/lp/study/images/universities/us/pennstate.png",
      "https://www.y-axis.com/lp/study/images/universities/us/purdue.png",
      "https://www.y-axis.com/lp/study/images/universities/us/UC-Berkeley.png",
      "https://www.y-axis.com/lp/study/images/universities/uk/edinburgh.png",
    ],
    Germany: [
         "https://www.y-axis.com/lp/study/images/universities/us/pennstate.png",
      "https://www.y-axis.com/lp/study/images/universities/us/purdue.png",
      "https://www.y-axis.com/lp/study/images/universities/us/UC-Berkeley.png",
      "https://www.y-axis.com/lp/study/images/universities/uk/edinburgh.png",
    ],
    Canada: [
        "https://www.y-axis.com/lp/study/images/universities/us/pennstate.png",
      "https://www.y-axis.com/lp/study/images/universities/us/purdue.png",
      "https://www.y-axis.com/lp/study/images/universities/us/UC-Berkeley.png",
      "https://www.y-axis.com/lp/study/images/universities/uk/edinburgh.png",
    ],
  };

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Top University Placements
        </h2>

        {/* University Sections */}
        <div className="mt-10 space-y-12">
          {Object.entries(universities).map(([country, logos], index) => (
            <div key={index}>
              {/* Country Heading */}
              <h3 className="text-lg font-semibold text-gray-900 flex flex-col items-center">
                {country}
                <span className="w-10 h-[2px] bg-red-600 mt-1"></span>
              </h3>

              {/* Logos */}
              <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
                {logos.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={`${country} University ${i + 1}`}
                    className="h-14 object-contain"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopUniversityPlacements;
