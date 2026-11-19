import React from 'react';
import { PERSONAL_INFO, SNAPSHOT_FACTS } from '../data/resumeData';
import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';

export const HeroBento: React.FC = () => {
  return (
    <section id="top" className="pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-muted mb-6">
          <span>00 / PORTFOLIO</span>
          <span>·</span>
          <span>{PERSONAL_INFO.availability}</span>
          <span>·</span>
          <span>{PERSONAL_INFO.location}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl leading-[1.22] tracking-tight text-ink max-w-3xl mb-6">
          做能跑起来的工具，
          <br />
          把踩过的坑和真实边界写清楚。
        </h1>

        <p className="text-base sm:text-[17px] text-muted max-w-2xl leading-relaxed mb-8">
          {PERSONAL_INFO.intro}
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-ink text-paper text-sm font-medium hover:bg-ink/85 transition-colors"
          >
            <span>查看 6 个项目演示</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.contacts.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md border border-hairline bg-surface text-ink text-sm font-medium hover:border-ink/40 transition-colors"
          >
            <span>下载一页简历 (PDF)</span>
            <ArrowUpRight className="w-4 h-4 text-muted" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.contacts.email}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm text-muted hover:text-ink transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{PERSONAL_INFO.contacts.email}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-hairline pt-8 gap-6">
          {SNAPSHOT_FACTS.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted">
                {item.label}
              </div>
              <div className="font-serif text-2xl font-medium text-ink">
                {item.value}
              </div>
              <div className="text-xs text-muted leading-snug">
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
