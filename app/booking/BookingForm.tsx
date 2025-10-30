"use client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Schema = z.object({
  eventType: z.string().min(2, 'Jenis acara wajib diisi'),
  date: z.string().min(8, 'Tanggal wajib diisi'),
  venue: z.string().min(3, 'Lokasi/venue wajib diisi'),
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
    alert('Pemesanan diterima! Kami akan menghubungi Anda untuk konfirmasi.');
    try { localStorage.setItem('booking:last', JSON.stringify(data)); } catch {}
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm text-white/80">Jenis Acara</label>
        <input {...register('eventType')} className="input mt-1" placeholder="Contoh: Resepsi Pernikahan" />
        {errors.eventType && <p className="text-red-400 text-sm mt-1">{errors.eventType.message}</p>}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-white/80">Tanggal</label>
          <input type="date" {...register('date')} className="input mt-1" />
          {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>}
        </div>
        <div>
          <label className="text-sm text-white/80">Lokasi / Venue</label>
          <input {...register('venue')} className="input mt-1" placeholder="Nama/Alamat venue" />
          {errors.venue && <p className="text-red-400 text-sm mt-1">{errors.venue.message}</p>}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-white/80">Anggaran (opsional)</label>
          <input {...register('budget')} className="input mt-1" placeholder="Rp" />
        </div>
        <div>
          <label className="text-sm text-white/80">Catatan (opsional)</label>
          <input {...register('notes')} className="input mt-1" placeholder="Info tambahan" />
        </div>
      </div>
      <button disabled={isSubmitting} className="btn-primary w-full">{isSubmitting ? 'Mengirim...' : 'Kirim Pemesanan'}</button>
    </form>
  );
}


