import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { ArrowUpRight, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2.5 group">
          <span className="font-serif text-lg font-semibold tracking-tight text-ink">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-xs font-mono text-muted hidden sm:inline">
            {PERSONAL_INFO.englishName}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-muted">
          <a href="#projects" className="hover:text-ink transition-colors">项目作品</a>
          <a href="#experience" className="hover:text-ink transition-colors">实习与经历</a>
          <a href="#skills" className="hover:text-ink transition-colors">技术栈</a>
          <a href="#contact" className="hover:text-ink transition-colors">联系</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-muted hover:text-ink transition-colors"
          >
            GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={PERSONAL_INFO.contacts.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-ink text-paper text-xs font-medium hover:bg-ink/85 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>简历 PDF</span>
          </a>
        </div>
      </div>
    </header>
  );
};
