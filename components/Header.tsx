import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="border-b border-white/10 sticky top-0 z-40 backdrop-blur bg-black/40">
      <div className="container-px h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="h-3 w-3 rounded-full bg-[var(--gold)]" />
          <span className="font-semibold tracking-wide">Fitra Kurniawan — MC & Event Organizer</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}


