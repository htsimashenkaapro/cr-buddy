import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dotted-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <canvas #canvas class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
  `
})
export class DottedBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private resizeListener?: () => void;

  ngAfterViewInit() {
    this.updateCanvas();
    
    this.resizeListener = () => this.updateCanvas();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  private updateCanvas() {
    const canvas = this.canvasRef.nativeElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    ctx.scale(dpr, dpr);
    
    ctx.clearRect(0, 0, rect.width, rect.height);
    
    const spacing = 16;
    const maxRadius = 5;
    const minRadius = 1;
    
    for (let row = 0; row < Math.ceil(rect.height / spacing) + 2; row++) {
      for (let col = 0; col < Math.ceil(rect.width / spacing) + 2; col++) {
        const offsetX = (row % 2) * (spacing / 2);
        const x = col * spacing + offsetX;
        const y = row * spacing;
        
        const progress = y / rect.height;
        const radius = minRadius + (maxRadius - minRadius) * progress;
        
        ctx.fillStyle = 'rgba(242, 111, 141, 0.2)';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}








