import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DottedBackgroundComponent } from '../shared/dotted-background/dotted-background.component';
import { GroupComponent } from '../shared/group/group.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-wat-is-het',
  standalone: true,
  imports: [CommonModule, DottedBackgroundComponent, GroupComponent],
  templateUrl: './wat-is-het.component.html',
  styleUrls: ['./wat-is-het.component.css']
})
export class WatIsHetComponent implements OnInit, OnDestroy {
  title = '';
  cards: string[] = [];
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
    this.title = this.languageService.t('whatIsIt.title');
    this.cards = [
      this.languageService.t('whatIsIt.card1'),
      this.languageService.t('whatIsIt.card2'),
      this.languageService.t('whatIsIt.card3'),
      this.languageService.t('whatIsIt.card4'),
      this.languageService.t('whatIsIt.card5')
    ];
  }
}



