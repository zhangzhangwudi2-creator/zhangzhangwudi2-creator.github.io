import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <footer id="contact" className="bg-ink text-paper py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/15">
          <div className="space-y-3 max-w-lg">
            <div className="text-xs font-mono text-paper/60">04 / CONTACT</div>
            <h2 className="font-serif text-2xl sm:text-3xl text-paper">
              寻找 2026–2027 年 AI 应用开发 / 测试开发实习机会
            </h2>
            <p className="text-sm text-paper/70">
              {PERSONAL_INFO.educationShort} · {PERSONAL_INFO.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-paper text-ink text-sm font-medium hover:bg-paper/90 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-[#285334]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? '已复制邮箱' : PERSONAL_INFO.contacts.email}</span>
            </button>
            <a
              href={PERSONAL_INFO.contacts.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-white/25 text-paper text-sm hover:border-white/60 transition-colors"
            >
              <span>简历 PDF</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-white/25 text-paper text-sm hover:border-white/60 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-paper/50">
          <span>{PERSONAL_INFO.name} · 电话 {PERSONAL_INFO.contacts.phone}</span>
          <span>更新于 2026-11 · React + TypeScript + Vite</span>
        </div>
      </div>
    </footer>
  );
};
