"use client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Schema = z.object({
  eventType: z.string().min(2),
  date: z.string().min(8),
  venue: z.string().min(3),
  budget: z.string().optional(),
  notes: z.string().optional()
});

type FormData = z.infer<typeof Schema>;

export default function BookingForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(Schema)
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 800));
    alert('Booking received! We will contact you to confirm details.');
    try { localStorage.setItem('booking:last', JSON.stringify(data)); } catch {}
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm text-white/80">Event Type</label>
        <input {...register('eventType')} className="input mt-1" placeholder="e.g. Wedding Reception" />
        {errors.eventType && <p className="text-red-400 text-sm mt-1">{errors.eventType.message}</p>}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-white/80">Date</label>
          <input type="date" {...register('date')} className="input mt-1" />
          {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>}
        </div>
        <div>
          <label className="text-sm text-white/80">Venue</label>
          <input {...register('venue')} className="input mt-1" placeholder="Venue name / address" />
          {errors.venue && <p className="text-red-400 text-sm mt-1">{errors.venue.message}</p>}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-white/80">Budget (optional)</label>
          <input {...register('budget')} className="input mt-1" placeholder="$" />
        </div>
        <div>
          <label className="text-sm text-white/80">Notes (optional)</label>
          <input {...register('notes')} className="input mt-1" placeholder="Additional info" />
        </div>
      </div>
      <button disabled={isSubmitting} className="btn-primary w-full">{isSubmitting ? 'Submitting...' : 'Submit Booking'}</button>
    </form>
  );
}


