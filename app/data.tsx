import { FaGithub, FaDiscord, FaSteam, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiNextdotjs, SiPostgresql, SiMongodb, SiTailwindcss } from 'react-icons/si';
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
  { icon: <SiMongodb className="w-6 h-6 text-green-500" />, name: 'MongoDB' },
  { icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />, name: 'Tailwind' },
];

export const otherSkills = ['Lua', 'C', 'C++', 'Python', 'PHP', 'Git', 'Linux'];

export const commercialProjects = [
  {
    id: '01',
    title: 'Ampex',
    tags: ['React', 'Vite JS', 'Tailwind CSS'],
    desc: 'A modern, bilingual (PL/EN) corporate website for a distributor of European building hardware. Focused on fast loading times, responsive design, and clear presentation of the product offer.',
    link: 'https://ampex.pro',
    repo: '#',
    image: '/images/ampexWithName.png',
    color: '#fb923c',
  },
  {
    id: '02',
    title: 'TurboTapicerki',
    tags: ['React', 'Tailwind CSS', 'Pricing Page'],
    desc: 'A straightforward, single-page website for a local upholstery cleaning service. It serves as a digital price list, displaying clear tables for various cleaning services and basic contact information.',
    link: 'https://turbotapicerki.vercel.app',
    repo: '#',
    image: '/images/turbologo.png',
    color: '#3b82f6',
  },
];

export const personalProjects = [
  {
    id: '01',
    title: 'Daily GeoGame',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Daily Geography Game'],
    desc: 'A simple, daily geography guessing game inspired by Wordle, Travle and Globle. Each day presents a new location to guess, with hints based on distance and direction. Built with Next.js and TypeScript, it features a clean design and responsive layout.',
    link: 'https://daily-geogame.vercel.app',
    repo: 'https://github.com/igorek05m/daily-geogame',
    image: '/images/geogame.png',
    color: '#f59e0b',
    context: 'Personal',
  },
  {
    id: '02',
    title: 'Pustka Bot',
    tags: ['Discord.js', 'Node.js', 'Markov Chains'],
    desc: 'A Discord bot created for fun and learning. It offers various commands for server management, entertainment, and utility. Features markov chain text generation. Built with Discord.js and Node.js. ',
    link: '#',
    repo: '#',
    image: '/images/pustka.png',
    color: '#a855f7',
    context: 'Personal',
  },
  {
    id: '03',
    title: 'Personal Portfolio',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    desc: 'The website you are currently browsing. A modern, interactive portfolio built with Next.js. Features smooth animations, dynamic data fetching (GitHub/Codewars stats), and a fully responsive design.',
    link: 'https://igiii.is-a.dev',
    repo: 'https://github.com/igorek05m/igiweb',
    image: '/images/portfolio.png',
    color: '#22c55e',
    context: 'Portfolio',
  },
];

export const studentProjects = [
  {
    id: '01',
    title: 'Photo Gallery',
    tags: ['PHP', 'MongoDB'],
    desc: 'A dynamic photo gallery project created for the Web Applications (WAI) course. Built with PHP, featuring server-side rendering and image management.',
    link: '#',
    repo: 'https://github.com/igorek05m/PG_wai_photogallery',
    image: '/images/gallery-placeholder.svg',
    color: '#3b82f6',
    context: 'Web Applications Course',
  },
  {
    id: '02',
    title: 'Swallow Stars',
    tags: ['C++', 'ncurses', 'Terminal Game'],
    desc: 'A terminal-based game developed for the Basics of Programming (PP) course. Built using the ncurses library, featuring ASCII graphics and keyboard controls.',
    link: '#',
    repo: 'https://github.com/igorek05m/PG_pp_SwallowStars',
    image: '/images/swallowStars.png',
    color: '#8b5cf6',
    context: 'Basics of Programming Course',
  },
  {
    id: '03',
    title: 'Beat Em Up',
    tags: ['C++', 'SDL', 'Game Dev'],
    desc: "A 2D beat 'em up game created for the Basics of Programming (PP) course. Developed using the SDL library for graphics rendering and input handling.",
    link: '#',
    repo: 'https://github.com/igorek05m/PG_pp_BeatEmUp',
    image: '/images/beatEmUp.png',
    color: '#ef4444',
    context: 'Basics of Programming Course',
  },
];
