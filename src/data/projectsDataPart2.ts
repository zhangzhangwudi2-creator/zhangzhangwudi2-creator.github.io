import { ProjectDetail } from './types';

export const PROJECTS_PART_2: ProjectDetail[] = [
  {
    id: 'ai-job-assistant',
    title: 'AI 求职助手 Web/CI 生产级服务与大模型事实守门系统 (aiqiuzhizhe-publish)',
    role: '独立全栈开发 · 安全与 QA 架构',
    date: '2026.08 - 2026.10',
    categories: ['fullstack', 'qa'],
    summary: '面向公开公网部署的 FastAPI + ReportLab 简历诊断与定向重构服务，聚焦防提示词注入、联系方式/教育背景防篡改、防绕过限流与保真 PDF 导出。',
    pipeline: [
      'Tesseract.js 浏览器 OCR',
      'SHA-256 6h 缓存 + XFF 防绕过限流',
      'XML 标签边界隔离',
      'fact_guard.py 确定性防篡改',
      'ReportLab 无照 422 拦截 + 双/单栏降级'
    ],
    tags: ['FastAPI v1.2.0', 'ReportLab', 'fact_guard.py', 'Tesseract.js', 'X-Forwarded-For 限流', '63项 pytest'],
    painPoint: '公网简历改写服务易遭客户端伪造 X-Forwarded-For 刷额度，模型改写常丢删手机号/邮箱或捏造名校履历，且无头容器导出中文 PDF 易丢失证件照或排版溢出。',
    solution: [
      '零成本确定性事实守门 (fact_guard.py)：使用 <TARGET_ROLE> / <UNTRUSTED_RESUME> / <UNTRUSTED_JOB_DESCRIPTION> 标签隔离不可信输入，在改写后校验原简历邮箱/URL/11 位手机号不丢失且无捏造黑名单实体；失败自动带因重试 1 次，仍败返回 HTTP 502 且绝不污染缓存。',
      '防伪造头绕过的缓存限流系统 (quota.py)：采用 SHA-256 规范化请求键实现 6 小时 TTLCache 命中直出，并在信任代理下取最右可信跳 X-Forwarded-For 实施滑动窗口限流（5 次/小时），封堵假请求头绕过漏洞。',
      '高保真 ReportLab PDF 导出引擎 (pdf_resume.py)：集成浏览器端 Tesseract.js OCR 与 pypdf 抽字（<=30000 字），内置 NotoSansSC 字体嵌入；extract_profile_photo 缺失证件照直接返回 422 拒绝静默丢照，遇 LayoutError 自动降级单栏稳定排版。',
      'GitHub Actions CI 回归套件：沉淀 63 项 pytest 覆盖限流边界、fact_guard 幻觉拦截、文本简历校验与 PDF 导出契约。'
    ],
    metrics: [
      '63 项 pytest 自动化回归套件 100% 通过 (3.17s) · 接入 GitHub Actions CI',
      'fact_guard.py 零额外 LLM 成本拦截联系方式丢失与实体捏造（仍败 502 不写缓存）',
      '最右可信 X-Forwarded-For 限流防绕过 + 证件照缺失 422 显式拒导出'
    ],
    techStack: ['Python 3.12', 'FastAPI', 'ReportLab', 'Pydantic v2', 'Tesseract.js', 'pypdf', 'pytest'],
    links: [
      { label: 'GitHub 源码仓库 (aiqiuzhizhe)', url: 'https://github.com/zhangzhangwudi2-creator/aiqiuzhizhe', type: 'github' },
      { label: '飞书设计文档', url: 'https://lcn240mx3b00.feishu.cn', type: 'doc' }
    ]
  },
  {
    id: 'multimodal-pipeline-qa',
    title: 'ContentOps Lab 多平台 AI 文案工作流与确定性规则质检台',
    role: '全栈与评测工程设计',
    date: '2026.07 - 2026.08',
    categories: ['qa', 'fullstack'],
    summary: '基于 React 19 + Express 4 + TypeScript 构建的多节点文案创作工作台（小红书/抖音/B站），以主动移除虚假流量预测、改建可解释 4 维规则质检为核心工程亮点。',
    pipeline: [
      '6 节点 Express 工作流',
      '移除伪造 CTR/流量预测',
      'contentEvaluator 4×25 打分',
      'evidence[] 可定位溯源',
      'node:test 确定性回归'
    ],
    tags: ['React 19', 'Express 4', 'TypeScript', 'contentEvaluator.ts', 'node:test', '反虚假指标工程'],
    painPoint: '早期版本让大模型直接“预测点赞与 CTR 转化”，在无真实投放回流数据下既不可复现又容易制造虚假产品幻觉，无法支撑稳定的 Prompt 回归评测。',
    solution: [
      '主动去伪指标重构 (commit 094b0ac)：识别并砍掉缺乏投放回流的“模拟流量预估”功能，把黑盒主观打分收敛为工程可解释、可回归的结构合规校验。',
      '4 维确定性规则评测器 (contentEvaluator.ts)：按信息密度、平台格式规范、钩子与互动指令等 4 个维度各 25 分实施规则评分，每条扣分与加分均输出原文 evidence[] 证据片段并显式声明“不代表真实投放转化”。',
      '多平台 Express 工作流闭环与测试：串联选题生成、标题优选、初稿撰写、跨平台适配（/quality-evaluate）与复盘进化 6 类接口，配套 tsx --test (2/2 node:test) 守护小红书信号加分与抖音缺镜提醒逻辑。'
    ],
    metrics: [
      'tsx --test 2 项确定性规则评测回归 100% 通过（0.90s）',
      '4×25 分规则引擎 100% 确定性复现并输出可定位 evidence[] 证据',
      'commit 094b0ac 彻底消除无真实投放反馈的模拟流量/CTR 伪造指标'
    ],
    techStack: ['React 19', 'Express 4', 'TypeScript', 'Google GenAI SDK', 'node:test (tsx)', 'Tailwind CSS'],
    links: [
      { label: 'GitHub 源码仓库 (contentops-lab)', url: 'https://github.com/zhangzhangwudi2-creator/contentops-lab', type: 'github' },
      { label: '飞书评测工程说明', url: 'https://lcn240mx3b00.feishu.cn', type: 'doc' }
    ]
  },
  {
    id: 'talentsai-eval-benchmark',
    title: '面向复杂金融计算场景的大模型基准评测与对齐工程 (TalentsAI 专项)',
    role: '独立主导评测设计',
    date: '2026.07 - 2026.08',
    categories: ['qa'],
    summary: '针对大模型在长程数学推导与复合逻辑场景下的幻觉短板，构建金融级自动化评测基准、动态公式真值与原子化评分标准。',
    pipeline: [
      '长程金融复合算例设计',
      'openpyxl 动态公式求解器',
      '200+ 单元格 Ground Truth',
      '25+ 条原子化 Rubrics 矩阵',
      '大模型长程对齐判定'
    ],
    tags: ['大模型评测', 'Ground Truth 自动化', 'openpyxl', 'Rubrics 评分矩阵', '长程多步推导', '一票否决门禁'],
    painPoint: '通用评测集多为简短问答，无法有效检验大语言模型在包含跨表引用、动态峰值与复合收益计算时的长程逻辑一致性与计算精度。',
    solution: [
      '长程推理算例设计：构建包含复利净值、动态峰值追踪及最大回撤等高阶金融指标的多步推导真实业务算例。',
      '自动化零误差真值研制：利用 Python openpyxl 编写动态公式求解器，自动化生成含 200+ 单元格动态关联的 Ground Truth 标准答案，彻底杜绝人工误差。',
      '原子化 Rubrics 评分矩阵：独创 25+ 条微观细则，设定核心推导公式一票否决、矛盾数据扣分及 ±1% 科学浮动容差边界。'
    ],
    metrics: [
      '自动生成含 200+ 动态关联公式的 100% 零误差金标真值',
      '制定 25+ 条标准化 Rubrics，实现评测结果 100% 可解释与可复现',
      '精确捕获大模型在多步长程推理中 8 处逻辑退化反例'
    ],
    techStack: ['Python', 'openpyxl', 'TalentsAI 评测平台', 'Rubrics 规范', '金融长程逻辑对齐'],
    links: [
      { label: '飞书评测案例文档', url: 'https://lcn240mx3b00.feishu.cn', type: 'doc' }
    ]
  }
];
