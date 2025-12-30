import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DottedBackgroundComponent } from '../shared/dotted-background/dotted-background.component';
import { GroupComponent } from '../shared/group/group.component';
import { Subject, takeUntil } from 'rxjs';

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, DottedBackgroundComponent, GroupComponent],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, OnDestroy {
  title = '';
  subtitle = '';
  faqs: FAQ[] = [];
  openIndex: number | null = null;
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
    this.title = this.languageService.t('faq.title');
    this.subtitle = this.languageService.t('faq.subtitle');
    
    this.faqs = [
      {
        question: this.languageService.t('faq.q1'),
        answer: this.languageService.t('faq.a1')
      },
      {
        question: this.languageService.t('faq.q2'),
        answer: this.languageService.t('faq.a2')
      },
      {
        question: this.languageService.t('faq.q3'),
        answer: this.languageService.t('faq.a3')
      },
      {
        question: this.languageService.t('faq.q4'),
        answer: this.languageService.t('faq.a4')
      },
      {
        question: this.languageService.t('faq.q5'),
        answer: this.languageService.t('faq.a5')
      },
      {
        question: this.languageService.t('faq.q6'),
        answer: this.languageService.t('faq.a6')
      },
      {
        question: this.languageService.t('faq.q7'),
        answer: this.languageService.t('faq.a7')
      }
    ];
  }

  toggleFaq(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}



