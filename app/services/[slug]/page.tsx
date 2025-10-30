import services from '@/data/services.json';
import Link from 'next/link';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return (services as any[]).map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: Params) {
  const service = (services as any[]).find((s) => s.slug === params.slug);
  if (!service) {
    return (
      <main className="section">
        <p>Service not found.</p>
        <Link href="/services" className="text-[var(--gold)]">← Kembali ke services</Link>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold">{service.name}</h1>
          <p className="text-white/80 mt-3">{service.description}</p>
        </div>
        <Link href="/booking" className="btn-primary">Book this service</Link>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Packages</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {service.packages.map((p: any) => (
          <div key={p.name} className="card p-6">
            <h3 className="text-xl font-medium">{p.name}</h3>
            <p className="text-white/70 mt-1">Mulai dari Rp{p.price}rb</p>
            <ul className="mt-3 space-y-1 text-white/80 list-disc list-inside">
              {p.features.map((f: string) => <li key={f}>{f}</li>)}
            </ul>
            <Link href="/booking" className="btn-outline mt-4 inline-flex">Select</Link>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/services" className="text-[var(--gold)]">← Kembali ke services</Link>
      </div>
    </main>
  );
}


