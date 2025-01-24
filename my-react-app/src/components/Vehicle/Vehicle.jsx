import PropTypes from "prop-types"
import LoanForm from "../LoanForm/LoanForm";
import { useState } from 'react';
import Bank from "../Bank/Bank";
import Form from "../../Form/Form";

const Vehicle = ({name}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

 const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };



  return (
    <div className="mb-16">
        <div className="relative bg-[url('/Loans.png')] bg-contain bg-no-repeat bg-[left_600px_top_20px] px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="flex mt-10">
        <div className="bg-blue-800 border p-2 px-5 text-2xl font-bold text-white">
          Vehicle Loan
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-5 text-lg">
        {/* Paragraph Section */}
        <div className="pr-0 md:pr-32 lg:pr-[370px]">
          <p>
          A Vehicle Loan is a loan that allows you to purchase two and four wheelers for personal use. Typically, the lender
 loans the money (making a direct payment to the dealer on the buyer’s behalf) while the buyer must repay the loan
 in Equated Monthly Instalments (EMIs) over a specific tenure at a specific interest rate. The EMI comprises a
 portion of the principal amount and the interest component. Once you repay the loan in full, the lender transfers the
 vehicle registration in your name. <br />
 You can also apply for a Vehicle Loan to buy these vehicles to transport goods or company personnel. Common
 examples of commercial vehicles include buses, trucks, tractors, tippers, cabs, etc.
          </p>

          <p className="mt-10">
          Your eligibility for a Vehicle Loan depends on your credit score and net (in hand) monthly income. Most lenders
        offer 75% to 100% of the vehicles on-road price, based on its type and price. You can also get a loan to buy pre
        owned cars and other previously used vehicles.
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
        <p className=" border text-3xl font-semibold w-fit mt-36 p-3 bg-blue-800 text-white">Types of Vehicle Loans in India:        </p>
        <p className="mt-14 text-xl font-normal"> <span className="font-bold text-2xl">Two-Wheeler Loans:</span> For purchasing motorcycles, scooters, or e-bikes. Often have lower loan amounts
        and shorter repayment tenures. Targeted at individuals in urban and rural areas.</p>
        <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl">New Car Loans: </span> For financing brand-new cars, including sedans, hatchbacks, SUVs, and electric
 vehicles. Loans typically cover 80–100% of the on-road price of the car. Flexible repayment tenures
 ranging from 1 to 7 years.</p>
        <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl">Used Car Loans (Pre-Owned Vehicle Loans):</span>   For purchasing second-hand cars. Loan amounts depend
 on the car’s valuation, age, and condition. Interest rates are generally higher than new car loans due to
 greater risk.</p>
 <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl"> Commercial Vehicle Loans: </span>  Designed for purchasing vehicles used for business purposes, such as
 trucks, buses, or vans. Popular among transport operators, logistics companies, and businesses. Loans
 may cover chassis, custom-built bodies, or even electric commercial vehicles</p>
 <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl"> Electric Vehicle (EV) Loans: </span> Specifically for financing electric two-wheelers, cars, or commercial
 vehicles. Some banks and NBFCs offer preferential interest rates to promote green mobility.</p>

 <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl"> Tractor and Agricultural Vehicle Loans: </span>  Tailored for farmers to purchase tractors, harvesters, and other
 agricultural vehicles. Typically offered with subsidized rates under government schemes.</p>

 <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl">  Loan Against Vehicle:  </span>  Allows individuals to borrow money by pledging their existing vehicle as
 collateral. Suitable for urgent financial needs with flexible repayment terms.
</p>
 
    </div>
    <Bank/>
    <Form isOpen={isModalOpen} onClose={handleModalToggle} />
      
    </div>
  )
};
Vehicle.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Vehicle
