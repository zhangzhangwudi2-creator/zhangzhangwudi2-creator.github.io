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
    title: '多租户高可用大模型边缘网关、语音代理与沉浸式交互中枢',
    role: '架构设计 · 运维与测试开发',
    date: '2026.10 - 2026.11',
    categories: ['fullstack', 'qa'],
    summary: '构建 NewAPI 多模型智能调度网关、Node.js GPT-SoVITS 显存避让语音代理、PySide6 桌面控制面板与 76 项 4 层黑盒 E2E 验证体系。',
    pipeline: [
      'PySide6 可视化控制面板',
      'NewAPI 智能探活路由',
      'Node.js TTS LRU 代理',
      'Cloudflare 零暴露穿透',
      '76 项 4 层黑盒 E2E'
    ],
    tags: ['PySide6 控制面板', 'NewAPI 路由', 'Node.js 语音代理', '显存冲突保护', 'Cloudflare Tunnel', '76项黑盒测试'],
    painPoint: '多上游模型渠道易失效限流、本地 TTS 与 ComfyUI/桌宠同抢显卡易崩溃、公网穿透存在凭据与 IP 暴露风险，且多用户角色资产极易污染。',
    solution: [
      '多渠道探活与低风控路由：排查 11 路渠道并剔除 401/403 失效节点，配置 DeepSeek 非思考主力（deepseek-chat 首答 773ms）+ 4 路健康 Gemini 免费兜底池与 SQLite 在线滚动备份。',
      '自研 Node.js GPT-SoVITS 代理插件：实现有界排队防雪崩（上限 6 / HTTP 429）、跨服务显存冲突实时探测（避让 ComfyUI 8188 / 桌宠 9888）与内存 LRU 缓存，重复合成从 2032.9ms 降至 14.0ms（提速 99.3%）。',
      '公网安全收口与 PySide6 运维面板：SillyTavern 收敛至 127.0.0.1 回环并启用 CF-Connecting-IP 真实 IP 限流，TUNNEL_TOKEN 改由环境变量注入，配套独立 PySide6 控制窗与指数退避自愈。',
      '纯标准库 4 层黑盒 E2E 套件：覆盖服务健康、CSRF/鉴权边界、TTS 波形与移动端公网登录等 76 项测试并嵌入 6 项非法输入反例。'
    ],
    metrics: [
      '76 项 4 层黑盒 E2E 测试 100% 通过 (7.47s · 含 6/6 反例防御)',
      'Node.js TTS 内存 LRU 缓存命中延迟降至 14.0ms (提速 99.3%)',
      'DeepSeek 低风控主力首答 773ms · 公网回环监听零端口裸奔'
    ],
    techStack: ['PySide6', 'Node.js', 'Python 3.12', 'NewAPI', 'Cloudflare Tunnel', 'GPT-SoVITS', 'SQLite WAL'],
    links: [
      { label: '飞书运维手册', url: 'https://lcn240mx3b00.feishu.cn', type: 'doc' },
      { label: 'GitHub 仓库', url: 'https://github.com/zhangzhangwudi2-creator', type: 'github' }
    ]
  },
  {
    id: 'capybara-lulu-pet',
    title: '水豚噜噜原生透明桌面宠物与多模态语音伴侣系统',
    role: '独立全栈与桌面图形架构',
    date: '2026.11',
    categories: ['fullstack', 'qa'],
    summary: '基于 PySide6 与 Windows DWM 逐像素 Alpha 合成打造无白边透明桌宠，集成 10 套状态机皮肤、Faster-Whisper 语音输入、SSE 流式对话与 GPT-SoVITS 克隆配音。',
    pipeline: [
      'PySide6 ARGB32 透明窗口',
      'Faster-Whisper 按键识别',
      'SillyTavern 世界书记忆',
      'SSE 流式 LLM 代理',
      'GPT-SoVITS 克隆口型同步'
    ],
    tags: ['PySide6', 'DWM ARGB32', 'Faster-Whisper', 'GPT-SoVITS', 'SSE 流式', '92项 pytest'],
    painPoint: '传统 pywebview/Electron 桌宠易出现白边矩形底框与高内存膨胀，且语音识别、世界书记忆、嘴型同步与跨服务显存冲突极易引发卡死。',
    solution: [
      'DWM 逐像素真透明与脚底锚点缩放：基于 PySide6 WA_TranslucentBackground 与预乘 ARGB32 渲染彻底消除白边，内存仅 ~50MB / 待机 CPU < 0.5%；推导脚底居中锁定公式支持 50%–200% 滚轮无漂移缩放。',
      '多造型资产流水线与 7 态 FSM：通过 rembg + ffmpeg 从原片批量提取并自动裁边，内置 10 套换装与呼吸/眨眼/弹跳/思考/说话/睡眠状态机。',
      '本地多模态语音交互链路：集成 Faster-Whisper 本地按键 ASR、SillyTavern 兼容 JSON 世界书与持久化记忆引擎、SSE 流式字幕气泡及 GPT-SoVITS 克隆配音嘴型同步（附离线声效兜底）。',
      '4 层对抗测试覆盖：针对语音隔离、精灵质量、PySide6 窗口生命周期与小游戏联动构建 4 大模块 92 项 pytest 用例。'
    ],
    metrics: [
      '92 项 4 层 pytest 自动化测试 100% 通过 (74.04s)',
      '原生 ARGB32 透明渲染内存仅 ~50MB · 待机 CPU < 0.5%',
      '内置 10 套换装资产与 43 项精灵资产质检全过'
    ],
    techStack: ['Python 3.12', 'PySide6', 'Faster-Whisper', 'GPT-SoVITS', 'rembg', 'ffmpeg', 'pytest'],
    links: [
      { label: 'GitHub 仓库', url: 'https://github.com/zhangzhangwudi2-creator', type: 'github' }
    ]
  },
  {
    id: 'ai-novel-video-studio',
    title: 'AI 长篇小说创作与漫剧/剪映自动化生产流水线',
    role: '独立全栈与 Agent 工作流架构',
    date: '2026.11',
    categories: ['fullstack', 'qa'],
    summary: '打通「长篇小说剧本文库 → 智能场景拆解 → 4~6s 漫剧分镜与提示词 → Flow 视频调度 → pyJianYingDraft 剪映草稿导出」的全链路创作工作台。',
    pipeline: [
      '小说库 SQLite 桥接',
      '场景拆解分析器',
      '4~6s 分镜提示词生成',
      'gflow 视频调度执行',
      'pyJianYingDraft 剪映导出'
    ],
    tags: ['FastAPI Web UI', 'SequentialFailoverRouter', 'gflow-cli', 'pyJianYingDraft', 'Pydantic', '41项 pytest'],
    painPoint: '网文改编漫剧需人工逐段拆镜、写提示词并手动导入剪映拼接，同时多 API Key 遭遇 429 限流或报错时极易中断批量生产并泄露密钥日志。',
    solution: [
      '端到端自动化内容流水线：实现 MuMuAINovel SQLite / harnessNovel 剧本读取、scene_analyzer 场景拆解、storyboard_gen 分镜提示词生成、gflow_runner 视频调度到 pyJianYingDraft 剪映草稿一键落盘。',
      '自研顺序故障转移路由 (SequentialFailoverRouter)：支持单 Key 顺序故障切换与 DeepSeek 自动兜底，严格区分 401/403 不可重试错误与 429/5xx 瞬态重试，并内置正则表达式自动脱敏日志中的全部密钥。',
      '可视化工作台与 Mock 沙盒验证：搭建双端 Web UI（小说 8766 / 视频 8780），配套可编程 429/503/畸形包 Mock LLM 服务完成全流程无损回归。'
    ],
    metrics: [
      '41 项单元与端到端 pytest 测试 100% 通过 (17.81s)',
      '内置 429 轮转、DeepSeek 兜底与正则密钥日志 100% 脱敏',
      '打通从网文 SQLite 章节到剪映可编辑草稿全自动落盘'
    ],
    techStack: ['Python 3.12', 'FastAPI', 'Pydantic v2', 'pyJianYingDraft', 'gflow-cli', 'SQLite', 'pytest'],
    links: [
      { label: 'GitHub 仓库', url: 'https://github.com/zhangzhangwudi2-creator', type: 'github' }
    ]
  }
];
