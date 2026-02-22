'use client';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export default function AuroraBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 350);
      mouseY.set(e.clientY - 350);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020202]">
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-15 pointer-events-none blur-[120px]"
        style={{
          x,
          y,
          background: 'radial-gradient(circle, #3b82f6 0%, #8b5cf6 30%, transparent 70%)',
        }}
      />
    </div>
  );
}
