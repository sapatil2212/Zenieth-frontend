import React, { useState } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import { Link } from "react-router-dom";
import image from "../assets/faq.jpg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Zenith Hospitality Services offer?",
      answer:
        "We offer a range of services including accommodation, event management, and personalized hospitality experiences tailored to meet your needs.",
    },
    {
      question: "How can I make a reservation?",
      answer:
        "You can make a reservation directly through our website or by contacting our customer service team via phone or email.",
    },
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in time is 3 PM, and check-out time is 11 AM.",
    },
    {
      question: "Do you have parking available?",
      answer: "Yes, we provide complimentary parking for our guests.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We offer a flexible cancellation policy. Please refer to our website for more details on specific terms.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { darkMode } = useDarkMode();

  return (
    <div
      className={`${
        darkMode ? "dark bg-gray-900" : "bg-white"
      } py-24 sm:py-32 transition-colors duration-300`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* FAQ Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 mb-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Here are some of the most common questions we receive from our
            guests.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-5 max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:ring-gray-700 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400">
                Answers to your questions
              </h4>
              <div className="h-px flex-auto bg-gray-100 dark:bg-gray-700"></div>
            </div>

            {/* Map FAQs */}
            <dl className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:grid-cols-1 sm:gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`pt-4 ${
                    index !== 0
                      ? "border-t border-gray-200 dark:border-gray-700"
                      : ""
                  }`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <dt className="font-medium text-gray-900 dark:text-gray-100">
                      {faq.question}
                    </dt>
                    <span
                      className={`transform transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v8m-4-4h8"
                        />
                      </svg>
                    </span>
                  </div>
                  {openIndex === index && (
                    <dd className="mt-2 text-sm text-gray-500 dark:text-gray-400 transition-all duration-300 ease-in-out">
                      {faq.answer}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>

          {/* Optional Image Section */}
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 dark:ring-gray-700 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xl px-8">
                <img
                  src={image}
                  alt="FAQ Image"
                  className="rounded-lg bg-gray-100 dark:bg-gray-700"
                />
                <p className="mt-6 text-base font-semibold text-gray-600 dark:text-gray-300">
                  We are here to help!
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">
                  Contact us for further assistance.
                </p>
                {/* Contact Us Button */}
                <Link to="/contact">
                  <button className="mt-6 w-full inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400">
                    Contact Us Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
