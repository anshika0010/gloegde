"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";
import Link from "next/link";

const TestimonialSection = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "Canada PR Visa",
      description:
        "Y-Axis helped me navigate through the complex immigration process with ease. Their expert guidance made my dream of moving to Canada a reality.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // dummy video
      videoThumbnail:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
    {
      id: 2,
      name: "Rajesh Patel",
      country: "Australia Work Visa",
      description:
        "From document preparation to visa approval, Y-Axis provided exceptional service throughout my journey.",
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY", // dummy video
      videoThumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      country: "UK Study Visa",
      description:
        "The Y-Axis team made my study abroad dreams come true. Excellent service and support!",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U", // dummy video
      videoThumbnail:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
      rating: 5,
    },
  ];

  const handlePlayVideo = (id) => {
    setPlayingVideo(id);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Hear success stories from thousands of clients who achieved their
              immigration dreams with Y-Axis
            </p>
          </div>

          {/* Button moved to right */}
          <div className="mt-6 md:mt-0">
            <Link
              href="https://www.youtube.com/@GloEdgeVisas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md inline-block"
            >
              View All Testimonials
            </Link>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Section */}
              {/* Video Section */}
              <div className="relative aspect-video overflow-hidden group">
                {playingVideo === testimonial.id ? (
                  // अगर play button दबाया गया है तो iframe show होगा
                  <iframe
                    width="100%"
                    height="100%"
                    src={testimonial.videoUrl + "?autoplay=1"} // autoplay भी होगा
                    title="Client Testimonial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  // वरना thumbnail + play button show होगा
                  <>
                    <img
                      src={testimonial.videoThumbnail}
                      alt={`${testimonial.name} testimonial`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-500 flex items-center justify-center">
                      <button
                        onClick={() => handlePlayVideo(testimonial.id)}
                        className="bg-red-600 hover:bg-red-700 rounded-full p-4 transition-transform duration-300 transform group-hover:scale-110 shadow-lg"
                      >
                        <Play className="w-8 h-8 text-white fill-current" />
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Content Section */}
              <div className="p-4 space-y-2">
                {/* Client Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-red-600 font-medium text-sm mb-1">
                    {testimonial.country}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed line-clamp-2">
                  {testimonial.description}
                </p>

                {/* Read More Button */}
                <button className="text-red-500 font-semibold hover:text-gray-500 transition-colors duration-200 mt-1">
                  Read More...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
