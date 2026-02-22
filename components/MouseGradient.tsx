'use client';
import { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function MouseGradient() {
  const smoothX = useSpring(0, { damping: 20, stiffness: 300, mass: 0.5 });
  const smoothY = useSpring(0, { damping: 20, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [smoothX, smoothY]);

  return (
    <motion.div
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{
        background: `radial-gradient(300px circle at ${smoothX.get()}px ${smoothY.get()}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
        }}
      />
    </motion.div>
  );
}
