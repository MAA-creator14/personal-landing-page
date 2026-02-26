'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-neutral-dark mb-6">
            Marc Abraham
          </h1>
          <p className="text-xl md:text-2xl text-neutral-dark/70 mb-8 font-medium">

          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-left max-w-3xl mx-auto"
        >
          <div className="space-y-4 text-lg md:text-xl text-neutral-dark/80 leading-relaxed">
            <p>
              I&apos;m Marc Abraham, an experienced product person, interested in everything digital. 
              I&apos;ve worked for a large number of successful digital organisations, at Intercom, 
              ASOS and WorldFirst among others.
            </p>
            <p>
              You can find my learnings in my blog titled &quot;As I learn&quot; and my books &quot;My Product 
              Management Toolkit&quot; and &quot;Managing Product = Managing Tension&quot;.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <ArrowDown className="w-6 h-6 text-neutral-dark/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
