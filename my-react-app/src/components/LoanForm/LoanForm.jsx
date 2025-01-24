import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

const LoanForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
  });

  // State to manage form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start the submission process

    // Your EmailJS details
    const serviceId = 'service_nchtopa';  // Replace with your service ID
    const templateId = 'template_fd7w3pi';  // Replace with your template ID
    const publicKey = 'GX_sc30t9BB3Nk3RZ';  // Replace with your public key

    // Template parameters
    const templateParams = {
      user_name: formData.name,  // Matching the {{name}} placeholder in the template
      user_phone: formData.mobile, // Matching the {{phone}} placeholder in the template
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('You have successfully applied for a loan. We will contact you soon!');
        setFormData({ name: '', mobile: '' }); // Clear form data after successful submission
        setIsSubmitting(false); // Reset submitting state
      })
      .catch((error) => {
        console.error('Error sending email:', error); // Log any error in sending email
        alert('There was an error submitting your application. Please try again.');
        setIsSubmitting(false); // Reset submitting state in case of error
      });
  };

  // Handle input change for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="relative md:absolute border w-[320px] h-[370px] md:right-0 md:mr-16 mt-8 md:mt-2 p-4 shadow-2xl">
      <div className="mt-3">
        <div className="text-center bg-yellow-500 p-2 font-medium text-white">
          Apply For Loan
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <div className="relative w-full">
            {/* FontAwesome Icon */}
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            {/* Input Field */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 pl-10 rounded"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="mobile" className="block font-medium">
            Mobile Number
          </label>
          <div className="relative w-full">
            {/* Phone Icon */}
            <FontAwesomeIcon
              icon={faPhone}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            {/* Input Field */}
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter your phone number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border p-2 pl-10 rounded"
              required
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="h-4 w-4"
            required
          />
          <label htmlFor="terms" className="text-sm font-medium">
            I accept the{" "}
            <a href="/terms" className="text-yellow-500 underline">
              terms & conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium p-2 rounded hover:bg-blue-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
