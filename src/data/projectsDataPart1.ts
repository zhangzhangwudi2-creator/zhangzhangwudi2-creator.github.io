import { ProjectDetail } from './types';

export const PROJECTS_PART_1: ProjectDetail[] = [
  {
    id: 'thesis-xianyu-lifecycle',
    index: '01',
    title: '闲鱼数字商品生命周期分析与选品系统',
    subtitle: '本科毕业设计 · FastAPI 商业 SaaS 双主题工作台、Bass 拟合熔断与店铺自动化原型',
    role: '独立开发',
    date: '2026.10 – 2026.11',
    status: '已落地',
    statusNote: 'FastAPI + 双主题工作台与 2,889 样本库已落地；60 条人工金标与真号实弹运营待继续补充',
    summary:
      '用 Playwright 旁路抓取闲鱼虚拟数字商品（考公资料、简历模板、会员权益、Python 源码）并按天追踪快照，将早期 Streamlit 看板升级为 FastAPI + 日间/暗夜双主题商业 SaaS 工作台，打通选品雷达、Bass 防伪拟合与店铺自动运营原型。',
    categories: ['fullstack', 'qa'],
    media: {
      type: 'video',
      src: '/media/thesis-demo.mp4',
      poster: '/media/thesis-dashboard.jpg',
      caption: '本地实录：FastAPI 商业 SaaS 工作台（9 视图导航、右侧抽屉、店铺运营台与日间/暗夜实时切换）',
    },
    whatIDid: [
      '用 Playwright 复用本地登录态并拦截 MTOP 响应，搭配 PID 文件锁与 SQLite WAL 热备（conn.backup）每日追踪，目前累计 2,889 款商品、2,075 位卖家与 3,877 条快照（其中 48 件连续追踪满 6 天以上），已关闭自动定时爬虫避免误触风控。',
      '做 Bass 扩散曲线拟合时，先用中心有限差分测出自己写的解析雅可比有误差，直接禁用改用数值差分；同时定下“不满 6 期真实单调快照不准拟合”的硬熔断规则，避免单日造假曲线。',
      '将原 Streamlit 看板模块化为 FastAPI + 商业 SaaS 9 视图工作台：基于 CSS color-scheme / light-dark() 与内联防闪烁脚本实现日间/暗夜无刷新切换并联动重绘 Plotly 图表，用原生 <dialog closedby="any"> 实现右侧滑出抽屉并配齐防滚动与退出动画降级。',
      '在独立数据库 xianyu_ops.db 里搭了店铺客服、900×900 封面大字报与卡密发货原型（dry_run 默认开启、底价硬锁、站外词拦截、BEGIN IMMEDIATE 防超卖、session_id 核验防串话）；test_ops_suite（7 模块 10 反例）、test_web_editorial（5 集成 4 反例）及 Chrome Playwright 双主题验收全过。',
    ],
    honestLimits:
      '当前 2,889 条商品标注全走本地规则引擎（未全量烧 API），60 条人工金标复核表尚未填完；店铺自动客服与发卡守护进程默认 dry_run 并通过本地仿真与浏览器验收，尚未长期接入真账号实弹发送。',
    techStack: ['Python 3.12', 'FastAPI', 'Playwright', 'SQLite WAL', 'SciPy (TRF)', 'Plotly', 'CSS light-dark()'],
    privateRepoNote: '毕设仓库答辩前暂设私有，面试可现场演示源码与工作台。',
  },
  {
    id: 'ai-job-assistant',
    index: '02',
    title: 'AI 求职助手（Web 生产版）',
    subtitle: '简历诊断、定向改写与保真 PDF 导出服务',
    role: '独立开发',
    date: '2026.08 – 2026.10',
    status: '已落地',
    statusNote: 'FastAPI 后端 + 63 项 pytest + GitHub Actions CI',
    summary:
      '帮自己和同学改简历做的小型 Web 应用：上传 PDF 或粘贴文本、浏览器端 OCR 识别招聘截图，做岗位匹配分析与定向改写，重点解决大模型乱删联系方式、刷接口和 PDF 排版崩坏三个实际问题。',
    categories: ['fullstack', 'qa'],
    media: {
      type: 'video',
      src: '/media/job-helper-demo.mp4',
      poster: '/media/job-helper-ui.jpg',
      caption: '本地实录：FastAPI Web 页面（简历解析、JD 截图 OCR 与改写流程）',
    },
    whatIDid: [
      '用 XML 标签（<UNTRUSTED_RESUME> 等）隔离不可信输入，并写了零额外模型成本的 fact_guard.py：改写完自动检查手机号、邮箱、链接是否丢失或捏造常见假信息，失败带具体原因重试一次，仍不通过直接返回 502 且不写缓存。',
      '限流与缓存（quota.py）：用 SHA-256 键做 6 小时 TTLCache 省额度；修掉了客户端伪造 X-Forwarded-For 首跳绕过限流的漏洞，在可信代理下改取最右可信 IP 限流（5 次/小时）。',
      'PDF 导出（pdf_resume.py）：前端用 Tesseract.js 做本地截图 OCR，后端用 ReportLab 嵌 NotoSansSC 字体排版；提取不到证件照时直接返回 422 拒绝静默丢照，双栏溢出时自动降级单栏。',
      '写了 63 项 pytest 覆盖限流边界、防篡改重试与 PDF 导出契约，接入 GitHub Actions，本地实测 3.17 秒全部通过。',
    ],
    honestLimits:
      '限流和缓存目前放在单进程内存里（重启清零），适合个人展示和中小流量，暂未接入 Redis 集群；早期还折腾过一个 PyInstaller 桌面封装版，因体积膨胀到 150MB+ 且前端断链已弃用，目前以 Web 版为准。',
    techStack: ['Python 3.12', 'FastAPI', 'ReportLab', 'Pydantic v2', 'Tesseract.js', 'pypdf', 'pytest'],
    links: [
      { label: 'GitHub 仓库 (aiqiuzhizhe)', url: 'https://github.com/zhangzhangwudi2-creator/aiqiuzhizhe', type: 'github' },
    ],
  },
  {
    id: 'capybara-lulu-pet',
    index: '03',
    title: '水豚噜噜原生透明桌面宠物',
    subtitle: 'PySide6 逐像素透明窗体 · 语音识别与克隆配音伴侣',
    role: '独立开发',
    date: '2026.11',
    status: '已落地',
    statusNote: '日常桌面可用 · 146 项 pytest 用例集（核心 4 模块 92 项全绿）',
    summary:
      '用 PySide6 写的 Windows 原生桌面宠物。因为早期 pywebview 方案总有白边底框且销毁容易崩溃，重写为 DWM ARGB32 预乘透明窗体，接了本地语音识别、角色记忆和克隆语音。',
    categories: ['fullstack', 'qa'],
    media: {
      type: 'video',
      src: '/media/lulu-pet-demo.mp4',
      poster: '/media/lulu-pet-poster.jpg',
      caption: '实录片段：水豚噜噜透明桌宠交互、角色对话与定制语音效果',
    },
    whatIDid: [
      '用 PySide6 WA_TranslucentBackground 与 ARGB32 预乘渲染去掉透明窗白边，运行时内存约 50MB、待机 CPU 低于 0.5%；滚轮 50%–200% 缩放时按脚底中点反算窗口坐标，防止角色扎进任务栏。',
      '用 rembg + ffmpeg 批量抠图并做边缘去白边着色，整理了 10 套造型和呼吸、眨眼、弹跳、说话等状态机。',
      '串联 Faster-Whisper 本地按键识别、兼容 SillyTavern JSON 的本地世界书记忆、SSE 流式气泡与 50ms 音频电平驱动嘴型同步。',
      '6GB 显存同时开两个本地 TTS 会爆显存，写了 9888→9880 的本地转发代理按需热切模型权重，免去第二套常驻显存开销。',
    ],
    honestLimits:
      '阿里云百炼 cosyvoice-v3-plus 仅完成了离线音色测试和 WAV 头验证，尚未接入主程序自动降级链路；目前默认走本地 9888 代理，离线时回退静音口型节拍。',
    techStack: ['Python 3.12', 'PySide6', 'Faster-Whisper', 'GPT-SoVITS', 'rembg', 'ffmpeg', 'pytest'],
    privateRepoNote: '桌宠含定制角色素材暂为私有仓库，面试可现场运行桌面程序。',
  },
];
