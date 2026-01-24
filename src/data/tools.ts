export interface ToolLink {
  name: string;
  url: string;
}

export interface ToolCategoryRow {
  category: string;
  tools: ToolLink[];
}

export const toolsTableRows: ToolCategoryRow[] = [
  {
    category: 'Prototyping',
    tools: [
      { name: 'Bolt', url: 'https://bolt.new/' },
      { name: 'Lovable', url: 'https://lovable.dev/' },
      { name: 'Alloy', url: 'https://www.alloy.ai/' },
    ],
  },
  {
    category: 'Research',
    tools: [
      { name: 'OpenAI', url: 'https://openai.com/' },
      { name: 'Perplexity', url: 'https://www.perplexity.ai/' },
    ],
  },
  {
    category: 'Coding',
    tools: [
      { name: 'Cursor', url: 'https://www.cursor.com/' },
      { name: 'Claude Code', url: 'https://www.anthropic.com/claude-code' },
    ],
  },
  {
    category: 'Productivity',
    tools: [
      { name: 'Notion', url: 'https://www.notion.so/' },
      { name: 'Superwhisper', url: 'https://superwhisper.com/' },
    ],
  },
  {
    category: 'Agentic',
    tools: [
      { name: 'Cassidy', url: 'https://www.cassidyai.com/' },
      { name: 'Gumloop', url: 'https://www.gumloop.com/' },
    ],
  },
];

