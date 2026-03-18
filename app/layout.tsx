import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Igi | Portfolio',
  description:
    'Portfolio of Igor, a hobbyist self-taught fullstack developer & CS student at Gdańsk University of Technology.',
  icons: {
    icon: '/images/igi.png',
    shortcut: '/images/igi.png',
    apple: '/images/igi.png',
  },
  openGraph: {
    images: [{ url: '/images/igi.png', width: 512, height: 512, alt: 'Igi Portfolio logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/igi.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans bg-[#020202] text-white`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
