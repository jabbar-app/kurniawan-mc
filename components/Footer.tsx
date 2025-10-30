import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container-px py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <p>© {new Date().getFullYear()} Fitra Kurniawan — MC & Event Organizer</p>
        <div className="flex items-center gap-4">
          <Link href="/services" className="hover:text-[var(--gold)]">Layanan</Link>
          <Link href="/portfolio" className="hover:text-[var(--gold)]">Portofolio</Link>
          <Link href="/contact" className="hover:text-[var(--gold)]">Kontak</Link>
        </div>
      </div>
    </footer>
  );
}


