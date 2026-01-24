'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { toolsTableRows } from '@/data/tools';

export default function AITools() {
  return (
    <section className="py-20 px-4 bg-neutral-light">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-sage" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark">
              Tools
            </h2>
          </div>
          <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            A snapshot of the tools I use across prototyping, research, coding, productivity, and agentic workflows
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm border border-neutral-light"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-neutral-light bg-neutral-light/50">
                  <th className="px-4 py-3 text-sm font-heading font-semibold text-neutral-dark w-32">
                    Category
                  </th>
                  <th className="px-4 py-3 text-sm font-heading font-semibold text-neutral-dark">
                    Tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {toolsTableRows.map((row) => (
                  <tr key={row.category} className="border-b border-neutral-light last:border-b-0">
                    <td className="px-4 py-4 align-top">
                      <span className="font-medium text-neutral-dark">
                        {row.category}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <ul className="space-y-2">
                        {row.tools.map((tool) => (
                          <li key={tool.name}>
                            <a
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-neutral-dark/80 hover:text-sage hover:underline transition-colors"
                            >
                              {tool.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

