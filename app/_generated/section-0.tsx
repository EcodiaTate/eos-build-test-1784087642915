// hero
import type { ReactElement } from 'react';

export interface HeroProps { title: string; tagline: string }

export default function Hero({ title, tagline }: HeroProps): ReactElement {
  return (
    <section data-eos-id="app/_generated/section-0.tsx#0" className="px-6 py-32 bg-emerald-950 text-emerald-50">
      <div data-eos-id="app/_generated/section-0.tsx#1" className="mx-auto max-w-4xl text-center">
        <h1 data-eos-id="app/_generated/section-0.tsx#2" className="text-5xl font-bold tracking-tight sm:text-6xl">{title}</h1>
        <p data-eos-id="app/_generated/section-0.tsx#3" className="mt-6 text-lg leading-8 text-emerald-200">{tagline}</p>
      </div>
    </section>
  );
}
