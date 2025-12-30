import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DottedBackgroundComponent } from '../shared/dotted-background/dotted-background.component';
import { GroupComponent } from '../shared/group/group.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-waar-aan',
  standalone: true,
  imports: [CommonModule, DottedBackgroundComponent, GroupComponent],
  templateUrl: './waar-aan.component.html',
  styleUrls: ['./waar-aan.component.css']
})
export class WaarAanComponent implements OnInit, OnDestroy {
  title = '';
  subtitle = '';
  careRecipients: any = {};
  organizations: any = {};
  careProviders: any = {};
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
    this.title = this.languageService.t('forWhom.title');
    this.subtitle = this.languageService.t('forWhom.subtitle');
    
    this.careRecipients = {
      title: this.languageService.t('forWhom.careRecipients.title'),
      desc: this.languageService.t('forWhom.careRecipients.desc'),
      items: [
        this.languageService.t('forWhom.careRecipients.item1'),
        this.languageService.t('forWhom.careRecipients.item2'),
        this.languageService.t('forWhom.careRecipients.item3'),
        this.languageService.t('forWhom.careRecipients.item4')
      ]
    };

    this.organizations = {
      title: this.languageService.t('forWhom.organizations.title'),
      desc: this.languageService.t('forWhom.organizations.desc'),
      items: [
        this.languageService.t('forWhom.organizations.item1'),
        this.languageService.t('forWhom.organizations.item2'),
        this.languageService.t('forWhom.organizations.item3'),
        this.languageService.t('forWhom.organizations.item4')
      ]
    };

    this.careProviders = {
      title: this.languageService.t('forWhom.careProviders.title'),
      desc: this.languageService.t('forWhom.careProviders.desc'),
      items: [
        this.languageService.t('forWhom.careProviders.item1'),
        this.languageService.t('forWhom.careProviders.item2'),
        this.languageService.t('forWhom.careProviders.item3'),
        this.languageService.t('forWhom.careProviders.item4')
      ]
    };
  }
}



