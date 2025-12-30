import Group from "../imports/Group";
import { DottedBackground } from "./DottedBackground";
import { useLanguage } from "../contexts/LanguageContext";

export function Transparantie() {
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
            {t('protection.title')}
          </button>
          {/* Pink burst decoration */}
          <div className="hidden md:block absolute -right-[60px] -top-9 w-24 h-18 pointer-events-none rotate-[30deg]">
            <Group />
          </div>
        </div>
      </div>

      <div className="space-y-6 max-w-4xl mx-4 md:mx-auto relative z-10">
        {/* PROFESSIONELE VERIFICATIE */}
        <div className="bg-white rounded-2xl md:rounded-3xl border-4 border-black p-4 md:p-8" style={{ boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)" }}>
          <div className="mb-3 md:mb-4 px-3 py-1.5 md:px-6 md:py-2 rounded-full border-2 border-black bg-[#FF6B9D] inline-block uppercase text-xs md:text-sm" style={{ 
            fontWeight: "700",
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)"
          }}>
            {t('protection.verification.title')}
          </div>
          <p className="text-black uppercase tracking-wide text-xs md:text-sm" style={{ fontWeight: "700" }}>
            {t('protection.verification.desc')}
          </p>
        </div>

        {/* GEGEVENSBESCHERMING & GDPR */}
        <div className="bg-white rounded-2xl md:rounded-3xl border-4 border-black p-4 md:p-8" style={{ boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)" }}>
          <div className="mb-3 md:mb-4 px-3 py-1.5 md:px-6 md:py-2 rounded-full border-2 border-black bg-[#FFEB3B] inline-block uppercase text-xs md:text-sm" style={{ 
            fontWeight: "700",
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)"
          }}>
            {t('protection.gdpr.title')}
          </div>
          <p className="text-black uppercase tracking-wide mb-3 md:mb-4 text-xs md:text-sm" style={{ fontWeight: "700" }}>
            {t('protection.gdpr.subtitle')}
          </p>
          <ul className="space-y-2 text-black uppercase tracking-wide text-xs md:text-sm" style={{ fontWeight: "700" }}>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span className="font-bold">{t('protection.gdpr.item1')}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span className="font-bold">{t('protection.gdpr.item2')}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span className="font-bold">{t('protection.gdpr.item3')}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span className="font-bold">{t('protection.gdpr.item4')}</span>
            </li>
          </ul>
        </div>

        {/* DUIDELIJKE AANSPRAKELIJKHEIDSPOSITIONERING */}
        <div className="bg-white rounded-2xl md:rounded-3xl border-4 border-black p-4 md:p-8" style={{ boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)" }}>
          <div className="mb-3 md:mb-4 px-3 py-1.5 md:px-6 md:py-2 rounded-full border-2 border-black bg-[#2DD4BF] inline-block uppercase text-xs md:text-sm" style={{ 
            fontWeight: "700",
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)"
          }}>
            {t('protection.liability.title')}
          </div>
          <p className="text-black uppercase tracking-wide text-xs md:text-sm" style={{ fontWeight: "700" }}>
            {t('protection.liability.desc')}
          </p>
        </div>
      </div>
    </div>
  );
}