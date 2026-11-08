import React from 'react';
import { SKILL_CATEGORIES, TIMELINE_ITEMS } from '../data/resumeData';
import { Briefcase, GraduationCap, Cpu, Check } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-14 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* 1. 核心技术栈矩阵 */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-capy-dark dark:text-nailong font-mono text-xs font-black uppercase tracking-wider mb-1.5">
            <Cpu className="w-4 h-4" />
            <span>TECHNICAL PROFICIENCY · 核心技术栈与工具链</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-coffee dark:text-white mb-8">
            专长技能矩阵
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="sticker-card p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-black text-coffee dark:text-white mb-1">{cat.title}</h3>
                  <p className="text-[11px] text-zinc-500 mb-3 leading-relaxed">{cat.description}</p>
                  <ul className="space-y-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-1.5 text-xs">
                        <Check className={`w-3.5 h-3.5 ${skill.highlight ? 'text-capy' : 'text-zinc-400'}`} />
                        <span className={skill.highlight ? 'text-coffee dark:text-zinc-100 font-extrabold' : 'text-zinc-500 dark:text-zinc-400 font-medium'}>
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 经历与时间轴 */}
        <div>
          <div className="flex items-center gap-2 text-capy-dark dark:text-nailong font-mono text-xs font-black uppercase tracking-wider mb-1.5">
            <Briefcase className="w-4 h-4" />
            <span>EXPERIENCE & TIMELINE · 经历与教育背景</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-coffee dark:text-white mb-8">
            履历轨迹
          </h2>

          <div className="relative border-l-2 border-coffee dark:border-coffee-light ml-3 sm:ml-4 space-y-6">
            {TIMELINE_ITEMS.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* 节点原点图标 */}
                <div className="absolute -left-3.5 top-1 w-7 h-7 rounded-xl bg-nailong border-2 border-coffee shadow-brutal-sm flex items-center justify-center text-coffee">
                  {idx === 0 ? <Briefcase className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
                </div>

                <div className="sticker-card p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-coffee px-2 py-0.5 rounded-md bg-nailong border border-coffee shadow-brutal-sm">
                      {item.period}
                    </span>
                    {item.badge && (
                      <span className="text-xs font-mono font-bold text-white px-2 py-0.5 rounded-md bg-capy border border-coffee shadow-brutal-sm">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-coffee dark:text-white mb-0.5">
                    {item.org}
                  </h3>
                  <div className="text-xs sm:text-sm font-bold text-capy-dark dark:text-nailong mb-3">
                    {item.role} {item.city ? `· ${item.city}` : ''}
                  </div>

                  <ul className="space-y-1.5">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2 leading-relaxed font-medium">
                        <span className="text-capy mt-0.5 font-black">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
