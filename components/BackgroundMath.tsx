'use client';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const SYMBOLS = [
  '∫',
  '∑',
  'π',
  '∞',
  'Δ',
  '√',
  'λ',
  'θ',
  '≈',
  '≠',
  '∂',
  '∇',
  '∈',
  '∉',
  '∪',
  '∩',
  '∀',
  '∃',
  '∄',
  '∧',
  '∨',
];

interface SymbolData {
  id: number;
  char: string;
  left: string;
  top: string;
  speed: number;
}

export default function BackgroundMath() {
  const [mounted, setMounted] = useState(false);

  const [symbols] = useState<SymbolData[]>(() =>
    Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      char: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      speed: Math.random() * 0.15 + 0.05,
    }))
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const { scrollY } = useScroll();

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {symbols.map((sym) => (
        <ParallaxSymbol key={sym.id} symbol={sym} scrollY={scrollY} />
      ))}
    </div>
  );
}

function ParallaxSymbol({ symbol, scrollY }: { symbol: SymbolData; scrollY: MotionValue<number> }) {
  const y = useTransform(scrollY, (val: number) => val * symbol.speed);

  return (
    <motion.span
      style={{
        left: symbol.left,
        top: symbol.top,
        y,
      }}
      className="absolute font-mono text-2xl text-blue-500/10 select-none will-change-transform"
    >
      {symbol.char}
    </motion.span>
  );
}
