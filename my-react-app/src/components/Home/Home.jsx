import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Form from "../../Form/Form";
import WordRotate from "../WordRotate/WordRotate";

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigate = () => {
    navigate("/works");
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="px-1 flex flex-col bg-gradient-to-r from-[#ffffff] via-white to-[#ffffff] overflow-x-hidden">
      {/* Main Container */}
      <div
        className="flex flex-col items-center text-center mt-16 sm:bg-[url('/Home_girl.png')] sm:bg-contain sm:bg-[left_400px_top_10px] md:bg-[left_900px_top_30px] sm:bg-no-repeat sm:min-h-[425px] w-full"
      >
        

        {/* New Text Above Animated Text */}
        <div className="flex flex-col items-center text-center w-full">
          <h1 className="text-2xl font-bold sm:text-4xl">
            <span className="text-blue-900">Loans Made Easy</span> - Approval Made Fast!
          </h1>
        </div>

        {/* Animated Word Rotate */}
        <WordRotate
          words={["Trusted Partners ", "Simple Process", "Quick Loans"]}
          className="text-2xl sm:text-4xl font-bold mt-6 text-green-700"
        />

        {/* Added New Paragraph Below Animated Words */}
        <div className="p-3 mt-6 bg-gray-100 rounded-md shadow-md text-center flex flex-col items-center" style={{ width: '420px' }}>


  <p className="text-base font-semibold text-black-800 mb-1">
    Quick Approvals & Competitive Rates!
  </p>
  <p className="text-sm font-normal text-gray-700 mb-1">
    Explore a wide range of loan options—personal, home, business, or education. Our secure platform offers{" "}
    <span className="font-bold">24/7 access</span>, <span className="font-bold">full transparency</span>, and{" "}
    <span className="font-bold">no hidden charges</span>.
  </p>
  <p className="text-sm font-normal text-gray-700">
    Use tools like our <span className="text-black-500 font-bold">Loan EMI Calculator</span> and expert guidance to make smarter financial decisions.
  </p>
</div>



        <div className="flex flex-col gap-y-5 md:flex-row md:space-x-8 pt-4 text-basic mt-4 font-bold">
          <div
            onClick={handleModalToggle}
            className="cursor-pointer p-2 px-3 font-bold bg-white text-blue-800 border-2 shadow-md shadow-slate-500 transition ease-out hover:bg-blue-800 hover:text-white hover:border-blue-500"
          >
            Apply Now!
          </div>
          <div className="p-2 px-3 text-white border-2 border-blue-800 hover:border-white bg-blue-800">
            <button onClick={handleNavigate}>How it works</button>
          </div>
        </div>
      </div>

      

      <Form isOpen={isModalOpen} onClose={handleModalToggle} />
    </div>
  );
};

export default Home;
