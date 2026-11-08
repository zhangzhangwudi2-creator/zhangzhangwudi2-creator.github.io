import { MetricItem } from './types';

export const PERSONAL_INFO = {
  name: '张凡',
  title: 'AI 应用全栈开发 / 大模型与 Agent 工程开发 / Agent 平台测试开发',
  subtitle: '长春科技学院 · 数据科学与大数据技术专业（统招本科 2027 届 · 班级学习委员）',
  bio: '兼备「AI应用全栈落地开发（Python微服务+WebView2极简视窗+无服务器边缘网络）」与「大模型/Agent质量保障与系统评测（毕业设计数学建模+pytest自动化测试+Claims Gate防线）」双重实战经验。',
  location: '苏州 / 杭州 / 上海',
  contacts: {
    email: '2815042375@qq.com',
    phoneMasked: '193****1281',
    phoneRaw: '19306241281',
    github: 'https://github.com/zhangzhangwudi2-creator',
    feishu: 'https://lcn240mx3b00.feishu.cn',
    resumePdf: '/resume.pdf'
  }
};

export const CORE_METRICS: MetricItem[] = [
  {
    id: 'thesis-bass-r2',
    value: 'R² > 0.96',
    label: 'Bass 扩散拟合优度',
    description: '本科毕设独创常微分方程动力学反演拐点，远超线性回归 R²=0.41。',
    badge: '毕业设计核心创新',
    targetProjectId: 'thesis-xianyu-lifecycle',
    funComment: '🦫 噜噜认证：Bass 方程拟合 R² > 0.96，稳如老豚！',
    seriousComment: '非线性动力学拟合，精准识别爆发黑马商品生命周期。'
  },
  {
    id: 'tavern-channels',
    value: '10 Channels',
    label: '多渠道聚合与公网穿透',
    description: '自研网关聚合 10 个 Gemini/DeepSeek 渠道，搭配专属域名双模秒启。',
    badge: '高可用边缘交互中枢',
    targetProjectId: 'sillytavern-distributed-hub',
    funComment: '🍊 只要情绪像水豚一样稳定，上游 429 熔断就追不上我！',
    seriousComment: '自研双模守护与动态权重轮询，实现请求 0 阻塞。'
  },
  {
    id: 'desktop-size',
    value: '13.7 MB',
    label: '极简单文件免安装',
    description: 'PyInstaller 动态挂载与 Web 资源压缩，单文件内存仅 50MB。',
    badge: 'AI 求职助手',
    targetProjectId: 'ai-job-assistant',
    funComment: '🦖 比奶龙瘦十圈：告别臃肿 Electron，内存仅 50MB！',
    seriousComment: '微服务架构与轻量级 WebView2，启动耗时 < 1.2 秒。'
  },
  {
    id: 'qa-coverage',
    value: '169 Passed',
    label: '系统级测试 100% 通过',
    description: '覆盖 11 个子模块的 pytest 套件，含状态机边界与 Claims Gate 守门。',
    badge: '测试开发与防御',
    targetProjectId: 'multimodal-pipeline-qa',
    funComment: '🟢 咕咕嘎嘎！精神状态与 169 项 pytest 一样全绿！',
    seriousComment: '契约测试 + Mock 回放 + 状态机乱序注入，阻断死锁漏洞。'
  },
  {
    id: 'rubrics-eval',
    value: '25+ Rubrics',
    label: '金融级原子化评测规则',
    description: '主导金融长程推理评测，openpyxl 自动生成 200+ 动态公式真值基准。',
    badge: '大模型长程对齐',
    targetProjectId: 'talentsai-eval-benchmark',
    funComment: '🦖 奶龙大肚皮装得下 200+ 动态公式，零人工计算误差！',
    seriousComment: '原子化评分细则与一票否决门禁，保障评估结果完全可解释。'
  }
];
