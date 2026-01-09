'use client'

import { motion } from 'framer-motion';
import { aiTools } from '@/data/aiTools';
import Card from './ui/Card';

const categoryColors: Record<string, { bg: string; text: string }> = {
  chat: { bg: 'bg-coral/10', text: 'text-coral' },
  code: { bg: 'bg-sage/10', text: 'text-sage' },
  design: { bg: 'bg-amber/10', text: 'text-amber' },
  productivity: { bg: 'bg-sage/10', text: 'text-sage' },
};

export default function AITools() {
  return (
    <section id="ai-tools" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark mb-4">
            AI Tools I Use
          </h2>
          <p className="text-lg text-neutral-dark/60 max-w-2xl mx-auto">
            A curated selection of AI tools that help me build better products and work more efficiently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTools.map((tool, index) => {
            const colors = categoryColors[tool.category] || categoryColors.chat;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="h-full hover:border-coral transition-colors duration-200"
                >
                  <div className="flex flex-col h-full">
                    <div className="text-4xl mb-4" aria-hidden="true">
                      {tool.icon}
                    </div>
                    <h3 className="font-heading font-semibold text-neutral-dark mb-2 text-xl">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-neutral-dark/60 flex-grow">
                      {tool.description}
                    </p>
                    <div className="mt-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
                      >
                        {tool.category}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

