import VisionForm from "../VisionForm/VisionForm"



const Vision = () => {
  return (
    <div className="p-2 sm:p-6 mt-10">
        <div className="flex flex-col items-center justify-center ">
  <div className="border text-2xl font-bold bg-blue-800 max-w-[220px] w-full mx-auto text-center text-white p-2">
    Our Vision
  </div>

  <div className="p-6 mt-4 bg-gray-100 rounded-md shadow-md text-center" style={{ width: '1365px' }}>

  <p className="text-base font-semibold font- large text-black-800 mb-5">
    We aim to simplify borrowing and empower dreams. With trusted bank partnerships, 
    we ensure fast approvals and hassle-free loans.
  </p>
  
  <p className="text-sm font-medium text-gray-500">
  At LoanOK, we envision a world where borrowing is no longer a burden but a bridge to achieving your goals. Our platform is designed to offer a seamless and user-friendly process that eliminates the complexity of traditional lending. With competitive interest rates and a transparent approach, we ensure that our financial solutions are tailored to meet your unique needs, whether you’re funding your education, launching a business, or purchasing a home.

We believe that informed decisions lead to better financial outcomes. That’s why we prioritize guidance at every step of the process, empowering you with the knowledge and clarity needed to make choices that align with your aspirations. Our team is committed to supporting you, not just as a service provider but as a trusted partner in your financial journey.

By combining cutting-edge technology with personalized assistance, LoanOK ensures that borrowing is not just easy but also efficient and stress-free. Our goal is to give you the freedom to focus on what truly matters—achieving your dreams and reaching your full potential. With LoanOK, financial empowerment is just a step away.
  </p>
</div>


  {/* <div className="max-w-6xl w-full text-center text-lg mt-12 p-2  space-y-2">
  <p className=" text-center">At LoanOK, we strive to make borrowing simple, transparent, and reliable, empowering individuals and businesses to achieve their dreams. Partnering with trusted banks, we provide fast approvals and hassle-free loans tailored to diverse needs, from education and business ventures to home purchases.
  </p>
  <p className=" text-center">Our seamless process, competitive rates, and focus on guidance ensure informed financial decisions and stress-free borrowing. By combining advanced technology with personalized support, LoanOK redefines lending, making your financial journey efficient, inclusive, and goal-oriented.
  </p>
 
  </div> */}

<div className="flex flex-col md:flex-row justify-center px-6 mt-20 gap-y-8 md:gap-6">
  {/* Section 1 */}
  <div className="flex-1 text-center bg-white border border-gray-300 rounded-lg shadow-lg p-6">
    <h1 className="text-lg sm:text-xl font-bold text-black max-w-[15rem] mx-auto p-2">
      Transparency
    </h1>
    <p className="mt-4 text-lg text-gray-700">
      Clear Terms, No Surprises, No Hidden Fees - Straightforward loan agreements for your peace of mind.
    </p>
  </div>

  {/* Section 2 */}
  <div className="flex-1 text-center bg-white border border-gray-300 rounded-lg shadow-lg p-6">
    <h1 className="text-lg sm:text-xl font-bold text-black max-w-[15rem] mx-auto p-2">
      Reliability
    </h1>
    <p className="mt-4 text-lg text-gray-700">
      We collaborate with reliable financial institutions to deliver credible and high-quality services.
    </p>
  </div>

  {/* Section 3 */}
  <div className="flex-1 text-center bg-white border border-gray-300 rounded-lg shadow-lg p-6">
    <h1 className="text-lg sm:text-xl font-bold text-black max-w-[15rem] mx-auto p-2">
      Customer-Centricity
    </h1>
    <p className="mt-4 text-lg text-gray-700">
      Customer First - We prioritize your needs with flexible repayment plans and competitive interest rates.
    </p>
  </div>
</div>


</div>

<div className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-start md:pl-20 mt-28">
          <div className="border text-lg sm:text-xl font-bold  bg-green-700 text-white w-full max-w-[250px]  text-center p-2">
            Connect With
          </div>
          <div className="border text-lg sm:text-xl font-bold bg-blue-800 text-white w-full max-w-xs  text-center p-2">
            Our Financial Experts
          </div>
         
        </div>

        <div className="flex items-center justify-center md:justify-start md:pl-16 mt-6">
        <div className="text-lg sm:text-2xl font-semibold w-full max-w-lg text-center px-8">
        Our expert financial advisors are here to
        help you anytime.
          </div>
        </div>

        

        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between px-4 sm:px-6 md:px-10 lg:px-16">
  {/* Vision Form */}
  <div className="flex-1 min-h-[400px] mt-6 md:mt-0">
    <VisionForm />
  </div>

  {/* Image Positioned to the Right */}
  <div className="w-[250px] h-[150px] sm:w-[250px] sm:h-[200px] md:w-[300px] md:h-[250px] lg:w-[380px] lg:h-[300px] mt-6 md:mt-0 md:ml-8">
    <img
      src="/visionpic.png"
      alt="Flexible EMIs"
      className="w-full h-full object-cover"
    />
  </div>
</div>

    
    </div>

  )
}

export default Vision
