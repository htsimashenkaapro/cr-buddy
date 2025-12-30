import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Group from "../imports/Group";
import { DottedBackground } from "./DottedBackground";
import { useLanguage } from "../contexts/LanguageContext";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5'),
    },
    {
      question: t('faq.q6'),
      answer: t('faq.a6'),
    },
    {
      question: t('faq.q7'),
      answer: t('faq.a7'),
    },
  ];

  return (
    <div className="pb-12 border-b-4 border-black relative overflow-hidden m-[0px]">
      {/* Comic-style dotted background */}
      <DottedBackground />

      <div className="flex justify-center mb-[24px] relative z-10 mt-[45px] mx-4">
        <div className="relative inline-flex items-center">
          <button
            className="bg-[#2DD4BF] text-black px-8 py-3 md:px-12 md:py-4.5 rounded-full border-4 md:border-6 border-black hover:bg-cyan-500 transition-colors uppercase tracking-wide text-base md:text-xl"
            style={{
              fontWeight: "700",
              boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)",
            }}
          >
            {t('faq.title')}
          </button>
          {/* Pink burst decoration */}
          <div className="hidden md:block absolute -right-[60px] -top-9 w-24 h-18 pointer-events-none rotate-[30deg]">
            <Group />
          </div>
        </div>
      </div>

      <h2
        className="text-center text-black mb-6 md:mb-8 uppercase tracking-wide relative z-10 px-4"
        style={{ fontWeight: "700", fontSize: "24px" }}
      >
        {t('faq.subtitle')}
      </h2>

      <div className="space-y-4 max-w-4xl mx-4 md:mx-auto relative z-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-full border-4 border-black overflow-hidden transition-all duration-300"
            style={{
              boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)",
              borderRadius: openIndex === index ? "32px" : "9999px",
            }}
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span
                className="text-black uppercase tracking-wide text-xs md:text-sm"
                style={{ fontWeight: "400" }}
              >
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 md:w-6 md:h-6 text-black transition-transform duration-300 flex-shrink-0 ml-2 md:ml-4 ${
                  openIndex === index
                    ? "transform rotate-180"
                    : ""
                }`}
                strokeWidth={3}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className="px-4 md:px-8 pb-4 text-black text-xs md:text-sm"
                  style={{ fontWeight: "400" }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}