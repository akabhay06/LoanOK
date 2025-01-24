import { useEffect, useState } from "react";
import Form from "../Form/Form";

const Calculator = () => {

  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

 const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };



  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(10);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateEmi = () => {
      if (!amount || !tenure || interest <= 0) return 0;

      const loanAmount = amount;
      const monthlyRate = interest / 100 / 12;
      const noOfMonths = tenure;

      if (monthlyRate === 0) return loanAmount / noOfMonths;

      const EMI =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, noOfMonths)) /
        (Math.pow(1 + monthlyRate, noOfMonths) - 1);

      return Number(EMI).toFixed(0);
    };

    const emiValue = calculateEmi();
    setEmi(emiValue);

    // Calculate total amount and interest
    if (emiValue > 0 && tenure > 0) {
      const totalAmount = emiValue * tenure; // Total amount paid over the tenure
      const totalInterest = totalAmount - amount; // Total interest paid

      setTotalAmount(totalAmount.toFixed(0)); // Round to nearest integer
      setTotalInterest(totalInterest.toFixed(0)); // Round to nearest integer
    } else {
      setTotalAmount(0);
      setTotalInterest(0);
    }
  }, [amount, interest, tenure]);

  // Helper function to parse valid numbers or default to 0
  const handleInputChange = (setter) => (e) => {
    const value = e.target.value.trim();
    const numericValue = parseFloat(value);
    setter(numericValue >= 0 ? numericValue : 0);
  };

  return (
    <div className="p-2 sm:p-20">
  {/* Heading Section */}
  <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-center">
    <div className="border text-lg sm:text-3xl font-bold bg-green-700 text-white w-full max-w-[20rem] flex-1 text-center p-2">
      EMI Calculator
    </div>
    <div className="border text-lg sm:text-3xl font-bold bg-blue-800 text-white w-full max-w-[34rem] flex-1 text-center p-2">
      - Simplify Your Loan Planning
    </div>
  </div>
  <div className="text-center mt-6 sm:mt-8 mb-20 lg:mb-32">
    <p className="text-lg max-w-2xl mx-auto">
      Calculate your monthly or yearly EMIs for personal, car, or home loans
      instantly with LoanOK’s flexible online calculator.
    </p>
  </div>

  {/* Calculator Section */}
  <div className="flex items-center justify-center">
    <div className="bg-white rounded-3xl shadow-2xl w-full sm:w-11/12 lg:w-3/4 xl:w-2/3 p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Inputs */}
        <div className="flex flex-col space-y-6">
          {["Loan Amount", "Interest Rate (%)", "Tenure (Months)"].map((label, index) => (
            <div key={index}>
              <label className="block text-lg font-medium text-gray-700">{label}</label>
              <input
                type="text"
                value={index === 0 ? amount : index === 1 ? interest : tenure}
                placeholder={`Enter ${label.toLowerCase()}`}
                onChange={
                  index === 0
                    ? handleInputChange(setAmount)
                    : index === 1
                    ? handleInputChange(setInterest)
                    : handleInputChange(setTenure)
                }
                className="mt-2 w-full p-4 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <input
                type="range"
                min={index === 0 ? 0 : index === 1 ? 0 : 0}
                max={index === 0 ? 1000000 : index === 1 ? 30 : 240}
                value={index === 0 ? amount : index === 1 ? interest : tenure}
                onChange={(e) =>
                  index === 0
                    ? setAmount(Number(e.target.value))
                    : index === 1
                    ? setInterest(Number(e.target.value))
                    : setTenure(Number(e.target.value))
                }
                className="mt-4 w-full h-2 bg-blue-500 rounded-full hover:bg-blue-700 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Right Side - Results */}
        <div className="flex flex-col space-y-6">
          {[
            { title: "Monthly EMI", value: emi },
            { title: "Total Interest", value: totalInterest },
            { title: "Total Amount Payable", value: totalAmount },
          ].map(({ title, value }, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 p-6 rounded-xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="text-lg text-white">
                {value > 0 ? `₹${value}` : "Enter details to calculate"}
              </p>
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <button
              onClick={handleModalToggle}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              Apply For Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer Section */}
  <div className="flex flex-col justify-center items-center mt-32 space-y-10">
  <div className="border text-lg sm:text-xl font-bold bg-blue-800 text-white w-full max-w-[26rem] text-center p-2">
    What is EMI Calculator?
  </div>
  <div className="text-lg max-w-6xl text-center">
    <p>
      The LoanOK EMI Calculator is a powerful financial tool designed to make your loan planning
      effortless and precise. Whether {"you're"} exploring personal loans, home loans, car loans, or
      business loans, our EMI Calculator provides instant calculations of your Equated Monthly
      Instalments (EMIs) based on the loan amount, interest rate, and tenure. This intuitive tool
      empowers you to plan your finances effectively by giving you a clear understanding of your
      monthly commitments. With LoanOK’s EMI Calculator, you can confidently choose the best loan
      option that aligns with your budget and financial goals, ensuring a stress-free borrowing
      experience. Simplify your finances with LoanOK—Loans Simplified!
    </p>
  </div>
</div>

<div className="flex flex-col justify-center items-center mt-24 space-y-12">
  <div className="border text-lg sm:text-xl font-bold bg-green-700 text-white w-full max-w-[26rem] text-center p-2">
    How to Use LoanOK’s EMI Calculator?
  </div>
  <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-center sm:items-stretch sm:w-full sm:max-w-6xl sm:overflow-hidden">

<div className="flex-1 border-r border-gray-300 p-4 text-center">
  <h2 className="text-3xl font-bold mb-4">Select Loan Amount</h2>
  <p className="text-lg text-gray-700 p-2">
    Use the slider to choose the amount you wish to borrow. This is the starting point for calculating your monthly EMI.
  </p>
</div>
<div className="flex-1 border-r border-gray-300 p-4 text-center">
  <h2 className="text-3xl font-bold mb-4">Set the Interest Rate</h2>
  <p className="text-lg text-gray-700">
    Adjust the slider to input the applicable interest rate. This helps determine how much interest you’ll pay over the loan tenure.
  </p>
</div>
<div className="flex-1 border-r border-gray-300 p-4 text-center">
  <h2 className="text-3xl font-bold mb-4">Choose the Loan Tenure</h2>
  <p className="text-lg text-gray-700">
    Move the slider to select the repayment period. The tenure influences both your monthly EMI and total payable amount.
  </p>
</div>
<div className="flex-1 p-4 text-center">
  <h2 className="text-3xl font-bold mb-4">Get Instant Results</h2>
  <p className="text-lg text-gray-700">
    Click on “Calculate” to view your monthly EMI, total interest, and the overall amount payable in just seconds.
  </p>
</div>
</div>

</div>
<div className="flex flex-col sm:flex-row justify-center mt-24">
  <div className="border text-lg sm:text-xl font-bold bg-green-700 text-white w-full max-w-[16rem] flex-1 text-center p-2">
  Key Features and
  </div>
  <div className="border text-lg sm:text-xl font-bold bg-blue-800 text-white w-full max-w-[26rem] flex-1 text-center p-2">
  Benefits of {"LoanOK's"} EMI Calculator
  </div>
</div>
<div className="text-center  mt-8 sm:mt-8  lg:mb-32">
  <p className="text-lg max-w-6xl mx-auto">
  LoanOK simplifies your loan journey with an easy-to-use EMI calculator, providing
 instant and accurate results. Compare various loan options to find the best fit for your
 needs, with full transparency on principal and interest breakdowns. Plan your finances
 better by adjusting loan parameters and exploring different repayment scenarios.
 Whether it’s a home loan, personal loan, or car loan, LoanOK helps you make smarter
 decisions. Take control of your financial future and achieve your goals with confidence!
  </p>
</div>

<div className="flex flex-col md:flex-row justify-center mt-24 px-6 space-y-6 md:space-y-0 md:space-x-6">
  {/* Section 1 */}
  <div className="flex-1 text-center border-b md:border-r md:border-b-0 border-gray-300 pb-6 md:pr-6">
    <h1 className="text-lg sm:text-xl font-bold bg-blue-800 text-white w-full max-w-[22rem] mx-auto p-2">
      Instant Results, Zero Hassle
    </h1>
    <p className="mt-4 text-lg text-gray-700 p-3">
      <span className="text-green-700 font-semibold">Quick Calculations:</span> Get instant accurate EMI results based on your loan amount, interest rate, and tenure details.
    </p>
    <p className="mt-2 text-lg text-gray-700 p-3">
      <span className="text-green-700 font-semibold">Stress-Free Process:</span> No complicated steps—just enter your details and get the result instantly, saving time.
    </p>
  </div>

  {/* Section 2 */}
  <div className="flex-1 text-center border-b md:border-r md:border-b-0 border-gray-300 pb-6 md:pr-6">
    <h1 className="text-lg sm:text-xl font-bold bg-blue-800 text-white w-full max-w-[22rem] mx-auto p-2">
      Plan Smarter, Borrow Better
    </h1>
    <p className="mt-4 text-lg text-gray-700 p-3">
      <span className="text-green-700 font-semibold">Clear Financial Planning:</span> Visualize your monthly repayments to understand how they fit into your overall financial strategy.
    </p>
    <p className="mt-2 text-lg text-gray-700 p-3">
      <span className="text-green-700 font-semibold">Informed Decisions:</span> With precise EMI figures, you can evaluate loan options and make choices that align with your long-term goals.
    </p>
  </div>

  {/* Section 3 */}
  <div className="flex-1 text-center pb-6">
    <h1 className="text-lg sm:text-xl font-bold bg-blue-800 text-white w-full max-w-[22rem] mx-auto p-2">
      Transparency at Its Best
    </h1>
    <p className="mt-4 text-lg text-gray-700 p-3">
      <span className="text-green-700 font-semibold">Detailed Breakdown:</span> View your EMI split into principal and interest, giving you a full understanding of your repayment structure.
    </p>
    <p className="mt-2 text-lg text-gray-700 p-3">
      <span className="text-green-700 font-semibold">No Hidden Surprises:</span> Understand how much of your payment is reducing the loan principal and how much goes toward the interest.
    </p>
  </div>
</div>

<div className="flex flex-col md:flex-row justify-center mt-24 px-6 space-y-6 md:space-y-0 md:space-x-6">
  {/* Section 1 */}
  <div className="flex-1 text-center border-b md:border-r md:border-b-0 border-gray-300 pb-6 md:pr-6">
    <h1 className="text-lg sm:text-xl font-bold bg-blue-800 text-white w-full max-w-[22rem] mx-auto p-2">
      Compare, Choose, Win
    </h1>
    <p className="mt-4 text-lg text-gray-700 p-3">
      <span className="text-green-700 font-semibold">Side-by-Side Comparison: </span> Easily compare EMIs from multiple loan providers, helping you identify the best terms for your needs.
    </p>
    <p className="mt-2 text-lg text-gray-700 p-3">
      <span className="text-green-700 font-semibold">Best Fit Selection: </span> Find the loan that best matches your repayment capabilities, ensuring you’re choosing the cost-effective option.
    </p>
  </div>

  {/* Section 2 */}
  <div className="flex-1 text-center border-b md:border-r md:border-b-0 border-gray-300 pb-6 md:pr-6">
    <h1 className="text-lg sm:text-xl font-bold bg-blue-800 text-white w-full max-w-[22rem] mx-auto p-2">
      Your Budgeting Partner
    </h1>
    <p className="mt-4 text-lg text-gray-700 p-3">
      <span className="text-green-700 font-semibold">Monthly Budget Alignment: </span> Plan your budget by factoring in your exact EMI amount and its impact on your finances.
    </p>
    <p className="mt-2 text-lg text-gray-700 p-3">
      <span className="text-green-700 font-semibold">Avoid Financial Strain: </span> Ensures that your loan repayments are manageable, preventing any unexpected financial burden.
    </p>
  </div>

  {/* Section 3 */}
  <div className="flex-1 text-center pb-6">
    <h1 className="text-lg sm:text-xl font-bold bg-blue-800 text-white w-full max-w-[22rem] mx-auto p-2">
      Simplicity Redefined
    </h1>
    <p className="mt-4 text-lg text-gray-700 p-3">
      <span className="text-green-700 font-semibold">User-Friendly Interface: </span> The calculator’s easy-to-use interface eliminates confusion and makes EMI calculation simple for anyone.
    </p>
    <p className="mt-2 text-lg text-gray-700 p-3">
      <span className="text-green-700 font-semibold">Effortless Experience: </span> Say goodbye to complex financial formulas—LoanOK makes it easy for you to understand and plan your loan repayment.
    </p>
  </div>
</div>


<Form isOpen={isModalOpen} onClose={handleModalToggle} />


</div>

  );
};

export default Calculator;
