import PropTypes from "prop-types"
import LoanForm from "../LoanForm/LoanForm"
import { useState } from 'react';
import Bank from "../Bank/Bank";
import Form from "../../Form/Form";

const CoperateLoan = ({name}) => {

  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

 const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };



  return (
    <div className="mb-16">
        <div className=" relative bg-[url('/Loans.png')] bg-contain bg-no-repeat bg-[left_500px_top_15px] px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="flex mt-10">
        <div className="bg-blue-800 border p-2 px-5 text-2xl font-bold text-white">
          Corporate Loan
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-5 text-lg">
        {/* Paragraph Section */}
        <div className="pr-0 md:pr-32 lg:pr-[370px]">
          <p>
          In today’s dynamic world, whether you are an aspiring entrepreneur or a business owner looking to scale, working
 capital is essential. At LoanOK, we are committed to supporting your journey, offering a range of instant business loans
 to help you start, grow, or expand your business.
          </p>

          <p className="mt-10">
          Our MSME Loans are specifically designed to support the growth of small and medium enterprises. With a
 streamlined application process, quick approvals, and prompt disbursals, these loans are crafted to minimize hassle.
 Additionally, they offer competitive interest rates and flexible repayment options, allowing you to focus on growing
 your business without the stress of financial concerns.
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
        <p className=" border text-2xl font-bold w-fit mt-36 p-3 px-6 bg-blue-800 text-white">Types of Corporate Loans:</p>
        <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl">Term Loans: </span> Lump-sum loans repaid over a fixed tenure, ideal for long-term investments like
        expansion or asset acquisition.</p>
        <p className="mt-5 text-xl font-normal"> <span className="font-bold text-2xl"> Business Line of Credit: </span>  Provides access to funds up to a maximum limit, with interest charged only on
        the amount utilized.
 ranging from 1 to 7 years.</p>
        <p className="mt-5 text-xl font-normal"> <span className="font-bold text-2xl">Equipment Loans:</span>   Specifically for purchasing machinery or equipment, often using the equipment as
        collateral.</p>
 <p className="mt-5 text-xl font-normal"> <span className="font-bold text-2xl">Invoice Financing: </span>  Advances funds against pending invoices to improve cash flow.</p>
 <p className="mt-5 text-xl font-normal"> <span className="font-bold text-2xl">Merchant Cash Advances: </span>Short-term funding repaid through a percentage of future sales proceeds.</p>

 <p className="mt-5 text-xl font-normal"> <span className="font-bold text-2xl">  Commercial Mortgages:  </span>  Used to purchase or refinance business properties, with the property serving as
 collateral. Working Capital Loans: Short-term loans to manage daily operational costs.
</p>

    </div>

    <div className="px-4 sm:px-6 md:px-8 lg:px-16">
        <p className=" border text-2xl font-bold w-fit mt-20 p-3 px-6 bg-blue-800 text-white">How Does a Corporate Loan Work</p>
        <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl">Application:</span> Businesses submit a loan application detailing their financial history, plans, and intended
        use of funds.</p>
        <p className="mt-5 text-xl font-normal"> <span className="font-bold text-2xl"> Underwriting: </span>   Lenders assess the borrower’s creditworthiness by evaluating financial statements,
        cash flow, and collateral.</p>
        <p className="mt-5 text-xl font-normal"> <span className="font-bold text-2xl"> Approval:</span>   Based on the borrower’s financial health and risk profile, the lender approves the
        loan.</p>
 <p className="mt-5 text-xl font-normal"> <span className="font-bold text-2xl"> Disbursement: </span>Funds are disbursed as a lump sum or in installments based on the loans
 purpose.</p>
 <p className="mt-5 text-xl font-normal"> <span className="font-bold text-2xl"> Repayment: </span> Borrowers repay the loan through regular installments (principal + interest)
 per the agreed schedule.</p>

 <p className="mt-5 text-xl font-normal"> <span className="font-bold text-2xl">  Completion:   </span> Upon full repayment, the loan agreement concludes, and the borrower fulfills their
 obligations.
</p>

    </div>
    <Bank/>

    <Form isOpen={isModalOpen} onClose={handleModalToggle} />
      
    </div>
  )
};
CoperateLoan.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CoperateLoan
