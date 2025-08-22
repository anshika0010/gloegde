import React from "react";
import { Users, Award, Calendar, Building } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                Read More
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* 1 Million Successful Applicants */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">1 Million+</p>
                  <p className="text-sm text-gray-600 leading-tight">
                    Successful
                    <br />
                    Applicants
                  </p>
                </div>
              </div>

              {/* Counselled 10 Million+ */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Award className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    10 Million+
                  </p>
                  <p className="text-sm text-gray-600 leading-tight">
                    Counselled
                    <br />
                    Clients
                  </p>
                </div>
              </div>

              {/* Experts Since 1999 */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Calendar className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Since 1999</p>
                  <p className="text-sm text-gray-600 leading-tight">
                    Licensed Immigration
                    <br />
                    Experts
                  </p>
                </div>
              </div>

              {/* Offices 50+ */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Building className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-600 leading-tight">
                    Global
                    <br />
                    Offices
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="data:image/jpeg;base64,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"
              alt="Professional woman in yellow sweater"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
