'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import Image from 'next/image';

export default function LinkedInCard() {
  return (
    <motion.a
      href="https://www.linkedin.com/in/igor-miszkurka-2709253b0/"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: ['easeIn', 'easeOut'] }}
      viewport={{ once: true }}
      className="relative flex flex-col p-6 rounded-2xl bg-[#0077b5] text-white w-full overflow-hidden group hover:bg-[#0077c8] border border-blue-400/20 focus:outline-none transition-colors duration-500"
      aria-label="Connect with Igor on LinkedIn"
    >
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/20 to-transparent" />

      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-4 border-[#0077b5] overflow-hidden shadow-lg bg-black">
            <Image
              src="/images/igi.png"
              alt="Igor"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
          <div
            className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0077b5]"
            title="Available for work"
            aria-label="Status: Available for work"
          ></div>
        </div>
        <FaLinkedin className="text-4xl text-white/90" aria-hidden="true" />
      </div>

      <div className="relative z-10 mt-2">
        <h3 className="font-bold text-2xl leading-tight">Igor</h3>
        <p className="text-blue-100 text-sm mb-4">
          Fullstack Developer | React & Next.js Enthusiast
        </p>

        <div className="space-y-2 text-sm text-blue-50">
          <div className="flex items-center gap-2">
            <FaBriefcase className="opacity-70" />
            <span>Open to opportunities</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="opacity-70" />
            <span>Poland</span>
          </div>
        </div>
      </div>

      <div className="relative mt-6 pt-4 border-t border-white/20 flex justify-center">
        <span className="font-semibold text-sm uppercase tracking-wider opacity-90 transition-all duration-500 group-hover:opacity-100">
          Connect with me
        </span>
        <span
          className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-white transition-all duration-500 group-hover:w-32"
          aria-hidden="true"
        />
      </div>
    </motion.a>
  );
}
