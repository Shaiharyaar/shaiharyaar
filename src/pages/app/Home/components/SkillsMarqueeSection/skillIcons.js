import {
  ApiOutlined,
  BulbOutlined,
  FileSearchOutlined,
  PlayCircleOutlined,
  RocketOutlined,
  ScheduleOutlined,
  StarOutlined,
  SwapOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'

/** Devicon paths (Simple Icons has no CDN entry for React Native; Blitz.js is not in either set). */
const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest'

export const SKILL_DEVICON_PATH = {
  'react-native': 'icons/reactnative/reactnative-original.svg',
}

export function deviconUrl(relativePath) {
  return `${DEVICON_BASE}/${relativePath}`
}

/** Simple Icons CDN slug — https://cdn.simpleicons.org/{slug} */
export const SKILL_SIMPLE_ICON_SLUG = {
  react: 'react',
  node: 'nodedotjs',
  next: 'nextdotjs',
  mongo: 'mongodb',
  express: 'express',
  ts: 'typescript',
  socketio: 'socketdotio',
  firebase: 'firebase',
  prisma: 'prisma',
  sql: 'postgresql',
  php: 'php',
  flutter: 'flutter',
}

/** Ant Design icon when no brand SVG is available */
export const SKILL_ANTD_ICON = {
  blitz: RocketOutlined,
  'problem-solving': BulbOutlined,
  leadership: TeamOutlined,
  pm: ScheduleOutlined,
  perf: ThunderboltOutlined,
  detail: FileSearchOutlined,
  adapt: SwapOutlined,
  motion: PlayCircleOutlined,
  creativity: StarOutlined,
  ws: ApiOutlined,
  webrtc: VideoCameraOutlined,
}

export function simpleIconCdnUrl(slug) {
  return `https://cdn.simpleicons.org/${slug}`
}
