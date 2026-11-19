import { SkillCategory, TimelineItem } from './types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI 应用与原生桌面全栈',
    description: '深入模型原生协议与桌面图形渲染，打造高可靠性工程应用',
    skills: [
      { name: 'Python (FastAPI / ReportLab / Pydantic v2)', highlight: true },
      { name: 'PySide6 (DWM 逐像素透明 / QThread)', highlight: true },
      { name: 'Node.js / Express 4 + React 19 + TS', highlight: true },
      { name: 'OpenAI / DeepSeek / Gemini 故障转移路由', highlight: true },
      { name: 'Playwright CDP 旁路与状态持久恢复' },
      { name: 'Tesseract.js 浏览器 OCR 与 PDF 降级排版' }
    ]
  },
  {
    title: '多模态语音与 AIGC 管线',
    description: '打通声学克隆、语音识别、分镜调度与剪映草稿工程化闭环',
    skills: [
      { name: 'GPT-SoVITS 代理与 9888→9880 零显存热切', highlight: true },
      { name: 'Faster-Whisper 本地实时语音识别', highlight: true },
      { name: 'pyJianYingDraft 剪映草稿自动化', highlight: true },
      { name: 'rembg / ffmpeg 透明序列帧资产管线' },
      { name: 'SillyTavern 世界书与持久化记忆引擎' }
    ]
  },
  {
    title: 'Agent 评测与 4 层测试开发',
    description: '量化推理边界，构建黑盒回归、事实防篡改与确定性规则守门',
    skills: [
      { name: '4 层黑盒 E2E 与恶意反例防御测试', highlight: true },
      { name: 'fact_guard 实体防篡改 & XFF 防绕过限流', highlight: true },
      { name: '4×25 规则评测器与 evidence[] 证据溯源', highlight: true },
      { name: '原子化 Rubrics 评分矩阵 (25+ 条)' },
      { name: 'openpyxl 动态真值研制 (200+ 公式)' }
    ]
  },
  {
    title: '边缘网关与安全运维',
    description: '基于隧道穿透、回环收敛与数据滚动备份打造零暴露基础设施',
    skills: [
      { name: 'Cloudflare Pages / Tunnel (CF-Connecting-IP)', highlight: true },
      { name: 'NewAPI 异构路由与健康探活治理', highlight: true },
      { name: 'SQLite WAL / conn.backup 热备与双库隔离' },
      { name: '环境变量凭据隔离与日志正则脱敏' },
      { name: 'Git / Linux / PowerShell 自动化编排' }
    ]
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    period: '2026.07 - 2026.08',
    org: '杭州凯伦广告策划有限公司',
    role: 'AI 研发产品实习生',
    city: '杭州',
    badge: '企业级 AI 落地',
    highlights: [
      '以用户与测试视角参与海外达人聊天机器人业务，梳理 7 类标准对话场景、意向初筛逻辑与禁答红线，排查知识库边界缺口。',
      '参与数据字段校验与验收测试标准设计，跟踪缺陷从发现、定位到修复的全流程，沉淀可复用的测试检查用例。'
    ]
  },
  {
    period: '2023.09 - 2027.07',
    org: '长春科技学院',
    role: '数据科学与大数据技术 · 统招全日制本科（2027 届）',
    city: '长春',
    badge: '班级学习委员',
    highlights: [
      '主修课程：Python程序设计、数据库系统（SQL）、Linux操作系统、数据结构与算法、数据分析基础。',
      '华为 ICT 大赛省级一等奖（主导网络与算力方案规划）。',
      '全国全地形机器人设计竞赛省级二等奖、省级三等奖（负责上位机控制与传感数据流调试）。'
    ]
  }
];
