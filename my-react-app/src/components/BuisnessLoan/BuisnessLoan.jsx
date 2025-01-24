import PropTypes from "prop-types";
import { useState } from 'react';
import LoanForm from "../LoanForm/LoanForm";
import Bank from "../Bank/Bank";
import SliderB from "../SliderB/SliderB";
import Form from "../../Form/Form";

const BuisnessLoan = ({ name }) => {

  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

 const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };


  return (
    <div className="mb-16">
      <div className=" relative bg-[url('/Loans.png')] bg-contain bg-no-repeat bg-[left_520px_top_20px]  px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex mt-10">
          <div className="bg-blue-800 border p-2 px-5 text-2xl font-bold text-white">
            Business Loan
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-5 text-lg">
          {/* Paragraph Section */}
          <div className="pr-0 md:pr-32 lg:pr-[370px]">
            <p>
              In today’s dynamic world, whether you are an aspiring entrepreneur or a business owner looking to scale, working capital
              is essential. At LoanOK, we are committed to supporting your journey, offering a range of instant business loans to help
              you start, grow, or expand your business.
            </p>

            <p className="mt-10">
              Our MSME Loans are specifically designed to support the growth of small and medium enterprises. With a streamlined
              application process, quick approvals, and prompt disbursals, these loans are crafted to minimize hassle. Additionally,
              they offer competitive interest rates and flexible repayment options, allowing you to focus on growing your business
              without the stress of financial concerns.
            </p>

            <p className="mt-10">
              For example, you could apply for a loan of ₹5,00,000 at an interest rate of 12% annually, with a repayment tenure of 36
              months. Your monthly EMI would be around ₹17,600. Alternatively, a loan of ₹10,00,000 at the same interest rate and
              tenure would result in an EMI of ₹35,200.
            </p>
          </div>

          {/* Box Section */}
          <div className="">
              {/* Directly include LoanForm without passing name prop */}
            <LoanForm  name={name}/>
          </div>
        </div>

        <div className="flex ml-5 mt-6">
          <div 
          onClick={handleModalToggle} // Toggle modal on click
          className="bg-green-700 hover:bg-green-800 border p-2 px-5 text-lg font-bold text-white">
            Apply Now
          </div>
        </div>
      </div>

      <div className="text-center text-5xl font-medium mt-20">Other Business Loans</div>
      <Form isOpen={isModalOpen} onClose={handleModalToggle} />
      <SliderB />
      <Bank />
    </div>
  );
};

BuisnessLoan.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BuisnessLoan;
