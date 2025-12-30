import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  nl: {
    // Navigation
    'nav.whatIsIt': 'wat is het?',
    'nav.howItWorks': 'Hoe werkt het?',
    'nav.forWhom': 'Voor wie?',
    'nav.protected': '100% beschermd',
    'nav.faq': 'FAQ',
    'nav.support': 'Support',
    
    // Hero
    'hero.tagline': 'De snelste weg naar betrouwbare zorg!',
    'hero.seekCare': 'IK ZOEK ZORG',
    'hero.giveCare': 'IK GEEF ZORG',
    
    // Stats
    'stats.professionals': 'Professionals',
    'stats.matches': 'Matches',
    'stats.satisfaction': 'Tevredenheid',
    
    // What is it
    'whatIsIt.title': 'Wat is het?',
    'whatIsIt.card1': 'Care Buddy\'s is een onafhankelijk en neutraal platform dat zorgvragen in de thuisverpleging snel en betrouwbaar verbindt met beschikbare, gekwalificeerde verpleegkundigen.',
    'whatIsIt.card2': 'We bouwen aan een sterk digitaal netwerk van zelfstandige thuisverpleegkundigen en maken het organiseren van zorg eenvoudiger, efficiënter en toegankelijker voor iedereen die ondersteuning nodig heeft.',
    'whatIsIt.card3': 'Ons doel is helder: een vlot en gebruiksvriendelijk systeem aanbieden dat onmiddellijk de juiste zorgverlener koppelt aan de juiste zorgvraag — of die nu komt van artsen, woonzorgcentra, sociale diensten of rechtstreeks van zorgvragers.',
    'whatIsIt.card4': 'Omdat we volledig onafhankelijk werken, zonder commerciële belangen in specifieke zorgorganisaties, garandeert Care Buddy\'s altijd een eerlijke, objectieve en transparante match. Zowel zorgvragers als zorgprofessionals kunnen rekenen op een betrouwbaar proces, vrij van beïnvloeding',
    'whatIsIt.card5': 'Daarnaast brengen we de beschikbaarheid, spreiding en actuele zorgnoden in de thuiszorg actief in kaart. Zo creëren we waardevolle inzichten die bijdragen aan een sterkere, beter georganiseerde en toekomstgerichte thuiszorgsector.',
    
    // How it works
    'howItWorks.title': 'Hoe werkt het?',
    'howItWorks.subtitle': '3 gemakkelijke stappen naar kwaliteitsvolle zorg!',
    'howItWorks.step1': 'Plaats aanvraag',
    'howItWorks.step2': 'Match wordt gemaakt',
    'howItWorks.step3': 'Zorg komt er aan',
    
    // For whom
    'forWhom.title': 'Voor wie?',
    'forWhom.subtitle': 'Gemaakt voor iedereen in het zorgsysteem!',
    'forWhom.careRecipients.title': 'Zorgvragers',
    'forWhom.careRecipients.desc': 'Maak zorgaanvragen eenvoudig aan en beheer ze. Specificeer regio, type zorg, frequentie, timing en urgentie. Kies uit voorgestelde zorgverleners of gebruik toewijzing op basis van volgorde van binnenkomst.',
    'forWhom.careRecipients.item1': 'Huisartsen & Ziekenhuizen',
    'forWhom.careRecipients.item2': 'Woonzorgcentra',
    'forWhom.careRecipients.item3': 'Sociale diensten en informele zorgers',
    'forWhom.careRecipients.item4': 'Patiënten en families',
    'forWhom.organizations.title': 'Organisaties',
    'forWhom.organizations.desc': 'Beheer instellingsprofielen en aanbiederslijsten. Gebruik het platform als een gestructureerd kanaal voor thuisverplegingsopdrachten.',
    'forWhom.organizations.item1': 'Woonzorgcentra',
    'forWhom.organizations.item2': 'Revalidatiecentra',
    'forWhom.organizations.item3': 'VAPH-organisaties',
    'forWhom.organizations.item4': 'Ziekenhuiskoepels',
    'forWhom.careProviders.title': 'Zorgverlener',
    'forWhom.careProviders.desc': 'Publiceer je beschikbaarheid, definieer je competenties en bekijk passende zorgaanvragen in jouw voorkeursregio\'s en tijdslots.',
    'forWhom.careProviders.item1': 'Zelfstandige verpleegkundigen',
    'forWhom.careProviders.item2': 'Zorgkundigen',
    'forWhom.careProviders.item3': 'Diensten voor verpleegkundigen',
    'forWhom.careProviders.item4': 'Flexibele planning',
    
    // Protection
    'protection.title': '100% beschermd',
    'protection.verification.title': 'Professionele verificatie',
    'protection.verification.desc': 'Riziv/inami-nummerverificatie via Cobrha voor alle Belgische zorgprofessionals. Profielen worden pas zichtbaar nadat de verificatie geslaagd is.',
    'protection.gdpr.title': 'Gegevensbescherming & GDPR',
    'protection.gdpr.subtitle': 'Volledige GDPR-naleving met robuuste gegevensbescherming:',
    'protection.gdpr.item1': 'Scheiding & encryptie van persoonlijk identificeerbare informatie (PII)',
    'protection.gdpr.item2': 'Consent-registratie en traceerbaarheid',
    'protection.gdpr.item3': 'Automatische verwijdering na 30 dagen',
    'protection.gdpr.item4': 'Gegevensopslag binnen België/EU',
    'protection.liability.title': 'Duidelijke aansprakelijkheidspositionering',
    'protection.liability.desc': 'Care Buddy fungeert als facilitator, niet als zorgverlener. Het expliciete aansprakelijkheidskader beschermt alle partijen en waarborgt transparantie.',
    
    // FAQ
    'faq.title': 'FAQ',
    'faq.subtitle': 'Frequently asked questions',
    'faq.q1': 'Hoe word ik gematcht met een zorgprofessional?',
    'faq.a1': 'Na het invullen van je zorgvraag zoekt ons algoritme naar professionals die passen bij jouw behoeften, locatie en voorkeuren.',
    'faq.q2': 'Zijn alle zorgprofessionals geverifieerd?',
    'faq.a2': 'Ja, alle professionals worden geverifieerd via RIZIV/INAMI-nummercontrole voordat ze zichtbaar worden op het platform.',
    'faq.q3': 'Wat kost het gebruik van Care Buddy?',
    'faq.a3': 'Voor patiënten is Care Buddy gratis. Zorgprofessionals betalen een klein bedrag per succesvolle match.',
    'faq.q4': 'Hoe wordt mijn privacy beschermd?',
    'faq.a4': 'We voldoen volledig aan GDPR-wetgeving met encryptie, consent-management en automatische gegevensverwijdering.',
    'faq.q5': 'Wie is verantwoordelijk voor de kwaliteit van de zorg?',
    'faq.a5': 'De zorgprofessional blijft volledig verantwoordelijk voor de geleverde zorg. Care Buddy fungeert als facilitator en matchingsplatform.',
    'faq.q6': 'Kan ik het platform op mijn mobiele telefoon gebruiken?',
    'faq.a6': 'Ja, het platform is volledig responsief en werkt op alle apparaten: smartphone, tablet en desktop.',
    'faq.q7': 'In welke talen is het platform beschikbaar?',
    'faq.a7': 'Het platform is beschikbaar in het Nederlands en Engels. We werken aan ondersteuning voor Frans.',
    
    // Footer
    'footer.question': 'Heb je nog steeds vragen?',
    'footer.terms': 'GEBRUIKS-VOORWAARDEN',
    'footer.privacy': 'PRIVACYBELEID',
    'footer.support': 'CONTACTEER SUPPORT',
    'footer.thanks': 'Bedankt voor je feedback! 🎉',
  },
  en: {
    // Navigation
    'nav.whatIsIt': 'what is it?',
    'nav.howItWorks': 'How it works?',
    'nav.forWhom': 'For whom?',
    'nav.protected': '100% protected',
    'nav.faq': 'FAQ',
    'nav.support': 'Support',
    
    // Hero
    'hero.tagline': 'The fastest way to reliable care!',
    'hero.seekCare': 'I SEEK CARE',
    'hero.giveCare': 'I GIVE CARE',
    
    // Stats
    'stats.professionals': 'Professionals',
    'stats.matches': 'Matches',
    'stats.satisfaction': 'Satisfaction',
    
    // What is it
    'whatIsIt.title': 'What is it?',
    'whatIsIt.card1': 'Care Buddy\'s is an independent and neutral platform that quickly and reliably connects home care requests with available, qualified nurses.',
    'whatIsIt.card2': 'We are building a strong digital network of independent home care nurses and making care organization easier, more efficient and accessible for everyone who needs support.',
    'whatIsIt.card3': 'Our goal is clear: to offer a smooth and user-friendly system that immediately connects the right care provider to the right care request — whether it comes from doctors, care homes, social services or directly from care seekers.',
    'whatIsIt.card4': 'Because we work completely independently, without commercial interests in specific care organizations, Care Buddy\'s always guarantees a fair, objective and transparent match. Both care seekers and care professionals can rely on a reliable process, free from influence',
    'whatIsIt.card5': 'In addition, we actively map the availability, distribution and current care needs in home care. This way we create valuable insights that contribute to a stronger, better organized and future-oriented home care sector.',
    
    // How it works
    'howItWorks.title': 'How it works?',
    'howItWorks.subtitle': '3 easy steps to quality care!',
    'howItWorks.step1': 'Place request',
    'howItWorks.step2': 'Match is made',
    'howItWorks.step3': 'Care is coming',
    
    // For whom
    'forWhom.title': 'For whom?',
    'forWhom.subtitle': 'Made for everyone in the care system!',
    'forWhom.careRecipients.title': 'Care Recipients',
    'forWhom.careRecipients.desc': 'Create and manage care requests easily. Specify region, type of care, frequency, timing and urgency. Choose from suggested care providers or use assignment based on order of arrival.',
    'forWhom.careRecipients.item1': 'General Practitioners & Hospitals',
    'forWhom.careRecipients.item2': 'Care Homes',
    'forWhom.careRecipients.item3': 'Social Services and Informal Caregivers',
    'forWhom.careRecipients.item4': 'Patients and Families',
    'forWhom.organizations.title': 'Organizations',
    'forWhom.organizations.desc': 'Manage institutional profiles and provider lists. Use the platform as a structured channel for home care assignments.',
    'forWhom.organizations.item1': 'Care Homes',
    'forWhom.organizations.item2': 'Rehabilitation Centers',
    'forWhom.organizations.item3': 'VAPH Organizations',
    'forWhom.organizations.item4': 'Hospital Umbrellas',
    'forWhom.careProviders.title': 'Care Provider',
    'forWhom.careProviders.desc': 'Publish your availability, define your competencies and view matching care requests in your preferred regions and time slots.',
    'forWhom.careProviders.item1': 'Independent Nurses',
    'forWhom.careProviders.item2': 'Care Workers',
    'forWhom.careProviders.item3': 'Nursing Services',
    'forWhom.careProviders.item4': 'Flexible Planning',
    
    // Protection
    'protection.title': '100% protected',
    'protection.verification.title': 'Professional verification',
    'protection.verification.desc': 'RIZIV/INAMI number verification via Cobrha for all Belgian healthcare professionals. Profiles only become visible after successful verification.',
    'protection.gdpr.title': 'Data protection & GDPR',
    'protection.gdpr.subtitle': 'Full GDPR compliance with robust data protection:',
    'protection.gdpr.item1': 'Separation & encryption of personally identifiable information (PII)',
    'protection.gdpr.item2': 'Consent registration and traceability',
    'protection.gdpr.item3': 'Automatic deletion after 30 days',
    'protection.gdpr.item4': 'Data storage within Belgium/EU',
    'protection.liability.title': 'Clear liability positioning',
    'protection.liability.desc': 'Care Buddy acts as a facilitator, not as a care provider. The explicit liability framework protects all parties and ensures transparency.',
    
    // FAQ
    'faq.title': 'FAQ',
    'faq.subtitle': 'Frequently asked questions',
    'faq.q1': 'Is the platform free for care seekers?',
    'faq.a1': 'Yes, for patients and care seekers Care Buddy is completely free. Only healthcare professionals pay a small fee per successful match.',
    'faq.q2': 'Is Care Buddy only for Belgium?',
    'faq.a2': 'Currently Care Buddy focuses on the Belgian market with RIZIV/INAMI verification. We are working on expansion to other countries.',
    'faq.q3': 'What data do you store, and for how long?',
    'faq.a3': 'We only store necessary data for matching. Personal information is automatically deleted after 30 days, in compliance with GDPR legislation.',
    'faq.q4': 'How are nurses verified?',
    'faq.a4': 'All nurses are verified via their RIZIV/INAMI number through Cobrha. Profiles only become active after successful verification.',
    'faq.q5': 'Who is responsible for the quality of care?',
    'faq.a5': 'The healthcare professional remains fully responsible for the care provided. Care Buddy acts as a facilitator and matching platform.',
    'faq.q6': 'Can I use the platform on my mobile phone?',
    'faq.a6': 'Yes, the platform is fully responsive and works on all devices: smartphone, tablet and desktop.',
    'faq.q7': 'In which languages is the platform available?',
    'faq.a7': 'The platform is available in Dutch and English. We are working on support for French.',
    
    // Footer
    'footer.question': 'Still have questions?',
    'footer.terms': 'TERMS OF USE',
    'footer.privacy': 'PRIVACY POLICY',
    'footer.support': 'CONTACT SUPPORT',
    'footer.thanks': 'Thank you for your feedback! 🎉',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('carebuddy-language');
    return (saved as Language) || 'nl';
  });

  useEffect(() => {
    localStorage.setItem('carebuddy-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.nl] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}