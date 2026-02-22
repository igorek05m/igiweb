import {
  FaJs,
  FaNodeJs,
  FaReact,
  FaPython,
  FaGithub,
  FaDiscord,
  FaSteam,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { SiTypescript, SiNestjs, SiNextdotjs, SiPostgresql } from 'react-icons/si';
import Image from 'next/image';

export const socialsList = [
  {
    name: 'GitHub',
    Icon: FaGithub,
    id: 'github',
    link: 'https://github.com/igorek05m',
    nname: 'igorek05m',
    color: '#ffffff',
  },
  {
    name: 'Discord',
    Icon: FaDiscord,
    id: 'discord',
    link: 'https://discord.com/users/309716406885416960',
    nname: '@igiii',
    color: '#5865F2',
  },
  {
    name: 'Steam',
    Icon: FaSteam,
    id: 'steam',
    link: 'https://steamcommunity.com/id/Igorek05m/',
    nname: '1g1',
    color: '#00adee',
  },
  {
    name: 'Instagram',
    Icon: FaInstagram,
    id: 'instagram',
    link: 'https://www.instagram.com/igiii_m_/',
    nname: '@igiii_m_',
    color: '#E1306C',
  },
  {
    name: 'LinkedIn',
    Icon: FaLinkedin,
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/igor-miszkurka-2709253b0/',
    nname: 'Igor Miszkurka',
    color: '#0A66C2',
  },
];

export const techStack = [
  {
    icon: (
      <Image
        src="/images/reactlogo.png"
        alt="React"
        width={24}
        height={24}
        className="w-6 h-6 object-contain"
      />
    ),
    name: 'React',
  },
  { icon: <SiNextdotjs className="w-6 h-6" />, name: 'Next.js' },
  {
    icon: (
      <Image
        src="/images/tslogo.png"
        alt="TypeScript"
        width={24}
        height={24}
        className="w-6 h-6 object-contain"
      />
    ),
    name: 'TypeScript',
  },
  {
    icon: (
      <Image
        src="/images/nodejslogo.png"
        alt="Node.js"
        width={24}
        height={24}
        className="w-6 h-6 object-contain"
      />
    ),
    name: 'Node.js',
  },
  {
    icon: (
      <Image
        src="/images/nestlogo.png"
        alt="Nest.js"
        width={24}
        height={24}
        className="w-6 h-6 object-contain"
      />
    ),
    name: 'Nest.js',
  },
  { icon: <SiPostgresql className="w-6 h-6 text-blue-400" />, name: 'SQL' },
];

export const otherSkills = ['Lua', 'C', 'Python', 'Git', 'Linux'];

export const commercialProjects = [
  {
    id: '01',
    title: 'Ampex',
    tags: ['React', 'Vite JS', 'UI/UX Design'],
    desc: 'Modern business card website for Ampex, specializing in construction services. The project focused on rendering speed, SEO, and mobile responsiveness.',
    link: 'https://ampex.pro',
    repo: '#',
    image: '/images/ampexWithName.png',
    color: '#fb923c',
  },
  {
    id: '02',
    title: 'TurboTapicerki',
    tags: ['Business', 'React', 'Branding'],
    desc: 'Complete implementation for an upholstery service. Includes an interactive gallery, contact form, and Google Maps integration. Minimalist design highlighting service quality.',
    link: 'https://www.turbotapicerki.pl',
    repo: '#',
    image: '/images/turbologo.png',
    color: '#3b82f6',
  },
];

export const studentProjects = [
  {
    id: '03',
    title: 'Pustka Bot',
    tags: ['Discord.js', 'Node.js', 'API'],
    desc: 'Advanced Discord bot created for community management. Offers an economy system, high-quality music playback, and moderation tools. Used by thousands of users.',
    link: 'https://igiii.onrender.com/pustka',
    repo: '#',
    image: '/images/pustka.png',
    color: '#a855f7',
    context: 'Personal / Community Project',
  },
  {
    id: '04',
    title: 'Igi Web',
    tags: ['Next.js 15', 'TypeScript', 'Portfolio'],
    desc: 'Personal portfolio documenting my path as a Fullstack Developer. Utilizes the latest Next.js features (App Router) and dynamic components.',
    link: 'https://igiii.onrender.com',
    repo: 'https://github.com/igorek05m/igiweb',
    image: '/images/igi.png',
    color: '#22c55e',
    context: 'Portfolio / Personal Brand',
  },
];
