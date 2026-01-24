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
    url: 'https://www.amazon.com/Product-Management-Toolkit-Techniques-Outstanding/dp/XXXXXXXXXX',
    description: 'A comprehensive guide to developing a physical or digital product that consumers love. This book explores product management from every angle, including consumer analysis, personnel management, and product evolution. Whether you\'re developing a product for a small start-up or a multinational corporation, this book will prove invaluable.',
  },
  {
    id: 'managing-tension',
    title: 'Managing Product = Managing Tension: Ways to Manage the Pressure and Uncertainty of Managing Products',
    url: 'https://www.amazon.com/Managing-Product-Tension-Pressure-Uncertainty/dp/XXXXXXXXXX',
    description: 'When consumers use a product or a service, the experience generates an emotion. For those of us who create products or services, our primary focus is on the customer, helping them achieve their desired outcome and attempting to stimulate positive customer emotions. However, in our relentless pursuit of satisfying customer needs, many product people or "makers" fail to spend enough time reflecting and managing our own emotions. "Managing Product = Managing Tension" brings the pressures and unknowns inherent in managing products to the fore and offers practical solutions about how to harness them - ultimately turning them to your advantage in order to help develop world-class products.',
  },
];
