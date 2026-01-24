'use client';

import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { featuredArticles } from '@/data/articles';

export default function FeaturedArticles() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-coral" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark">
              As I learn...
            </h2>
          </div>
          <p className="text-lg text-neutral-dark/70 max-w-3xl mx-auto leading-relaxed">
            I've been blogging for 10+ years capturing things I have been learning about a wide 
            variety topics all related to digital (product). From reviewing products to sharing all 
            tools in My Product Management Toolkit, I aim to make my articles as practical and 
            actionable as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-light hover:border-coral/30"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-heading font-semibold text-neutral-dark group-hover:text-coral transition-colors flex-1">
                  {article.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-neutral-dark/40 group-hover:text-coral transition-colors flex-shrink-0 ml-2" />
              </div>
              <p className="text-neutral-dark/70 leading-relaxed">
                {article.description}
              </p>
              <div className="mt-4 text-sm text-coral font-medium group-hover:underline">
                Read Article →
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://medium.com/@MAA1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-coral font-medium hover:underline"
          >
            View all articles on Medium
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
