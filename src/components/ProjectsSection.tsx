import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/resumeData';
import { ProjectDetail } from '../data/types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Play } from 'lucide-react';

interface ProjectsSectionProps {
  selectedProject: ProjectDetail | null;
  setSelectedProject: (p: ProjectDetail | null) => void;
}

const STATUS_STYLE: Record<ProjectDetail['status'], string> = {
  已落地: 'bg-[#EEF3EE] text-[#285334] border-[#D2E2D4]',
  个人工具: 'bg-[#F0EFEA] text-[#4A4945] border-[#DDDCD4]',
  阶段交接: 'bg-accent-soft text-accent border-[#E6CFC2]',
  开发中: 'bg-accent-soft text-accent border-[#E6CFC2]',
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedProject,
  setSelectedProject,
}) => {
  const [filter, setFilter] = useState<'all' | 'done' | 'wip'>('all');

  const filtered = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'done') return p.status === '已落地' || p.status === '个人工具';
    return p.status === '阶段交接' || p.status === '开发中';
  });

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-hairline">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono text-muted mb-2">01 / SELECTED WORK</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink tracking-tight">
              项目与运行实录
            </h2>
            <p className="text-sm text-muted mt-2 max-w-xl">
              所有展示均来自本地真实代码与屏幕实录。做完的标明实测数据，做到一半或仍在迭代的直接写清现状。
            </p>
          </div>

          <div className="inline-flex rounded-md border border-hairline bg-surface p-0.5 self-start">
            {[
              { id: 'all', label: `全部 (${PROJECTS_DATA.length})` },
              { id: 'done', label: '已落地 / 自用 (4)' },
              { id: 'wip', label: '交接 / 开发中 (2)' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as 'all' | 'done' | 'wip')}
                className={`px-3 py-1.5 text-xs rounded transition-colors ${
                  filter === tab.id
                    ? 'bg-ink text-paper font-medium'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="editorial-card overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left / Top: Large Real Screenshot or Video Demo */}
              <div
                onClick={() => setSelectedProject(project)}
                className="lg:col-span-7 bg-[#EFEDE7] border-b lg:border-b-0 lg:border-r border-hairline relative group cursor-pointer flex flex-col justify-between"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#E9E6DE] relative">
                  {project.media.type === 'video' ? (
                    <>
                      <video
                        src={project.media.src}
                        poster={project.media.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover object-top"
                      />
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-ink/75 text-paper text-[11px] font-mono backdrop-blur-sm">
                        <Play className="w-3 h-3 fill-current" />
                        DEMO VIDEO
                      </span>
                    </>
                  ) : (
                    <img
                      src={project.media.src}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="px-4 py-2.5 text-[11px] font-mono text-muted border-t border-hairline/80 bg-surface/60">
                  {project.media.caption}
                </div>
              </div>

              {/* Right / Bottom: Calm Editorial Description */}
              <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-muted">
                      {project.index} / {project.date}
                    </span>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded border font-medium ${STATUS_STYLE[project.status]}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-ink leading-snug mb-1.5">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-left hover:text-accent transition-colors"
                    >
                      {project.title}
                    </button>
                  </h3>

                  <p className="text-xs text-muted mb-4">{project.subtitle}</p>

                  <p className="text-sm text-ink/85 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  <div className="text-xs text-muted bg-paper px-3 py-2 rounded-md border border-hairline/80 mb-5">
                    <span className="font-medium text-ink">现状：</span>
                    {project.statusNote}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-paper border border-hairline text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-hairline flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent transition-colors"
                    >
                      <span>查看完整说明与边界</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {project.links?.[0] && (
                      <a
                        href={project.links[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-muted hover:text-ink transition-colors"
                      >
                        源码 ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
