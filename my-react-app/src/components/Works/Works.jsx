const Works = () => {
  return (
    <div className="relative pb-5 sm:pb-20 bg-gradient-to-r from-[#ffffff] via-white to-[#ffffff]">
      {/* Heading Section */}
      <div className="pt-1 text-2xl font-bold text-center sm:pt-4 sm:text-base md:pt-10 md:text-5xl">
        <span className="text-blue-800">Get Your Loan in</span>{" "}
        <span className="text-green-800">4 Easy Steps</span>
      </div>
      <div className="mt-2 text-m font-bold text-center text-blue-900 sm:mt-4 sm:text-sm md:mt-5 md:text-3xl">
        Instant{" "}
        <span className="border p-1 bg-green-700 text-white sm:p-2">
          Loan
        </span>{" "}
        Anywhere, Anytime.
      </div>

      {/* Image Section */}
      <div className="absolute hidden sm:block w-[150px] h-[120px] bottom-0 right-0 mb-16 mr-8 sm:w-[250px] sm:h-[200px] sm:mb-24 sm:mr-12 md:w-[500px] md:h-[400px] md:mb-16 md:mr-48">
  <img
    src="/girl.png"
    alt="Flexible EMIs"
    className="w-full h-full object-cover"
  />
  <div className="absolute top-0 left-0 w-[50px] h-[60px] ml-2 sm:w-[90px] sm:h-[120px] sm:ml-6 md:w-[150px] md:h-[190px] md:ml-16">
    <img
      src="/rupe.png"
      alt="Flexible EMIs"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      {/* Steps Section */}
      <div className="flex flex-col space-y-4 pt-4 sm:space-y-6 sm:pt-6 md:space-y-10 md:pl-24">
        {/* Step 1 */}
        <div className="flex items-start sm:items-center sm:flex-col md:flex-row">
          <img
            src="/Login.png"
            alt="Login"
            className="w-[40px] h-[50px] sm:w-[50px] sm:h-[60px] md:w-[70px] md:h-[80px]"
          />
          <div className="pl-2 sm:mt-10 sm:pl-0 sm:pt-2 md:pl-4">
            <div className="text-sm font-semibold sm:text-base md:text-2xl">
              Step-1:- Visit Our Website
            </div>
            <h1 className="text-xs font-serif text-blue-800 sm:text-sm md:text-lg">
              {`we'll`} assist you quickly!
            </h1>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start  sm:items-center sm:flex-col md:flex-row ">
          <img
            src="/calling1.png"
            alt="Consultation"
            className="w-[40px] h-[50px] sm:w-[50px] sm:h-[60px] md:w-[70px] md:h-[80px]"
          />
          <div className="pl-2 sm:pl-0 sm:pt-2 md:pl-4">
            <div className="text-sm font-semibold sm:text-base md:text-2xl">
              Step-2:- Get Expert Consultation Over a Call
            </div>
            <h1 className="text-xs font-serif text-blue-800 sm:text-sm md:text-lg">
              Schedule a call, and our team will promptly assist you!!
            </h1>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start sm:items-center sm:flex-col md:flex-row">
          <img
            src="/Apply.png"
            alt="Apply"
            className="w-[40px] h-[50px] sm:w-[50px] sm:h-[60px] md:w-[70px] md:h-[80px]"
          />
          <div className="pl-2 sm:pl-0 sm:pt-2 md:pl-4">
            <div className="text-sm font-semibold sm:text-base md:text-2xl">
              Step-3:- Apply For a Loan
            </div>
            <h1 className="text-xs font-serif text-blue-800 sm:text-sm md:text-lg">
              Submit your application & unlock the best interest rates
            </h1>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start sm:items-center sm:flex-col md:flex-row">
          <img
            src="/Mark.png"
            alt="Approval"
            className="w-[40px] h-[50px] sm:w-[50px] sm:h-[60px] md:w-[70px] md:h-[80px]"
          />
          <div className="pl-2 sm:pl-0 sm:pt-2 md:pl-4">
            <div className="text-sm font-semibold sm:text-base md:text-2xl">
              Step-4:- Get Instant Loan Approval
            </div>
            <h1 className="text-xs font-serif text-blue-800 sm:text-sm md:text-lg">
              Quick bank approval after loan submission.
            </h1>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Works;
