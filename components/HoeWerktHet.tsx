import { useState } from "react";
import Group from "../imports/Group";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import firstBlockImage from "figma:asset/76d59315edda09b0c9cd6b86339d8fcbb8d90bce.png";
import secondBlockImage from "figma:asset/c1b56e422e7e6dfb13e1a9f5c089a04643e54863.png";
import thirdBlockImage from "figma:asset/16c59ae60614230e34767ab9722b8973454cb93c.png";
import { DottedBackground } from "./DottedBackground";
import { useLanguage } from "../contexts/LanguageContext";

export function HoeWerktHet() {
  const [selectedBuddy, setSelectedBuddy] = useState<number | null>(null);
  const { t } = useLanguage();

  const buddies = [
    {
      name: t('howItWorks.step1'),
      color: "#FF6B9D",
      icon: "📋",
      image: firstBlockImage,
    },
    {
      name: t('howItWorks.step2'),
      color: "#FFEB3B",
      icon: "✨",
      image: secondBlockImage,
    },
    {
      name: t('howItWorks.step3'),
      color: "#2DD4BF",
      icon: "🏡",
      image: thirdBlockImage,
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
            {t('howItWorks.title')}
          </button>
          {/* Pink burst decoration */}
          <div className="hidden md:block absolute -right-[60px] -top-9 w-24 h-18 pointer-events-none rotate-[30deg]">
            <Group />
          </div>
        </div>
      </div>

      <p className="flex justify-center text-center text-[rgb(0,0,0)] mb-[24px] max-w-md mx-4 md:mx-auto px-4 text-[32px] mt-[0px] mr-[0px] ml-[0px] font-bold">
        {t('howItWorks.subtitle')}
      </p>

      <div className="grid md:grid-cols-3 gap-6 mx-4 md:mx-8 lg:mx-[100px] my-[0px] relative z-10">
        {buddies.map((buddy, index) => (
          <div
            key={index}
            className="transition-all duration-300"
            onClick={() => setSelectedBuddy(index)}
            onMouseEnter={() => setSelectedBuddy(index)}
            onMouseLeave={() => setSelectedBuddy(null)}
          >
            <div
              className={`bg-white rounded-2xl border-4 border-black p-4 md:p-6 text-center transition-all duration-300 ${
                selectedBuddy === index ? "-translate-y-2" : ""
              }`}
              style={{
                boxShadow:
                  selectedBuddy === index
                    ? "8px 8px 0px 0px rgba(0, 0, 0, 1)"
                    : "6px 6px 0px 0px rgba(0, 0, 0, 1)",
              }}
            >
              <div
                className="w-32 h-40 md:w-40 md:h-48 mx-auto mb-4 rounded-2xl border-4 border-black flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: buddy.color }}
              >
                <ImageWithFallback
                  src={buddy.image}
                  alt={buddy.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm md:text-base border-2 border-black"
                style={{
                  backgroundColor: buddy.color,
                  fontWeight: "700",
                }}
              >
                {buddy.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}