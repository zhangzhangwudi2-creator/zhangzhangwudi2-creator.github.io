import React, { useEffect } from 'react';
import { ProjectDetail } from '../data/types';
import { X, ExternalLink, CheckCircle2, AlertCircle, Cpu, Calendar, User, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-dark-surface border-[2.5px] border-coffee dark:border-coffee-light p-6 sm:p-8 shadow-[8px_8px_0px_#2C221E] dark:shadow-[8px_8px_0px_#000000] text-coffee dark:text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 顶部标题与关闭按钮 */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-coffee/10 dark:border-white/10 pb-4 mb-5">
          <div>
            <div className="flex items-center gap-2 text-xs text-capy-dark dark:text-nailong font-mono font-bold mb-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.date}</span>
              <span>·</span>
              <User className="w-3.5 h-3.5" />
              <span>{project.role}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-coffee dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl border-2 border-coffee text-coffee dark:text-zinc-100 bg-nailong hover:bg-nailong-dark shadow-brutal-sm transition-all"
            aria-label="关闭详情"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 0. 可视化横向系统架构流转图 (Pipeline Diagram) */}
        {project.pipeline && project.pipeline.length > 0 && (
          <div className="mb-6 bg-oatmeal dark:bg-black/20 border-2 border-coffee/20 dark:border-white/10 rounded-xl p-3.5">
            <div className="text-[11px] font-mono font-black uppercase text-zinc-500 mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-capy" />
              <span>SYSTEM ARCHITECTURE PIPELINE · 系统架构流转图</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {project.pipeline.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-800 border-2 border-coffee text-xs font-bold shadow-brutal-sm text-coffee dark:text-zinc-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-capy"></span>
                    <span>{step}</span>
                  </div>
                  {idx < project.pipeline.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-capy shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* 1. 痛点背景 */}
        <div className="mb-5">
          <div className="flex items-center gap-2 text-capy-dark dark:text-nailong font-black text-sm mb-1.5">
            <AlertCircle className="w-4 h-4" />
            <span>痛点背景 (Pain Point)</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl leading-relaxed font-medium">
            {project.painPoint}
          </p>
        </div>

        {/* 2. 架构与工程方案 */}
        <div className="mb-5">
          <div className="flex items-center gap-2 text-coffee dark:text-zinc-100 font-black text-sm mb-2">
            <Cpu className="w-4 h-4 text-capy" />
            <span>架构与工程方案 (Engineering Solutions)</span>
          </div>
          <div className="space-y-2">
            {project.solution.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/60 p-2.5 rounded-lg border border-coffee/15 dark:border-white/5">
                <span className="text-capy font-mono font-black mt-0.5">{idx + 1}.</span>
                <span className="leading-relaxed font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 核心量化成果 */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-matcha dark:text-emerald-400 font-black text-sm mb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>量化成果指标 (Quantified Metrics)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-xs sm:text-sm text-matcha dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-3 py-2 rounded-lg font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-matcha"></span>
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. 技术栈 Tags 与 链接 */}
        <div className="pt-4 border-t-2 border-coffee/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((t, idx) => (
              <span key={idx} className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-oatmeal dark:bg-zinc-800 text-coffee dark:text-zinc-200 border border-coffee/30">
                {t}
              </span>
            ))}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="flex items-center gap-2">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold border-2 border-coffee bg-nailong text-coffee shadow-brutal-sm hover:-translate-y-0.5 transition-all"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
