import React, { useState } from 'react';

export default function FAQ() {
  const faqQuestions = [
    { question: 'What is HackNYU?', answer: 'HackNYU is an annual hackathon hosted by New York University where students collaborate to build innovative projects.' },
    { question: 'Which payment methods are accepted?', answer: 'We accept a variety of payment methods including credit cards and PayPal.' },
    { question: 'How to get familiar with Figma?', answer: 'There are many online resources available to learn Figma. Check out Figma’s official tutorials for beginners.' },
    { question: 'Can I get a refund?', answer: 'Refunds are possible under certain conditions. Please contact support for more details.' },
    { question: 'Where is my order?', answer: 'You can track your order using the tracking link sent to your email.' },
    { question: 'How does Clonify work?', answer: 'Clonify is a software solution that helps automate and manage tasks efficiently. Contact us for a full demo.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  // Separate items into two columns
  const leftColumn = faqQuestions.filter((_, i) => i % 2 === 0);
  const rightColumn = faqQuestions.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-0 flex flex-col items-center">
      <div className="bg-blue text-white p-6 flex flex-col justify-between min-h-[150px] w-full md:bg-transparent md:text-blue md:items-center md:min-h-0">
        <h1 className="text-2xl font-bold md:text-3xl">Frequently Asked Questions</h1>
        
        <p className="hidden md:block mt-2 md:mt-4 md:text-lg md:text-blue">
          Placeholder for additional information or subtext.
        </p>
        
        <p className="mt-auto text-sm md:hidden">hacknyuteam@gmail.com</p>
      </div>

      {/* this will merge into one column on mobile */}
      <div className="text-blue p-4 mt-2 rounded-b-lg w-full md:max-w-4xl md:rounded-lg">
        <div className="flex flex-col md:flex-row gap-0 md:gap-10 space-y-4 md:space-y-0">
          {/* left column */}
          <div className="flex-1 space-y-4">
            {leftColumn.map((faq, index) => (
              <FAQItem
                key={index * 2}
                faq={faq}
                isOpen={openIndex === index * 2}
                onClick={() => setOpenIndex(openIndex === index * 2 ? null : index * 2)}
              />
            ))}
          </div>

          {/* right column */}
          <div className="flex-1 space-y-4">
            {rightColumn.map((faq, index) => (
              <FAQItem
                key={index * 2 + 1}
                faq={faq}
                isOpen={openIndex === index * 2 + 1}
                onClick={() => setOpenIndex(openIndex === index * 2 + 1 ? null : index * 2 + 1)}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-blue-300 py-2">
      <button
        onClick={onClick}
        className="w-full text-left flex justify-between items-center focus:outline-none"
      >
        <span className="font-medium text-custom-blue">{faq.question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-sm text-blue">
          {faq.answer}
        </div>
      )}
    </div>
  );
}
