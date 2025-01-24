import PropTypes from "prop-types"
import LoanForm from "../LoanForm/LoanForm"
import Bank from "../Bank/Bank";
import { useState } from 'react';
import Form from "../../Form/Form";

const CcrLoan = ({name}) => {


  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };



  return (
    <div className="mb-16">
        <div className=" relative bg-[url('/Loans.png')] bg-contain bg-no-repeat bg-[left_600px_top_20px] px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="flex mt-10">
        <div className="bg-blue-800 border p-2 px-5 text-2xl font-bold text-white">
          Credit Card Repayment Loan
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-5 text-lg">
        {/* Paragraph Section */}
        <div className="pr-0 md:pr-32 lg:pr-[370px]">
          <p>
          A Credit Card Repayment Loan is a financial solution tailored to help individuals in India tackle their
 outstanding credit card debts more effectively. With credit card usage on the rise, many individuals face
 challenges in managing high-interest rates on unpaid balances. This loan offers a practical way to
 consolidate multiple credit card dues into a single monthly repayment at comparatively lower interest
 rates, making it easier to manage finances and reduce overall repayment costs.
          </p>

          <p className="mt-10">
          These loans are provided by banks, NBFCs, and fintech platforms, ensuring quick disbursal, flexible
 repayment tenures, and minimal documentation. They not only ease financial stress but also positively
 impact credit scores when repayments are made on time. By streamlining debt management, credit card
 repayment loans empower borrowers to regain control over their finances and work towards long-term
 financial stability.

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
        <p className=" border text-2xl font-bold w-fit mt-36 p-3 px-6 bg-blue-800 text-white">Methods Of Loan Repayment</p>
        <ul className="list-disc pl-5 mt-10 text-xl font-normal">
            <li className="mt-8"> <span className="font-bold text-2xl">Debt Consolidation:</span> Combine multiple debts into one loan to simplify repayments and reduce interest rates.</li>
            <li className="mt-8"> <span className="font-bold text-2xl"> Provident Fund or Insurance Loans:  </span> Use investments or borrow against policies to pay off debts.</li>
            <li className="mt-8"> <span className="font-bold text-2xl">Credit Card EMIs: </span>  Convert outstanding credit card bills into manageable EMIs to ease repayment pressure</li>
            
        </ul>
        <p className="text-3xl font-semibold mt-10"> Why Loan Repayment is Important:</p>
        <ul className="list-disc pl-5 mt-10 ml-5 text-xl font-normal">
        <li className="mt-8"> <span className="font-bold text-2xl">Improves Credit Score:  </span>Timely payments enhance your credit history, increasing your trustworthiness with
        lenders.</li>
        <li className="mt-8"> <span className="font-bold text-2xl">Reduces Financial Burden: </span>  Regular repayments lower your debt obligation and accrued interest.</li>
        
        <li className="mt-8"> <span className="font-bold text-2xl"> Facilitates Future Borrowing:  </span>A positive credit history simplifies loan approvals and ensures better
        borrowing terms.</li>
        </ul>
      
    </div>
    <Bank/>

    <Form isOpen={isModalOpen} onClose={handleModalToggle} />
      
    </div>
  )
};
CcrLoan.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CcrLoan
