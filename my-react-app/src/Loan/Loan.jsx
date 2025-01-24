// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from 'react';
import LoanForm from "../components/LoanForm/LoanForm";
import Bank from "../components/Bank/Bank";
import Slider from "../components/Slider/Slider";
import Form from "../Form/Form";

// import HousingLoan from "../components/HousingLoan/HousingLoan";
// import EducationLoan from "../components/EducationLoan/EducationLoan";


const Loan = ({ name }) => {

  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

 const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };


  // const navigate = useNavigate();

  // // Navigation functions
  // const handleNavigateToInstance = () => {
  //   navigate('/Instance');
  // }

  // const handleNavigateToVehicle = () => {
  //   navigate('/Vehicle');
  // }
  // const handleNavigateToDc = () => {
  //   navigate('/DcLoan');
  // }

  // const handleNavigateToMarriage = () => {
  //   navigate('/MarriageLoan');
  // }

  // const handleNavigateToCcr = () => {
  //   navigate('/CcrLoan');
  // }

  // const handleNavigateToCoperate = () => {
  //   navigate('/CoperateLoan');
  // }
  
  // const handleNavigateToMsme = () => {
  //   navigate('/MsmeLoan');
  // }





  return (
   <div className="mb-16">
     <div className=" relative bg-[url('/Loans.png')] bg-contain bg-no-repeat bg-[left_600px_top_20px]  px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="flex mt-10">
        <div className="bg-blue-800 border p-2 px-5 text-2xl font-bold text-white">
          Personal Loan
        </div>
      </div>
  
      <div className="flex flex-col md:flex-row mt-5 text-lg">
        {/* Paragraph Section */}
        <div className="pr-0 md:pr-32 lg:pr-[370px]">
          <p>
            A personal loan is a versatile financial tool that offers quick access to funds without the need for
            collateral. It can be used for various purposes like medical emergencies, home renovations, education, or
            debt consolidation. Lenders assess your creditworthiness before approving the loan. While offering quick
            release and flexible repayment terms, its important to consider interest rates and fees. Comparing offers
            from different lenders can help you secure the best deal.
          </p>

          <p className="mt-10">
            To apply, borrowers submit financial details to the lender, who assesses eligibility and determines the
            loan terms. Once approved, the funds are disbursed to the borrowers account for immediate use. For example,
            borrowing ₹50,000 at a 15% annual interest rate for a 1-year tenure would result in a monthly EMI of ₹4,513
            and a total repayment of ₹54,155, including interest. Personal loans are a practical option for quick cash,
            but borrowers should compare offers and use EMI calculators to ensure affordability.
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

    <div className="text-center text-5xl font-medium mt-20 ">Other Personal Loans</div>

    <Form isOpen={isModalOpen} onClose={handleModalToggle} />
<Slider/>
<Bank/>

    
   
      
  
    {/* <div className="mt-24"><HousingLoan/></div>
    <div className="mt-32"><EducationLoan/></div> */}
   </div>
  );
};

Loan.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Loan;
