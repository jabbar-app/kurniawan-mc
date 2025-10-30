import Link from 'next/link';
import type { Route } from 'next';

const links: { href: Route; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/booking', label: 'Booking' }
];

export default function Nav() {
  return (
    <nav className="hidden md:flex items-center gap-6 text-sm">
      {links.map((l) => (
        <Link key={l.href} href={l.href} className="hover:text-[var(--gold)]">
          {l.label}
        </Link>
      ))}
    </nav>
  );
}


