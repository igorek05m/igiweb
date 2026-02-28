'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaBook, FaGithub } from 'react-icons/fa';

interface GithubUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  login: string;
  html_url: string;
}

export default function GithubStats() {
  const [stats, setStats] = useState<GithubUser | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/igorek05m')
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
      })
      .catch((err) => {
        console.error('GitHub Stats Error:', err);
      });
  }, []);

  if (!stats) return null;

  return (
    <motion.a
      href={stats.html_url}
      target="_blank"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: ['easeIn', 'easeOut'], delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col p-6 rounded-2xl bg-[#161b22] border border-gray-700 hover:border-blue-500/50 transition-colors duration-500 text-white w-full group relative overflow-hidden"
    >
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <Image
          src={stats.avatar_url}
          alt="GitHub Avatar"
          width={64}
          height={64}
          priority
          className="w-16 h-16 rounded-full border-2 border-gray-600 group-hover:border-blue-500 transition-colors duration-500"
        />
        <div>
          <h3 className="font-bold text-2xl leading-none">{stats.login}</h3>
          <span className="text-gray-400 text-sm font-mono">github.com/{stats.login}</span>
        </div>
        <FaGithub
          className="text-4xl text-white/90 absolute top-0 right-0 opacity-30 font-black text-6xl select-none pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <div className="flex justify-around mb-6 relative z-10 bg-black/20 p-3 rounded-xl border border-white/5">
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs uppercase tracking-wider">Repos</span>
          <span className="font-bold text-xl flex items-center gap-1">
            <FaBook className="text-sm text-blue-400" /> {stats.public_repos}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs uppercase tracking-wider">Followers</span>
          <span className="font-bold text-xl">{stats.followers}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs uppercase tracking-wider">Following</span>
          <span className="font-bold text-xl">{stats.following}</span>
        </div>
      </div>

      <div className="relative z-10">
        <span className="text-[10px] text-gray-500 mb-2 block uppercase font-bold tracking-widest text-center">
          Contribution Graph (YTD)
        </span>
        <div className="overflow-hidden rounded-lg bg-[#0d1117] p-3 border border-gray-800">
          <Image
            src={`https://ghchart.rshah.org/3b82f6/${stats.login}`}
            alt="GitHub Contribution Graph"
            width={100}
            height={100}
            unoptimized
            className="w-full opacity-90 group-hover:opacity-100 transition-opacity filter hue-rotate-15 contrast-125 duration-500"
          />
        </div>
      </div>
    </motion.a>
  );
}
