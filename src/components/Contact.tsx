'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'marcabrahamlondon@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/abrahammarc/';
  const blogUrl = 'https://marcabraham.com/';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-neutral-dark/70">
            Get in touch to discuss product management, digital innovation, or collaboration opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.button
            onClick={handleCopyEmail}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-light hover:border-coral/30 text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <Mail className="w-6 h-6 text-coral" />
              {copied ? (
                <Check className="w-5 h-5 text-sage" />
              ) : (
                <Copy className="w-5 h-5 text-neutral-dark/40 group-hover:text-coral transition-colors" />
              )}
            </div>
            <h3 className="text-lg font-heading font-semibold text-neutral-dark mb-2 group-hover:text-coral transition-colors">
              Email
            </h3>
            <p className="text-neutral-dark/70 text-sm break-all">
              {email}
            </p>
            <p className="text-xs text-coral mt-3 font-medium">
              {copied ? 'Copied!' : 'Click to copy'}
            </p>
          </motion.button>

          <motion.a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-light hover:border-coral/30 text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <Linkedin className="w-6 h-6 text-coral" />
              <ExternalLink className="w-5 h-5 text-neutral-dark/40 group-hover:text-coral transition-colors" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-neutral-dark mb-2 group-hover:text-coral transition-colors">
              LinkedIn
            </h3>
            <p className="text-neutral-dark/70 text-sm">
              Connect on LinkedIn
            </p>
            <p className="text-xs text-coral mt-3 font-medium">
              Visit profile →
            </p>
          </motion.a>

          <motion.a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-light hover:border-coral/30 text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <ExternalLink className="w-6 h-6 text-coral" />
              <ExternalLink className="w-5 h-5 text-neutral-dark/40 group-hover:text-coral transition-colors" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-neutral-dark mb-2 group-hover:text-coral transition-colors">
              Blog
            </h3>
            <p className="text-neutral-dark/70 text-sm">
              As I learn...
            </p>
            <p className="text-xs text-coral mt-3 font-medium">
              Read articles →
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

