import React from "react";

export default function VisaForm() {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow border flex flex-col md:flex-row">
      {/* Left Side with Image & Text */}
      <div className="w-full md:w-1/2 bg-teal-600 text-white flex flex-col justify-center items-center p-8 relative">
        <img
          src="https://www.y-axis.com/assets/cms/2025-02/Overseas-Work-Opportunities.jpg" 
          alt="Professional"
          className="rounded-md mb-6"
        />
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold">
            Celebrating 25+ years of
          </h2>
          <h2 className="text-xl md:text-2xl font-semibold">
            creating Global Indians
          </h2>
          <div className="mt-6">
            <div className="text-4xl font-bold">25</div>
            <div className="text-sm">YEARS</div>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-2">
          Secure Your Work Visa Quickly & Easily
        </h2>
        <p className="text-sm mb-6">
          Want to Work Overseas? Avail our Job Search Services
        </p>

        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="text-sm">I am</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-400 focus:outline-none py-1"
            />
            <span className="text-sm"> wanted to work in</span>
          </div>

          {/* Country Dropdown */}
          <div>
            <select className="w-full border border-gray-400 rounded p-2 focus:outline-none">
              <option>Select Country</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>UK</option>
              <option>USA</option>
              <option>Germany</option>
            </select>
          </div>

          {/* Mobile Input */}
          <div>
            <label className="text-sm">You can contact me at</label>
            <div className="flex gap-2 mt-1">
              <select className="border-b border-gray-400 focus:outline-none">
                <option>IND +91</option>
                <option>USA +1</option>
                <option>UK +44</option>
              </select>
              <input
                type="text"
                placeholder="Mobile No."
                className="flex-1 border-b border-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* WhatsApp Toggle */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="toggle-checkbox" />
            <span className="text-sm">Use this as Whatsapp number</span>
          </div>

          {/* Email Input */}
          <div>
            <label className="text-sm">and Email</label>
            <input
              type="email"
              placeholder="Email Id"
              className="w-full border-b border-gray-400 focus:outline-none py-1"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            <span className="text-sm">
              I accept the{" "}
              <a href="#" className="text-blue-600 underline">
                Terms & Conditions
              </a>
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 font-semibold hover:bg-teal-700 transition"
          >
            Get Started
          </button>
        </form>

        {/* Free Consultation */}
        <div className="mt-6 flex items-center gap-3">
          <span className="text-3xl">👥</span>
          <div>
            <p className="font-semibold">Don’t know what to do?</p>
            <a href="#" className="text-red-600 font-semibold">
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
