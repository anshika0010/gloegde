import SuperSaverPackage from "../../components/SuperSaverPackage";
import CoachingSection from "../../components/CoachingSection";
import StudyAbroadSection from "../../components/StudyAbroadSection";
import React from "react";
import TopUniversityPlacements from "../../components/TopUniversityPlacements";
import CareerSection from "../../components/CareerSection";
import Services from "../../components/Services";
import TestimonialSlider from "../../components/TestimonialSlider";

const Study = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center mt-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl shadow-lg">
          {/* Left Section */}
          <div className="bg-yellow-500 flex flex-col items-center justify-center p-10">
            <h2 className="text-white font-bold text-3xl mb-4 leading-tight">
              Right course <br />{" "}
              <span className="text-white">» Right path</span>
            </h2>
            <img
              src="https://img.freepik.com/free-photo/smiling-student_1098-13739.jpg" // Replace with same image or local asset
              alt="student"
              className="w-80 md:w-[350px] object-contain"
            />
          </div>

          {/* Right Section */}
          <div className="bg-white p-10 flex flex-col justify-center relative">
            {/* Red Bar */}
            <div className="absolute left-0 top-10 w-2 h-16 bg-red-600"></div>

            <h2 className="text-3xl font-bold mb-2">
              Study Abroad With Y-Axis
            </h2>
            <p className="text-gray-600 mb-6">
              Value packed career counseling, college admissions, student visa
              and coaching solutions.
            </p>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 p-3 w-full focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 p-3 w-full focus:outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-3 w-full focus:outline-none"
              />

              <div className="grid grid-cols-3 gap-4">
                <select className="border border-gray-300 p-3 w-full focus:outline-none col-span-1">
                  <option>IND (+91)</option>
                  <option>USA (+1)</option>
                  <option>UK (+44)</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 p-3 w-full focus:outline-none col-span-2"
                />
              </div>

              <select className="border border-gray-300 p-3 w-full focus:outline-none">
                <option>Andhra Pradesh</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
              </select>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I accept all terms & privacy policy
                </label>
              </div>

              <div className="grid grid-cols-3 gap-2 items-center">
                <label className="col-span-1 text-gray-700 text-sm">
                  What is 9 + 3
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-black font-semibold py-2 px-4 hover:bg-yellow-600 transition col-span-1"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <StudyAbroadSection />
      <div className="w-full bg-white">
        {/* Top Section */}
        <div className="max-w-5xl mx-auto text-center py-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Supporting students since 1999
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Y-Axis is one of the most trusted names in the education space. We
            have the skills, experience, and network to help students like you
            unlock their potential by gaining an admission to their dream
            university.
          </p>

          {/* Links Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6 font-medium text-gray-900">
            <button className="hover:text-yellow-600 flex items-center gap-1">
              Our values <span className="font-bold">+</span>
            </button>
            <button className="hover:text-yellow-600 flex items-center gap-1">
              Our methodology <span className="font-bold">+</span>
            </button>
            <button className="hover:text-yellow-600 flex items-center gap-1">
              Why choose Y-Axis <span className="font-bold">+</span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center border rounded-sm overflow-hidden shadow-sm">
          {/* Left Text */}
          <div className="p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Talk to a Y-Axis study abroad expert
            </h3>
            <p className="mt-3 text-gray-600">
              Don’t know where to start, or need help with something specific?
              We can help.
            </p>

            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 flex items-center gap-2 shadow-md">
              Chat with us <span className="text-lg">→</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" // Replace with your actual image
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Services />
      <CoachingSection />
      <SuperSaverPackage />
      <TopUniversityPlacements />
      <TestimonialSlider />
      <CareerSection />
    </>
  );
};

export default Study;
