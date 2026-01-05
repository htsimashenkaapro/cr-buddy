import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DottedBackgroundComponent } from '../shared/dotted-background/dotted-background.component';
import { GroupComponent } from '../shared/group/group.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-transparantie',
  standalone: true,
  imports: [CommonModule, DottedBackgroundComponent, GroupComponent],
  templateUrl: './transparantie.component.html',
  styleUrls: ['./transparantie.component.css']
})
export class TransparantieComponent implements OnInit, OnDestroy {
  title = '';
  verification: any = {};
  gdpr: any = {};
  liability: any = {};
  readonly destroy$ = new Subject<void>();

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
    this.title = this.languageService.t('protection.title');
    
    this.verification = {
      title: this.languageService.t('protection.verification.title'),
      desc: this.languageService.t('protection.verification.desc')
    };

    this.gdpr = {
      title: this.languageService.t('protection.gdpr.title'),
      subtitle: this.languageService.t('protection.gdpr.subtitle'),
      items: [
        this.languageService.t('protection.gdpr.item1'),
        this.languageService.t('protection.gdpr.item2'),
        this.languageService.t('protection.gdpr.item3'),
        this.languageService.t('protection.gdpr.item4')
      ]
    };

    this.liability = {
      title: this.languageService.t('protection.liability.title'),
      desc: this.languageService.t('protection.liability.desc')
    };
  }
}



