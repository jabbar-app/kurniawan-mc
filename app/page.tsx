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
            <span className="badge">Kurniawan MC & Event Organizer</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Make your moments unforgettable with a professional MC and EO
            </h1>
            <p className="mt-4 text-white/80">
              Weddings, corporate functions, and special events delivered flawlessly with
              style, precision, and warmth.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/booking" className="btn-primary">Book Now</Link>
              <Link href="/services" className="btn-outline">View Services</Link>
            </div>
          </div>
          <div className="card p-4">
            <img
              src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop"
              alt="Elegant event setup"
              className="rounded-lg object-cover w-full h-[320px]"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl font-semibold mb-4">Featured Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.id} service={s as any} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl font-semibold mb-4">Portfolio Highlights</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.slice(0, 3).map((item) => (
            <PortfolioCard key={item.id} item={item as any} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl font-semibold mb-4">Client Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} t={t as any} />
          ))}
        </div>
      </section>

      <section className="section pb-20">
        <div className="card p-6 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to bring your event to life?</h3>
          <p className="text-white/80 mt-3">Tell us your vision and we’ll handle the rest.</p>
          <Link href="/contact" className="btn-primary mt-6">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}


