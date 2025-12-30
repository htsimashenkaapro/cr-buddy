import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DottedBackgroundComponent } from '../shared/dotted-background/dotted-background.component';
import { GroupComponent } from '../shared/group/group.component';
import { Subject, takeUntil } from 'rxjs';

interface Buddy {
  name: string;
  color: string;
  icon: string;
  image: string;
}

@Component({
  selector: 'app-hoe-werkt-het',
  standalone: true,
  imports: [CommonModule, DottedBackgroundComponent, GroupComponent],
  templateUrl: './hoe-werkt-het.component.html',
  styleUrls: ['./hoe-werkt-het.component.css']
})
export class HoeWerktHetComponent implements OnInit, OnDestroy {
  title = '';
  subtitle = '';
  buddies: Buddy[] = [];
  selectedBuddy: number | null = null;
  private destroy$ = new Subject<void>();

  // You would need to add these images to src/assets folder
  firstBlockImage = 'assets/first-block.png';
  secondBlockImage = 'assets/second-block.png';
  thirdBlockImage = 'assets/third-block.png';

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
    this.title = this.languageService.t('howItWorks.title');
    this.subtitle = this.languageService.t('howItWorks.subtitle');
    this.buddies = [
      {
        name: this.languageService.t('howItWorks.step1'),
        color: '#FF6B9D',
        icon: '📋',
        image: this.firstBlockImage
      },
      {
        name: this.languageService.t('howItWorks.step2'),
        color: '#FFEB3B',
        icon: '✨',
        image: this.secondBlockImage
      },
      {
        name: this.languageService.t('howItWorks.step3'),
        color: '#2DD4BF',
        icon: '🏡',
        image: this.thirdBlockImage
      }
    ];
  }

  setSelectedBuddy(index: number | null) {
    this.selectedBuddy = index;
  }
}



