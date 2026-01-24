export interface Article {
  id: string;
  title: string;
  url: string;
  description: string;
  category?: string;
}

export const featuredArticles: Article[] = [
  {
    id: 'defensibility',
    title: 'My Product Management Toolkit (68): Defensibility',
    url: 'https://marcabraham.com/2025/12/29/my-product-management-toolkit-68-defensibility/',
    description: 'Building defensible products isn\'t about being first to market or having the most features—it\'s about designing moats into your product from day one.',
  },
  {
    id: 'personal-crm',
    title: 'Building a personal CRM in Lovable',
    url: 'https://marcabraham.com/2025/11/10/building-a-personal-crm-in-lovable/,
    description: 'Sharing my personal learnings from building my personal CRM product here, enabling people to add key contacts and track their interactions.',
  },
  {
    id: 'agentic-shopping',
    title: 'The rise of Agentic Shopping',
    url: 'https://marcabraham.com/2025/10/30/the-rise-of-agentic-shopping/',
    description: 'Agentic shopping will change how we discover and buy things online. Open protocols like ACP and AP2 are laying the groundwork for AI shopping agents that can work across different platforms and retailers.',
  },
];
