import React from "react";

export default function JobSearchPage() {
  return (
    <div className="font-sans">
      {/* Work Abroad Section */}
      <section className="bg-teal-700 text-white p-8 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4">Work Abroad</h2>
          <p className="mb-4">Top countries to work overseas</p>
          <div className="flex flex-wrap gap-2">
            {[
              "USA",
              "UK",
              "UAE",
              "Australia",
              "Canada",
              "Germany",
              "Sweden",
              "Portugal",
              "Why choose us?",
            ].map((country) => (
              <button
                key={country}
                className="bg-white text-teal-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100"
              >
                {country}
              </button>
            ))}
          </div>
        </div>
        <img
          src="https://www.y-axis.com/assets/cms/2023-09/Get%20your%20Career%20Strategy%20%281%29.webp"
          alt="Professional"
          className="rounded-lg mt-6 md:mt-0"
        />
      </section>

      {/* Job Search Services */}
      <section className="p-8 text-center">
        <h2 className="text-2xl font-bold">
          Y-Axis Job Search Services Solution
        </h2>
      </section>

      {/* Step 1 */}
      <section className="flex flex-col md:flex-row items-center bg-gray-50 p-8">
        <img
          src="https://www.y-axis.com/assets/cms/2023-09/Work%20Abroad.webp"
          alt="Career Strategy"
          className="rounded-lg mb-6 md:mb-0 md:mr-8"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Step 1. Get your Career Strategy</h3>
          <ul className="list-disc ml-6 mb-4 text-gray-700 text-left">
            <li>Review your strengths, weaknesses and values</li>
            <li>Know your objectives</li>
            <li>
              Research markets and make the most of opportunities. Develop
              specific techniques. Analyse your position and create a strategy.
            </li>
            <li>Develop expertise</li>
          </ul>
          <div className="flex gap-3">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Sign Up Now
            </button>
            <button className="border border-gray-400 px-4 py-2 rounded-md">
              View Sample Career Strategy Report
            </button>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="flex flex-col md:flex-row-reverse items-center p-8">
        <img
          src="https://www.y-axis.com/assets/cms/2023-09/Build%20your%20suitable.webp"
          alt="Build Profile"
          className="rounded-lg mb-6 md:mb-0 md:ml-8"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">
            Step 2. Build your Suitable Profile
          </h3>
          <ul className="list-disc ml-6 mb-4 text-gray-700 text-left">
            <li>LinkedIn Profile</li>
            <li>Naukri Profile</li>
            <li>Seek.com.au Profile</li>
            <li>Gulf Jobs Profile</li>
            <li>Indeed Profile</li>
            <li>Monster Profile</li>
          </ul>
          <div className="flex gap-3">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Sign Up Now
            </button>
            <button className="border border-gray-400 px-4 py-2 rounded-md">
              More Info
            </button>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="flex flex-col md:flex-row items-center bg-gray-50 p-8">
        <img
          src="https://www.y-axis.com/assets/cms/2023-09/Resume%20Writing.webp"
          alt="Resume Writing"
          className="rounded-lg mb-6 md:mb-0 md:mr-8"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Step 3. Resume Writing</h3>
          <ul className="list-disc ml-6 mb-4 text-gray-700 text-left">
            <li>Take control of your overseas job search now</li>
            <li>Create a professional profile for yourself</li>
          </ul>
          <div className="flex gap-3">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Sign Up Now
            </button>
            <button className="border border-gray-400 px-4 py-2 rounded-md">
              More Info
            </button>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="flex flex-col md:flex-row-reverse items-center p-8">
        <img
          src="https://www.y-axis.com/assets/cms/2023-09/Resume%20Marketing.webp"
          alt="Resume Marketing"
          className="rounded-lg mb-6 md:mb-0 md:ml-8"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Step 4. Resume Marketing</h3>
          <ul className="list-disc ml-6 mb-4 text-gray-700 text-left">
            <li>
              Helps you update the most important factors that fit the career
              state
            </li>
            <li>Professional Resume Writing</li>
            <li>Optimized LinkedIn Profile</li>
            <li>Recruiter Connection</li>
            <li>Keyword Optimization</li>
          </ul>
          <div className="flex gap-3">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Sign Up Now
            </button>
            <button className="border border-gray-400 px-4 py-2 rounded-md">
              View Sample Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
