import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fitra Kurniawan | MC & Event Organizer',
  description: 'Personal branding resmi Fitra Kurniawan: Master of Ceremony & Event Organizer untuk pernikahan, korporat, dan acara spesial.',
  openGraph: {
    title: 'Fitra Kurniawan | MC & Event Organizer',
    description: 'MC profesional & EO: eksekusi acara tepat waktu, hangat, dan berkelas.',
    type: 'website',
    url: 'https://kurniawan-mc-vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitra Kurniawan | MC & Event Organizer',
    description: 'MC profesional & EO untuk pernikahan dan acara korporat.',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-dvh flex flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}


