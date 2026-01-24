'use client';

import { motion } from 'framer-motion';
import { Book, ExternalLink } from 'lucide-react';
import { books } from '@/data/books';

export default function Books() {
  return (
    <section className="py-20 px-4 bg-neutral-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Book className="w-8 h-8 text-amber" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark">
              Books
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book, index) => (
            <motion.a
              key={book.id}
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-light hover:border-amber/30"
            >
              <div className="flex items-start justify-between mb-4">
                <Book className="w-6 h-6 text-amber flex-shrink-0 mt-1" />
                <ExternalLink className="w-5 h-5 text-neutral-dark/40 group-hover:text-amber transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-neutral-dark mb-4 group-hover:text-amber transition-colors">
                {book.title}
              </h3>
              <p className="text-neutral-dark/70 leading-relaxed">
                {book.description}
              </p>
              <div className="mt-6 text-sm text-amber font-medium group-hover:underline">
                Get the book →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
