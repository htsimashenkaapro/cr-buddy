import Group from "../imports/Group";
import { DottedBackground } from "./DottedBackground";
import { useLanguage } from "../contexts/LanguageContext";

export function WatIsHet() {
  const { t } = useLanguage();
  
  const cards = [
    {
      text: t('whatIsIt.card1'),
    },
    {
      text: t('whatIsIt.card2'),
    },
    {
      text: t('whatIsIt.card3'),
    },
    {
      text: t('whatIsIt.card4'),
    },
    {
      text: t('whatIsIt.card5'),
    },
  ];

  return (
    <div className="mb-[0px] mt-[0px] mr-[0px] ml-[0px] border-b-4 border-black pb-8 relative overflow-hidden m-[0px]">
      {/* Comic-style dotted background */}
      <DottedBackground />
      <div className="flex justify-center mb-[24px] mt-[45px] mr-[0px] ml-[0px] relative z-10 mt-[55px]">
        <div className="relative inline-flex items-center">
          <button
            className="bg-[#2DD4BF] text-black px-12 py-4.5 rounded-full border-6 border-black hover:bg-cyan-500 transition-colors uppercase tracking-wide"
            style={{
              fontWeight: "700",
              boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)",
              fontSize: "24px",
            }}
          >
            {t('whatIsIt.title')}
          </button>
          {/* Pink burst decoration */}
          <div className="absolute -right-[60px] -top-9 w-24 h-18 pointer-events-none rotate-[30deg]">
            <Group />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mx-[0px] my-[10px] relative z-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl border-4 border-black hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc((100%-48px)/3)] md:max-w-[400px] flex items-center justify-center min-h-[200px]"
            style={{
              boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 1)",
            }}
          >
            <p className="text-center text-gray-700 text-lg">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}