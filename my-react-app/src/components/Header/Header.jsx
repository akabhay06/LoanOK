import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownLoan, setDropdownLoan] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  // Function to toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  // Function to toggle "Learn" dropdown
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <div className="bg-[#FAF9F6] sticky top-0 z-50 shadow-md">
      {/* Header for Mobile */}
      <div className="flex justify-between items-center p-4 md:hidden">
        {/* Hamburger Menu */}
        <button
          className="text-2xl text-blue-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>

        {/* Logo */}
        <div
          className="h-10 w-28 bg-cover bg-center"
          style={{
            backgroundImage: "url('/loanoklogo.png')",
          }}
        ></div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col bg-white shadow-lg p-4 space-y-4 md:hidden">
          <NavLink
            to="/"
            className="text-black hover:text-blue-800"
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <div>
            <div
              className="text-black hover:text-blue-800 cursor-pointer"
              onClick={() => setDropdownLoan((prev) => !prev)}
            >
              Loan
            </div>
            {isDropdownLoan && (
              <div className="pl-4 p-1">
                <NavLink
                  to="/Loan"
                  className="block text-gray-700 hover:text-blue-500"
                  onClick={toggleMobileMenu}
                >
                  Personal Loan
                </NavLink>
                <NavLink
                  to="/BuisnessLoan"
                  className="block text-gray-700 hover:text-blue-500"
                  onClick={toggleMobileMenu}
                >
                  Business Loan
                </NavLink>
                <NavLink
                  to="/HousingLoan"
                  className="block text-gray-700 hover:text-blue-500"
                  onClick={toggleMobileMenu}
                >
                  Housing Loan
                </NavLink>
                <NavLink
                  to="/EducationLoan"
                  className="block text-gray-700 hover:text-blue-500"
                  onClick={toggleMobileMenu}
                >
                  Education Loan
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="calculator"
            className="text-black hover:text-blue-800"
            onClick={toggleMobileMenu}
          >
            EMI Calculator
          </NavLink>
          <NavLink
            to="aboutus"
            className="text-black hover:text-blue-800"
            onClick={toggleMobileMenu}
          >
            About Us
          </NavLink>
          {/* Learn Dropdown for Mobile */}
          <div>
            <div
              className="text-black hover:text-blue-800 cursor-pointer"
              onClick={toggleDropdown}
            >
              Learn
            </div>
            {isDropdownOpen && (
              <div className="pl-4">
                <a
                  href="/Privacy"
                  className="block text-gray-700 hover:text-blue-500"
                  onClick={toggleMobileMenu}
                >
                  Privacy Policy
                </a>
                <a
                  href="/Terms"
                  className="block text-gray-700 hover:text-blue-500"
                  onClick={toggleMobileMenu}
                >
                  Terms & Conditions
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Header for Larger Screens */}
      <div className="hidden md:flex justify-between items-center p-2">
        {/* Logo */}
        <div
          className="h-14 w-44 bg-cover bg-center"
          style={{
            backgroundImage: "url('/loanoklogo.png')",
          }}
        ></div>

        {/* Navigation */}
        <div className="flex space-x-10 text-slate-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-800 ${isActive ? "text-blue-800 font-bold" : "text-black"}`
            }
          >
            Home
          </NavLink>
          <div className="relative">
            <div
              onClick={() => setDropdownLoan((prev) => !prev)}
              className="hover:text-blue-800 cursor-pointer"
            >
              Loan
            </div>
            {isDropdownLoan && (
              <div className="absolute top-8 left-0 bg-white text-m border rounded-md shadow-lg p-4 space-y-1 min-w-[11rem]">
                <NavLink
                  to="/Loan"
                  className="block text-gray-700 hover:text-blue-500"
                >
                  Personal Loan
                </NavLink>
                <NavLink
                  to="/BuisnessLoan"
                  className="block text-gray-700 hover:text-blue-500"
                >
                  Business Loan
                </NavLink>
                <NavLink
                  to="/HousingLoan"
                  className="block text-gray-700 hover:text-blue-500"
                >
                  Housing Loan
                </NavLink>
                <NavLink
                  to="/EducationLoan"
                  className="block text-gray-700 hover:text-blue-500"
                >
                  Education Loan
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="calculator"
            className="hover:text-blue-800"
          >
            EMI Calculator
          </NavLink>
          <NavLink
            to="aboutus"
            className="hover:text-blue-800"
          >
            About Us
          </NavLink>
          {/* Learn Dropdown for Desktop */}
          <div className="relative">
            <div
              onClick={toggleDropdown}
              className="hover:text-blue-800 cursor-pointer"
            >
              Learn
            </div>
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 bg-white border rounded-md shadow-lg p-2 min-w-[10rem]">
                <a
                  href="/Privacy"
                  className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md"
                >
                  Privacy Policy
                </a>
                <a
                  href="/Terms"
                  className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md"
                >
                  Terms & Conditions
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="font-medium text-blue-800 mr-5 py-1 px-5 border-2 border-blue-500 rounded-lg shadow-md transition hover:bg-blue-800 hover:text-white">
          Apply now
        </div>
      </div>
    </div>
  );
};

export default Header;
