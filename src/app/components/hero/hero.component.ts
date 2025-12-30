import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  tagline = '';
  seekCare = '';
  giveCare = '';
  private destroy$ = new Subject<void>();

  // You would need to add these images to src/assets folder
  logoUrl = 'assets/logo.png';
  burstBackgroundUrl = 'assets/burst-background.png';

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.language$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateTranslations();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateTranslations() {
    this.tagline = this.languageService.t('hero.tagline');
    this.seekCare = this.languageService.t('hero.seekCare');
    this.giveCare = this.languageService.t('hero.giveCare');
  }

  openSeekCare() {
    window.open('https://www.google.com/', '_blank');
  }

  openGiveCare() {
    window.open('https://www.google.com/', '_blank');
  }
}








