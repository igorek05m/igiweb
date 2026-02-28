'use client';
import Socials from './Socials';

export default function Contact() {
  return (
    <section
      className="relative w-full py-16 px-6 md:px-20 max-w-7xl mx-auto z-10"
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-t border-white/10 pt-16">
        <div className="space-y-4 max-w-lg">
          <h2 className="font-space text-3xl md:text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Let&apos;s work together.
          </h2>
          <p className="text-gray-400">
            Have a project in mind or just want to say hi? I&apos;m always open to new ideas and
            collaborations.
          </p>
          <div className="pt-4">
            <a
              href="https://discord.com/users/309716406885416960"
              target="_blank"
              className="text-xl md:text-2xl font-mono text-white hover:text-blue-400 transition-colors flex items-center gap-3"
            >
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              Discord: igiii
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-start md:items-end w-full md:w-auto">
          <div className="text-right">
            <h3 className="font-space text-xl font-bold text-white mb-4 hidden md:block">
              Connect
            </h3>
            <Socials />
          </div>

          <div className="text-gray-600 text-sm font-mono flex flex-col items-start md:items-end gap-1 mt-4">
            <p>© {new Date().getFullYear()} Igor.</p>
            <p>Built with Next.js & Tailwind.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
