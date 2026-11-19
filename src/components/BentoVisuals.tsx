import React from 'react';

interface BentoVisualProps {
  metricId: string;
}

export const BentoVisual: React.FC<BentoVisualProps> = ({ metricId }) => {
  switch (metricId) {
    case 'thesis-bass-r2':
      return (
        <div className="my-2.5 p-2.5 rounded-xl bg-oatmeal dark:bg-black/30 border-2 border-coffee/20 dark:border-white/10">
          <div className="flex justify-between text-[10px] font-mono font-bold text-zinc-500 mb-1">
            <span>Bass TRF (≥6期熔断) · 40组面板</span>
            <span className="text-capy-dark dark:text-nailong">1,705卖家 · 双库隔离</span>
          </div>
          <svg className="w-full h-12 overflow-visible" viewBox="0 0 200 45">
            <line x1="5" y1="40" x2="195" y2="8" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 3" />
            <path d="M 5 42 C 55 42, 75 35, 105 18 C 135 3, 165 4, 195 3" fill="none" stroke="#FF922B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="72" cy="31" r="3.5" fill="#FFD43B" stroke="#2C221E" strokeWidth="1.5" />
            <text x="58" y="23" className="text-[8px] font-mono fill-current font-bold">≥6期拐点</text>
            <circle cx="115" cy="13" r="3.5" fill="#2B8A3E" stroke="#2C221E" strokeWidth="1.5" />
            <text x="108" y="7" className="text-[8px] font-mono fill-current font-bold">t*峰值</text>
          </svg>
        </div>
      );

    case 'tavern-channels':
      return (
        <div className="my-2.5 p-2.5 rounded-xl bg-oatmeal dark:bg-black/30 border-2 border-coffee/20 dark:border-white/10 font-mono text-[10px]">
          <div className="flex justify-between font-bold text-zinc-500 mb-1.5">
            <span>DeepSeek 773ms + 4×Gemini</span>
            <span className="text-matcha">TTS LRU 14ms · 76/76</span>
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {['DS主力', 'G14', 'G15', 'G20', 'G21'].map((tag, idx) => (
              <div
                key={tag}
                className={`py-1 rounded border border-coffee text-[9px] font-black text-center ${
                  idx === 0 ? 'bg-nailong text-coffee' : 'bg-matcha/90 text-white'
                }`}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      );

    case 'lulu-pet-qa':
      return (
        <div className="my-2.5 p-2.5 rounded-xl bg-oatmeal dark:bg-black/30 border-2 border-coffee/20 dark:border-white/10 font-mono text-[10px]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-bold text-coffee dark:text-nailong">ARGB32 · 9888→9880热切</span>
            <span className="px-1.5 py-0.2 rounded bg-matcha text-white font-black">146 TESTS</span>
          </div>
          <div className="grid grid-cols-4 gap-1 text-[9px] text-center font-bold">
            {['TTS隔离', '精灵43', '窗口14', '核心92全绿'].map((m) => (
              <div key={m} className="py-1 rounded bg-white dark:bg-zinc-800 border border-coffee/40">
                {m}
              </div>
            ))}
          </div>
        </div>
      );

    case 'novel-video-flow':
      return (
        <div className="my-2.5 p-2.5 rounded-xl bg-oatmeal dark:bg-black/30 border-2 border-coffee/20 dark:border-white/10 font-mono text-[10px]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-bold text-capy-dark dark:text-nailong">40单元 + 41E2E · 27.21s</span>
            <span className="px-1.5 py-0.2 rounded bg-matcha text-white font-black">81/81 PASS</span>
          </div>
          <div className="flex items-center justify-between gap-1 text-[9px] font-bold">
            {['剧本', '拆镜', 'Flow', '剪映'].map((step, i) => (
              <React.Fragment key={step}>
                <span className="flex-1 text-center py-0.5 rounded bg-white dark:bg-zinc-800 border border-coffee/40">{step}</span>
                {i < 3 && <span className="text-capy font-black">➔</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      );

    case 'desktop-size':
      return (
        <div className="my-2.5 p-2.5 rounded-xl bg-oatmeal dark:bg-black/30 border-2 border-coffee/20 dark:border-white/10 font-mono text-[10px]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-bold text-coffee dark:text-nailong">FastAPI + ReportLab CI</span>
            <span className="px-1.5 py-0.2 rounded bg-matcha text-white font-black">63/63 PASS</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[9px] text-center font-bold">
            {['fact_guard', '最右XFF限流', '无照422拦'].map((g) => (
              <div key={g} className="py-1 rounded bg-white dark:bg-zinc-800 border border-coffee/40">
                {g}
              </div>
            ))}
          </div>
        </div>
      );

    case 'qa-coverage':
      return (
        <div className="my-2.5 p-2.5 rounded-xl bg-oatmeal dark:bg-black/30 border-2 border-coffee/20 dark:border-white/10 font-mono text-[10px]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-bold text-matcha">094b0ac 去伪指标 · node:test 2/2</span>
            <span className="px-1.5 py-0.2 rounded bg-matcha text-white font-black">可复现</span>
          </div>
          <div className="grid grid-cols-2 gap-1 text-[9px] text-center font-bold">
            <div className="py-1 rounded bg-white dark:bg-zinc-800 border border-coffee/40">4×25分 + evidence[]</div>
            <div className="py-1 rounded bg-nailong/80 text-coffee border border-coffee/40">200+ 公式 / 25+ 卡</div>
          </div>
        </div>
      );

    case 'rubrics-eval':
      return (
        <div className="my-2.5 p-2.5 rounded-xl bg-oatmeal dark:bg-black/30 border-2 border-coffee/20 dark:border-white/10 font-mono text-[10px] flex items-center justify-between gap-2">
          <div className="px-2 py-1 rounded bg-white dark:bg-zinc-800 border border-coffee font-bold text-coffee dark:text-zinc-200">
            📊 200+ 动态公式真值
          </div>
          <span className="text-capy font-black">➔</span>
          <div className="px-2 py-1 rounded bg-nailong border border-coffee font-black text-coffee">
            ⚖️ ±1% 容差 & 一票否决
          </div>
        </div>
      );

    default:
      return null;
  }
};
