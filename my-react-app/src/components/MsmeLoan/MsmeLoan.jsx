import PropTypes from "prop-types"
import LoanForm from "../LoanForm/LoanForm"
import { useState } from 'react';
import Bank from "../Bank/Bank";
import Form from "../../Form/Form";

const MsmeLoan = ({name}) => {

  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

 const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };



  return (
    <div className="mb-16">
    <div className=" relative bg-[url('/Loans.png')] bg-contain bg-no-repeat bg-[left_630px_top_20px] px-4 sm:px-6 md:px-8 lg:px-16">
  <div className="flex mt-10">
    <div className="bg-blue-800 border p-2 px-5 text-2xl font-bold text-white">
      MSME Loan
    </div>
  </div>

  <div className="flex flex-col md:flex-row mt-5 text-lg">
    {/* Paragraph Section */}
    <div className="pr-0 md:pr-32 lg:pr-[370px]">
      <p>
      MSME loans are specially crafted financial products that cater to Micro, Small, and Medium Enterprises (MSMEs) in
 India. These loans help businesses manage working capital, purchase equipment, expand operations, or address
 other financial needs. With government support, MSME loans come with favorable interest rates and flexible
 repayment terms, encouraging growth and sustainability for businesses in this sector.
      </p>

      <p className="mt-10">
      Eligibility for MSME loans depends on various factors such as the size of the business, annual turnover, and
 registration on the Udyam portal. These loans are ideal for business expansion, purchasing assets, and
 strengthening financial health. By offering access to affordable credit, MSME loans play a pivotal role in supporting
 the growth of small businesses, fostering innovation, and contributing to the overall economic development of the
 country.

      </p>
    </div>

    {/* Box Section */}
    <div className="">
              {/* Directly include LoanForm without passing name prop */}
            <LoanForm name={name}/>
          </div>
        </div>

  <div className="flex ml-5 mt-12">
    <div 
    onClick={handleModalToggle} // Toggle modal on click
    className="bg-green-700 hover:bg-green-800 border p-2 px-5 text-lg font-bold text-white">
      Apply Now
    </div>
  </div>
</div>
<div className="px-4 sm:px-6 md:px-8 lg:px-16">
    <p className=" border text-2xl font-bold w-fit mt-36 p-3 px-6 bg-blue-800 text-white">Benefits of MSME Loan:</p>
    <ul className="list-disc pl-5 mt-10 text-xl font-normal">
        <li className="mt-6"> <span className="font-bold text-2xl">Lower Interest Rates:</span>  More affordable than personal loans due to government support and
        structured offerings.</li>
        <li className="mt-6"> <span className="font-bold text-2xl">Flexible Repayment Terms: </span> Customizable to align with business cash flows.</li>
        <li className="mt-6"> <span className="font-bold text-2xl"> Lower Interest Rates:  </span>  More affordable than personal loans due to government support and
        structured offerings.</li>
        <li className="mt-6"> <span className="font-bold text-2xl">Larger Loan Amounts:  </span>Enabling significant investments for business growth and expansion.</li>
        <li className="mt-6"> <span className="font-bold text-2xl"> Government Subsidies:   </span>Schemes like interest subvention reduce borrowing costs.</li>
    </ul>

    <p className=" border text-2xl font-bold w-fit mt-20 p-3 bg-blue-800 text-white">Benefits of MSME Loan:</p>
    <ul className=" mt-10 text-xl font-normal">
        <li className="mt-6"> <span className="font-bold text-2xl"> Working Capital Loans:</span>   These loans are provided to meet day-to-day operational expenses like
 purchasing raw materials, inventory, or managing overhead costs. Example: Overdraft facilities
 or cash credit loans.</li>
        <li className="mt-6"> <span className="font-bold text-2xl">Term Loans:  </span> Used for capital investments such as buying machinery, equipment, or expanding
        business infrastructure. Long-term loans with fixed repayment schedules.</li>
        <li className="mt-6"> <span className="font-bold text-2xl">Startup Business Loans:  </span>  Specially designed for new ventures under the MSME category, these
        loans often come with lenient terms and lower interest rates.</li>
        <li className="mt-6"> <span className="font-bold text-2xl">Government-Sponsored Loans:   </span>Schemes like Pradhan Mantri Mudra Yojana (PMMY), Stand-Up
        India, and CGTMSE offer loans with subsidized interest rates and collateral-free options.</li>
    </ul>
   
  
</div>
<Bank/>
<Form isOpen={isModalOpen} onClose={handleModalToggle} />
  
</div>
  )
};
MsmeLoan.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MsmeLoan
