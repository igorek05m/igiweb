'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaCode, FaArrowRight } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';
import { techStack, otherSkills, personalProjects } from '../app/data';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [codewarsRank, setCodewarsRank] = useState<string | null>(null);
  const [studyYear] = useState(() => {
    const now = new Date();
    const startYear = 2025;
    let year = now.getFullYear() - startYear;
    if (now.getMonth() >= 9) {
      year += 1;
    }
    if (year <= 1) return '1st';
    if (year === 2) return '2nd';
    if (year === 3) return '3rd';
    return `${year}th`;
  });

  useEffect(() => {
    fetch('https://www.codewars.com/api/v1/users/Igiii')
      .then((res) => res.json())
      .then((data) => {
        if (data.ranks?.overall?.name) {
          setCodewarsRank(data.ranks.overall.name);
        }
      })
      .catch((err) => console.error('Codewars fetch error:', err));
  }, []);

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center px-6 pt-24 md:pt-20 md:pb-20 pb-12 md:p-20 relative z-10 gap-12 max-w-7xl mx-auto min-h-[calc(100vh-100px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: ['easeIn', 'easeOut'] }}
        className="flex-1 flex flex-col gap-6 text-left items-start"
      >
        <div>
          <h2 className="text-xl md:text-2xl text-blue-400 font-mono mb-2">Hello World, I am</h2>
          <h1 className="text-5xl md:text-8xl font-bold font-space text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            Igor
          </h1>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
          Computer Science Student at{' '}
          <span className="text-white font-semibold">Gdańsk University of Technology</span>. Based
          in <span className="text-white">Gdańsk / Chełmno</span>. Hobbyist self-taught fullstack
          developer mainly focused on JS and TS. Interested in widely understood IT, and maths.
        </p>

        <div className="flex flex-col gap-4 w-full">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold block">
              Main Stack
            </span>
            <div className="flex flex-wrap gap-3 justify-start">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-gray-300 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-500 cursor-default hover:scale-105"
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-xs font-mono">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold block">
              Other Skills
            </span>
            <div className="flex flex-wrap gap-2 text-sm text-gray-400 font-mono justify-start">
              {otherSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-white/5 rounded border border-white/5 hover:bg-white/5 transition-colors duration-500 hover:border-blue-400/30 hover:text-blue-400 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center mt-4 flex-wrap justify-start">
          <a
            href="https://github.com/igorek05m"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all duration-500 text-gray-400 text-xl border border-white/5 focus:outline-none hover:scale-105"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/igor-miszkurka-2709253b0/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-[#0077b5]/20 hover:text-[#0077b5] transition-all duration-500 text-gray-400 text-xl border border-white/5 focus:outline-none hover:scale-105"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin aria-hidden="true" />
          </a>

          {codewarsRank && (
            <a
              href="https://www.codewars.com/users/Igiii"
              target="_blank"
              className="flex items-center gap-2 px-4 py-3 bg-[#b1361e]/10 border border-[#b1361e]/30 rounded-full text-[#b1361e] hover:bg-[#b1361e]/20 transition-all duration-500 hover:scale-105"
            >
              <SiCodewars />
              <span className="text-xs font-bold font-mono">{codewarsRank}</span>
            </a>
          )}

          <a
            href="#personal-projects-section"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Featured: {personalProjects[0].title}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: ['easeIn', 'easeOut'], delay: 0.1 }}
        className="flex-1 w-full max-w-lg hidden md:block"
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 relative z-20 group transform hover:-translate-y-2 transition-transform duration-500"
        >
          <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-gray-400 text-xs font-mono opacity-60 font-medium">
              ~/me/portfolio.json
            </div>
            <div className="w-12" />
          </div>

          <div className="p-6 overflow-hidden relative min-h-[300px] flex items-center bg-[#1e1e1e]">
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-10' : 'opacity-5'}`}
            >
              <FaCode size={120} />
            </div>

            <div className="font-mono text-sm leading-relaxed relative z-10 w-full select-none">
              <span className="text-[#d4d4d4]">{`{`}</span>
              <div className="pl-6 space-y-1">
                <div>
                  <span className="text-[#9cdcfe]">&quot;name&quot;</span>:{' '}
                  <span className="text-[#ce9178]">&quot;Igor Miszkurka&quot;</span>,
                </div>
                <div>
                  <span className="text-[#9cdcfe]">&quot;role&quot;</span>:{' '}
                  <span className="text-[#ce9178]">&quot;Fullstack Developer&quot;</span>,
                </div>
                <div>
                  <span className="text-[#9cdcfe]">&quot;location&quot;</span>:{' '}
                  <span className="text-[#ce9178]">&quot;Gdańsk, Poland&quot;</span>,
                </div>
                <div>
                  <span className="text-[#9cdcfe]">&quot;education&quot;</span>:{' '}
                  <span className="text-[#ce9178]">
                    &quot;Gdańsk Tech (CS, {studyYear} Year)&quot;
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-[#9cdcfe]">&quot;hobbies&quot;</span>:{' '}
                  <span className="text-[#d4d4d4]">[</span>
                  <span className="text-[#ce9178]">&quot;Coding&quot;</span>,{' '}
                  <span className="text-[#ce9178]">&quot;Gaming&quot;</span>,{' '}
                  <span className="text-[#ce9178]">&quot;Music&quot;</span>
                  <span className="text-[#d4d4d4]">]</span>
                </div>
              </div>
              <span className="text-[#d4d4d4]">{`}`}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
