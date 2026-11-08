import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/resumeData';
import { ProjectDetail } from '../data/types';
import { ProjectModal } from './ProjectModal';
import { Layers, ChevronRight, CheckCircle2, Cpu } from 'lucide-react';

type FilterCategory = 'all' | 'fullstack' | 'qa';

interface ProjectsSectionProps {
  selectedProject: ProjectDetail | null;
  setSelectedProject: (p: ProjectDetail | null) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedProject,
  setSelectedProject
}) => {
  const [activeTab, setActiveTab] = useState<FilterCategory>('all');

  const filteredProjects = PROJECTS_DATA.filter((item) => {
    if (activeTab === 'all') return true;
    return item.categories.includes(activeTab);
  });

  const fullstackCount = PROJECTS_DATA.filter((p) => p.categories.includes('fullstack')).length;
  const qaCount = PROJECTS_DATA.filter((p) => p.categories.includes('qa')).length;

  return (
    <section id="projects" className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* 区域标题与岗位视角过滤 Tab */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-capy-dark dark:text-nailong font-mono text-xs font-black uppercase tracking-wider mb-1.5">
              <Layers className="w-4 h-4" />
              <span>ARCHITECTURE & CASE STUDIES · 核心工程拆解</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-coffee dark:text-white">
              精选实战项目 ({filteredProjects.length} 项)
            </h2>
          </div>

          {/* 岗位视角切换器 */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-dark-surface border-2 border-coffee shadow-brutal-sm text-xs font-black">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'all'
                  ? 'bg-nailong text-coffee border-2 border-coffee shadow-brutal-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-coffee'
              }`}
            >
              全部项目 ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'fullstack'
                  ? 'bg-capy text-white border-2 border-coffee shadow-brutal-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-coffee'
              }`}
            >
              AI 全栈与边缘架构 ({fullstackCount})
            </button>
            <button
              onClick={() => setActiveTab('qa')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'qa'
                  ? 'bg-matcha text-white border-2 border-coffee shadow-brutal-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-coffee'
              }`}
            >
              测试开发与评测保障 ({qaCount})
            </button>
          </div>
        </div>

        {/* 项目窗口式贴纸卡片列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`sticker-card overflow-hidden cursor-pointer flex flex-col justify-between group ${
                index === 0 && activeTab === 'all' ? 'md:col-span-2' : ''
              }`}
            >
              {/* 顶部极客窗口栏 */}
              <div className="px-4 py-2.5 bg-nailong/45 dark:bg-zinc-800 border-b-2 border-coffee flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-coffee"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-nailong border border-coffee"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-matcha border border-coffee"></span>
                  <span className="ml-2 font-mono text-[11px] font-black text-coffee dark:text-zinc-200">
                    {project.role}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {project.categories.map((c, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-black border border-coffee ${
                        c === 'fullstack' ? 'bg-capy text-white' : 'bg-matcha text-white'
                      }`}
                    >
                      {c === 'fullstack' ? 'AI 全栈' : 'QA & 评测'}
                    </span>
                  ))}
                  <span className="text-[11px] font-mono font-bold text-zinc-600 dark:text-zinc-400">
                    {project.date}
                  </span>
                </div>
              </div>

              {/* 卡片主体内容 */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-coffee dark:text-white group-hover:text-capy transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-3.5 leading-relaxed font-medium">
                    {project.summary}
                  </p>

                  {/* 架构链路微缩预览条 */}
                  <div className="mb-4 p-2.5 rounded-xl bg-oatmeal dark:bg-black/25 border-2 border-coffee/20 dark:border-white/10">
                    <div className="flex items-center gap-1 text-[10px] font-mono font-black text-capy-dark dark:text-nailong mb-1.5">
                      <Cpu className="w-3 h-3" />
                      <span>核心架构链路 (点击展开完整方案)：</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono font-bold text-coffee dark:text-zinc-200">
                      {project.pipeline.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="px-2 py-0.5 rounded bg-white dark:bg-zinc-800 border border-coffee/40">
                            {step}
                          </span>
                          {sIdx < project.pipeline.length - 1 && (
                            <span className="text-capy font-black">➔</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* 核心量化成果 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {project.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 text-xs text-matcha dark:text-emerald-400 font-extrabold bg-emerald-500/10 border border-emerald-600/25 px-2.5 py-1.5 rounded-lg"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 底部技术栈标签与详情按钮 */}
                <div className="pt-3 border-t-2 border-dashed border-coffee/15 dark:border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 5).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-oatmeal dark:bg-zinc-800 text-coffee dark:text-zinc-300 border border-coffee/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-nailong text-coffee border-2 border-coffee shadow-brutal-sm text-xs font-black group-hover:bg-capy group-hover:text-white transition-colors">
                    <span>深度拆解 Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 详情弹窗 Modal */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
};
