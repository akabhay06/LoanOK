import Bank from "../Bank/Bank";
import LoanForm from "../LoanForm/LoanForm"
import { useState } from 'react';
import PropTypes from "prop-types"
import Form from "../../Form/Form";

const MarriageLoan = ({name}) => {

  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

 const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };




  return (
    <div className="mb-16" >
        <div className=" relative bg-[url('/Loans.png')] bg-contain bg-no-repeat bg-[left_670px_top_20px] px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="flex mt-10">
        <div className="bg-blue-800 border p-2 px-5 text-2xl font-bold text-white">
          Marriage Loan
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-5 text-lg">
        {/* Paragraph Section */}
        <div className="pr-0 md:pr-32 lg:pr-[370px]">
          <p>
          A Marriage Loan is a personal loan designed to help individuals cover wedding expenses, such as venue bookings,
 catering, decorations, and attire. It eases the financial burden of planning a wedding without requiring collateral,
 making it an unsecured loan. The loan amount and repayment terms depend on the lender’s policies and the
 applicant’s financial profile.
          </p>

          <p className="mt-10">
          With a Marriage Loan, you can focus on creating memories without financial stress. Lenders like LoanOK offer loans
 up to Rs 50 Lakh, depending on eligibility. This loan can be used for various wedding-related expenses, providing a
 convenient way to fund your dream wedding.
          </p>
        </div>

        {/* Box Section */}
 <div className="">
               {/* Directly include LoanForm without passing name prop */}
             <LoanForm  name={name}/>
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
        <p className=" border text-2xl font-bold w-fit mt-36 p-3 px-6 bg-blue-800 text-white">How To Apply For a Marriage Loan:</p>
        <ul className=" mt-14 text-xl font-normal">
            <li className="mt-6"> <span className="font-bold text-2xl">Assess Your Loan Requirement: </span> Estimate the total expenses for the wedding. Decide the loan amount
            you need, keeping in mind your repayment capacity.</li>
            <li className="mt-6"> <span className="font-bold text-2xl">Check Your Eligibility: </span>  Eligibility varies by lender but generally includes: Age: 21–60 years (varies by
                lender).</li>
            <ul className="list-disc pl-5">
            <li className="mt-5 ml-7"> <span className="font-bold text-2xl">Income:</span>   A minimum monthly income as per the lender’s criteria.</li>
                <li className="mt-2 ml-7"> <span className="font-bold text-2xl">Employment: </span>  Steady income through salaried or self-employed work.</li>

            </ul>
        </ul>
        <p className="text-3xl mt-10">Gather Required Documents: Commonly required documents include:</p>
        <ul className="list-disc pl-5 text-xl">
            <li className="mt-5 ml-7"> <span className="font-bold text-2xl">Identity Proof:</span>  Aadhaar card, PAN card, or passport.</li>
                <li className="mt-2 ml-7"> <span className="font-bold text-2xl">Address Proof: </span>  Utility bill, rental agreement, or passport.</li>
                <li className="mt-2 ml-7"> <span className="font-bold text-2xl"> Income Proof:  </span>  Salary slips, bank statements, or income tax returns.</li>
                <li className="mt-2 ml-7"> <span className="font-bold text-2xl"> Wedding Proof: </span>  Invitation card or booking receipts (optional for some lenders).</li>                
            </ul>

    <p className="text-xl mt-10"><span className="font-bold text-2xl"> Submit Your Application: </span> Apply through the lenders website, mobile app, or by visiting their branch.
    .</p>
    <p className="text-xl">Fill in the application form with details like loan amount, tenure, and personal information.</p>
    </div>

    <Bank/>
    <Form isOpen={isModalOpen} onClose={handleModalToggle} />
      
    </div>
  )
}
MarriageLoan.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MarriageLoan
