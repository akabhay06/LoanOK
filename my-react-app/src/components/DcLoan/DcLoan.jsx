import PropTypes from "prop-types";
import LoanForm from "../LoanForm/LoanForm";
import { useState } from 'react';
import Bank from "../Bank/Bank";
import Form from "../../Form/Form";
const DcLoan = ({name}) => {

  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

 const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };




  return (
    <div className="mb-16">
        <div className=" relative bg-[url('/Loans.png')] bg-contain bg-no-repeat bg-[left_600px_top_20px] px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="flex mt-10">
        <div className="bg-blue-800 border p-2 px-5 text-2xl font-bold text-white">
          Debt Consolidation Loan
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-5 text-lg">
        {/* Paragraph Section */}
        <div className="pr-0 md:pr-32 lg:pr-[370px]">
          <p>
          Debt consolidation is a financial strategy that involves combining multiple outstanding debts into a single loan or credit line. This
 process simplifies debt management by consolidating various loans, such as credit card balances, personal loans, and other
 financial obligations, into one. By doing so, it allows borrowers to make a single monthly payment instead of juggling multiple
 payments with varying interest rates and due dates. This approach can be particularly helpful for individuals struggling to manage
 multiple debts or looking to streamline their repayment process.
          </p>

          <p className="mt-10">
          The main goal of debt consolidation is to reduce financial stress, lower interest rates, and provide a more manageable repayment
 plan. Depending on the borrower’s creditworthiness, consolidation options can include personal loans, balance transfer credit cards,
 or home equity loans. With a well-structured consolidation plan, individuals can regain control over their finances and work towards
 becoming debt-free more efficiently
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
        <p className=" border text-2xl font-bold w-fit mt-36 p-3 px-6 bg-blue-800 text-white">How To Consolidate Loan</p>
        <ul className="list-disc pl-5 mt-14 text-xl font-normal">
            <li className="mt-6"> <span className="font-bold text-2xl">Personal Loans:</span> Often a popular choice due to lower interest rates. You can use the loan to pay off existing debts and focus on repaying a
            single loan with a fixed rate.</li>
            <li className="mt-6"> <span className="font-bold text-2xl">Balance Transfer Credit Cards: </span> Transfer outstanding balances to a credit card offering a low or 0% introductory interest rate, saving on
            interest if paid within the promotional period</li>
            <li className="mt-6"> <span className="font-bold text-2xl">Home Equity Lines of Credit: </span> Leverage your home’s equity to pay off debts, though this involves using your home as collateral</li>
            <li className="mt-6"> <span className="font-bold text-2xl">Debt Management Plans or Settlement: </span>Alternative options requiring careful consideration due to potential risks and impacts on credit.</li>
        </ul>
        <p className="text-3xl font-semibold mt-10"> Benefits of Debt Consolidation:</p>
        <ul className="list-disc pl-5 mt-10 ml-5 text-xl font-normal">
        <li className="mt-5"> <span className="font-bold text-2xl"> Simplified Finances:  </span>Replace multiple payments with a single one for easier budgeting.</li>
        <li className="mt-5"> <span className="font-bold text-2xl"> Lower Interest Rates:  </span> Potentially reduce the overall cost of repayment..</li>
        <li className="mt-5"> <span className="font-bold text-2xl"> Credit Score Improvement:  </span>Timely payments on a consolidated loan can boost your credit over time.</li>
        <li className="mt-5"> <span className="font-bold text-2xl"> Unsecured Options:   </span>Personal loans don’t require collateral, simplifying the application process.</li>
        </ul>
      <p className="text-3xl font-semibold mt-10">How Debt Consolidation Loans Work:</p>
      <ul className="text-xl font-normal mt-10">
      <li className="mt-5"> <span className="font-bold text-2xl"> Personal Loans: </span> Borrow an amount equal to your debts, pay them off, and repay the consolidated
      loan in fixed installments.</li>
      <li className="mt-5"> <span className="font-bold text-2xl"> Balance Transfer Credit Cards:  </span> Consolidate multiple card payments into one by transferring balances and repaying
      during the low-interest period</li>
      <li className="mt-5"> <span className="font-bold text-2xl"> Home Equity Loans: </span> Use the funds to clear debts and repay over time, backed by your
      home’s equity.</li>
        
      </ul>
    </div>
    <Bank/>
    <Form isOpen={isModalOpen} onClose={handleModalToggle} />
      
    </div>
  )
};
DcLoan.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DcLoan
