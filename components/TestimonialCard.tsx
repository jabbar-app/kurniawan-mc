type Testimonial = {
  id: number;
  clientName: string;
  text: string;
  rating: number;
};

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="card p-5">
      <p className="text-white/90">“{t.text}”</p>
      <div className="mt-4 flex items-center justify-between text-sm text-white/70">
        <span>— {t.clientName}</span>
        <span>{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</span>
      </div>
    </div>
  );
}


