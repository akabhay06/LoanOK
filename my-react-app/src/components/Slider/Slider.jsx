import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Slider = () => {
  const items = [
    {
      title: "Instant Personal Loan",
      description:
        "Need money fast? An instant loan from LoanOK is a quick and easy way to access funds, often within minutes. Perfect for urgent financial needs like medical emergencies, home repairs, or unexpected expenses.",
      image: "https://www.fibe.in/_next/image/?url=https%3A%2F%2Faltcont.fibe.in%2Fwp-content%2Fuploads%2F2023%2F07%2FInstant-Personal-Loan-of-%E2%82%B930000.jpg&w=3840&q=75.jpg",
      link: "/instance",
    },
    {
      title: "Vehicle Loan",
      description:
        "A vehicle loan lets you borrow funds to purchase a car, motorcycle, or truck, with the vehicle as collateral. Repayments are made in fixed monthly installments over a specified period, offering an affordable way to own a vehicle.",
      image: "https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/blogs/images/what-is-vehicle-loan-and-its-different-types.jpg ",
      link: "/Vehicle",
    },
    {
      title: "Debt Consolidation Loan",
      description:
        "A debt consolidation loan combines multiple debts into one, simplifying repayments with a single monthly payment. It’s ideal for those with high-interest debts, like credit cards, helping to better manage finances.",
      image: "https://www.everydayloanindia.com/blogs/wp-content/uploads/2021/01/blog3-1024x512.jpg",
      link: "/dcloan",
    },
    {
      title: "Marriage Loan",
      description:
        "Your dream wedding, your way. A Marriage Loan from LoanOK helps you celebrate your special day without financial stress. Get quick approval and easy repayment options to fund your wedding expenses.",
      image: "https://images.herzindagi.info/image/2023/Sep/nri-applying-for-wedding-loan.jpg",
      link: "/marriageloan",
    },
    {
      title: "Credit Card Repayment Loan",
      description:
        "A Credit Card Repayment Loan from LoanOK helps consolidate high credit card debt with quick approval and flexible repayment options, making it easier to manage and regain control of your finances.",
      image: "https://www.paymeindia.in/blog/wp-content/uploads/2024/01/credit-card.png",
      link: "/ccrloan",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleReadMore = (link) => {
    // Use navigate to go to the link
    navigate(link); 
  };

  return (
    <div className="p-2 sm:p-10">
        <div className="relative w-full h-screen overflow-hidden bg-black">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
            ${currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="max-w-2xl text-xl mx-auto text-center px-4">
              <h2 className="text-4xl font-bold mb-4 text-white">{item.title}</h2>
              <p className="mt-8 mb-6 text-white/90">{item.description}</p>
              <button
                onClick={() => handleReadMore(item.link)}
                className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors duration-300"
        aria-label="Previous slide"
      >
        <span className="text-2xl text-white">←</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors duration-300"
        aria-label="Next slide"
      >
        <span className="text-2xl text-white">→</span>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300
              ${currentIndex === index ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Slider;
