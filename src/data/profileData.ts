import { MetricItem } from './types';

export const PERSONAL_INFO = {
  name: '张凡',
  title: 'AI 应用全栈开发 / 大模型与 Agent 工程开发 / Agent 平台测试开发',
  subtitle: '长春科技学院 · 数据科学与大数据技术专业（统招本科 2027 届 · 班级学习委员）',
  bio: '兼备「AI 应用全栈落地开发（PySide6 原生桌面图形 + Node.js/FastAPI 微服务 + 多模态语音/视频管线）」与「大模型/Agent 质量保障与系统评测（Bass 动力学建模 + 4 层黑盒 E2E + Claims Gate 防线）」双重实战经验。',
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
    value: '76/76 E2E',
    label: '全栈酒馆与语音 LRU 代理',
    description: 'DeepSeek 773ms 主力 + TTS 缓存提速 99.3% + 6/6 恶意反例防御全绿。',
    badge: '网关与显存治理',
    targetProjectId: 'sillytavern-distributed-hub',
    funComment: '🍊 缓存命中只要 14 毫秒，429 限流和显存打架全靠边站！',
    seriousComment: '有界队列 + 显存冲突保护 + 127.0.0.1 回环安全收敛。'
  },
  {
    id: 'lulu-pet-qa',
    value: '92 Passed',
    label: 'PySide6 真透明 AI 桌宠',
    description: 'DWM ARGB32 逐像素透明（~50MB 内存），ASR+SSE+克隆语音 4 层全绿。',
    badge: '原生桌面伴侣',
    targetProjectId: 'capybara-lulu-pet',
    funComment: '🦫 50MB 内存占着桌面卖萌，还会听懂人话和变 10 套皮肤！',
    seriousComment: '脚底锚点缩放 + 10 套状态机 + 4 个模块 92 项 pytest 100% 通过。'
  },
  {
    id: 'novel-video-flow',
    value: '41/41 E2E',
    label: '小说→漫剧→剪映管线',
    description: 'AI 剧本桥接、分镜调度、顺序故障转移路由与 pyJianYingDraft 自动出稿。',
    badge: 'AIGC 工业管线',
    targetProjectId: 'ai-novel-video-studio',
    funComment: '🎬 小说进、剪映草稿出，密钥还会自动轮转脱敏不裸奔！',
    seriousComment: 'SequentialFailoverRouter + 单元/端到端 41 项测试 100% 通过。'
  },
  {
    id: 'desktop-size',
    value: '13.7 MB',
    label: '极简单文件免安装',
    description: 'PyInstaller 动态挂载与 Web 资源压缩，结构化解析崩溃率降至 0%。',
    badge: 'AI 求职助手',
    targetProjectId: 'ai-job-assistant',
    funComment: '🦖 比奶龙瘦十圈：告别臃肿 Electron，内存仅 50MB！',
    seriousComment: 'Bottle + WebView2 轻量视窗，栈平衡括号匹配消除截断崩溃。'
  },
  {
    id: 'qa-coverage',
    value: '169 Passed',
    label: '多模态测试与金融基准',
    description: '169 项 pytest 契约/死锁注入全绿 + 200+ 金融动态公式 Rubrics 基准。',
    badge: '测试开发与评测',
    targetProjectId: 'multimodal-pipeline-qa',
    funComment: '🟢 咕咕嘎嘎！169 项 pytest 配 25+ 条评分卡，死锁幻觉全拦住！',
    seriousComment: 'Claims Gate 守门 + TTL 租约回滚 + 25+ 原子化金融 Rubrics。'
  }
];
