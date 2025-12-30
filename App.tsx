import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { WatIsHet } from './components/WatIsHet';
import { HoeWerktHet } from './components/HoeWerktHet';
import { WaarAan } from './components/WaarAan';
import { Transparantie } from './components/Transparantie';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Hero />
        <div className="p-[0px]">
          <Stats />
          <div id="wat-is-het">
            <WatIsHet />
          </div>
          <div id="hoe-werkt-het">
            <HoeWerktHet />
          </div>
          <div id="voor-wie">
            <WaarAan />
          </div>
          <div id="beschermd">
            <Transparantie />
          </div>
          <div id="faq">
            <FAQ />
          </div>
          <div id="support">
            <Footer />
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}