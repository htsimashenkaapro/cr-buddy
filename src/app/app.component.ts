import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';
import { WatIsHetComponent } from './components/wat-is-het/wat-is-het.component';
import { HoeWerktHetComponent } from './components/hoe-werkt-het/hoe-werkt-het.component';
import { WaarAanComponent } from './components/waar-aan/waar-aan.component';
import { TransparantieComponent } from './components/transparantie/transparantie.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    HeroComponent,
    StatsComponent,
    WatIsHetComponent,
    HoeWerktHetComponent,
    WaarAanComponent,
    TransparantieComponent,
    FaqComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-gray-50">
      <app-navigation></app-navigation>
      <app-hero></app-hero>
      <div class="p-[0px]">
        <app-stats></app-stats>
        <div id="wat-is-het">
          <app-wat-is-het></app-wat-is-het>
        </div>
        <div id="hoe-werkt-het">
          <app-hoe-werkt-het></app-hoe-werkt-het>
        </div>
        <div id="voor-wie">
          <app-waar-aan></app-waar-aan>
        </div>
        <div id="beschermd">
          <app-transparantie></app-transparantie>
        </div>
        <div id="faq">
          <app-faq></app-faq>
        </div>
        <div id="support">
          <app-footer></app-footer>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'care-buddy-angular';
}








