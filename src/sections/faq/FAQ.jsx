import React, { useState } from 'react';

export default function FAQ() {
  const faqQuestions = [
    {
      question: 'What is HackNYU 2025?',
      answer:
        // "HackNYU 2025 is a 48-hour world-wide hackathon hosted by a team of NYU students. Come build your dream project, learn about the latest technologies and products from professionals and mentors, and, of course, win prizes! HackNYU is free, and made possible thanks to our wonderful sponsors and volunteers. HackNYU's hackathons are designed to promote inclusion, accessibility, and diversity and is currently open to NYU students and NYC high school students ONLY.",
        "HackNYU 2025 is a 48-hour hackathon hosted by NYU students. Come build your dream project, learn about the latest technologies and products from professionals and mentors, and, of course, win prizes! HackNYU is free, and made possible thanks to our wonderful sponsors and volunteers.",
    },
    // {
    //   question: 'Who can attend HackNYU 2025',
    //   answer:
    //     "NYU students and NYC high school students ONLY. Anyone 18 or older is encouraged to apply. However, we also welcome minors over the age of 16 to apply with a guardian's permission!",
    // },
    {
      question: 'Where is HackNYU 2025 taking place?',
      answer:
        "It takes places in Brooklyn Athletic Facility gym at NYU Tandon! You will get more details upon acceptance.",
    },
    {
      question: 'Do I need a team to sign up?',
      answer:
        'No, we actually will have a team forming opportunity during the hackathon as well as other ways to form teams beforehand once you are accepted!',
    },
    // {
    //   question: 'What is the deadline to apply to HackNYU 2025?',
    //   answer:
    //     'The deadline to apply is ____ for NYC high school students.',
    // },
    {
      question: 'Do I need prior experience?',
      answer:
        'No prior experience is needed! A large number of our hackers are first-time hackathon attendees!',
    },
    {
      question: 'Is there a discord? Where do I join the discord?',
      answer:
        'Yes, you will be invited to the discord upon admissions.',
    },
    {
      question: 'Will there be food and swag?',
      answer:
        'Yes, thanks to our kind and generous sponsors. Watch out for surprise snacks 🙂',
    },
    {
      question: 'What is the team limit? Can I work alone?',
      answer:
        'Teams should be 4 people max. While you can hack by yourself, we discourage it in the spirit of the hackathon!',
    },
   ];

  const [openIndex, setOpenIndex] = useState(null);

  // Separate items into two columns
  const leftColumn = faqQuestions.filter((_, i) => i % 2 === 0);
  const rightColumn = faqQuestions.filter((_, i) => i % 2 !== 0);

  return (
    <div className="bg-blue md:rounded-t-[100px] min-h-0 flex flex-col items-center text-white">
      <div className="p-6 flex flex-col justify-between w-full md:bg-transparent md:items-center md:min-h-0">
        <h1 className="text-2xl font-bold md:text-3xl">Frequently Asked Questions</h1>
        {/* <p className="mt-auto text-sm md:hidden">hack.support@nyu.edu</p> */}
      </div>

      {/* this will merge into one column on mobile */}
      <div className="p-4 mt-2 rounded-b-lg w-full md:max-w-4xl md:rounded-lg">
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
        <span className="font-medium">{faq.question}</span>
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
        <div className="mt-2 text-sm">
          {faq.answer}
        </div>
      )}
    </div>
  );
}
