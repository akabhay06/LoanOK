import LoanForm from "../LoanForm/LoanForm";
import PropTypes from "prop-types";
import { useState } from "react";
import Form from "../../Form/Form";
import { FileUpload } from "../../FileUpload/FileUpload"; // Updated import path

const HousingLoan = ({ name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };

  return (
    <div className="mb-16">
      <div className="relative bg-[url('/Loans.png')] bg-no-repeat bg-[left_650px_top_10px] bg-[length:700px_500px] px-4 sm:px-6 md:px-8 lg:px-16">

        <div className="flex mt-10">
          <div className="bg-blue-800 border p-2 px-5 text-2xl font-bold text-white">
            Housing Loan
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-5 text-lg">
          {/* Paragraph Section */}
          <div className="pr-0 md:pr-32 lg:pr-[370px]">
            <p>
              A home loan is a secured financial product provided by banks,
              financial institutions, and Non-Banking Financial Companies
              (NBFCs) to help individuals purchase residential properties. The
              purchased property serves as collateral for the loan. Home loans
              offer substantial funding, competitive interest rates, and long
              repayment tenures, making them an attractive option for aspiring
              homeowners. Borrowers repay the loan through Equated Monthly
              Installments (EMIs), and once the loan is fully repaid, ownership
              of the property is transferred back to them.
            </p>

            <p className="mt-10">
              In India, home loans have become increasingly popular due to
              rising property prices and the demand for affordable housing.
              Borrowers can choose from fixed-rate, floating-rate, or hybrid
              home loans to meet their financial requirements.
            </p>
          </div>

          {/* Box Section */}
          <div className="">
            {/* Directly include LoanForm without passing name prop */}
            <LoanForm name={name} />
          </div>
        </div>

        <div className="flex ml-5 mt-12">
          <div
            onClick={handleModalToggle} // Toggle modal on click
            className="bg-green-700 hover:bg-green-800 border p-2 px-5 text-lg font-bold text-white"
          >
            Apply Now
          </div>
        </div>

        {/* Add FileUpload Component */}
        <div className="mt-20 ml-5">
          <FileUpload
            onChange={(files) => {
              console.log("Uploaded files:", files);
            }}
          />
        </div>
      </div>

      <div className="mt-40 flex justify-center px-4 sm:px-6 md:px-8 lg:px-16">
        <p className="text-3xl font-semibold text-white border w-fit bg-green-700 p-3 px-6">
          Types of Home Loans Based on Purpose
        </p>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-16">
        <p className="text-2xl mt-20 font-semibold w-fit bg-blue-800 text-white p-2 px-4">
          Land Purchase Loan
        </p>
        <p className="text-xl mt-4">
          Found the perfect plot for your dream home? A land purchase loan helps
          you secure the ideal location with ease. With competitive rates, fast
          approvals, and customized repayment terms, this loan lays the
          foundation for turning your vision into reality.
        </p>
        <p className="text-2xl mt-16 font-semibold w-fit bg-blue-800 text-white p-2 px-4">
          Home Construction Loan
        </p>
        <p className="text-xl mt-4">
          Planning to build your dream home? A home construction loan provides
          financial support to cover construction costs. With low interest
          rates, flexible disbursement options, and customized repayment plans,
          this loan ensures you can build your home step by step without
          compromising on quality or timelines.
        </p>
        <p className="text-2xl mt-16 font-semibold w-fit bg-blue-800 text-white p-2 px-4">
          Home Renovation Loan
        </p>
        <p className="text-xl mt-4">
          Modernize or repair your living space with a home renovation loan.
          Whether you are updating interiors or addressing essential repairs,
          this loan covers all renovation expenses. Enjoy attractive interest
          rates, quick approvals, and flexible repayment options to transform
          your home into a more stylish and functional space.
        </p>
        <p className="text-2xl mt-16 font-semibold w-fit bg-blue-800 text-white p-2 px-4">
          Home Loan Balance Transfer
        </p>
        <p className="text-xl mt-4">
          Reduce your financial burden with a home loan balance transfer. By
          transferring your existing loan to a new lender, you can benefit from
          lower interest rates, reduced EMIs, and better terms, saving on costs
          and aligning with your financial goals.
        </p>
        <p className="text-2xl mt-16 font-semibold w-fit bg-blue-800 text-white p-2 px-4">
          Home Extension Loan
        </p>
        <p className="text-xl mt-4">
          Need more space in your current home? A home extension loan helps you
          expand your living area or add new rooms. With affordable interest
          rates, seamless disbursement, and flexible tenures, this loan enables
          you to enhance your home's functionality while staying within budget.
        </p>
        <p className="text-2xl mt-16 font-semibold w-fit bg-blue-800 text-white p-2 px-4">
          Basic Home Loan
        </p>
        <p className="text-xl mt-4">
          A basic home loan is designed to help individuals achieve their dream
          of homeownership. It features competitive interest rates, flexible
          repayment options, and tailored solutions for both first-time buyers
          and those upgrading their homes. With streamlined processing and
          attractive terms, this loan simplifies the path to owning your dream
          home.
        </p>
        <p className="text-2xl mt-16 font-semibold w-fit bg-blue-800 text-white p-2 px-4">
          Joint Home Loan
        </p>
        <p className="text-xl mt-4">
          Share the financial responsibility and increase your loan eligibility
          with a joint home loan. Co-borrow with a family member or spouse to
          access higher loan amounts and enjoy tax benefits. It's a practical
          solution for purchasing your dream home while sharing ownership and
          repayment duties.
        </p>
      </div>

      <Form isOpen={isModalOpen} onClose={handleModalToggle} />
    </div>
  );
};

HousingLoan.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HousingLoan;
