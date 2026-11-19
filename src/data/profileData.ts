import { MetricItem } from './types';

export const PERSONAL_INFO = {
  name: '张凡',
  title: 'AI 应用全栈开发 / 大模型与 Agent 工程开发 / Agent 平台测试开发',
  subtitle: '长春科技学院 · 数据科学与大数据技术专业（统招本科 2027 届 · 班级学习委员）',
  bio: '兼备「AI 应用全栈落地开发（FastAPI / PySide6 原生桌面 / Node.js 代理 / 多模态语音与视频管线）」与「大模型/Agent 质量保障与系统评测（Bass 动力学熔断建模 / 4 层黑盒 E2E / 确定性事实与规则守门）」双重实战经验。',
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
    value: '2,329 样本',
    label: '闲鱼毕设实证与店铺中枢',
    description: '40 件 ≥6 期 real_panel 强制防伪拟合熔断 + 双库隔离 + 原子卡密核销。',
    badge: '毕业设计 · 计量与运营',
    targetProjectId: 'thesis-xianyu-lifecycle',
    funComment: '🦫 噜噜认证：够 6 期真实面板才准拟合，还有防串话+防超卖双保镖！',
    seriousComment: '数值差分 Bass TRF + BEGIN IMMEDIATE 卡密锁 + 会话切换二次核验。'
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
    value: '146 Tests',
    label: 'PySide6 真透明 AI 桌宠',
    description: 'DWM ARGB32 逐像素透明（~50MB 内存），9888→9880 零显存热切 + 146 项用例。',
    badge: '原生桌面伴侣',
    targetProjectId: 'capybara-lulu-pet',
    funComment: '🦫 50MB 内存占着桌面卖萌，还会听懂人话和变 10 套皮肤！',
    seriousComment: '脚底锚点缩放 + 10 套状态机 + 4 层 146 项 pytest 覆盖（核心 92 项全绿）。'
  },
  {
    id: 'novel-video-flow',
    value: '81 Passed',
    label: '小说→漫剧→剪映管线',
    description: '81 项单元/E2E 全绿（含 429 轮转脱敏、gflow 参数与本地回环代理隔离）。',
    badge: 'AIGC 工业管线',
    targetProjectId: 'ai-novel-video-studio',
    funComment: '🎬 81 项测试全绿护航：小说拆镜进、剪映草稿出，密钥绝不裸奔！',
    seriousComment: 'SequentialFailoverRouter(auto) + trust_env=False + 81 项 pytest 27.21s 全绿。'
  },
  {
    id: 'desktop-size',
    value: '63/63 Tests',
    label: 'AI 求职助手 Web/CI 生产版',
    description: 'FastAPI + ReportLab 生产服务，fact_guard 防篡改 + 防绕过限流 + 422 拒丢照。',
    badge: 'FastAPI 安全守门',
    targetProjectId: 'ai-job-assistant',
    funComment: '🦖 删号改名直接拦下、没证件照 422 拒导出，63 项 pytest 稳如老狗！',
    seriousComment: '<UNTRUSTED_*> 隔离 + 最右可信 XFF 限流 + 双/单栏 PDF 降级（63/63 通过）。'
  },
  {
    id: 'qa-coverage',
    value: '4维+25卡',
    label: 'ContentOps 质检与金融评测',
    description: '主动砍掉伪流量预测改为 4×25 规则打分（node:test全绿）+ 200+ 公式 Rubrics。',
    badge: '可复现评测工程',
    targetProjectId: 'multimodal-pipeline-qa',
    funComment: '🟢 咕咕嘎嘎！不编造假阅读量，4×25 规则配 25+ 金融卡全可复现！',
    seriousComment: 'contentEvaluator 确定性 evidence[] 溯源 + openpyxl 200+ 动态公式真值。'
  }
];
