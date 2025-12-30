import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DottedBackgroundComponent } from '../shared/dotted-background/dotted-background.component';
import { Subject, takeUntil } from 'rxjs';

interface FooterOption {
  id: string;
  text: string;
  color: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, DottedBackgroundComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  question = '';
  options: FooterOption[] = [];
  selectedOption: string | null = null;
  private destroy$ = new Subject<void>();

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
    this.question = this.languageService.t('footer.question');
    
    this.options = [
      { 
        id: 'terms', 
        text: this.languageService.t('footer.terms'), 
        color: '#FF6B9D' 
      },
      {
        id: 'privacy',
        text: this.languageService.t('footer.privacy'),
        color: '#FFEB3B'
      },
      {
        id: 'support',
        text: this.languageService.t('footer.support'),
        color: '#2DD4BF'
      }
    ];
  }

  handleClick(option: FooterOption) {
    this.selectedOption = option.id;
    setTimeout(() => {
      alert(option.text);
    }, 100);
  }
}








