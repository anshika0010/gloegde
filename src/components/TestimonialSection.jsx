'use client';
import React, { useState } from 'react';
import { Play, Star } from 'lucide-react';

const TestimonialSection = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "Canada PR Visa",
      description: "Y-Axis helped me navigate through the complex immigration process with ease. Their expert guidance made my dream of moving to Canada a reality. The team was professional, responsive, and always available to answer my questions.",
      videoThumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 5
    },
    {
      id: 2,
      name: "Rajesh Patel",
      country: "Australia Work Visa",
      description: "From document preparation to visa approval, Y-Axis provided exceptional service throughout my journey. Their attention to detail and personalized approach made all the difference. I highly recommend their services.",
      videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 5
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      country: "UK Study Visa",
      description: "The Y-Axis team made my study abroad dreams come true. They guided me through every step of the visa application process and helped me secure admission to my preferred university. Excellent service and support!",
      videoThumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 5
    }
  ];

  const handlePlayVideo = (id) => {
    setPlayingVideo(id);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear success stories from thousands of clients who achieved their immigration dreams with Y-Axis
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Video Section */}
              <div className="relative aspect-video bg-gray-900 overflow-hidden">
                <img
                  src={testimonial.videoThumbnail}
                  alt={`${testimonial.name} testimonial`}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button
                    onClick={() => handlePlayVideo(testimonial.id)}
                    className="bg-red-600 hover:bg-red-700 rounded-full p-4 transition-colors duration-200 group"
                  >
                    <Play className="w-8 h-8 text-white fill-current group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </div>
                {playingVideo === testimonial.id && (
                  <div className="absolute inset-0 bg-black flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <p className="mb-4">Video Player Placeholder</p>
                      <button
                        onClick={() => setPlayingVideo(null)}
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Client Info */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-red-600 font-medium text-sm mb-3">
                    {testimonial.country}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed line-clamp-4">
                  {testimonial.description}
                </p>

                {/* Read More Button */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mt-4">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Testimonials Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
            View All Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;