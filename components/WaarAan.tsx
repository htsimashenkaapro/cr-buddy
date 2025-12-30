import { useState } from "react";
import Group from "../imports/Group";
import { DottedBackground } from "./DottedBackground";
import { useLanguage } from "../contexts/LanguageContext";

const categories = [
  { name: "Huishoudelijke hulp", color: "#FF6B9D" },
  { name: "Administratie", color: "#FFEB3B" },
  { name: "Boodschappen", color: "#2DD4BF" },
];

const items = [
  "Stofzuigen en dweilen",
  "Ramen wassen",
  "Badkamer schoonmaken",
  "Keuken schoonmaken",
  "Strijken",
  "Beddengoed verschonen",
];

export function WaarAan() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { t } = useLanguage();

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
            {t('forWhom.title')}
          </button>
          {/* Pink burst decoration */}
          <div className="hidden md:block absolute -right-[60px] -top-9 w-24 h-18 pointer-events-none rotate-[30deg]">
            <Group />
          </div>
        </div>
      </div>

      <p
        className="text-center text-[rgb(0,0,0)] mb-6 max-w-md mx-4 md:mx-auto px-4 text-[32px]"
        style={{ fontWeight: "700" }}
      >
        {t('forWhom.subtitle')}
      </p>

      <div className="grid md:grid-cols-3 gap-6 mx-4 md:mx-8 lg:mx-[100px] my-[0px] relative z-10">
        {/* ZORGVRAGERS */}
        <div
          className="bg-white rounded-2xl border-4 border-black p-4 md:p-6 flex flex-col"
          style={{
            boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)",
          }}
        >
          <div
            className="mb-3 md:mb-4 px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black bg-[#FF6B9D] text-center uppercase text-sm md:text-base"
            style={{
              fontWeight: "700",
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)",
            }}
          >
            {t('forWhom.careRecipients.title')}
          </div>
          <p className="text-sm md:text-base mb-4 text-center md:h-[120px]" style={{ fontWeight: "700" }}>
            {t('forWhom.careRecipients.desc')}
          </p>
          <div className="space-y-2">
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black text-center text-xs md:text-sm" style={{ fontWeight: "700" }}>
              {t('forWhom.careRecipients.item1')}
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black text-center text-xs md:text-sm" style={{ fontWeight: "700" }}>
              {t('forWhom.careRecipients.item2')}
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black text-center text-xs md:text-sm" style={{ fontWeight: "700" }}>
              {t('forWhom.careRecipients.item3')}
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black text-center text-xs md:text-sm" style={{ fontWeight: "700" }}>
              {t('forWhom.careRecipients.item4')}
            </div>
          </div>
        </div>

        {/* ORGANISATIES */}
        <div
          className="bg-white rounded-2xl border-4 border-black p-4 md:p-6 flex flex-col"
          style={{
            boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)",
          }}
        >
          <div
            className="mb-3 md:mb-4 px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black bg-[#FFEB3B] text-center uppercase text-sm md:text-base"
            style={{
              fontWeight: "700",
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)",
            }}
          >
            {t('forWhom.organizations.title')}
          </div>
          <p className="text-sm md:text-base mb-4 text-center md:h-[120px]" style={{ fontWeight: "700" }}>
            {t('forWhom.organizations.desc')}
          </p>
          <div className="space-y-2">
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black text-center text-xs md:text-sm" style={{ fontWeight: "700" }}>
              {t('forWhom.organizations.item1')}
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black text-center text-xs md:text-sm" style={{ fontWeight: "700" }}>
              {t('forWhom.organizations.item2')}
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black text-center text-xs md:text-sm" style={{ fontWeight: "700" }}>
              {t('forWhom.organizations.item3')}
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black text-center text-xs md:text-sm" style={{ fontWeight: "700" }}>
              {t('forWhom.organizations.item4')}
            </div>
          </div>
        </div>

        {/* ZORGVERLENER */}
        <div
          className="bg-white rounded-2xl border-4 border-black p-4 md:p-6 flex flex-col"
          style={{
            boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)",
          }}
        >
          <div
            className="mb-3 md:mb-4 px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black bg-[#2DD4BF] text-center uppercase text-sm md:text-base"
            style={{
              fontWeight: "700",
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)",
            }}
          >
            {t('forWhom.careProviders.title')}
          </div>
          <p className="text-sm md:text-base mb-4 text-center md:h-[120px]" style={{ fontWeight: "700" }}>
            {t('forWhom.careProviders.desc')}
          </p>
          <div className="space-y-2">
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black text-center text-xs md:text-sm" style={{ fontWeight: "700" }}>
              {t('forWhom.careProviders.item1')}
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black text-center text-xs md:text-sm" style={{ fontWeight: "700" }}>
              {t('forWhom.careProviders.item2')}
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black text-center text-xs md:text-sm" style={{ fontWeight: "700" }}>
              {t('forWhom.careProviders.item3')}
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-black text-center text-xs md:text-sm" style={{ fontWeight: "700" }}>
              {t('forWhom.careProviders.item4')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}