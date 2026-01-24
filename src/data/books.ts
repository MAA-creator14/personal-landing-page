export interface Book {
  id: string;
  title: string;
  url: string;
  description: string;
}

export const books: Book[] = [
  {
    id: 'product-management-toolkit',
    title: 'My Product Management Toolkit: Tools and Techniques to Become an Outstanding Product Manager',
    url: 'https://www.amazon.co.uk/Product-Management-Toolkit-Techniques-Outstanding/dp/1984007319/',
    description: 'A comprehensive guide to developing a physical or digital product that consumers love. This book explores product management from every angle.',
  },
  {
    id: 'managing-tension',
    title: 'Managing Product = Managing Tension: Ways to Manage the Pressure and Uncertainty of Managing Products',
    url: 'https://www.amazon.co.uk/MANAGING-PRODUCT-TENSION-Pressure-Uncertainty/dp/1839521953/',
    description: 'This book covers all the tension inherent to product management and ways to successfully navigate them.',
  },
];
