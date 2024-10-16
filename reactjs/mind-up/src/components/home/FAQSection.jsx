import React, { useState } from "react";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What courses do you offer?",
      answer:
        "We offer a wide range of courses in web development, data science, digital marketing, graphic design, and more.",
    },
    {
      question: "How long do I have access to the courses?",
      answer:
        "Once you enroll in a course, you will have lifetime access to all the materials.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Most of our courses do not require prerequisites, but some may recommend basic knowledge in certain areas.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes, we offer a 30-day money-back guarantee for all our courses. If you're not satisfied, you can request a refund.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 dark:border-gray-600 mb-4"
            >
              <button
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <span className="text-lg">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
