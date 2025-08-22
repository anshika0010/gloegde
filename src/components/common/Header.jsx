"use client";
import Image from "next/image";
import logo from "../../../public/logo1.png";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top contact bar */}
      <div className="bg-gray-50 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6 text-sm text-gray-700">
            <span className="flex items-center gap-2">
              📞 <span>7670 800 000</span>
            </span>
            <span className="flex items-center gap-2">
              💬 <span>+91 880 221 9999</span>
            </span>
          </div>
          <button className="text-sm text-black hover:text-red-600 transition-colors duration-200 font-medium">
            Contact Us
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-4">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <div className="border border-gray-300 p-3 rounded-sm bg-white">
                <Image
                  src={logo}
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex items-center flex-wrap lg:flex-nowrap gap-1 text-sm font-medium">
              {/* ABOUT US with dropdown */}
              <div className="group relative">
                <div className="border border-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200">
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-800 group-hover:text-black text-sm font-medium border-b-2 border-red-600"
                  >
                    ABOUT US
                  </a>
                </div>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md  w-48 z-50">
                  <ul className="py-2">
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                        Our Story
                      </a>
                    </li>
                    <li className="hover:bg-gray-100 relative group/nested">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between">
                        Team <span>▸</span>
                      </a>
                      {/* Nested Submenu */}
                      <ul className="absolute left-full top-0 hidden group-hover/nested:block bg-white shadow-lg rounded-md w-40">
                        <li className="hover:bg-gray-100">
                          <a href="#" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                            Leadership
                          </a>
                        </li>
                        <li className="hover:bg-gray-100">
                          <a href="#" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                            Advisors
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* SKILLED */}
              <div className="group relative">
                <div className="border border-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-200">
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-800 group-hover:text-white text-sm font-medium border-b-2 border-purple-600"
                  >
                    SKILLED
                  </a>
                </div>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md mt-1 w-48 z-50">
                  <ul className="py-2">
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                        Training
                      </a>
                    </li>
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                        Workshops
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* BUSINESS */}
              <div className="group relative">
                <div className="border border-gray-300 hover:bg-cyan-600 hover:text-white transition-all duration-200">
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-800 group-hover:text-white text-sm font-medium border-b-2 border-cyan-600"
                  >
                    BUSINESS
                  </a>
                </div>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md mt-1 w-48 z-50">
                  <ul className="py-2">
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                        Startups
                      </a>
                    </li>
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                        Consulting
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* WORK */}
              <div className="border border-gray-300 hover:bg-yellow-600 hover:text-white transition-all duration-200">
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-800 hover:text-white text-sm font-medium border-b-2 border-yellow-600"
                >
                  WORK
                </a>
              </div>

              {/* STUDY */}
              <div className="border border-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200">
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-800 hover:text-white text-sm font-medium border-b-2 border-blue-600"
                >
                  STUDY
                </a>
              </div>

              {/* VISIT */}
              <div className="border border-gray-300 hover:bg-green-600 hover:text-white transition-all duration-200">
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-800 hover:text-white text-sm font-medium border-b-2 border-green-600"
                >
                  VISIT
                </a>
              </div>

              {/* BLOGS */}
              <div className="border border-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-200">
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-800 hover:text-white text-sm font-medium border-b-2 border-indigo-600"
                >
                  BLOGS
                </a>
              </div>

              {/* AFFILIATE PROGRAM */}
              <div className="border border-gray-300 hover:bg-pink-600 hover:text-white transition-all duration-200">
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-800 hover:text-white text-sm font-medium border-b-2 border-pink-600"
                >
                  AFFILIATE PROGRAM
                </a>
              </div>

              {/* NEWSLETTER */}
              <div className="border border-gray-300 hover:bg-red-500 hover:text-white transition-all duration-200">
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-800 hover:text-white text-sm font-medium border-b-2 border-red-500"
                >
                  NEWSLETTER
                </a>
              </div>

              {/* OFFICES */}
              <div className="border border-gray-300 hover:bg-orange-600 hover:text-white transition-all duration-200">
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-800 hover:text-white text-sm font-medium border-b-2 border-orange-600"
                >
                  OFFICES
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}