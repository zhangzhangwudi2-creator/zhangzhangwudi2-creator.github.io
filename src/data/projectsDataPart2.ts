import { ProjectDetail } from './types';

export const PROJECTS_PART_2: ProjectDetail[] = [
  {
    id: 'kerren-tiktok-workflow',
    index: '04',
    title: 'TikTok 电商视频脚本与分镜工作台',
    subtitle: '杭州凯伦广告实习项目 · 离职时做到一半并完成源码交接',
    role: 'AI 应用开发实习生',
    date: '2026.07 – 2026.08',
    status: '阶段交接',
    statusNote: '完成控制台、脚本/分镜改写与样片打包；TikTok 稳定爬取与全自动剪辑未完成',
    summary:
      '暑期在杭州凯伦实习期间参与搭的 Windows 本地 Web 平台（FastAPI），目标是把找参考视频、生成带货脚本/分镜提示词、调视频 API 和导出给剪辑师串起来；离职前跑通了控制台和单条样片交接，但整条链路没有全部做完。',
    categories: ['fullstack', 'wip'],
    media: {
      type: 'image',
      src: '/media/tiktok-workflow-ui.jpg',
      caption: '空数据沙箱本地渲染的 FastAPI 控制台界面（已隐藏任何业务与客户信息）',
    },
    whatIDid: [
      '用 FastAPI 搭起任务列表、新建任务、素材上传、远程视频直链导入与多 URL 候选池页面，状态落盘到本地 JSON 并带 run_manifest / audit 记录。',
      '接入 DeepSeek 脚本与分镜生成、人工审核门禁、Prompt 编辑重写，以及 Wan 视频生成 API 适配层，补了导出 ZIP 顺序缺陷并跑通 1 套带字幕和分镜说明的 CapCut 样片交接包。',
      '离职前整理了 7 份交接文档（运行方式、功能状态表、未完成清单与安全边界），明确区分已验证模块和未验证模块，方便接手人继续开发。',
    ],
    honestLimits:
      '明确未完成部分：TikTok 爆款自动抓取受平台反爬和登录限制，仅写到 yt-dlp 公开元数据与单测原型；自动剪辑成片、批量夜间任务以及发布后的数据回填在离职时均未做完。遵循实习保密约定，本站不公开源码与任何公司业务数据。',
    techStack: ['Python', 'FastAPI', 'DeepSeek API', 'Wan API 适配', 'FFmpeg', 'yt-dlp 原型', 'pytest'],
  },
  {
    id: 'local-tts-gateway-toolkit',
    index: '05',
    title: '本地语音转发代理与服务控制面板',
    subtitle: '个人自用折腾工具 · 显存冲突保护、LRU 缓存与桌面启停窗',
    role: '个人自用工具',
    date: '2026.10 – 2026.11',
    status: '个人工具',
    statusNote: '纯个人自用配套工具，不对外公开服务入口',
    summary:
      '自己折腾本地大模型聊天和克隆语音配音时写的辅助工程：解决 6GB 显卡跑语音合成与其它本地程序抢显存崩溃、重复台词合成慢、每次启停要开四五个黑框的问题。',
    categories: ['fullstack', 'qa'],
    media: {
      type: 'image',
      src: '/media/tavern-panel.jpg',
      caption: 'PySide6 本地服务控制面板实拍（已脱敏，不展示任何个人公网地址）',
    },
    whatIDid: [
      '用 Node.js 给本地 GPT-SoVITS 语音接口套了一层代理：限制排队上限（最多 6 个，超出返回 429）、转发前检测本机其它占显存端口（8188/9888）避免显存打架崩溃，并加了 16 条内存 LRU 缓存（重复台词命中后从 ~2 秒降到 14 毫秒）。',
      '用 PySide6 写了桌面控制面板统一查看本地服务状态、启停和日志，同时把隧道脚本里的令牌改成了环境变量传入，避免命令行参数直接暴露凭据。',
      '用 Python 标准库写了一套 76 项黑盒检查脚本（含 6 项非法输入反例），用来在改完配置或插件后快速回归，当前 76/76 通过（7.47 秒）。',
    ],
    honestLimits:
      '本质是个人日常折腾和学习用的本地配套工具（调用现成开源前端与本地转发），纯个人自用，不对外开放任何访问链接。',
    techStack: ['Node.js', 'Python 3.12', 'PySide6', 'GPT-SoVITS', 'SQLite WAL', 'Cloudflare Tunnel'],
  },
  {
    id: 'ai-novel-video-studio',
    index: '06',
    title: 'AI 小说转漫剧分镜与剪映草稿工作台',
    subtitle: '业余实验项目（开发中 · 尚未完成真出片闭环）',
    role: '独立开发中',
    date: '2026.11 – 至今',
    status: '开发中',
    statusNote: '未完成：本地模块与 81 项 Mock 测试通过，尚未完成真实出片验证',
    summary:
      '想把小说章节自动拆成 4~6 秒分镜提示词、调工具生图生视频再拼成剪映草稿的实验工具。目前只把核心模块、故障转移路由和本地测试跑通，还没做到稳定出片。',
    categories: ['wip', 'qa'],
    media: {
      type: 'image',
      src: '/media/novel-video-ui.jpg',
      caption: '本地运行中的 FastAPI 分镜工作台界面（仍在迭代中）',
    },
    whatIDid: [
      '搭通了小说 SQLite 章节读取、场景拆解、4~6 秒分镜提示词校验和 pyJianYingDraft 剪映草稿导出（含 UTF-8 BOM 字幕）。',
      '写了单并发顺序故障转移路由（SequentialFailoverRouter）：支持仅配本地中转时自动切 OpenAI 协议、本地回环自动关闭代理环境变量防劫持、429 轮转与日志正则脱敏密钥。',
      '排查并修掉了调用 gflow project create 时的位置参数错配 Bug，分镜回退时显式记录原因而不再静默吞错；目前 81 项单元与 Mock E2E 测试全部通过（27.21 秒）。',
    ],
    honestLimits:
      '仍在开发中：尚未填入正式账号跑通连续生成真实视频素材，当前验证均基于本地 Mock 和干跑模式。',
    techStack: ['Python 3.12', 'FastAPI', 'Pydantic v2', 'pyJianYingDraft', 'gflow-cli', 'pytest'],
  },
];
