"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "../../../public/logo1.png";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setOpenSubmenu(null); // reset nested if parent closed
  };

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top contact bar */}
      <div className="bg-gray-50 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-4 sm:gap-6">
          <div className="flex items-center  space-x-4 sm:space-x-8 text-sm sm:text-base text-black">
            {/* Phone */}
            <a
              href="tel:7670800000"
              className="flex items-center gap-2 hover:text-red-600 transition-colors duration-200"
            >
              <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              <span className="hidden xs:inline font-medium">7670 800 000</span>
              <span className="xs:hidden font-medium">Call</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918802219999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-600 transition-colors duration-200"
            >
              <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              <span className="hidden xs:inline font-medium">
                +91 880 221 9999
              </span>
              <span className="xs:hidden font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Contact Us Button */}
          <button className="text-sm sm:text-base text-black hover:text-red-600 transition-colors duration-200 font-semibold">
            Contact Us
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-2 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1 sm:gap-6 border border-gray-300">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="Company Logo"
              width={0}
              height={0}
              className="object-contain h-14 sm:h-12 lg:h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex text-[15px] font-semibold">
            {/* ABOUT US */}
            <div className="group relative border border-gray-300">
              <a
                href="#"
                className="block px-1 xl:px-2 py-5 border-b-4 border-red-600 text-black hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                ABOUT
              </a>
            </div>

            {/* SKILLED */}
            <div className="group relative border border-gray-300">
              <a
                href="#"
                className="px-2 xl:px-2 py-5 border-b-4 border-purple-600 text-black hover:bg-purple-600 hover:text-white flex gap-1 xl:gap-2 items-center justify-between transition-all duration-200"
              >
                SKILLED
                <span className="text-gray-400 group-hover:text-white text-xs">
                  ▼
                </span>
              </a>
              {/* Dropdown */}
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
                <ul className="py-2">
                  <li className="hover:bg-gray-100 relative group/nested">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      Canada <span className="w-20 text-black">▸</span>
                    </a>
                    <ul className="absolute left-full top-0 hidden group-hover/nested:block bg-white shadow-lg rounded-md w-40 h-80 max-y-scroll overflow-y-auto">
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                          Nursing Jobs in Canada
                        </a>
                      </li>
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                         Canada Express Entry
                        </a>
                      </li>
                       <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                         Canada Express Entry
                        </a>
                      </li>
                       <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                        Canada PR Points System
                        </a>
                      </li>
                       <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                         Canada Express Entry
                        </a>
                      </li>
                       <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                         Canada Express Entry
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      UAE<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      New zealand<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      USA<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100 relative group/nested">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      Australia <span className="w-20 text-black">▸</span>
                    </a>
                    <ul className="absolute left-full top-0 hidden group-hover/nested:block bg-white shadow-lg rounded-md w-40">
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                          Leadership
                        </a>
                      </li>
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                          Advisors
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="block px-4 py-2 text-black hover:text-gray-900"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* BUSINESS */}
            <div className="group relative border border-gray-300">
              <a
                href="#"
                className="px-2 xl:px-2 py-5 border-b-4 border-cyan-600 text-black hover:bg-cyan-600 hover:text-white flex gap-1 xl:gap-2 items-center justify-between transition-all duration-200"
              >
                BUSINESS
                <span className="text-gray-400 group-hover:text-white text-xs">
                  ▼
                </span>
              </a>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
                <ul className="py-2">
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      Canada<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      UAE<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      New zealand<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      USA<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100 relative group/nested">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      Australia <span className="w-20 text-black">▸</span>
                    </a>
                    <ul className="absolute left-full top-0 hidden group-hover/nested:block bg-white shadow-lg rounded-md w-40">
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                          Leadership
                        </a>
                      </li>
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                          Advisors
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* WORK */}
            <div className="group relative border border-gray-300">
              <a
                href="#"
                className="px-2 xl:px-2 py-5 border-b-4 border-yellow-600 text-black hover:bg-yellow-600 hover:text-white flex gap-1 xl:gap-2 items-center justify-between transition-all duration-200"
              >
                WORK
                <span className="text-gray-400 group-hover:text-white text-xs">
                  ▼
                </span>
              </a>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
                <ul className="py-2">
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      Canada<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      UAE<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      New zealand<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      USA<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100 relative group/nested">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      Australia <span className="w-20 text-black">▸</span>
                    </a>
                    <ul className="absolute left-full top-0 hidden group-hover/nested:block bg-white shadow-lg rounded-md w-40">
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                          Leadership
                        </a>
                      </li>
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                          Advisors
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* STUDY */}
            <div className="group relative border border-gray-300">
              <a
                href="#"
                className="px-2 xl:px-2 py-5 border-b-4 border-blue-600 text-black hover:bg-blue-600 hover:text-white flex gap-1 xl:gap-2 items-center justify-between transition-all duration-200"
              >
                STUDY
                <span className="text-gray-400 group-hover:text-white text-xs">
                  ▼
                </span>
              </a>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
                <ul className="py-2">
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      Canada<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      UAE<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      New zealand<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      USA<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100 relative group/nested">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      Australia <span className="w-20 text-black">▸</span>
                    </a>
                    <ul className="absolute left-full top-0 hidden group-hover/nested:block bg-white shadow-lg rounded-md w-40">
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                          Leadership
                        </a>
                      </li>
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                          Advisors
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* VISIT */}
            <div className="group relative border border-gray-300">
              <a
                href="#"
                className="block px-2 xl:px-2 py-5 border-b-4 border-green-600 text-black hover:bg-green-600 hover:text-white transition-all duration-200"
              >
                VISIT
                <span className="text-gray-400 group-hover:text-white text-xs">
                  ▼
                </span>
              </a>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
                <ul className="py-2">
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      Canada<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      UAE<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      New zealand<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      USA<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100 relative group/nested">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      Australia <span className="w-20 text-black">▸</span>
                    </a>
                    <ul className="absolute left-full top-0 hidden group-hover/nested:block bg-white shadow-lg rounded-md w-40">
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                          Leadership
                        </a>
                      </li>
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                          Advisors
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* BLOGS */}
            <div className="border border-gray-300">
              <a
                href="#"
                className="block px-2 xl:px-2 py-5 border-b-4 border-indigo-600 text-black hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                BLOGS
              </a>
            </div>

            {/* AFFILIATE PROGRAM */}
            <div className="border border-gray-300">
              <a
                href="#"
                className="block px-1 xl:px-2 py-5 border-b-4 border-pink-600 text-black hover:bg-pink-600 hover:text-white transition-all duration-200"
              >
                PROGRAM
              </a>
            </div>

            {/* NEWSLETTER */}
            <div className="border border-gray-300">
              <a
                href="#"
                className="block px-2 xl:px-2 py-5 border-b-4 border-green-400 text-black hover:bg-red-300 hover:text-white transition-all duration-200"
              >
                NEWSLETTER
              </a>
            </div>

            {/* OFFICES */}
            <div className="group relative border border-gray-300">
              <a
                href="#"
                className="block px-2 xl:px-2 py-5 border-b-4 border-orange-600 text-black hover:bg-orange-600 hover:text-white transition-all duration-200"
              >
                OFFICES
                <span className="text-gray-400 group-hover:text-white text-xs">
                  ▼
                </span>
              </a>
              <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
                <ul className="py-2">
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      Canada<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      UAE<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      New zealand<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      USA<span className="w-20 text-black">▸</span>
                    </a>
                  </li>
                  <li className="hover:bg-gray-100 relative group/nested">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 flex items-center justify-between"
                    >
                      Australia <span className="w-20 text-black">▸</span>
                    </a>
                    <ul className="absolute right-full top-0 hidden group-hover/nested:block bg-white shadow-lg rounded-md w-40">
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                          Leadership
                        </a>
                      </li>
                      <li className="hover:bg-gray-100">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                        >
                          Advisors
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <button
            className="lg:hidden p-3"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden fixed top-4 right-0 h-full w-2/3 max-w-xs border-l border-gray-300 bg-gray-50 shadow-lg z-50">
            {/* Cross button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-3 right-3 text-red-700 hover:text-red-600"
            >
              ✕
            </button>

            <nav className="flex flex-col text-sm font-medium mt-10">
              {/* ABOUT US */}
              <a
                href="#"
                className="px-4 py-3 border-b border-gray-200 text-gray-800 hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                ABOUT US
              </a>

              {/* SKILLED with dropdown */}
              <button
                className="flex items-center justify-between px-4 py-3 border-b border-gray-200 text-gray-800 hover:bg-purple-600 hover:text-white"
                onClick={() => toggleDropdown("skilled")}
              >
                SKILLED <ChevronDown className="h-4 w-4" />
              </button>
              {openDropdown === "skilled" && (
                <div className="pl-6 flex flex-col bg-gray-50">
                  <button
                    onClick={() => toggleSubmenu("australia")}
                    className="flex items-center justify-between px-3 py-2 border-b text-gray-700 hover:text-black"
                  >
                    Australia <ChevronRight className="h-4 w-4" />
                  </button>
                  {openSubmenu === "australia" && (
                    <div className="pl-4 flex flex-col bg-gray-100">
                      <a href="#" className="px-3 py-2 hover:bg-gray-100">
                        Leadership
                      </a>
                      <a href="#" className="px-3 py-2 hover:bg-gray-100">
                        Advisors
                      </a>
                    </div>
                  )}
                  <a href="#" className="px-3 py-2 border-b hover:bg-gray-100">
                    Canada
                  </a>
                  <a href="#" className="px-3 py-2 border-b hover:bg-gray-100">
                    UAE
                  </a>
                  <a href="#" className="px-3 py-2 border-b hover:bg-gray-100">
                    New Zealand
                  </a>
                  <a href="#" className="px-3 py-2 hover:bg-gray-100">
                    USA
                  </a>
                </div>
              )}
              <button
                className="flex items-center justify-between px-4 py-3 border-b border-gray-200 text-gray-800 hover:bg-purple-600 hover:text-white"
                onClick={() => toggleDropdown("business")}
              >
                BUSINESS <ChevronDown className="h-4 w-4" />
              </button>
              {openDropdown === "business" && (
                <div className="pl-6 flex flex-col bg-gray-50">
                  <button
                    onClick={() => toggleSubmenu("australia")}
                    className="flex items-center justify-between px-3 py-2 border-b text-gray-700 hover:text-black"
                  >
                    Australia <ChevronRight className="h-4 w-4" />
                  </button>
                  {openSubmenu === "australia" && (
                    <div className="pl-4 flex flex-col bg-gray-100">
                      <a href="#" className="px-3 py-2 hover:bg-gray-100">
                        Leadership
                      </a>
                      <a href="#" className="px-3 py-2 hover:bg-gray-100">
                        Advisors
                      </a>
                    </div>
                  )}
                  <a href="#" className="px-3 py-2 border-b hover:bg-gray-100">
                    Canada
                  </a>
                  <a href="#" className="px-3 py-2 border-b hover:bg-gray-100">
                    UAE
                  </a>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
