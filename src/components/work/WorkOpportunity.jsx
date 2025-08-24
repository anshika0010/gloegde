import React from "react";

const WorkOpportunity = () => {
  return (
    <div className="border p-4 bg-white">
      {/* Heading */}
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Work Opportunity
      </h2>

      {/* Search Section */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-4">
        <input
          type="text"
          placeholder="Search Careers"
          className="w-full md:w-1/3 border border-gray-300 p-3 rounded focus:outline-none"
        />
        <select className="w-full md:w-1/3 border border-gray-300 p-3 rounded focus:outline-none">
          <option>Select Country</option>
          <option>USA</option>
          <option>Germany</option>
          <option>Canada</option>
          <option>Australia</option>
          <option>UK</option>
          <option>Dubai</option>
        </select>
        <button className="bg-red-600 text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition">
          Search
        </button>
      </div>

      {/* Resume Note */}
      <p className="text-center text-gray-600 mb-6">
        Post your Resume -{" "}
        <span className="text-black font-semibold">
          Your overseas job search starts here.
        </span>
      </p>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* By Country */}
        <div className="border p-4">
          <h3 className="font-bold text-lg text-gray-800 mb-2 relative">
            By Country
            <span className="absolute top-0 left-0 w-8 h-1 bg-red-600"></span>
          </h3>
          <ul className="space-y-2 text-blue-900">
            <li className="flex justify-between">
              <span>Jobs in USA</span> <span className="text-red-600">...</span>
            </li>
            <li className="flex justify-between">
              <span>Jobs in Germany</span> <span className="text-red-600">...</span>
            </li>
            <li className="flex justify-between">
              <span>Jobs in Canada</span> <span className="text-red-600">...</span>
            </li>
            <li className="flex justify-between">
              <span>Jobs in Australia</span> <span className="text-red-600">...</span>
            </li>
            <li className="flex justify-between">
              <span>Jobs in UK</span> <span className="text-red-600">...</span>
            </li>
            <li className="flex justify-between">
              <span>Jobs in Dubai</span> <span className="text-red-600">...</span>
            </li>
          </ul>
        </div>

        {/* By Profession */}
        <div className="border p-4">
          <h3 className="font-bold text-lg text-gray-800 mb-2 relative">
            By Profession
            <span className="absolute top-0 left-0 w-8 h-1 bg-red-600"></span>
          </h3>
          <ul className="space-y-2 text-blue-900">
            <li>IT</li>
            <li>Engineering</li>
            <li>Marketing and Sales</li>
            <li>HR</li>
            <li>Healthcare</li>
            <li>Teachers</li>
            <li>Accountants</li>
            <li>Nursing</li>
            <li>Hospitality</li>
          </ul>
        </div>

        {/* By Visa */}
        <div className="border p-4">
          <h3 className="font-bold text-lg text-gray-800 mb-2 relative">
            By Visa
            <span className="absolute top-0 left-0 w-8 h-1 bg-red-600"></span>
          </h3>
          <ul className="space-y-2 text-blue-900">
            <li>Australia Work Visa</li>
            <li>Canada Work Visa</li>
            <li>UK Skilled Worker Visa</li>
            <li>Germany Opportunity Card</li>
            <li>Sweden Residence Permit</li>
            <li>Portugal Jobseeker Visa</li>
          </ul>
        </div>

        {/* By Services */}
        <div className="border p-4">
          <h3 className="font-bold text-lg text-gray-800 mb-2 relative">
            By Services
            <span className="absolute top-0 left-0 w-8 h-1 bg-red-600"></span>
          </h3>
          <ul className="space-y-2 text-blue-900">
            <li>Search Overseas Jobs</li>
            <li>Post Resume</li>
            <li>Job Search Services</li>
            <li>Resume Writing</li>
            <li>LinkedIn Optimization</li>
            <li>Resume Marketing</li>
            <li>Post a Job</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkOpportunity;
