import PropTypes from "prop-types"
import LoanForm from "../LoanForm/LoanForm"
import { useState } from 'react';
import Bank from "../Bank/Bank";
import Form from "../../Form/Form";


const EducationLoan = ({name}) => {

  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

 const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };




  return (
    <div className="mb-16">
    <div className="relative bg-[url('/Loans.png')] bg-contain bg-no-repeat bg-[left_600px_top_20px] px-4 sm:px-6 md:px-8 lg:px-16">
  <div className="flex mt-10">
    <div className="bg-blue-800 border p-2 px-5 text-2xl font-bold text-white">
      Education Loan
    </div>
  </div>

  <div className="flex flex-col md:flex-row mt-5 text-lg">
    {/* Paragraph Section */}
    <div className="pr-0 md:pr-32 lg:pr-[370px]">
      <p>
      The rising cost of education makes it challenging for many families to pay upfront. Education loans, or
 student loans, provide a practical solution by covering tuition fees, books, housing, and other expenses,
 enabling students to pursue their academic goals without immediate financial strain. These loans
 typically offer deferred repayment, with no payments required while students are in college and a six
month {"grace period"} after graduation to help them secure employment and stabilize financially.
      </p>

      <p className="mt-10">
      Understanding the workings, benefits, and repayment strategies of education loans is essential. Federal
 loans often feature lower interest rates, subsidized options, and flexible repayment plans, while private
 loans may have stricter terms. By borrowing only what is necessary and planning wisely, students can
 leverage education loans to achieve their goals while minimizing future debt.
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
    <p className="text-2xl mt-36 font-semibold w-fit bg-blue-800 text-white p-2 px-4"> How Education Loans Work</p>
    <p className="text-xl mt-4"> Education loans are issued to students enrolled in accredited colleges or universities. Borrowers 
    can obtain loans from either government programs or private lenders.</p>
    <p className="text-2xl mt-16 font-semibold w-fit bg-blue-800 text-white p-2 px-4"> Federal Student Loans</p>
    <p className="text-xl mt-4">  Federal loans offer lower interest rates and additional benefits, such as subsidized interest where the U.S. Department of Education
    covers interest during enrollment.</p>
    <p className="text-xl mt-4">  Federal loans are disbursed to schools to cover tuition and fees. Remaining funds may be used for other academic expenses.</p>
    <p className="text-xl mt-4">  To apply, students must complete the Free Application for Federal Student Aid (FAFSA). Loan eligibility is based on the school’s
    financial aid package, which may include:</p>

    <ul className="list-disc pl-5 mt-5 text-xl font-normal">
        <li className="mt-3"> <span className="font-bold text-xl">Direct Subsidized Loans: </span>  For undergraduates with financial need, offering interest subsidies during enrollment.</li>
        <li className="mt-3"> <span className="font-bold text-xl"> Direct Unsubsidized Loans: </span> Available to all eligible students, regardless of financial need, but without interest subsidies.</li>
        <li className="mt-3"> <span className="font-bold text-xl"> Direct PLUS Loans:  </span>   For graduate students or parents of dependent undergraduates, subject to credit checks.</li>
        <li className="mt-3"> <span className="font-bold text-xl">Direct Consolidation Loans:  </span>Combine multiple federal loans into one for simpler repayment.</li>
        
    </ul>


    <p className="text-2xl mt-16 font-semibold w-fit bg-blue-800 text-white p-2 px-4">  Private Student Loans</p>
    <p className="text-xl mt-4"> Private loans are offered by banks, credit unions, and nonprofits, often at higher interest rates. These loans require a credit
 check and follow a traditional lending process. Approved funds are first sent to the school, with any leftover amounts
 distributed to the borrower.</p>
    
    
</div>
<Bank/>
<Form isOpen={isModalOpen} onClose={handleModalToggle} />

  
</div>
  )
};
EducationLoan.propTypes = {
  name: PropTypes.string.isRequired,
};

export default EducationLoan
