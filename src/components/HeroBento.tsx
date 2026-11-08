import React from 'react';
import { PERSONAL_INFO, CORE_METRICS } from '../data/resumeData';
import { CapybaraWidget } from './CapybaraWidget';
import { BentoVisual } from './BentoVisuals';
import { ArrowRight, Sparkles, Award, MapPin } from 'lucide-react';

interface HeroBentoProps {
  isGuguMode: boolean;
  onSelectProjectById: (projectId: string) => void;
}

export const HeroBento: React.FC<HeroBentoProps> = ({ isGuguMode, onSelectProjectById }) => {
  const handleMetricClick = (targetId?: string) => {
    if (!targetId) return;
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      onSelectProjectById(targetId);
    }, 280);
  };

  return (
    <section id="about" className="pt-8 pb-14 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* 首屏主体：左侧个人定位 + 右侧拍立得动态贴纸机 */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            {/* 求职状态与目标城市胶囊 */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nailong text-coffee border-2 border-coffee shadow-brutal-sm text-xs font-black">
                <span className="w-2.5 h-2.5 rounded-full bg-matcha animate-ping"></span>
                <span>2027 届本科在读 · 可随时到岗实习 (4~6个月)</span>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white dark:bg-dark-surface text-coffee dark:text-zinc-200 border-2 border-coffee shadow-brutal-sm text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 text-capy" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-coffee dark:text-white mb-3 leading-tight">
              你好，我是{' '}
              <span className="px-2.5 py-0.5 rounded-2xl bg-nailong text-coffee border-2 border-coffee shadow-brutal-sm inline-block -rotate-1">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            <p className="text-base sm:text-lg font-extrabold text-capy-dark dark:text-nailong mb-3">
              {PERSONAL_INFO.title}
            </p>

            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium bg-white/70 dark:bg-dark-surface/70 p-3.5 rounded-2xl border-2 border-coffee/20 dark:border-white/10">
              🎓 <strong>{PERSONAL_INFO.subtitle}</strong>。{PERSONAL_INFO.bio}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-coffee bg-capy hover:bg-capy-dark text-white text-xs sm:text-sm font-black shadow-brutal transition-all hover:-translate-y-0.5"
              >
                <span>查看 5 大实战项目与架构图</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-coffee bg-white dark:bg-dark-surface text-coffee dark:text-zinc-100 text-xs sm:text-sm font-bold shadow-brutal transition-all hover:-translate-y-0.5"
              >
                <Award className="w-4 h-4 text-capy" />
                <span>华为 ICT 省一等奖 & 履历</span>
              </a>
            </div>
          </div>

          {/* 右侧：拍立得真图动态贴纸机 / 工程遥测卡 */}
          <div className="shrink-0">
            <CapybaraWidget isGuguMode={isGuguMode} />
          </div>
        </div>

        {/* Bento Grid: 5 大核心工程指标看板 (带真实微缩可视化图表) */}
        <div id="metrics" className="pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-capy" />
              <h2 className="text-xs sm:text-sm font-black tracking-wider text-coffee dark:text-zinc-200 uppercase font-mono">
                BENTO ENGINEERING TELEMETRY · 5 大核心量化指标看板
              </h2>
            </div>
            <span className="text-xs font-extrabold text-capy-dark dark:text-nailong">
              👆 点击任意卡片直接弹出对应项目的系统架构与 Case Study
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {CORE_METRICS.map((metric, index) => {
              const colSpanClass =
                index < 3 ? 'md:col-span-2 lg:col-span-4' : 'md:col-span-3 lg:col-span-6';

              return (
                <div
                  key={metric.id}
                  onClick={() => handleMetricClick(metric.targetProjectId)}
                  className={`sticker-card p-5 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${colSpanClass}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-nailong text-coffee border-2 border-coffee font-black shadow-[2px_2px_0px_#2C221E]">
                        {metric.badge}
                      </span>
                      <span className="text-xs text-capy font-mono font-black group-hover:translate-x-1 transition-transform">
                        查看架构 ➔
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <div className="text-2xl sm:text-3xl font-black text-coffee dark:text-white tracking-tight font-mono group-hover:text-capy transition-colors">
                        {metric.value}
                      </div>
                      <div className="text-xs sm:text-sm font-extrabold text-coffee dark:text-zinc-200">
                        {metric.label}
                      </div>
                    </div>

                    {/* 内嵌微缩可视化图表 */}
                    <BentoVisual metricId={metric.id} />

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3 font-medium">
                      {metric.description}
                    </p>
                  </div>

                  {/* 底部模式切换批注 */}
                  <div className="pt-2 border-t-2 border-dashed border-coffee/15 dark:border-white/10 text-[11px] font-bold text-coffee dark:text-nailong bg-nailong/25 dark:bg-black/25 px-2.5 py-1.5 rounded-lg">
                    {isGuguMode ? metric.funComment : metric.seriousComment}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
