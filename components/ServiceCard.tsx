import Link from 'next/link';

type Service = {
  id: number;
  slug: string;
  name: string;
  summary: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card p-6 h-full flex flex-col">
      <h3 className="text-lg font-semibold">{service.name}</h3>
      <p className="text-white/80 mt-2 flex-1">{service.summary}</p>
      <Link href={`/services/${service.slug}`} className="text-[var(--gold)] mt-4">
        View details →
      </Link>
    </div>
  );
}


