"use client";
import { useState } from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "Africa",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXEP1duOXkh6zbxJqMtny6oHLSxmBhJbo1w&s",
      points: [
        "PR Visa",
        "Work Visa",
        "Student Visa",
        "Express Entry Program",
        "PNP",
        "Business Visa",
        "Visit Visa",
        "Digital Nomad Visa",
      ],
      color: "bg-gradient-to-br from-gray-700 to-gray-500",
    },
    {
      title: "America",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXEP1duOXkh6zbxJqMtny6oHLSxmBhJbo1w&s",
      points: [
        "PR Visa",
        "Work Visa",
        "Student Visa",
        "Express Entry Program",
        "PNP",
        "Business Visa",
        "Visit Visa",
        "Digital Nomad Visa",
      ],
      color: "bg-gradient-to-br from-gray-700 to-gray-500",
    },
    {
      title: "USA",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXEP1duOXkh6zbxJqMtny6oHLSxmBhJbo1w&s",
      points: [
        "PR Visa",
        "Work Visa",
        "Student Visa",
        "Express Entry Program",
        "PNP",
        "Business Visa",
        "Visit Visa",
        "Digital Nomad Visa",
      ],
      color: "bg-gradient-to-br from-gray-700 to-gray-500",
    },
    {
      title: "Canada",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXEP1duOXkh6zbxJqMtny6oHLSxmBhJbo1w&s",
      points: [
        "PR Visa",
        "Work Visa",
        "Student Visa",
        "Express Entry Program",
        "PNP",
        "Business Visa",
        "Visit Visa",
        "Digital Nomad Visa",
      ],
      color: "bg-gradient-to-br from-gray-700 to-gray-500",
    },
    {
      title: "Australia",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXEP1duOXkh6zbxJqMtny6oHLSxmBhJbo1w&s",
      points: [
        "PR Visa",
        "Work Visa",
        "Student Visa",
        "Express Entry Program",
        "PNP",
        "Business Visa",
        "Visit Visa",
        "Digital Nomad Visa",
      ],
      color: "bg-gradient-to-br from-gray-700 to-gray-500",
    },
    {
      title: "Europe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXEP1duOXkh6zbxJqMtny6oHLSxmBhJbo1w&s",
      points: [
        "PR Visa",
        "Work Visa",
        "Student Visa",
        "Express Entry Program",
        "PNP",
        "Business Visa",
        "Visit Visa",
        "Digital Nomad Visa",
      ],
      color: "bg-gradient-to-br from-gray-700 to-gray-500",
    },
  ];

  const [firstFlipped, setFirstFlipped] = useState(true);

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              What can we do for you today?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Choose a service to explore how we can help you study, migrate,
              work, visit, or even get citizenship. Our team ensures you get
              personalized guidance at every step.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-red-500 text-white font-semibold rounded-xl shadow-md hover:bg-red-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Free Counselling
            </button>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const isFirst = index === 0;
                return (
                  <div
                    key={index}
                    className="group w-full h-80 cursor-pointer"
                    style={{ perspective: "1000px" }}
                    onMouseEnter={() => {
                      if (isFirst) setFirstFlipped(false);
                    }}
                  >
                    {/* Card */}
                    <div
                      className={`relative w-full h-full transition-transform duration-700 transform-gpu 
                        ${
                          isFirst
                            ? firstFlipped
                              ? "rotate-y-180"
                              : "group-hover:rotate-y-180"
                            : "group-hover:rotate-y-180"
                        }`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front Side */}
                      <div
                        className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <div
                          className="absolute inset-0 bg-fit bg-center scale-105 group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url(${service.img})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <h3 className="text-3xl font-bold text-white text-center drop-shadow-lg px-4">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Back Side */}
                      <div
                        className={`absolute inset-0 w-full h-full rounded-2xl ${service.color} shadow-xl flex flex-col justify-center items-center p-6 text-white rotate-y-180`}
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <h3 className="text-2xl font-bold mb-6 mt-3 text-center drop-shadow-md">
                          {service.title}
                        </h3>

                        <div className="space-y-3 w-full overflow-y-auto">
                          {service.points.map((point, idx) => (
                            <div
                              key={idx}
                              className="flex items-center group cursor-pointer"
                            >
                              <div className="w-2.5 h-2.5 bg-white rounded-full mr-3 flex-shrink-0 shadow-sm"></div>
                              <span
                                className={`
    relative text-sm font-medium tracking-wide 
    transition-colors duration-300 group-hover:text-yellow-200
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-red-400 after:to-yellow-400 
    after:transition-all after:duration-500 group-hover:after:w-full
  `}
                              >
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group-hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
