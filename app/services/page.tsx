import ServiceCard from '@/components/ServiceCard';
import services from '@/data/services.json';

export const dynamic = 'force-static';

export default function ServicesPage() {
  return (
    <main className="section">
      <h1 className="text-3xl font-semibold mb-6">Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s as any} />
        ))}
      </div>
    </main>
  );
}


