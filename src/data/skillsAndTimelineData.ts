import { ExperienceItem, SkillGroup } from './types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: '后端与 Web 开发',
    items: ['Python 3.12', 'FastAPI', 'Next.js / React', 'TypeScript', 'Node.js', 'SQLite WAL', 'ReportLab PDF'],
  },
  {
    title: '桌面工具与多媒体',
    items: ['PySide6 (DWM ARGB32)', 'Playwright 浏览器自动化', 'FFmpeg', 'Faster-Whisper', 'GPT-SoVITS 本地代理', 'rembg'],
  },
  {
    title: '大模型接入与质量验证',
    items: ['结构化 Prompt 与事实护栏', 'DeepSeek / Gemini / OpenAI 协议', 'pytest 回归与反例测试', '错误分类与日志脱敏', 'FastAPI / Streamlit 数据看板'],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: '2026.07 – 2026.08',
    org: '杭州凯伦广告策划有限公司',
    role: 'AI 应用开发实习生',
    city: '杭州',
    summary: '在研发部参与企业官网原型设计、TikTok 视频工作流平台搭建，以及日常市场与产品数据整理。',
    highlights: [
      '公司官网原型设计：用 Next.js + React + TypeScript 设计并做出两套不同风格的公司官网与综合业务展示页（涵盖米白杂志编辑风与酒店用品/印刷品展示结构），整理 8 个部门 205 项产品数据清单；离职前完成源码与待补资料交接（网站未正式上线）。',
      'TikTok 电商视频工作台（做到一半离职）：用 FastAPI 搭建本地控制台，完成了素材导入、候选池、DeepSeek 脚本/分镜/提示词改写、人工审核门禁和 Wan 视频 API 适配，并跑通 1 套测试样片交接包；TikTok 爆款稳定爬取、自动剪辑和发布回填在离职时未全部做完。',
      '日常数据收集与整理：协助老板做巴西 TikTok 美妆小电器选品调研，写 Node.js 脚本合并校验多份酒店/餐饮产品与报价 Excel 表，并整理 AI 工具调研文档。',
    ],
    visual: {
      src: '/media/kerren-site-design.jpg',
      caption: '实习期间设计的编辑风 B2B 官网首页草图（按保密约定已隐去公司名称）',
    },
  },
  {
    period: '2023.09 – 2027.07',
    org: '长春科技学院',
    role: '数据科学与大数据技术 · 统招本科（2027 届）',
    city: '长春',
    summary: '班级学习委员，主修 Python 程序设计、数据库系统、数据结构与算法、Linux 与数据分析基础。',
    highlights: [
      '华为 ICT 大赛省级一等奖（负责网络与算力方案规划）。',
      '全国全地形机器人设计竞赛省级二等奖、省级三等奖（负责上位机控制与传感数据调试）。',
    ],
  },
];
