import React, { useState } from 'react';
import { Sparkles, Terminal, ShieldCheck, Activity, RefreshCw } from 'lucide-react';

const QUOTES = [
  '🦫 噜噜认证：Bass 方程拟合 R² > 0.96，稳如老豚！',
  '🦖 奶龙大肚皮 vs 我的 13.7MB 极简小体积！',
  '🍊 只要情绪像水豚一样稳定，上游 429 熔断就追不上我！',
  '🐧 咕咕嘎嘎！精神状态与 169 项 pytest 一样全绿 🟢',
  '🦫 豚门永存！无惧网络抖动，双模穿透稳如泰山！'
];

type MascotTab = 'lulu' | 'nailong' | 'guga';

const MASCOT_IMAGES: Record<MascotTab, [string, string]> = {
  lulu: ['/stickers/lulu_1.jpg', '/stickers/lulu_2.jpg'],
  nailong: ['/stickers/nailong_true_1.jpg', '/stickers/nailong_true_2.jpg'],
  guga: ['/stickers/guga_1.jpg', '/stickers/guga_2.jpg']
};

interface CapybaraWidgetProps {
  isGuguMode: boolean;
}

export const CapybaraWidget: React.FC<CapybaraWidgetProps> = ({ isGuguMode }) => {
  const [activeTab, setActiveTab] = useState<MascotTab>('lulu');
  const [poseIdx, setPoseIdx] = useState(0);
  const [orangeCount, setOrangeCount] = useState(1);
  const [currentQuote, setCurrentQuote] = useState(QUOTES[0]);
  const [isWobble, setIsWobble] = useState(false);

  const triggerFeedOrange = () => {
    setOrangeCount((prev) => (prev >= 8 ? 1 : prev + 1));
    setPoseIdx((prev) => (prev + 1) % 2);
    const nextQuote = QUOTES[(orangeCount + 1) % QUOTES.length];
    setCurrentQuote(nextQuote);
    setIsWobble(true);
    setTimeout(() => setIsWobble(false), 350);
  };

  if (!isGuguMode) {
    return (
      <div className="w-72 sm:w-80 sticker-card p-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b-2 border-[#2C221E]/20 pb-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-[#2C221E]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD43B] border border-[#2C221E]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#2B8A3E] border border-[#2C221E]"></span>
            <span className="ml-1 font-black">SYS_TELEMETRY.sh</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-[#2B8A3E] text-white font-bold text-[10px]">ONLINE</span>
        </div>
        <div className="space-y-2.5 text-[11px]">
          <div className="flex justify-between items-center p-2 rounded-lg bg-[#FFFDF7] dark:bg-black/30 border border-[#2C221E]/30">
            <span className="text-zinc-500 flex items-center gap-1"><Activity className="w-3.5 h-3.5 text-[#F76707]" /> Bass ODE Fit</span>
            <span className="font-black">R² = 0.963 (NLS)</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg bg-[#FFFDF7] dark:bg-black/30 border border-[#2C221E]/30">
            <span className="text-zinc-500 flex items-center gap-1"><Terminal className="w-3.5 h-3.5 text-[#2B8A3E]" /> Edge Gateway</span>
            <span className="font-black text-[#2B8A3E]">10 Ch · 178ms RTT</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg bg-[#FFFDF7] dark:bg-black/30 border border-[#2C221E]/30">
            <span className="text-zinc-500 flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#F76707]" /> Pytest & Gate</span>
            <span className="font-black">169/169 PASS (100%)</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center select-none w-72 sm:w-80">
      {/* 顶部纸胶带装饰 */}
      <div className="w-28 h-5 bg-[#FFD43B] border-2 border-[#2C221E] rotate-[-2deg] -mb-2.5 z-20 shadow-brutal-sm flex items-center justify-center">
        <span className="text-[10px] font-mono font-black tracking-widest text-[#2C221E]">COZY GEEK · 2027</span>
      </div>

      {/* 拍立得贴纸主机 */}
      <div className={`w-full sticker-card p-3.5 transition-transform ${isWobble ? 'scale-105 -rotate-1' : 'rotate-[1deg]'}`}>
        {/* 角色频道切换栏 */}
        <div className="flex items-center justify-between gap-1 mb-2.5 bg-[#FFFDF7] dark:bg-zinc-900 p-1 rounded-xl border-2 border-[#2C221E]">
          <button
            onClick={() => { setActiveTab('lulu'); setPoseIdx(0); }}
            className={`flex-1 py-1 rounded-lg text-[11px] font-black transition-all ${activeTab === 'lulu' ? 'bg-capy shadow-brutal-sm' : 'text-zinc-500 hover:text-zinc-800'}`}
          >
            🦫 水豚噜噜
          </button>
          <button
            onClick={() => { setActiveTab('nailong'); setPoseIdx(0); }}
            className={`flex-1 py-1 rounded-lg text-[11px] font-black transition-all ${activeTab === 'nailong' ? 'bg-nailong shadow-brutal-sm' : 'text-zinc-500 hover:text-zinc-800'}`}
          >
            🦖 奶龙本龙
          </button>
          <button
            onClick={() => { setActiveTab('guga'); setPoseIdx(0); }}
            className={`flex-1 py-1 rounded-lg text-[11px] font-black transition-all ${activeTab === 'guga' ? 'bg-matcha shadow-brutal-sm' : 'text-zinc-500 hover:text-zinc-800'}`}
          >
            🐧 咕咕嘎嘎
          </button>
        </div>

        {/* 拍立得画框视窗 (6张100%纯净无水印3D大图) */}
        <div 
          onClick={triggerFeedOrange}
          className="relative w-full h-52 rounded-xl border-2 border-[#2C221E] overflow-hidden bg-[#FFFDF7] cursor-pointer group"
          title="点击画面投喂橘子并切换动作！"
        >
          <img 
            src={MASCOT_IMAGES[activeTab][poseIdx]} 
            alt={activeTab}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* 画面右上角：高对比度叠橘子计数器 */}
          <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-[#FFD43B] text-[#2C221E] border-2 border-[#2C221E] shadow-brutal-sm text-xs font-black flex items-center gap-1">
            <span>{'🍊'.repeat(Math.min(orangeCount, 4))}</span>
            <span>×{orangeCount}</span>
          </div>

          {/* 画面底部高对比度悬浮交互栏 */}
          <div className="absolute bottom-2 inset-x-2 px-2.5 py-1 rounded-lg bg-[#2C221E]/90 text-[#FFD43B] border border-[#FFD43B]/40 text-[11px] font-extrabold flex items-center justify-between">
            <span>👆 点画面投喂橘子 + 换造型 ({poseIdx + 1}/2)</span>
            <RefreshCw className="w-3.5 h-3.5 shrink-0" />
          </div>
        </div>

        {/* 拍立得底部手写风语录区 */}
        <div className="mt-2.5 pt-1 flex items-start gap-1.5">
          <Sparkles className="w-4 h-4 text-[#F76707] shrink-0 mt-0.5" />
          <p className="text-xs font-extrabold leading-snug">
            {currentQuote}
          </p>
        </div>
      </div>
    </div>
  );
};
