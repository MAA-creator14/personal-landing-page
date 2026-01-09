'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Copy, Check, ExternalLink } from 'lucide-react';
import Card from './ui/Card';

const contactItems = [
  {
    id: 'email',
    label: 'Email',
    value: 'marc@example.com', // Replace with actual email
    icon: Mail,
    action: 'copy',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'https://linkedin.com/in/marc', // Replace with actual LinkedIn
    icon: Linkedin,
    action: 'link',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string, id: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark mb-12 text-center"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  hover={true}
                  className="cursor-pointer h-full"
                  onClick={() => {
                    if (item.action === 'copy') {
                      handleCopy(item.value, item.id);
                    } else {
                      handleLink(item.value);
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-coral/10 rounded-lg">
                        <Icon className="w-6 h-6 text-coral" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-neutral-dark mb-1">
                          {item.label}
                        </h3>
                        <p className="text-sm text-neutral-dark/60">
                          {item.action === 'copy' ? 'Click to copy' : 'Visit profile'}
                        </p>
                      </div>
                    </div>
                    {item.action === 'copy' ? (
                      <div className="text-coral">
                        {copied === item.id ? (
                          <Check className="w-5 h-5" aria-label="Copied" />
                        ) : (
                          <Copy className="w-5 h-5" aria-hidden="true" />
                        )}
                      </div>
                    ) : (
                      <ExternalLink className="w-5 h-5 text-coral" aria-hidden="true" />
                    )}
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

