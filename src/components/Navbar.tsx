import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Sun, Moon, FileDown, ExternalLink } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  isGuguMode: boolean;
  setIsGuguMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  darkMode, 
  setDarkMode,
  isGuguMode,
  setIsGuguMode
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-coffee bg-oatmeal/90 dark:bg-dark-surface/90 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / 奶龙贴纸头像 */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-nailong border-2 border-coffee shadow-brutal-sm overflow-hidden flex items-center justify-center group-hover:rotate-6 transition-transform">
            <img src="/stickers/nailong_true_1.jpg" alt="奶龙" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-sm text-coffee dark:text-zinc-100 flex items-center gap-1">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-capy text-white font-mono border border-coffee shadow-[1px_1px_0px_#2C221E]">
                {isGuguMode ? '咕嘎级全栈' : 'AI Engineer'}
              </span>
            </span>
            <span className="text-[10px] text-zinc-500 font-mono">2027 届本科 · 统招大数据</span>
          </div>
        </a>

        {/* 导航锚点链接 */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-coffee dark:text-zinc-300">
          <a href="#about" className="hover:text-capy-dark dark:hover:text-nailong transition-colors">关于我</a>
          <a href="#metrics" className="hover:text-capy-dark dark:hover:text-nailong transition-colors">核心看板</a>
          <a href="#projects" className="hover:text-capy-dark dark:hover:text-nailong transition-colors">精选项目 (5)</a>
          <a href="#experience" className="hover:text-capy-dark dark:hover:text-nailong transition-colors">经历与荣誉</a>
          <a href="#contact" className="hover:text-capy-dark dark:hover:text-nailong transition-colors">联系方式</a>
        </nav>

        {/* 右侧动作按钮区 */}
        <div className="flex items-center gap-2">
          {/* 咕咕嘎嘎模式 vs 正经模式 切换按钮 */}
          <button
            onClick={() => setIsGuguMode(!isGuguMode)}
            className="px-2.5 py-1.5 rounded-xl border-2 border-coffee text-xs font-bold shadow-brutal-sm transition-all hover:-translate-y-0.5 active:translate-y-0.5 bg-nailong text-coffee flex items-center gap-1.5"
            title="切换咕咕嘎嘎/正经模式"
          >
            <span>{isGuguMode ? '🧠 咕咕嘎嘎' : '👔 正经模式'}</span>
          </button>

          {/* 深浅色模式切换 */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-xl border-2 border-coffee text-coffee dark:text-zinc-100 bg-white dark:bg-dark-surface shadow-brutal-sm hover:-translate-y-0.5 transition-all"
            aria-label="切换深浅主题"
          >
            {darkMode ? <Sun className="w-4 h-4 text-nailong" /> : <Moon className="w-4 h-4 text-capy" />}
          </button>

          {/* 飞书作品集链接 */}
          <a
            href={PERSONAL_INFO.contacts.feishu}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-xl border-2 border-coffee bg-white dark:bg-zinc-800 text-coffee dark:text-zinc-100 shadow-brutal-sm hover:-translate-y-0.5 transition-all"
          >
            <span>飞书</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* 高亮 CTA：下载简历 */}
          <a
            href={PERSONAL_INFO.contacts.resumePdf}
            download="张凡_AI全栈开发与Agent评测_简历.pdf"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black rounded-xl border-2 border-coffee bg-capy text-white shadow-brutal-sm hover:-translate-y-0.5 transition-all hover:bg-capy-dark"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>下载简历</span>
          </a>
        </div>
      </div>
    </header>
  );
};
