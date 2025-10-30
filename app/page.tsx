import Link from 'next/link';
import services from '@/data/services.json';
import portfolio from '@/data/portfolio.json';
import testimonials from '@/data/testimonials.json';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import TestimonialCard from '@/components/TestimonialCard';

export default function HomePage() {
  return (
    <main>
      <section className="section pt-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <span className="badge">Fitra Kurniawan — MC & EO</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Fitra Kurniawan, MC & Event Organizer Terbaik se-
            </h1>
            <p className="mt-4 text-white/80">
              MC profesional & Event Organizer untuk pernikahan, acara korporat, dan momen spesial.
              Eksekusi hangat, rapi, dan tepat waktu.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/booking" className="btn-primary">Pesan Sekarang</Link>
              <Link href="/services" className="btn-outline">Lihat Layanan</Link>
            </div>
          </div>
          <div className="card p-4">
            <img
              src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop"
              alt="Suasana acara elegan"
              className="rounded-lg object-cover w-full h-[320px]"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl font-semibold mb-4">Layanan Unggulan</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.id} service={s as any} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl font-semibold mb-4">Sorotan Portofolio</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.slice(0, 3).map((item) => (
            <PortfolioCard key={item.id} item={item as any} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl font-semibold mb-4">Testimoni Klien</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} t={t as any} />
          ))}
        </div>
      </section>

      <section className="section pb-20">
        <div className="card p-6 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Siap mewujudkan acara Anda?</h3>
          <p className="text-white/80 mt-3">Ceritakan kebutuhan Anda, tim kami akan mengurus sisanya.</p>
          <Link href="/contact" className="btn-primary mt-6">Hubungi Kami</Link>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-3 items-center">
          <div className="md:col-span-1 card overflow-hidden">
            <img
              src="https://i.ibb.co.com/0VmqBPXn/fitra.jpg?auto=format&fit=crop"
              alt="Fitra Kurniawan"
              className="w-full h-72 object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">Tentang Fitra Kurniawan</h2>
            <p className="text-white/80 mt-3">
              Fitra Kurniawan adalah Master of Ceremony dan Event Organizer dengan pengalaman pada
              pernikahan, acara korporat, dan peluncuran brand. Gaya membawakan yang hangat,
              terstruktur, dan interaktif memastikan alur acara berjalan rapi dan berkesan.
            </p>
            <p className="text-white/80 mt-3">
              Fokus utama Fitra adalah menghadirkan pengalaman yang personal dan tepat waktu,
              berkolaborasi erat dengan vendor serta keluarga/klien agar setiap momen berarti.
            </p>
            <div className="mt-4 flex gap-3">
              <Link href="/services" className="btn-outline">Lihat Paket Layanan</Link>
              <Link href="/booking" className="btn-primary">Konsultasi & Pemesanan</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


