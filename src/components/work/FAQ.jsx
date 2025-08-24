'use client';
import React, { useState } from "react";

const faqs = [
  "How can I get a work visa?",
  "What is the meaning of a work visa?",
  "What is the difference between visa and work permit?",
  "Which country is best for Indians to work in?",
  "How many types of work visas are there?",
  "Am I eligible for a work visa?",
  "What is the eligibility for a work visa?",
  "Which work visa is easiest to get?",
  "Where can Indians work visa free?",
  "What is needed for a work visa?",
  "Can we apply directly for a work visa?",
  "Can I apply for a work permit from India?",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-md bg-white shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-50"
            >
              <span>{faq}</span>
              <span className="text-2xl font-bold text-gray-600">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 text-sm">
                {/* Replace this with actual answer text */}
                Answer for: {faq}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
