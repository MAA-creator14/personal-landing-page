'use client'

import { motion } from 'framer-motion';
import { Download, Briefcase, Award, Users } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';

const highlights = [
  {
    icon: Briefcase,
    title: 'Product Management',
    description: 'Leading product strategy and execution at Treatwell',
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Building and managing cross-functional product teams',
  },
  {
    icon: Award,
    title: 'SaaS Expertise',
    description: 'Specializing in B2B SaaS product development',
  },
];

export default function CVSection() {
  const handleDownload = () => {
    // Replace with actual CV file path
    const link = document.createElement('a');
    link.href = '/cv-placeholder.pdf';
    link.download = 'Marc_CV.pdf';
    link.click();
  };

  return (
    <section id="cv" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-neutral-dark/60 max-w-2xl mx-auto">
            Product Manager with expertise in SaaS and AI product development, 
            currently building innovative solutions at Treatwell.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-amber/10 rounded-lg mb-4">
                      <Icon className="w-8 h-8 text-amber" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-semibold text-neutral-dark mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-neutral-dark/60">
                      {highlight.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            onClick={handleDownload}
            variant="primary"
            className="inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            Download CV
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

