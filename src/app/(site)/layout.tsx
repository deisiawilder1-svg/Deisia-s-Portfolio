import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/tailwind.css';
import '@/styles/star.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SpaceBackground from '@/components/SpaceBackground';
import ScrollToTop from '@/components/ScrollToTop';
import { Plus_Jakarta_Sans, Press_Start_2P } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import ToasterContext from '../context/ToastContext';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pixel',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${plusJakarta.className} ${pixelFont.variable}`}>
      <body>
        <div className='isolate'>
          <SpaceBackground />
          <div className='stars' aria-hidden='true' />
          <div className='stars2' aria-hidden='true' />
          <div className='stars3' aria-hidden='true' />
          <NextTopLoader
            color='#8646F4'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <Header />
          {children}
          <Footer />

          <ToasterContext />
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
