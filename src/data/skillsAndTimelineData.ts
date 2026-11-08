import { SkillCategory, TimelineItem } from './types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI 应用与全栈工程',
    description: '深入模型原生协议与微服务架构，打造原生级轻量桌面应用',
    skills: [
      { name: 'Python (Bottle / FastAPI)', highlight: true },
      { name: 'OpenAI API 协议', highlight: true },
      { name: 'Google Gemini API', highlight: true },
      { name: 'DeepSeek 系列', highlight: true },
      { name: 'Edge WebView2 视窗容器' },
      { name: 'PyInstaller 单文件落盘' },
      { name: 'HTML5 / CSS3 / JavaScript' }
    ]
  },
  {
    title: '无服务器与边缘计算',
    description: '基于全球边缘计算与反向代理，打造 0 服务器成本高可用基建',
    skills: [
      { name: 'Cloudflare Workers / Pages', highlight: true },
      { name: 'Cloudflare KV 键值数据库' },
      { name: 'New API 多 Key 轮询调度', highlight: true },
      { name: 'CloudflareST 节点测速优选' },
      { name: '反向代理与隧道穿透' }
    ]
  },
  {
    title: 'Agent 评测与质量保障',
    description: '量化模型推理边界，构建不可逆状态机与合规防御门禁',
    skills: [
      { name: 'pytest 自动化测试套件', highlight: true },
      { name: 'Claims Gate 幻觉违规拦截', highlight: true },
      { name: '状态机生命周期异常用例' },
      { name: '原子化 Rubrics 评分规则 (25+ 条)', highlight: true },
      { name: 'openpyxl 动态真值研制 (Ground Truth)' }
    ]
  },
  {
    title: '工程工具与数据底座',
    description: '扎实的计算机核心素养与敏捷工程规范',
    skills: [
      { name: 'MySQL / SQLite' },
      { name: 'Linux / Bash 脚本' },
      { name: 'Git 版本控制' },
      { name: 'RESTful API 架构规范' },
      { name: '自动化脚本编排' }
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
    role: '数据科学与大数据技术 · 统招全日制本科（2027届）',
    city: '长春',
    badge: '班级学习委员',
    highlights: [
      '主修课程：Python程序设计、数据库系统（SQL）、Linux操作系统、数据结构与算法、数据分析基础。',
      '华为 ICT 大赛省级一等奖（主导网络与算力方案规划）。',
      '全国全地形机器人设计竞赛省级二等奖、省级三等奖（负责上位机控制与传感数据流调试）。'
    ]
  }
];
