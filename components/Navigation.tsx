import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { label: t("nav.whatIsIt"), href: "#wat-is-het" },
    { label: t("nav.howItWorks"), href: "#hoe-werkt-het" },
    { label: t("nav.forWhom"), href: "#voor-wie" },
    { label: t("nav.protected"), href: "#beschermd" },
    { label: t("nav.faq"), href: "#faq" },
    { label: t("nav.support"), href: "#support" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Account for fixed nav height
      const elementPosition =
        element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const scrollToTop = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <a
            href="#top"
            onClick={scrollToTop}
            className="uppercase tracking-wide cursor-pointer hover:opacity-80 transition-opacity"
            style={{ fontWeight: "700", fontSize: "18px" }}
          >
            Care Buddy
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-4 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors uppercase tracking-wide text-sm"
                style={{ fontWeight: "400" }}
              >
                {item.label}
              </a>
            ))}
            {/* Language Switcher */}
            <button
              onClick={() =>
                setLanguage(language === "nl" ? "en" : "nl")
              }
              className="ml-2 px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2 border-2 border-black"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" strokeWidth={2.5} />
              <span
                className="uppercase text-sm"
                style={{ fontWeight: "700" }}
              >
                {language === "nl" ? "NL" : "EN"}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() =>
                setLanguage(language === "nl" ? "en" : "nl")
              }
              className="px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-1 border-2 border-black"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" strokeWidth={2.5} />
              <span
                className="uppercase text-xs"
                style={{ fontWeight: "700" }}
              >
                {language === "nl" ? "NL" : "EN"}
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" strokeWidth={3} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={3} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-black">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-3 text-black hover:bg-gray-100 transition-colors uppercase tracking-wide text-sm"
                style={{ fontWeight: "400" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}