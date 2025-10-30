import Link from 'next/link';
import type { Route } from 'next';

const links: { href: Route; label: string }[] = [
  { href: '/', label: 'Beranda' },
  { href: '/services', label: 'Layanan' },
  { href: '/portfolio', label: 'Portofolio' },
  { href: '/about', label: 'Tentang' },
  { href: '/contact', label: 'Kontak' },
  { href: '/booking', label: 'Pemesanan' }
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


