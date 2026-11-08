import { ProjectDetail } from './types';

export const PROJECTS_PART_2: ProjectDetail[] = [
  {
    id: 'multimodal-pipeline-qa',
    title: '多模态 AI 视频流水线与智能体控制台系统级自动化测试工程',
    role: '测试开发与系统维护',
    date: '2026.08 - 2026.09',
    categories: ['qa'],
    summary: '面向集成 DeepSeek、Wan 2.1 与 Faster-Whisper 的异步视频生产流水线，主导构建契约测试、乱序注入与规则守门的 pytest 系统级自动化套件。',
    pipeline: [
      'pytest 169项套件',
      'Mock/契约测试层',
      '状态机超时/乱序注入',
      'Claims Gate 规则级守门',
      'CI/CD All Green'
    ],
    tags: ['pytest', '契约测试', 'Mock 回放 Fixture', '状态机乱序注入', 'Claims Gate', 'TTL 租约超时回滚'],
    painPoint: '多模型异步拼接流水线链路极长，模型生成越界断言、状态机非法跳转与异步回调超时极易引发静默卡死或生成废片。',
    solution: [
      '契约测试与 Mock 响应回放：针对脚本生成、分镜头拆解、语音合成等 11 个核心子模块，编写 169 项 pytest 自动化测试用例，采用 Mock Fixture 进行确定性响应回放。',
      '有限状态机乱序与超时注入：针对「草稿 → 处理中 → 待审核 → 可导出」全周期，设计非法跳态与长超时注入测试，拦截 6 处异步状态机死锁边界漏洞，并推动引入 TTL 状态租约超时自动回滚机制。',
      'Claims Gate 规则级守门机制：构建基于 Pydantic 强校验与实体交叉核对的守门机制，对预定义违规宣称与事实越界断言实现 100% 规则级前置阻断。'
    ],
    metrics: [
      '169 项自动化测试用例全量执行，实现 100% 稳定通过 (All Green)',
      '预定义违规宣称与事实越界断言实现 100% 规则级前置阻断',
      '拦截 6 处异步状态机死锁漏洞，推动引入 TTL 超时租约回滚'
    ],
    techStack: ['Python', 'pytest', '契约测试', '状态机模型', 'Claims Gate 算法', 'Pydantic', 'Git Hooks'],
    links: [
      { label: 'GitHub 源码仓库 (contentops-lab)', url: 'https://github.com/zhangzhangwudi2-creator/contentops-lab', type: 'github' },
      { label: '飞书测试套件规范', url: 'https://lcn240mx3b00.feishu.cn', type: 'doc' }
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
      '原子化 Rubrics 评分矩阵：独创 25+ 条微观细则，设定核心推导逻辑一票否决、矛盾数据扣分及 ±1% 科学浮动容差边界。'
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
