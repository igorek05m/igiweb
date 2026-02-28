'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SiCodewars } from 'react-icons/si';

interface CodewarsUser {
  username: string;
  honor: number;
  ranks: {
    overall: {
      name: string;
      score: number;
      color: string;
    };
  };
  codeChallenges: {
    totalCompleted: number;
  };
}

export default function CodewarsStats() {
  const [stats, setStats] = useState<CodewarsUser | null>(null);

  useEffect(() => {
    fetch('https://www.codewars.com/api/v1/users/Igiii')
      .then((res) => res.json())
      .then((data) => {
        if (data.username) setStats(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!stats) return null;

  return (
    <motion.a
      href={`https://www.codewars.com/users/${stats.username}`}
      target="_blank"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: ['easeIn', 'easeOut'], delay: 0.4 }}
      viewport={{ once: true }}
      className="flex flex-col p-6 rounded-2xl bg-[#bb432c] hover:bg-[#b1361e] text-white w-full transition-colors duration-500 relative overflow-hidden"
    >
      <SiCodewars className="absolute -right-4 -bottom-4 text-9xl text-black/10 rotate-12" />

      <div className="flex items-center gap-3 mb-4 relative z-10">
        <SiCodewars className="text-4xl" />
        <div>
          <h3 className="font-bold text-lg leading-none">{stats.username}</h3>
          <span className="text-white/80 text-sm">Codewars</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 relative z-10 mt-auto">
        <div>
          <span className="text-white/70 text-xs uppercase block">Rank</span>
          <span
            className="font-bold text-xl"
            style={{
              color: stats.ranks.overall.color === 'blue' ? '#add8e6' : stats.ranks.overall.color,
            }}
          >
            {stats.ranks.overall.name}
          </span>
        </div>
        <div>
          <span className="text-white/70 text-xs uppercase block">Honor</span>
          <span className="font-bold text-xl">{stats.honor}</span>
        </div>
        <div className="col-span-2">
          <span className="text-white/70 text-xs uppercase block">Completed Kata</span>
          <span className="font-bold text-xl">{stats.codeChallenges.totalCompleted}</span>
        </div>
      </div>
    </motion.a>
  );
}
