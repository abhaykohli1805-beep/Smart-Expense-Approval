'use client';

import Image from 'next/image';

export default function RetroCorporateGuy() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-full">
      <Image
        src="https://picsum.photos/seed/corporateguy/500/500"
        alt="A placeholder image of a man. The requested character couldn't be used directly."
        fill
        style={{ objectFit: 'contain', objectPosition: 'bottom' }}
        data-ai-hint="man portrait"
      />
    </div>
  );
}
