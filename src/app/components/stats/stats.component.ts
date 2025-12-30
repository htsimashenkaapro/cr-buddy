import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DottedBackgroundComponent } from '../shared/dotted-background/dotted-background.component';

interface Stat {
  value: string;
  label: string;
  color: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, DottedBackgroundComponent],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  hoveredIndex: number | null = null;

  stats: Stat[] = [
    { value: '500+', label: 'Zorgverstrekkers', color: '#FF1493' },
    { value: '2.000+', label: 'Matches gemaakt', color: '#4ADE80' },
    { value: '<2h', label: 'Response tijd', color: '#FCD34D' },
    { value: '98%', label: 'Kwaliteitscore', color: '#2DD4BF' }
  ];

  getStatStyle(stat: Stat, index: number) {
    return {
      'color': stat.color,
      'letter-spacing': '0.02em',
      'line-height': '1',
      'font-weight': '700'
    };
  }

  getTransform(index: number) {
    return this.hoveredIndex === index ? 'scale(1.05)' : 'scale(1)';
  }

  setHoveredIndex(index: number | null) {
    this.hoveredIndex = index;
  }
}



