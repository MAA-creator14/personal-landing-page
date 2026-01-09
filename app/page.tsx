import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import CVSection from '@/components/CVSection';
import AITools from '@/components/AITools';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Contact />
      <CVSection />
      <AITools />
      <Footer />
    </main>
  );
}
