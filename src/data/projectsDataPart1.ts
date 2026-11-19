import { ProjectDetail } from './types';

export const PROJECTS_PART_1: ProjectDetail[] = [
  {
    id: 'thesis-xianyu-lifecycle',
    title: '《基于大语言模型的二手平台数字商品生命周期与需求分析系统》(统招本科毕设)',
    role: '课题负责人 · 独立全栈与算法架构',
    date: '2026.10 - 2026.11',
    categories: ['fullstack', 'qa'],
    summary: '面向二手平台虚拟资产交易，构建 Playwright CDP 旁路收集、数值差分 Bass TRF 反伪拟合与 SQLite 双库隔离的选品及 24H 店铺运营中枢。',
    pipeline: [
      'Playwright CDP 旁路嗅探',
      'SQLite 双库物理隔离',
      'Bass TRF ≥6 期硬熔断拟合',
      '4 品类语义与合规分级',
      'BEGIN IMMEDIATE 客服发货中枢'
    ],
    tags: ['毕业设计', 'Bass TRF 反伪拟合', 'Playwright CDP', 'SQLite WAL/热备', '防串话护栏', 'Streamlit'],
    painPoint: '二手平台数字虚拟商品信息差大、老旧死链充斥，单期截面自由度不足极易造成伪拟合，而运营自动化若缺少硬约束会引发砍穿底价、超卖或错发买家卡密。',
    solution: [
      'CDP 旁路嗅探与双库物理隔离：通过 Playwright 单页复用 + _pump_wait 事件泵拦截 MTOP 响应与 PID 文件锁定时追踪，在 xianyu_lifecycle.db 沉淀 2,329 款商品、1,705 位卖家与 2,950 条日快照（含 40 件 ≥6 期 real_panel），并与商业运营库 xianyu_ops.db（6 张表）物理隔离。',
      '数值差分 Bass 拟合与反伪拟合熔断：经中心有限差分验证后主动禁用存在误差的解析雅可比矩阵，改用 scipy TRF 数值导数与 ≥6 期单调真实面板硬熔断机制，拒绝单期截面伪拟合。',
      '4 品类语义与 TOS 选品筛选：整合 Pydantic 强 Schema 与覆盖考公/简历/会员/Python 4 大赛道的确定性规则引擎，解决会员品类误落默认分支问题并接入 Tab2 面板期数优先过滤与 Tab3 动态赛道矩阵。',
      '24H 店铺运营护栏与幂等发货：实现 dry_run 默认隔离、底价硬锁/站外引流拦截、paid_verified + BEGIN IMMEDIATE 原子核销卡密及按 session_id 切换标题校验防串话护栏。'
    ],
    metrics: [
      '实证库累计沉淀 2,329 款商品 / 1,705 位卖家 / 2,950 条快照（40 件 ≥6 期 real_panel）',
      '答辩基线 git tag (thesis-frozen-v1) 与运营库物理隔离 · BEGIN IMMEDIATE 防超卖',
      'test_ops_suite 7 大闭环对抗与 4 层测试框架验证通过（人工 60 条金标持续补充中）'
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
    tags: ['PySide6', 'DWM ARGB32', 'Faster-Whisper', 'GPT-SoVITS 9888代理', 'SSE 流式', '146项 pytest'],
    painPoint: '传统 pywebview/Electron 桌宠易出现白边矩形底框与高内存膨胀，且语音识别、世界书记忆、嘴型同步与跨服务显存冲突极易引发卡死。',
    solution: [
      'DWM 逐像素真透明与脚底锚点缩放：基于 PySide6 WA_TranslucentBackground 与预乘 ARGB32 渲染彻底消除白边，内存仅 ~50MB / 待机 CPU < 0.5%；推导脚底居中锁定公式支持 50%–200% 滚轮无漂移缩放。',
      '多造型资产流水线与 7 态 FSM：通过 rembg + ffmpeg 从原片批量提取并自动裁边，内置 10 套换装与呼吸/眨眼/弹跳/思考/说话/睡眠状态机。',
      '本地多模态语音链路与显存热切代理：集成 Faster-Whisper 本地按键 ASR、SillyTavern 兼容世界书记忆、SSE 流式气泡及 9888→9880 零显存 GPT-SoVITS 权重热切代理（另完成阿里云 cosyvoice-v3-plus 离线音色验证，主网关按需待接入）。',
      '4 层对抗测试覆盖：针对语音隔离、精灵质量、PySide6 窗口生命周期与小游戏联动构建 146 项 pytest 用例集（核心 4 模块 92 项实测 74.04s 全绿）。'
    ],
    metrics: [
      '4 层 pytest 测试集共 146 项（核心 4 模块 92 项实测 100% 通过 · 74.04s）',
      '原生 ARGB32 透明渲染内存仅 ~50MB · 待机 CPU < 0.5%',
      '9888→9880 零额外显存热切，内置 10 套换装与 43 项精灵资产质检全过'
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
    tags: ['FastAPI Web UI', 'SequentialFailoverRouter', 'gflow-cli', 'pyJianYingDraft', 'Pydantic', '81项 pytest'],
    painPoint: '网文改编漫剧需人工逐段拆镜、写提示词并手动导入剪映拼接，同时多 API Key 遭遇 429、本地网关受系统代理劫持或 CLI 参数错配时极易悄无声息降级失败。',
    solution: [
      '端到端自动化内容流水线与 CLI 参数对齐：完成 MuMuAINovel / harnessNovel 剧本桥接、scene_analyzer 拆解、storyboard_gen 4~6s 分镜校验、gflow_runner（对齐 --name 命名参数）到 pyJianYingDraft 剪映草稿落盘，目前正推进真账号首次实弹联调。',
      '自研顺序故障转移路由 (SequentialFailoverRouter)：支持 gemini_transport="auto" 自动识别纯 NewAPI 配置，对 127.0.0.1/localhost 自动启用 trust_env=False 绕过代理劫持，严格区分 401/403 与 429 轮转并正则脱敏密钥，分镜失败显式记录 fallback_reason（支持 strict_llm 强报错）。',
      '可视化工作台与 Mock 沙盒验证：搭建双端 Web UI（小说 8766 / 视频 8780），配套可编程 429/503/畸形包 Mock 服务完成单元 + E2E 全量无损回归。'
    ],
    metrics: [
      '81 项单元与 E2E pytest 测试 100% 通过（含 40 单元 + 41 端到端，27.21s）',
      '实现 429 轮转、回环 trust_env=False 防代理劫持与密钥日志 100% 脱敏',
      '打通从网文 SQLite 章节到剪映可编辑草稿全自动落盘（待实弹联调）'
    ],
    techStack: ['Python 3.12', 'FastAPI', 'Pydantic v2', 'pyJianYingDraft', 'gflow-cli', 'SQLite', 'pytest'],
    links: [
      { label: 'GitHub 仓库', url: 'https://github.com/zhangzhangwudi2-creator', type: 'github' }
    ]
  }
];
