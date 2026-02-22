'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function NavigationDock() {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-0 inset-x-0 md:inset-x-auto md:bottom-8 md:left-1/2 md:-translate-x-1/2 z-50 inline-flex gap-3 md:gap-8 px-4 md:px-10 py-4 md:rounded-full rounded-none border-t md:border border-white/10 bg-[#020202]/80 backdrop-blur-xl shadow-2xl items-center justify-center w-full md:w-max"
      aria-label="Main navigation"
      role="navigation"
    >
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm md:text-sm text-gray-300 font-semibold hover:text-white transition-all duration-300 relative group focus:outline-none rounded-lg px-3 py-2"
          aria-label={`Navigate to ${link.name} section`}
        >
          {link.name}
          <span
            className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"
            aria-hidden="true"
          />
        </Link>
      ))}
    </motion.nav>
  );
}
