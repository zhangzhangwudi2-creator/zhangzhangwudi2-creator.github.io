import React, { useEffect, useId, useRef } from 'react';
import { ProjectDetail } from '../data/types';
import { X, ArrowUpRight, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const pointerDownOutsideRef = useRef(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [project]);

  const isOutside = (dialog: HTMLDialogElement, x: number, y: number) => {
    const r = dialog.getBoundingClientRect();
    return x < r.left || x > r.right || y < r.top || y > r.bottom;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog || 'closedBy' in HTMLDialogElement.prototype) return;
    pointerDownOutsideRef.current = e.target === dialog && isOutside(dialog, e.clientX, e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog || 'closedBy' in HTMLDialogElement.prototype) return;
    if (pointerDownOutsideRef.current && e.target === dialog && isOutside(dialog, e.clientX, e.clientY)) {
      dialog.close();
    }
    pointerDownOutsideRef.current = false;
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      {...({ closedby: 'any' } as Record<string, string>)}
      onClose={onClose}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className="project-dialog m-auto w-[min(94vw,52rem)] max-h-[90vh] bg-surface text-ink border border-hairline rounded-xl shadow-2xl p-0 overflow-hidden"
    >
      {project && (
        <div className="flex flex-col max-h-[90vh]">
          <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-hairline bg-paper">
            <div>
              <div className="text-xs font-mono text-muted mb-1">
                {project.index} · {project.date} · {project.role} · {project.status}
              </div>
              <h3 id={titleId} className="font-serif text-xl sm:text-2xl text-ink">
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="关闭弹窗"
              className="p-2 rounded-md border border-hairline bg-surface text-muted hover:text-ink transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto space-y-6">
            <figure className="rounded-lg overflow-hidden border border-hairline bg-[#EFEDE7]">
              {project.media.type === 'video' ? (
                <video
                  src={project.media.src}
                  poster={project.media.poster}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-h-[420px] object-contain bg-ink/5"
                />
              ) : (
                <img
                  src={project.media.src}
                  alt={project.title}
                  className="w-full max-h-[440px] object-contain bg-surface"
                />
              )}
              <figcaption className="px-4 py-2 text-xs font-mono text-muted border-t border-hairline bg-paper">
                {project.media.caption}
              </figcaption>
            </figure>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-3">
                具体做了什么
              </h4>
              <ul className="space-y-2.5 text-sm text-ink/90 leading-relaxed">
                {project.whatIDid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-xs font-mono text-muted mt-1">{String(idx + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-accent-soft/70 border border-[#E6CFC2] text-sm">
              <div className="flex items-center gap-1.5 font-medium text-accent mb-1">
                <AlertCircle className="w-4 h-4" />
                <span>客观现状与未完成边界</span>
              </div>
              <p className="text-ink/85 leading-relaxed">{project.honestLimits}</p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-2.5">
                主要技术与工具
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-paper border border-hairline text-ink/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(project.links?.length || project.privateRepoNote) && (
              <div className="pt-4 border-t border-hairline flex flex-wrap items-center justify-between gap-3">
                {project.privateRepoNote && (
                  <p className="text-xs text-muted">{project.privateRepoNote}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.links?.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-ink text-paper text-xs font-medium hover:bg-ink/85 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
};
