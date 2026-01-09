import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`bg-white rounded-lg shadow-md p-6 border border-neutral-light ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

