import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Mail, Phone, ExternalLink, Copy, Check, Eye } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-4 h-4 text-coffee dark:text-zinc-200" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showPhone, setShowPhone] = useState(false);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <footer id="contact" className="border-t-2 border-coffee bg-oatmeal dark:bg-dark-oat pt-14 pb-12 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mb-10">
          <div className="inline-block px-2.5 py-0.5 rounded-md bg-nailong text-coffee border border-coffee font-mono font-black text-xs mb-2">
            LET'S CONNECT · 期待探讨
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-coffee dark:text-white mb-2">
            聊聊 AI 落地、工程保障或实习机会 ☕
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
            随时欢迎就大模型应用落地、Agent 平台工程保障、自动化测试或实习岗位与我沟通。
          </p>
        </div>

        {/* 联系方式贴纸卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {/* 邮箱 */}
          <div className="sticker-card p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono font-bold mb-1">
                <Mail className="w-3.5 h-3.5 text-capy" />
                <span>电子邮箱</span>
              </div>
              <div className="text-xs font-bold text-coffee dark:text-zinc-100 break-all mb-3 font-mono">
                {PERSONAL_INFO.contacts.email}
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.contacts.email, 'email')}
              className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold border-2 border-coffee bg-white dark:bg-zinc-800 text-coffee dark:text-zinc-200 shadow-brutal-sm hover:-translate-y-0.5 transition-all"
            >
              {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-matcha" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'email' ? '已复制邮箱' : '复制邮箱'}</span>
            </button>
          </div>

          {/* 手机防爬保护 */}
          <div className="sticker-card p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono font-bold mb-1">
                <Phone className="w-3.5 h-3.5 text-capy" />
                <span>电话 (防爬保护)</span>
              </div>
              <div className="text-xs font-black text-coffee dark:text-zinc-100 font-mono mb-3">
                {showPhone ? PERSONAL_INFO.contacts.phoneRaw : PERSONAL_INFO.contacts.phoneMasked}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPhone(!showPhone)}
                className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-bold border-2 border-coffee bg-white dark:bg-zinc-800 text-coffee dark:text-zinc-200 shadow-brutal-sm hover:-translate-y-0.5 transition-all"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{showPhone ? '隐藏' : '解码'}</span>
              </button>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.contacts.phoneRaw, 'phone')}
                className="inline-flex items-center justify-center p-1.5 rounded-lg text-xs font-bold border-2 border-coffee bg-nailong text-coffee shadow-brutal-sm hover:-translate-y-0.5 transition-all"
                title="直接复制号码"
              >
                {copiedKey === 'phone' ? <Check className="w-3.5 h-3.5 text-matcha" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* GitHub */}
          <div className="sticker-card p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono font-bold mb-1">
                <GithubIcon />
                <span>GitHub 仓库</span>
              </div>
              <div className="text-xs font-mono font-bold text-coffee dark:text-zinc-200 truncate mb-3">
                @zhangzhangwudi2
              </div>
            </div>
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold border-2 border-coffee bg-white dark:bg-zinc-800 text-coffee dark:text-zinc-200 shadow-brutal-sm hover:-translate-y-0.5 transition-all"
            >
              <span>主页仓库</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* 飞书作品集 */}
          <div className="sticker-card p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono font-bold mb-1">
                <ExternalLink className="w-3.5 h-3.5 text-capy" />
                <span>飞书作品集</span>
              </div>
              <div className="text-xs font-mono font-bold text-coffee dark:text-zinc-200 truncate mb-3">
                lcn240mx3b00.feishu.cn
              </div>
            </div>
            <a
              href={PERSONAL_INFO.contacts.feishu}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-black border-2 border-coffee bg-nailong hover:bg-nailong-dark text-coffee shadow-brutal-sm hover:-translate-y-0.5 transition-all"
            >
              <span>进入作品集</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="pt-6 border-t-2 border-coffee/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-zinc-500 gap-2">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. 奶龙水豚贴纸风 · 稳如老豚 🦫🦖
          </div>
          <div className="font-mono text-zinc-500">
            Deployed on Cloudflare Pages / Vercel
          </div>
        </div>
      </div>
    </footer>
  );
};
