import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import About from '@/components/About';
import NavigationDock from '@/components/NavigationDock';
import GithubStats from '@/components/GithubStats';
import CodewarsStats from '@/components/CodewarsStats';
import LinkedInCard from '@/components/LinkedInCard';
import Contact from '@/components/Contact';

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="h-96 bg-transparent" />,
});
const AuroraBackground = dynamic(() => import('@/components/AuroraBackground'));
const BackgroundMath = dynamic(() => import('@/components/BackgroundMath'));

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AuroraBackground />
      <BackgroundMath />

      <NavigationDock />

      <div id="hero">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row justify-center gap-6 items-stretch relative z-10 my-20">
        <LinkedInCard />
        <GithubStats />
        <CodewarsStats />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div
        id="contact"
        className="max-w-7xl mx-auto px-6 md:px-20 pt-32 pb-20 relative z-10 text-left"
      >
        <Contact />
      </div>
    </main>
  );
}
