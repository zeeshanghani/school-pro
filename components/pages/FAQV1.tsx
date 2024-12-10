"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, HelpCircle, Minus, Plus } from "lucide-react";
const faqs = [
  {
    question: "How do I start exporting with Agrikkom?",
    answer:
      "Starting with Agrikkom is easy. Simply contact us through our website or email. We'll guide you through the process, discuss your export needs, and provide you with all necessary information about our services and requirements.",
  },
  {
    question: "What types of fruits and vegetables do you export?",
    answer:
      "We export a wide variety of fresh fruits and vegetables, including mangoes, bananas, pineapples, avocados, green beans, and more. Our product range is constantly expanding to meet global demand.",
  },
  {
    question: "How do you ensure the quality of your products?",
    answer:
      "We work exclusively with certified farmers and implement strict quality control measures throughout our supply chain. Our packhouse facilities are approved and monitored by relevant Ugandan authorities to ensure compliance with international standards.",
  },
  {
    question: "Do you offer organic produce?",
    answer:
      "Yes, we offer both conventional and organic produce. Our organic products are certified and grown without the use of synthetic pesticides or fertilizers.",
  },
  {
    question: "What agricultural engineering services do you provide?",
    answer:
      "Our agricultural engineering services include soil analysis, irrigation system design, crop management consulting, and sustainable farming practices implementation. We also conduct research to improve crop yields and quality.",
  },
  {
    question: "How can I become a supplier for Agrikkom?",
    answer:
      "We're always looking for certified farmers to join our network. Please contact us through our website or email, and our team will guide you through the process and requirements.",
  },
  {
    question: "Do you have any terms & conditions?",
    answer:
      "Yes, we have terms and conditions that govern our services and transactions. These cover aspects such as product quality, delivery terms, payment schedules, and dispute resolution. We recommend reviewing these before engaging in business with us.",
  },
];

export default function FAQV1() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wide">
            Frequently Asked Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            You ask? We <span className="italic">answer</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-green-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-green-600" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center">
            <HelpCircle className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-600">Need further support?</span>
          </div>
          <button className="bg-lime-400 text-green-900 px-6 py-2 rounded-full hover:bg-lime-500 transition duration-300 flex items-center">
            Contact us
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
