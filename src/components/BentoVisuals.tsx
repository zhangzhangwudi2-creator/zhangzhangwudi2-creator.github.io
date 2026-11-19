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
            <span>Bass ODE S-Curve (R²=0.963)</span>
            <span className="text-capy-dark dark:text-nailong">vs Linear (0.41)</span>
          </div>
          <svg className="w-full h-12 overflow-visible" viewBox="0 0 200 45">
            {/* 传统线性回归虚线 */}
            <line x1="5" y1="40" x2="195" y2="8" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 3" />
            {/* Bass 扩散动力学 S 型曲线 */}
            <path d="M 5 42 C 55 42, 75 35, 105 18 C 135 3, 165 4, 195 3" fill="none" stroke="#FF922B" strokeWidth="3" strokeLinecap="round" />
            {/* 拐点 t1 与 t* 标注点 */}
            <circle cx="72" cy="31" r="3.5" fill="#FFD43B" stroke="#2C221E" strokeWidth="1.5" />
            <text x="62" y="23" className="text-[8px] font-mono fill-current font-bold">t₁起飞</text>
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
            <span className="font-bold text-coffee dark:text-nailong">ARGB32 · ~50MB RAM</span>
            <span className="px-1.5 py-0.2 rounded bg-matcha text-white font-black">92/92 PASS</span>
          </div>
          <div className="grid grid-cols-4 gap-1 text-[9px] text-center font-bold">
            {['TTS 16', '精灵 43', '窗口 14', '小游戏 19'].map((m) => (
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
            <span className="font-bold text-capy-dark dark:text-nailong">429 Failover + 脱敏</span>
            <span className="px-1.5 py-0.2 rounded bg-matcha text-white font-black">41/41 PASS</span>
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
        <div className="my-2.5 p-2.5 rounded-xl bg-oatmeal dark:bg-black/30 border-2 border-coffee/20 dark:border-white/10 space-y-1.5 font-mono text-[10px]">
          <div>
            <div className="flex justify-between font-black text-coffee dark:text-nailong mb-0.5">
              <span>🚀 本系统 (WebView2 + Bottle)</span>
              <span>13.7 MB (-92.6%)</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700 border border-coffee overflow-hidden">
              <div className="h-full bg-matcha w-[11%] rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-zinc-400 mb-0.5">
              <span>🐘 传统 Electron 桌面壳</span>
              <span>~185.0 MB</span>
            </div>
            <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
              <div className="h-full bg-zinc-400 w-[92%]"></div>
            </div>
          </div>
        </div>
      );

    case 'qa-coverage':
      return (
        <div className="my-2.5 p-2.5 rounded-xl bg-oatmeal dark:bg-black/30 border-2 border-coffee/20 dark:border-white/10 font-mono text-[10px]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-bold text-matcha">pytest: 169 passed in 4.12s</span>
            <span className="px-1.5 py-0.2 rounded bg-matcha text-white font-black">ALL GREEN</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 11 }).map((_, idx) => (
              <div key={idx} className="flex-1 h-2.5 rounded-sm bg-matcha border border-coffee/40" title={`子模块 #${idx + 1}: 契约与状态机测试通过`} />
            ))}
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
