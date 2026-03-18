'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import { commercialProjects, personalProjects, studentProjects } from '../app/data';

interface Project {
  id: string;
  title: string;
  tags: string[];
  desc: string;
  link: string;
  repo: string;
  image: string;
  color: string;
  context?: string;
}

function Card({ project }: { project: Project }) {
  return (
    <div
      id={`project-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
      className="flex items-center justify-center w-full mb-16 md:mb-32 last:mb-0 scroll-mt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: ['easeIn', 'easeOut'], delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col relative h-auto md:h-[600px] w-full max-w-[1100px] rounded-[32px] p-6 md:p-12 border border-white/10 shadow-2xl overflow-hidden bg-[#0a0a0a] group duration-500 hover:border-white/30 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] z-10"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${project.color}15 0%, transparent 70%)`,
          }}
        />

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-20 h-full pointer-events-auto">
          <div className="flex-1 flex flex-col h-full justify-between pointer-events-auto">
            <div>
              <div className="flex items-center justify-between mb-4 md:mb-8">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 tracking-tight group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className="font-space text-6xl font-bold text-white/5 select-none absolute right-8 top-8 md:static md:text-white/10"
                  style={{ color: `${project.color}15` }}
                >
                  /{project.id}
                </span>
              </div>

              <h2 className="font-space text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white tracking-tight leading-none group-hover:text-white transition-colors">
                {project.title}
              </h2>
              <p className="text-sm md:text-lg text-gray-400 leading-relaxed max-w-md">
                {project.desc}
              </p>

              {project.context && (
                <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/5 max-w-md">
                  <span className="text-xs font-mono text-gray-500 uppercase block mb-1">
                    Context
                  </span>
                  <p className="text-sm text-gray-300">{project.context}</p>
                </div>
              )}
            </div>

            <div className="flex gap-3 md:gap-4 mt-6 md:mt-8 flex-wrap">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                href={project.link}
                target="_blank"
                className="group/btn px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-2xl font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 relative overflow-hidden shadow-lg hover:shadow-white/20 cursor-pointer pointer-events-auto z-50"
                aria-disabled={project.link === '#'}
                onClick={project.link === '#' ? (e) => e.preventDefault() : undefined}
              >
                <span className="relative z-10 flex items-center gap-2 text-sm uppercase tracking-wide">
                  {project.link === '#' ? 'Private' : 'Visit Site'}
                  <FaExternalLinkAlt size={12} />
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                href={project.repo}
                target="_blank"
                className="px-6 md:px-8 py-3 md:py-4 border border-white/10 bg-white/5 text-white rounded-2xl font-bold hover:bg-white/10 hover:border-white/20 transition-colors flex items-center gap-2 backdrop-blur-md shadow-lg cursor-pointer pointer-events-auto z-50"
                aria-disabled={project.repo === '#'}
                onClick={project.repo === '#' ? (e) => e.preventDefault() : undefined}
              >
                <FaGithub size={16} />
                <span className="text-sm uppercase tracking-wide">
                  {project.repo === '#' || project.repo.includes('Ask') ? 'Private' : 'Code'}
                </span>
              </motion.a>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center relative group/image h-[280px] md:h-full md:max-h-[400px] my-auto pointer-events-none">
            <div className="relative w-full h-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1 flex flex-col pointer-events-auto">
              <div className="h-8 bg-[#2d2d2d] border-b border-white/5 flex items-center px-4 gap-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <div className="ml-4 w-full h-4 bg-white/5 rounded-full max-w-[200px]" />
              </div>

              <div
                className="w-full h-full relative flex items-center justify-center p-8 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #0a0a0a 0%, ${project.color}08 100%)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                <div
                  className="absolute w-32 h-32 blur-[60px] rounded-full opacity-20 transition-all duration-700 group-hover:opacity-40"
                  style={{ backgroundColor: project.color }}
                />

                <div className="relative w-[85%] h-[85%] z-10 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 32vw"
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="relative mt-0 px-4 pb-20">
      <div className="relative mb-20">
        <div className="px-6 md:px-20 max-w-7xl mx-auto pt-4 pb-20 z-0 text-white pointer-events-none transition-all">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-500 font-mono text-sm tracking-widest uppercase font-bold">
                Selected Works
              </span>
            </div>
            <h2 className="font-space text-4xl md:text-6xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              Commercial Projects
            </h2>
          </div>
        </div>

        <div className="relative z-10 w-full flex flex-col items-center">
          {commercialProjects.map((project, i) => (
            <Card key={i} project={project} />
          ))}
        </div>
      </div>

      <div id="personal-projects-section" className="relative mb-20 scroll-mt-32">
        <div className="px-6 md:px-20 max-w-7xl mx-auto pt-4 pb-20 z-0 text-white pointer-events-none transition-all">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-purple-500 font-mono text-sm tracking-widest uppercase font-bold">
                Exploration
              </span>
            </div>
            <h2 className="font-space text-4xl md:text-6xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              Personal Projects
            </h2>
            <p className="max-w-2xl text-gray-400 text-lg leading-relaxed mt-2 font-light tracking-wide mix-blend-normal">
              Projects created out of passion for technology. This is where I experiment with new
              solutions, learn by doing, and develop my skills as a developer.
            </p>
          </div>
        </div>

        <div className="relative z-10 w-full flex flex-col items-center">
          {personalProjects.map((project, i) => (
            <Card key={i} project={project} />
          ))}
        </div>
      </div>

      {studentProjects.length > 0 && (
        <div className="relative mb-20">
          <div className="px-6 md:px-20 max-w-7xl mx-auto pt-4 pb-20 z-0 text-white pointer-events-none transition-all">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-500 font-mono text-sm tracking-widest uppercase font-bold">
                  Academic
                </span>
              </div>
              <h2 className="font-space text-4xl md:text-6xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                Student Projects
              </h2>
              <p className="max-w-2xl text-gray-400 text-lg leading-relaxed mt-2 font-light tracking-wide mix-blend-normal">
                Projects and assignments completed during my Computer Science studies at GUT
              </p>
            </div>
          </div>

          <div className="relative z-10 w-full flex flex-col items-center">
            {studentProjects.map((project, i) => (
              <Card key={i} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
