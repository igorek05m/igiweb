'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="relative w-full py-32 px-6 md:px-20 max-w-7xl mx-auto z-10"
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ['easeIn', 'easeOut'] }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className="text-[10rem] md:text-[15rem] font-bold text-white/5 font-space leading-none absolute -top-20 -left-10 select-none -z-10"
            aria-hidden="true"
          >
            00
          </div>
          <h2
            id="about-heading"
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-space drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          >
            About{' '}
            <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Me</span>.
          </h2>
          <div className="h-1 w-32 bg-blue-500 rounded-full mb-8" aria-hidden="true" />

          <blockquote className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group hover:border-blue-500/30 transition-colors focus:outline-none">
            <div
              className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-400"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <p className="text-gray-300 font-mono leading-relaxed relative z-10">
              &quot;Computer science is not just code. It&apos;s a way of thinking about problems
              and creating tools that change reality.&quot;
            </p>
          </blockquote>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ['easeIn', 'easeOut'], delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 text-lg leading-relaxed"
          role="region"
          aria-label="About me details"
        >
          <p>
            My journey with programming started with simple curiosity –{' '}
            <span className="text-white font-semibold">how does it actually work?</span> Starting
            with simple Lua scripts (creating game mods), I quickly realized this is what I want to
            do in life.
          </p>
          <p>
            Currently, I am a{' '}
            <span className="text-blue-400 font-semibold">
              Computer Science student at Gdańsk University of Technology
            </span>
            . Studies give me solid theoretical foundations, but my own commercial and open-source
            projects teach me the most about the real world of software development.
          </p>
          <p>
            I specialize in the <span className="text-white font-semibold">React & Next.js</span>{' '}
            ecosystem, but I never limit myself to one technology. Every project is a new puzzle for
            me and an opportunity to learn - whether it&apos;s database optimization or UI design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
