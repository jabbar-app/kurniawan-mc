import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Kurniawan MC & Event Organizer',
  description: 'Professional MC and Event Organizer services for weddings, corporate, and special events.',
  openGraph: {
    title: 'Kurniawan MC & Event Organizer',
    description: 'Professional MC and Event Organizer services for weddings, corporate, and special events.',
    type: 'website',
    url: 'https://kurniawan-mc-vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kurniawan MC & Event Organizer',
    description: 'Professional MC and Event Organizer services.',
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


