export interface AITool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'chat' | 'code' | 'design' | 'productivity';
}

