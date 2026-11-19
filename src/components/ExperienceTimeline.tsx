import React from 'react';
import { EXPERIENCE_ITEMS, SKILL_GROUPS } from '../data/resumeData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <>
      <section id="experience" className="py-16 sm:py-24 border-b border-hairline">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs font-mono text-muted mb-2">02 / EXPERIENCE &amp; EDUCATION</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink tracking-tight">
              实习与教育背景
            </h2>
          </div>

          <div className="space-y-12">
            {EXPERIENCE_ITEMS.map((item) => (
              <div
                key={item.org}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-10 border-b border-hairline last:border-b-0 last:pb-0"
              >
                <div className="md:col-span-4 space-y-1">
                  <div className="text-xs font-mono text-muted">{item.period}</div>
                  <h3 className="font-serif text-xl text-ink">{item.org}</h3>
                  <div className="text-sm text-muted">
                    {item.role} · {item.city}
                  </div>
                </div>

                <div className="md:col-span-8 space-y-4">
                  <p className="text-sm text-ink/90 leading-relaxed">{item.summary}</p>
                  <ul className="space-y-2.5 text-sm text-ink/85 leading-relaxed">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-muted mt-1">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {item.visual && (
                    <figure className="mt-4 rounded-lg overflow-hidden border border-hairline bg-surface">
                      <img
                        src={item.visual.src}
                        alt={item.visual.caption}
                        loading="lazy"
                        className="w-full max-h-[380px] object-cover object-top"
                      />
                      <figcaption className="px-4 py-2 text-xs font-mono text-muted border-t border-hairline bg-paper">
                        {item.visual.caption}
                      </figcaption>
                    </figure>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 sm:py-20 border-b border-hairline bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <div className="text-xs font-mono text-muted mb-2">03 / TOOLKIT</div>
            <h2 className="font-serif text-2xl sm:text-3xl text-ink tracking-tight">
              常用技术栈与工具
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="space-y-3">
                <h3 className="text-sm font-medium text-ink pb-2 border-b border-hairline">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-paper border border-hairline text-ink/85"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
