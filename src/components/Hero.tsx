'use client'

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-heading font-bold text-neutral-dark mb-4"
        >
          Marc
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-neutral-dark/80 mb-8 font-medium"
        >
          Product Manager at Treatwell
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-neutral-dark/60 max-w-2xl mx-auto"
        >
          Building SaaS products and exploring AI tools to create better user experiences
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToContent}
          aria-label="Scroll to content"
          className="flex flex-col items-center text-neutral-dark/60 hover:text-coral transition-colors"
          whileHover={{ y: 5 }}
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}

