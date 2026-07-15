// services
import type { ReactElement } from 'react';

export interface ServicesProps {
  heading: string;
  intro: string;
  services: { title: string; description: string }[];
}

export default function Services({ heading, intro, services }: ServicesProps): ReactElement {
  return (
    <section data-eos-id="app/_generated/section-1.tsx#0" className="px-6 py-24 bg-stone-900 text-stone-50">
      <div data-eos-id="app/_generated/section-1.tsx#1" className="mx-auto max-w-5xl">
        <h2 data-eos-id="app/_generated/section-1.tsx#2" className="text-4xl font-semibold tracking-tight">{heading}</h2>
        <p data-eos-id="app/_generated/section-1.tsx#3" className="mt-4 max-w-2xl text-stone-300">{intro}</p>
        <ul data-eos-id="app/_generated/section-1.tsx#4" className="mt-12 grid gap-px overflow-hidden rounded-xl bg-stone-700 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li data-eos-id="app/_generated/section-1.tsx#5" key={s.title} className="bg-stone-900 p-8">
              <h3 data-eos-id="app/_generated/section-1.tsx#6" data-eos-var="s.title" data-eos-var-label="Title" data-eos-var-scope="item" className="text-xl font-medium text-emerald-400">{s.title}</h3>
              <p data-eos-id="app/_generated/section-1.tsx#7" data-eos-var="s.description" data-eos-var-label="Description" data-eos-var-scope="item" className="mt-3 text-sm leading-6 text-stone-400">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
