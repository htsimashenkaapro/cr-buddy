import logo from "figma:asset/30800917f8cc48afda576124e952fbfa1d74411a.png";
import burstBackground from "figma:asset/ba0386384dd64eadcc1260e011229e785c57eb86.png";
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <div className="text-center relative overflow-hidden h-[70vh] flex flex-col justify-center items-center mt-[80px]">
      {/* Radial burst background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${burstBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Logo */}
        <div className="relative inline-block">
          <img
            src={logo}
            alt="Care Buddy Logo"
            className="w-[500px] h-auto rounded-[0px] max-w-[90vw]"
          />
        </div>

        {/* Text */}
        <p className="text-[rgb(0,0,0)] max-w-md m-[0px] text-[32px] font-bold px-4">
          {t('hero.tagline')}
        </p>

        {/* Action buttons */}
        <div className="flex gap-6 justify-center items-center flex-wrap px-4">
          <button className="relative group cursor-pointer" onClick={() => window.open('https://www.google.com/', '_blank')}>
            <div className="absolute inset-0 bg-black rounded-2xl translate-x-1.5 translate-y-1.5"></div>
            <div className="relative bg-[#FF6B9D] rounded-2xl px-8 py-4 flex items-center gap-3 border-4 border-black transition-transform group-hover:translate-x-1 group-hover:translate-y-1">
              <span
                style={{
                  fontSize: "1.25rem",
                  letterSpacing: "0.05em",
                  fontWeight: "700",
                }}
              >
                {t('hero.seekCare')}
              </span>
              <svg
                width="32"
                height="32"
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

          <button className="relative group cursor-pointer" onClick={() => window.open('https://www.google.com/', '_blank')}>
            <div className="absolute inset-0 bg-black rounded-2xl translate-x-1.5 translate-y-1.5"></div>
            <div className="relative bg-[#2DD4BF] rounded-2xl px-8 py-4 flex items-center gap-3 border-4 border-black transition-transform group-hover:translate-x-1 group-hover:translate-y-1">
              <span
                style={{
                  fontSize: "1.25rem",
                  letterSpacing: "0.05em",
                  fontWeight: "700",
                }}
              >
                {t('hero.giveCare')}
              </span>
              <svg
                width="32"
                height="32"
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
        </div>
      </div>
    </div>
  );
}