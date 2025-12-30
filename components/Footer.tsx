import { useState } from "react";
import { DottedBackground } from "./DottedBackground";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const [selectedOption, setSelectedOption] = useState<
    string | null
  >(null);
  const { t } = useLanguage();

  const options = [
    { id: "terms", text: t("footer.terms"), color: "#FF6B9D" },
    {
      id: "privacy",
      text: t("footer.privacy"),
      color: "#FFEB3B",
    },
    {
      id: "support",
      text: t("footer.support"),
      color: "#2DD4BF",
    },
  ];

  return (
    <div className="text-center relative overflow-hidden pt-[10px] pr-[0px] pb-[40px] pl-[0px]">
      {/* Comic-style dotted background */}
      <DottedBackground />

      <p className="text-[rgb(0,0,0)] mb-6 text-[32px] font-bold relative z-10">
        {t("footer.question")}
      </p>

      <div className="flex justify-center gap-4 flex-wrap relative z-10">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              setSelectedOption(option.id);
              // Simulate feedback submission
              setTimeout(() => {
                alert(`${option.text}`);
              }, 100);
            }}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-black rounded-full translate-x-1.5 translate-y-1.5"></div>
            <div
              className="relative rounded-full px-6 py-3 border-4 border-black transition-transform group-hover:translate-x-1 group-hover:translate-y-1 flex items-center gap-3"
              style={{
                backgroundColor:
                  selectedOption === option.id
                    ? option.color
                    : option.color,
                letterSpacing: "0.05em",
                fontWeight: "700",
              }}
            >
              <span>{option.text}</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M8 16H24M24 16L18 10M24 16L18 22"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}