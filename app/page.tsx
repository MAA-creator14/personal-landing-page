import Hero from '@/components/Hero';
import FeaturedArticles from '@/components/FeaturedArticles';
import Books from '@/components/Books';
import AITools from '@/components/AITools';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedArticles />
      <Books />
      <AITools />
      <Contact />
      <Footer />
    </main>
  );
}
