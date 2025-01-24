import PropTypes from "prop-types";
import LoanForm from "../LoanForm/LoanForm";
import { useState } from 'react';
import Bank from "../Bank/Bank";
import Form from "../../Form/Form";
const Instance = ({ name }) => {

  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

 const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };



  return (
    <div className="mb-16">
      <div className=" px-4 sm:px-6 md:px-8 lg:px-16">
    <div className="flex mt-10">
      <div className="bg-blue-800 border p-2 px-5 text-2xl font-bold text-white">
        Instant Personal Loan
      </div>
    </div>

    <div className="flex flex-col md:flex-row mt-5 text-lg">
      {/* Paragraph Section */}
      <div className="pr-0 md:pr-32 lg:pr-[370px]">
        <p>
        An instant personal loan is a type of unsecured loan that offers quick access to funds with minimal
 documentation and rapid approvals, often within minutes or hours. These loans are provided by banks,
 NBFCs, and fintech lenders and are highly useful for addressing immediate financial needs such as
 medical emergencies, travel expenses, or purchasing high-value items. Loan amounts typically range
 from a few thousand to several lakhs, depending on the lender, and repayment tenures vary between 1 to
 5 years.
        </p>

        <p className="mt-10">
        One of the standout features of instant personal loans is their swift processing, made possible by
 advanced technology. Lenders assess creditworthiness digitally through credit score checks, income
 verification, and other online methods, enabling fast approvals and same-day disbursements. However,
 it’s important to apply responsibly, as submitting multiple loan applications in a short period can
 negatively impact your credit score. Instant personal loans are an excellent option for short-term
 financial needs, provided borrowers evaluate terms carefully before applying.
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

    <div>
        <p className="border text-2xl text-white font-bold w-fit mt-36 p-3 px-6 bg-blue-800">Main Types Of Instant Personal Loan Available</p>
        <p className="mt-14 text-xl font-normal"> <span className="font-bold text-2xl">Short-Term Loans:</span> Usually offered for small amounts with a tenure of 7 days to 12 months. Ideal for temporary
        financial needs. Examples: Payday loans or cash loans</p>
        <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl">Unsecured Personal Loans:</span> These loans do not require collateral. Offered based on the applicants credit
        score, income, and repayment capacity. Examples: Loans for travel, medical.</p>
        <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl">Salary-Linked Loans: </span>  Specifically designed for salaried individuals. Loan eligibility and approval are often tied
 to the applicants monthly income and employment history. Example: Salary advance loans or instant loans
 through employer tie-ups.</p>
 <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl">Medical Emergency Loans:</span>  Tailored for healthcare expenses with minimal processing time. Some banks and
 NBFCs offer specialized loans for medical treatments</p>
 <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl"> Loans Against Securities: </span> Instant loans provided against securities like fixed deposits, mutual funds, or shares.
 Faster approval due to the secured nature of the loan</p>
 
    </div>

    <div>
        <p className="border text-2xl text-white font-bold w-fit mt-20 p-3 px-6 bg-blue-800">Instant Personal Loan Approval with LoanOK</p>
        <p className="mt-14 text-xl font-normal"> LoanOK offers personal loans with an approval rate of 90% and interest rates starting as low as
 12% per annum. Serving over 50,000 borrowers in just one year, here’s why LoanOK is a top
 choice for personal loans in India:</p>
        <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl"> High Approval Rate: </span> With a 90% approval rate, LoanOK serves a broader audience than traditional
 banks, thanks to its advanced big data analytics. This technology ensures a deeper understanding of
 customer profiles, their needs, repayment intent, and capability.</p>
        <p className="mt-10 text-xl font-normal"> <span className="font-bold text-2xl"> Transparent Low-Interest Rates:  </span>  Interest rates start at 12% per annum with no hidden charges. A small
 processing fee is charged only at disbursement. No pre-closure charges, enabling you to repay early without
 penalties (unlike banks and NBFCs)</p>
 <p className="mt-10 text-2xl font-bold">How To Apply</p>
 <p className="mt-4 ml-4 text-xl font-normal">Sign up, fill in the application form with accurate details, and upload the required documents.</p>
 <p className="mt-2 ml-4 text-xl font-normal"> LoanOK will process your application quickly, and you’ll receive a response from the team soon.
 </p>
    </div>
  
  </div>
  <Bank/>

  <Form isOpen={isModalOpen} onClose={handleModalToggle} />

    </div>
  )
}
Instance.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Instance
