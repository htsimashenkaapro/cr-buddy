import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  isOpen = false;
  language: Language = 'nl';
  private destroy$ = new Subject<void>();
  
  menuItems: Array<{ label: string; href: string }> = [];

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.language$.pipe(takeUntil(this.destroy$)).subscribe(lang => {
      this.language = lang;
      this.updateMenuItems();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateMenuItems() {
    this.menuItems = [
      { label: this.languageService.t("nav.whatIsIt"), href: "#wat-is-het" },
      { label: this.languageService.t("nav.howItWorks"), href: "#hoe-werkt-het" },
      { label: this.languageService.t("nav.forWhom"), href: "#voor-wie" },
      { label: this.languageService.t("nav.protected"), href: "#beschermd" },
      { label: this.languageService.t("nav.faq"), href: "#faq" },
      { label: this.languageService.t("nav.support"), href: "#support" },
    ];
  }

  scrollToSection(event: Event, href: string) {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      this.isOpen = false;
    }
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.isOpen = false;
  }

  toggleLanguage() {
    const newLang: Language = this.language === 'nl' ? 'en' : 'nl';
    this.languageService.setLanguage(newLang);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}








