"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";


interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I know my gold and silver are there?",
    answer: "Your assets are independently audited and stored securely.",
  },
  {
    question: "How do I know my gold and silver are safe?",
    answer: "We use world-class vaults and comprehensive insurance policies.",
  },
  {
    question: "Why should I trust Kinesis?",
    answer: "Kinesis has a proven track record with transparency and audits.",
  },
];

export default function WealthSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full  py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Top CTA Image */}
      <div className="relative w-full h-40 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl overflow-hidden mx-auto">
  {/* Image */}
  <Image
    src="/Grid/cta.jpg"
    alt="Call to action"
    fill
    className="object-cover"
    priority
  />

  {/* Soft Overlay (optional, keeps image visible but adds mood) */}
  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/30"></div>

  {/* Inverse Rounded Border Effect */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      WebkitMaskImage:
        "radial-gradient(circle at center, transparent 85%, black 100%)",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskSize: "cover",
      maskImage:
        "radial-gradient(circle at center, transparent 85%, black 100%)",
      maskRepeat: "no-repeat",
      maskSize: "cover",
      background: "rgba(0,0,0,0.4)", // adjust darkness of border
    }}
  />
</div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16 md:gap-20">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-10 mt-10 lg:gap-12">
          {/* Left Placeholder (Image) */}
          <div className="w-full lg:w-1/2  h-48 sm:h-56 md:h-64 lg:h-96 bg-[#1a1c27] rounded-xl order-1 lg:order-2"></div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 md:gap-6 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Build your wealth
            </h2>

            {/* Card 1 */}
            <div className="flex items-center gap-4 p-4 sm:p-5 bg-[#1A1C27] rounded-lg">
              <Image src="/Grid/gold.svg" alt="Gold" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">Gold</h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                  Earn on every gram of gold you hold.{" "}
                  <a href="#" className="text-blue-400 hover:underline">
                    Get yours →
                  </a>
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 p-4 sm:p-5 bg-[#1A1C27] rounded-lg">
              <Image src="/Grid/silver.svg" alt="Silver" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">Silver</h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                  Earn on every gram of silver you hold.{" "}
                  <a href="#" className="text-blue-400 hover:underline">
                    Get yours →
                  </a>
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 p-4 sm:p-5 bg-[#1A1C27] rounded-lg">
              <Image src='/Grid/coins.svg' alt="NSG" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">NSG</h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                  Receive a proportionate 20% share of every fee taken by NSG.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-10 lg:gap-12">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Digital currency made easy
            </h2>
            <p className="text-gray-400 mb-6 text-sm sm:text-base md:text-lg">
              Instantly buy or sell digital currency, 24/7, from your regular
              account – starting at just $1.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-medium transition-colors duration-200">
              Join Group
            </button>
          </div>

          {/* Right Placeholder (Image) */}
          <div className="w-full lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-72 bg-[#1a1c27] rounded-xl order-1 lg:order-2"></div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 md:mt-20">
        {/* FAQ Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            FAQ
          </h2>
          <a
            href="#"
            className="text-blue-400 hover:underline text-sm sm:text-base md:text-lg"
          >
            Visit our Help Center
          </a>
        </div>

        {/* FAQ Content */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10">
          {/* Left Tabs */}
          <div className="w-full lg:w-1/3 space-y-3 sm:space-y-4">
            <button className="w-full text-left text-white font-medium py-2 sm:py-3 border-l-2 border-blue-500 pl-3 sm:pl-4 text-sm sm:text-base md:text-lg">
              Trust and security
            </button>
            <button className="w-full text-left text-gray-500 font-medium py-2 sm:py-3 pl-3 sm:pl-4 text-sm sm:text-base md:text-lg">
              Buying gold and silver
            </button>
            <button className="w-full text-left text-gray-500 font-medium py-2 sm:py-3 pl-3 sm:pl-4 text-sm sm:text-base md:text-lg">
              Storage
            </button>
          </div>

          {/* Right Accordion */}
          <div className="w-full lg:w-2/3 space-y-4 sm:space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1A1C27] rounded-lg p-4 sm:p-5 md:p-6 cursor-pointer transition-all duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium text-sm sm:text-base md:text-lg">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Investor & Trader Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20">
          {/* Investor */}
          <div className="bg-transparent p-4 sm:p-5 md:p-6 rounded-lg">
            <p className="text-blue-400 uppercase text-xs sm:text-sm md:text-base font-semibold mb-2 sm:mb-3">
              Investor
            </p>
            <h3 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Our offering for gold and silver investors.
            </h3>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 text-xs ml-4 sm:text-sm md:text-base font-medium transition-colors duration-200"
            >
              Learn more →
            </a>
          </div>

          {/* Trader */}
          <div className="bg-transparent p-4 sm:p-5 md:p-6 rounded-lg">
            <p className="text-blue-400 uppercase text-xs sm:text-sm md:text-base font-semibold mb-2 sm:mb-3">
              Trader
            </p>
            <h3 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Our offering for professional traders.
            </h3>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm md:text-base font-medium transition-colors duration-200"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}