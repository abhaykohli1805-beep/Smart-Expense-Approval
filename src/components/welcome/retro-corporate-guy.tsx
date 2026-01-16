'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export default function RetroCorporateGuy() {
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const guyRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!guyRef.current) return;

      const { clientX, clientY } = event;
      const eye = guyRef.current.querySelector('#eyes-group');
      if (!eye) return;
      
      const { left, top, width, height } = eye.getBoundingClientRect();
      const eyeCenterX = left + width / 2;
      const eyeCenterY = top + height / 2;

      const deltaX = clientX - eyeCenterX;
      const deltaY = clientY - eyeCenterY;
      
      const maxPupilMove = 5;
      const angle = Math.atan2(deltaY, deltaX);
      
      const x = Math.cos(angle) * maxPupilMove;
      const y = Math.sin(angle) * maxPupilMove;

      setPupilPos({ x, y });
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <svg
      ref={guyRef}
      viewBox="0 0 400 400"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto max-w-[400px] md:max-w-[500px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="face-clip">
          <path d="M110 320 C 110 180, 290 180, 290 320 L 270 340 L 130 340 Z" />
        </clipPath>
        <clipPath id="hair-clip">
          <path d="M105,190 C100,150 150,130 200,135 S 300,150 295,190 H 105 Z" />
        </clipPath>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000" floodOpacity="0.2"/>
        </filter>
      </defs>
      
      {/* Body and Suit */}
      <g transform="translate(0, 100)" filter="url(#shadow)">
        <path d="M130,240 L 130,290 L 270,290 L 270,240 Q 200,280 130,240" fill="hsl(var(--foreground))" />
        <path d="M165,240 L 200,290 L 235,240" fill="hsl(var(--card))" />
        <path d="M200,290 L 190,310 L 210,310 Z" fill="hsl(var(--foreground))" />
        <path d="M130 240 C 160 220, 240 220, 270 240" fill="none" stroke="hsl(var(--border))" strokeWidth="4" />
      </g>

      {/* Head */}
      <g transform="translate(0, 10)" filter="url(#shadow)">
        <path d="M110 320 C 110 180, 290 180, 290 320 L 270 340 L 130 340 Z" fill="#F2D5B8" stroke="hsl(var(--foreground))" strokeWidth="4"/>
      </g>
      
      {/* Hair */}
      <g clipPath="url(#hair-clip)" transform="translate(0, 10)">
        <path d="M105,190 C100,150 150,130 200,135 S 300,150 295,190 H 105" fill="hsl(var(--foreground))"/>
        <path d="M115 155 C 130 150, 180 145, 200 150" stroke="hsl(var(--background))" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.3"/>
      </g>

      {/* Features */}
      <g clipPath="url(#face-clip)" transform="translate(0, 10)">
        {/* Eyes */}
        <g id="eyes-group" transform="translate(0, -20)">
            <ellipse cx="160" cy="225" rx="15" ry="20" fill="hsl(var(--card))" stroke="hsl(var(--foreground))" strokeWidth="2"/>
            <ellipse cx="240" cy="225" rx="15" ry="20" fill="hsl(var(--card))" stroke="hsl(var(--foreground))" strokeWidth="2"/>
            <g style={{ transition: 'transform 0.1s ease-out' }} transform={`translate(${pupilPos.x}, ${pupilPos.y})`}>
                <circle cx="160" cy="225" r="5" fill="hsl(var(--foreground))"/>
                <circle cx="240" cy="225" r="5" fill="hsl(var(--foreground))"/>
            </g>
        </g>
        
        {/* Mustache */}
        <path d="M140 260 C 160 250, 180 270, 200 270 S 240 250, 260 260 C 240 280, 160 280, 140 260" fill="hsl(var(--foreground))" />
        
        {/* Mouth */}
        <path d="M185,290 Q 200,295 215,290" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" strokeLinecap="round"/>

        {/* Glasses */}
        <g 
            id="glasses" 
            className={cn('transition-transform duration-500 ease-out', isScrolled ? 'translate-y-[-100px] rotate-[-15deg]' : 'translate-y-0 rotate-0')}
            style={{ transformOrigin: '200px 225px' }}
        >
            <circle cx="160" cy="225" r="22" fill="none" stroke="hsl(var(--foreground))" strokeWidth="5"/>
            <circle cx="240"cy="225" r="22" fill="none" stroke="hsl(var(--foreground))" strokeWidth="5"/>
            <path d="M182 225 H 218" stroke="hsl(var(--foreground))" strokeWidth="5"/>
            <path d="M138 225 L 110 215" stroke="hsl(var(--foreground))" strokeWidth="5" strokeLinecap="round"/>
        </g>
      </g>
    </svg>
  );
}
