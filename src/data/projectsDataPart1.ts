import { ProjectDetail } from './types';

export const PROJECTS_PART_1: ProjectDetail[] = [
  {
    id: 'thesis-xianyu-lifecycle',
    title: '《基于大语言模型的二手平台数字商品生命周期与需求分析系统》(统招本科毕设)',
    role: '课题负责人 · 独立全栈与算法架构',
    date: '2026.10 - 2026.11',
    categories: ['fullstack', 'qa'],
    summary: '面向二手平台虚拟资产交易，构建底层 CDP 旁路网络逆向、Bass 微分方程动力学拟合、大模型语义抽取与 Streamlit 交互大屏的端到端系统。',
    pipeline: [
      'Playwright CDP 旁路嗅探',
      'SQLite 时序快照库',
      'Bass ODE 非线性最小二乘拟合',
      'DeepSeek + Pydantic 风险定级',
      'Streamlit 选品雷达大屏'
    ],
    tags: ['毕业设计', 'Bass 微分方程', 'Playwright CDP', 'DeepSeek', 'Pydantic', 'Streamlit', 'Trust Region Reflective'],
    painPoint: '二手平台数字虚拟商品信息差大、老旧死链充斥，传统静态平均流速无法刻画非线性爆发与平台算法推流的社交从众机制。',
    solution: [
      'CDP 旁路嗅探与准时序重构：通过 Playwright 挂载持久化 Chrome 上下文，在 CDP 网络层旁路嗅探 MTOP 响应流，基于历史评论时间戳与想要数快照差分重构准时序截面，毫秒级入库 143 款商品。',
      '物理约束 Bass 微分方程拟合：采用线性化先验初值估算 + 物理边界约束（Trust Region Reflective 算法）求解 Bass 常微分方程 p, q, m 参数，高精度推断起飞点 t1、峰值 t* 与衰竭点 t2。',
      '独创 TOS 蓝海算子与合规防火墙：综合想要流速、客单价、CR4 行业集中度与 L0~L3 四级风险评级构建科学机会指数；基于 Pydantic 实体抽取剥离营销废话。',
      'Streamlit 交互大屏：打造暴利黑马选品雷达、Bass 演化 S 曲线、职业倒爷天眼（识别出 34 位矩阵号）与合规审查四大全景视窗。'
    ],
    metrics: [
      'Bass 动力学拟合优度 R² > 0.96 (远高于线性均值模型 R²=0.41)',
      '成功从 107 位卖家画像中识别出 34 位职业倒爷/矩阵号',
      '完成论文第四/五章学术正文与 5 张标准三线表'
    ],
    techStack: ['Python 3.12', 'Bass ODE 动力学', 'Playwright CDP', 'DeepSeek API', 'Pydantic', 'Streamlit', 'Plotly', 'SQLite'],
    links: [
      { label: 'GitHub 源码仓库 (xianyu-lifecycle-llm)', url: 'https://github.com/zhangzhangwudi2-creator/xianyu-lifecycle-llm', type: 'github' },
      { label: '飞书答辩与实证报告', url: 'https://lcn240mx3b00.feishu.cn', type: 'doc' }
    ]
  },
  {
    id: 'sillytavern-distributed-hub',
    title: '多租户高可用大模型边缘网关与沉浸式多模态交互中枢',
    role: '架构设计与运维部署',
    date: '2026.10 - 2026.11',
    categories: ['fullstack'],
    summary: '自研 Python 双模守护引擎与多渠道调度网关，构建本地单机与手机公网专属域名隧道一键切换的高可用沉浸式大模型中枢。',
    pipeline: [
      'Python 双模守护引擎',
      'New-API 10渠道轮询网关',
      'Cloudflare 专属域名隧道',
      '多租户文件级物理隔离',
      '249项自动化巡检自愈'
    ],
    tags: ['自研守护引擎', 'New-API 网关', 'Cloudflare 隧道', '权重轮询熔断', '多租户隔离', '自动化体检自愈'],
    painPoint: '本地大模型角色扮演跨设备访问困难（外网无法安全直连）、多模型密钥频控限制严重，且多用户共用时角色资产与对话历史极易混淆污染。',
    solution: [
      '自研双模启动守护引擎：编写 Python 守护进程与批处理系统，实现本地无边框单机（127.0.0.1:8000）与手机公网专属自购域名隧道（https://st.zfzs.lol）一键秒级切换。',
      '10 渠道权重轮询与 429 自动熔断：自建核心网关聚合 10 个 Google Gemini 渠道与 DeepSeek 渠道，支持动态权重调度、故障自动旁路隔离与多租户 Token 配额管控。',
      '多租户文件级物理隔离机制：实现自用全功能主号（12 张角色卡 + 7 组差分表情）与朋友账号独立空间严格隔离，对话记录与配置数据物理隔离互不干扰。',
      '自研四层全链路巡检自愈脚本：编写 audit_tavern_project.py 与 verify_tavern_e2e.py，实现 249 项运行体检、端口占用释放、进程保活与端到端连通性自动探测。'
    ],
    metrics: [
      '聚合 10 个 Gemini 渠道，实现多端高并发调用 0 卡顿',
      '自购域名专属加密穿透，手机端端到端握手延迟 < 200ms',
      '全链路自动化体检 100% 通过，249 个冗余项无损收敛'
    ],
    techStack: ['Python 守护进程', 'New-API', 'Cloudflare Tunnel', 'SillyTavern 核心引擎', 'SQLite', '反向代理', 'Bash/PowerShell'],
    links: [
      { label: '飞书运维手册', url: 'https://lcn240mx3b00.feishu.cn', type: 'doc' },
      { label: 'GitHub 仓库', url: 'https://github.com/zhangzhangwudi2-creator', type: 'github' }
    ]
  },
  {
    id: 'ai-job-assistant',
    title: '面向求职场景的智能诊断 Agent 与多引擎全栈桌面系统 (AI求职助手)',
    role: '独立全栈开发',
    date: '2026.09 - 2026.10',
    categories: ['fullstack', 'qa'],
    summary: '针对求职者简历质量参差且模型调用昂贵的痛点，开发融合简历深度诊断、STAR 法则润色与面试题预测的桌面级智能体应用。',
    pipeline: [
      'Edge WebView2 原生视窗',
      'Python Bottle 微服务',
      '状态机与栈平衡括号匹配',
      '多引擎自适应路由',
      'PyInstaller 13.7MB 单文件落盘'
    ],
    tags: ['Python', 'Bottle', 'WebView2', '栈平衡括号匹配', 'DeepSeek API', 'PyInstaller'],
    painPoint: '普通求职者难以定位简历软肋，直接调用商业大模型成本高昂，且多渠道反代下模型输出易夹带 Markdown 代码块或尾部截断导致解析崩溃。',
    solution: [
      '前后端同构轻量化架构：采用 Python Bottle 微服务结合 Edge WebView2 原生视窗，摆脱 Electron 笨重依赖，内存占用仅 50MB。',
      '自研状态机与栈平衡括号匹配引擎：针对大模型输出易夹带 Markdown 标识与非法截断问题，自研基于状态机与栈平衡括号匹配算法，将结构化解析崩溃率由 14.8% 降至 0%。',
      '多引擎自适应路由：深度适配 DeepSeek、Gemini 与本地自建网关，前端支持无感切换 Base URL 与模型，兼具预置配额免密与 0 成本调用。',
      '定制 PyInstaller 单文件落盘：通过运行时资源动态挂载与压缩编译，打包为 13.7MB 单文件免安装程序，实现极速双击秒启。'
    ],
    metrics: [
      '单文件体积仅 13.7 MB，冷启动耗时 < 1.2 秒',
      '结构化数据解析崩溃率由 14.8% 彻底降至 0%',
      '单机运行时内存仅 ~50 MB'
    ],
    techStack: ['Python 3.12', 'Bottle', 'WebView2', 'DeepSeek API', 'Google Gemini API', 'PyInstaller', 'HTML5/Tailwind'],
    links: [
      { label: 'GitHub 源码仓库 (aiqiuzhizhe)', url: 'https://github.com/zhangzhangwudi2-creator/aiqiuzhizhe', type: 'github' },
      { label: '飞书设计文档', url: 'https://lcn240mx3b00.feishu.cn', type: 'doc' }
    ]
  }
];
