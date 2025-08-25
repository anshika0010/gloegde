"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ReelsOfTheWeek = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const reels = [
    {
      id: 1,
      title: "New Delhi",
      subtitle: "Jan Sabha",
      year: "2024",
      bgColor: "bg-gradient-to-br from-red-900 to-black",
      textColor: "text-white",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Nationwide Visas",
      subtitle: "9th Floor, Modi Tower",
      description: "Walk-in for instant discounts!",
      bgColor: "bg-gradient-to-br from-gray-900 to-red-900",
      textColor: "text-white",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Successful Seminar",
      location: "@New Delhi",
      highlight: "START-UP VISA",
      bgColor: "bg-gradient-to-br from-pink-200 to-pink-300",
      textColor: "text-gray-800",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Successful Seminar",
      location: "@Gujarat",
      highlight: "START-UP VISA",
      bgColor: "bg-gradient-to-br from-green-200 to-yellow-200",
      textColor: "text-gray-800",
      image:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Highest Average Salaries",
      subtitle: "Top 20 Countries",
      bgColor: "bg-gradient-to-br from-red-900 to-black",
      textColor: "text-white",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop",
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Reels Of The Week
          </h2>
        </div>

        {/* Scrollable Container */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          )}

          {/* Reels Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" },
            }}
          >
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div
                  className={`relative w-full h-full ${reel.bgColor} p-6 flex flex-col justify-between`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${reel.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`${reel.textColor} space-y-2`}>
                      {reel.title && (
                        <h3 className="text-2xl font-bold leading-tight">
                          {reel.title}
                        </h3>
                      )}
                      {reel.subtitle && (
                        <p className="text-lg opacity-90">{reel.subtitle}</p>
                      )}
                      {reel.year && (
                        <p className="text-xl font-semibold">{reel.year}</p>
                      )}
                      {reel.location && (
                        <p className="text-lg opacity-90">{reel.location}</p>
                      )}
                      {reel.description && (
                        <p className="text-base opacity-80 mt-2">
                          {reel.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Highlight Text */}
                  {reel.highlight && (
                    <div className="relative z-10">
                      <div className="text-red-500 font-bold text-2xl">
                        {reel.highlight}
                      </div>
                    </div>
                  )}

                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-white/20 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ReelsOfTheWeek;
