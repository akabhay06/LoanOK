import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
      <div className="h-auto w-full pb-40 p-6 bg-gradient-to-b  from-[#005da0] to-[#d4edff]">
  {/* Heading Section */}
  <div className="flex flex-col justify-center items-center pt-6 px-4">
    <p className="text-2xl sm:text-3xl font-bold max-w-5xl mx-auto text-center p-2">
      Fast Approvals, Easy Way{" "}
      <span className="text-white">- LoanOK is Here To Save Your Day.</span>
    </p>
  </div>

  {/* Services, Links, and Contact Section */}
  <div className="grid gap-6 px-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
  {/* LoanOK Logo and Social Media */}
  <div className="flex flex-col items-center">
    {/* LoanOK Logo */}
    <img
      src="/loanoklogo.png" // Replace with your image path
      alt="LoanOK Logo"
      className="h-13 w-13 sm:h-24 sm:w-25"
    />
    {/* Social Media Icons */}
    <div className="flex space-x-4  text-blue-600">
    <a
        href="https://www.instagram.com/loanok_official/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700"
      >
        <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl sm:text-3xl" />
      </a>

      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700"
      >
        <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl sm:text-3xl" />
      </a>
      
      <a
        href="mailto:support@loanok.in"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700"
      >
        <FontAwesomeIcon icon={faEnvelope} className=" text-white text-2xl sm:text-3xl" />
      </a>
    </div>
  </div>

  {/* Services */}
  <div>
    <h3 className="text-white max-w-fit  bg-blue-800 px-5 py-2 text-xl font-medium">
      Services:
    </h3>
    <ul className="p-1 space-y-2 text-lg font-medium">
      <li>Personal Loan</li>
      <li>Housing Loan</li>
      <li>Business Loan</li>
      <li>MSME Loan</li>
      <li>Vehicle Loan</li>
      <li>Insurance, Finance</li>
    </ul>
  </div>

  {/* Other Links */}
  <div>
    <h3 className="text-white max-w-fit  bg-blue-800 px-5 py-2 text-xl font-medium">
      Other Links
    </h3>
    <ul className="p-1 space-y-2 text-lg font-medium">
      <li>Customer Care/Support</li>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
      <li>About Us</li>
    </ul>
  </div>

  {/* Contact Us */}
  <div>
    <h3 className="text-white max-w-fit  bg-blue-800 px-5 py-2 text-xl font-medium">
      Contact Us
    </h3>
    <ul className="p-1 space-y-2 text-lg font-semibold">
      <li>
        Bhilai, Chhattisgarh
        <br />
        India
      </li>
      <li><a href="mailto:support@loanok.in">support@loanok.com</a></li>
      <li>+91-8109952379</li>
    </ul>
  </div>
</div>


  {/* Footer Section */}
  <div className="flex flex-col text-center sm:flex-row  sm:text-left text-xl font-semibold sm:items-center sm:px-16 mt-10">
  <div className='mr-5'>Made in India</div>
  <div className="sm:border-l sm:border-black sm:pl-5 mt-4 sm:mt-0">
    Copyright 2025 LoanOK
  </div>
</div>


</div>

    );
  };
  
  export default Footer;
  