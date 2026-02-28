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
            <div className="relative z-10">
              <p className="text-gray-300 font-mono text-lg leading-relaxed italic">
                &quot;I know that I know nothing.&quot;
              </p>
              <footer className="mt-4 text-sm font-semibold text-blue-400/80">— Socrates</footer>
            </div>
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
            I didn&apos;t start coding with any grand plan in mind. Back in primary school, I signed
            up for some basic after-school robotics classes. We played around with simple Arduino
            kits and <span className="text-white font-semibold">Python</span>, and I just wanted to
            see how it all works. It kinda escalated from there.
          </p>
          <p>
            Since then, <span className="text-white font-semibold">JavaScript</span> became my main
            playground. Whether it&apos;s building the frontend, writing{' '}
            <span className="text-white font-semibold">Node.js</span> on the backend, or just
            messing with the overall JS ecosystem, that&apos;s where I feel most at home. I
            don&apos;t like boxing myself in, though – I still jump into Python now and then, or
            whatever tool gets the job done.
          </p>
          <p>
            Right now, I&apos;m studying Computer Science at{' '}
            <span className="text-blue-400 font-semibold">Gdańsk University of Technology</span>.
            It&apos;s a pretty hands-on place with a heavy focus on labs, team projects, and an
            engineering approach to problem-solving. But at the end of the day, I still learn the
            most simply by building my own stuff and fixing bugs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
