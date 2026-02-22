'use client';
import { motion } from 'framer-motion';
import { socialsList } from '../app/data';
import { FaGithub, FaDiscord, FaSteam, FaInstagram, FaSpotify, FaLinkedin } from 'react-icons/fa';

const iconMap: {
  [key: string]: React.ComponentType<{
    size: number;
    className: string;
    style?: React.CSSProperties;
  }>;
} = {
  github: FaGithub,
  discord: FaDiscord,
  steam: FaSteam,
  instagram: FaInstagram,
  spotsocials: FaSpotify,
  linkedin: FaLinkedin,
};

const colorMap: { [key: string]: string } = {
  github: '#ffffff',
  discord: '#5865f2',
  steam: '#66c0f4',
  instagram: '#e4405f',
  spotsocials: '#1db954',
  linkedin: '#0077b5',
};

const SocialCard = ({ social }: { social: (typeof socialsList)[0] }) => {
  const Icon = iconMap[social.id];
  const color = colorMap[social.id] || '#ffffff';

  return (
    <motion.a
      href={social.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 w-full md:w-auto relative group overflow-hidden min-w-[200px] focus:outline-none duration-500"
      aria-label={`Connect with me on ${social.name} - ${social.nname}`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-white/5 rounded-lg border border-white/5 transition-colors">
        {Icon && (
          <Icon
            size={20}
            className="flex-shrink-0 transition-all duration-300 group-hover:brightness-125"
            style={{ color }}
          />
        )}
      </div>

      <div className="relative z-10 flex flex-col items-start gap-0.5">
        <span className="font-bold text-white text-sm leading-tight group-hover:text-blue-400 transition-colors">
          {social.name}
        </span>
        <span className="text-[11px] text-gray-500 font-mono leading-none tracking-wide">
          {social.nname}
        </span>
      </div>
    </motion.a>
  );
};

export default function Socials() {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-end">
      {socialsList.map((s, i) => (
        <SocialCard key={s.id} social={s} />
      ))}
    </div>
  );
}
