import { useEffect, useRef } from 'react';

export function DottedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvas = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size to match container
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      
      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Comic book halftone settings
      const spacing = 16; // Distance between dot centers
      const maxRadius = 5; // Maximum dot radius
      const minRadius = 1; // Minimum dot radius
      
      // Draw halftone dots in regular grid with offset rows
      for (let row = 0; row < Math.ceil(rect.height / spacing) + 2; row++) {
        for (let col = 0; col < Math.ceil(rect.width / spacing) + 2; col++) {
          // Offset every other row for classic halftone pattern
          const offsetX = (row % 2) * (spacing / 2);
          const x = col * spacing + offsetX;
          const y = row * spacing;
          
          // Calculate radius based on vertical position
          // Small dots at top (highlights), large dots at bottom (shadows)
          const progress = y / rect.height;
          const radius = minRadius + (maxRadius - minRadius) * progress;
          
          // Draw dot with pink color and 20% opacity
          ctx.fillStyle = 'rgba(242, 111, 141, 0.2)';
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    updateCanvas();
    
    // Update on resize
    window.addEventListener('resize', updateCanvas);
    return () => window.removeEventListener('resize', updateCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}