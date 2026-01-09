import { AITool } from '@/types';

export const aiTools: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Conversational AI for ideation and problem-solving',
    icon: '💬',
    category: 'chat',
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Advanced reasoning and long-context analysis',
    icon: '🤖',
    category: 'chat',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-powered code editor for faster development',
    icon: '⌨️',
    category: 'code',
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'Research assistant with source citations',
    icon: '🔍',
    category: 'chat',
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'Writing and knowledge management assistant',
    icon: '📝',
    category: 'productivity',
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI image generation for visual concepts',
    icon: '🎨',
    category: 'design',
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer for code completion',
    icon: '👨‍💻',
    category: 'code',
  },
];

