"use client";
import { motion } from "framer-motion";
// import video from "../../public/myvideo.mp4";

export default function HeroSection() {
  return (
    <section className="w-full py-6 px-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-6 border border-gray-300 p-4 rounded-lg">
        {/* Left: Video (larger space) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-2/3"
        >
          <video
            src="/myvideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right: Services (smaller space) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-1/3 space-y-6 text-center md:text-left"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
            What can we do for you today?
          </h2>

          {/* Service buttons */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Study", color: "yellow" },
              { label: "Migrate", color: "purple" },
              { label: "Work", color: "blue" },
              { label: "Visit", color: "green" },
              { label: "Language", color: "pink" },
              { label: "Citizenship", color: "red" },
            ].map((service, idx) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={idx}
                className={`bg-${service.color}-500 hover:bg-${service.color}-600 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300`}
              >
                {service.label}
              </motion.button>
            ))}
          </div>

          {/* Counselling */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 text-sm">
            <span className="text-gray-600">Don’t know what to do?</span>
            <a
              href="#"
              className="text-red-500 font-medium hover:underline hover:scale-105 transition-transform"
            >
              Get free Counselling?
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
