"use client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Schema = z.object({
  name: z.string().min(2, 'Mohon isi nama Anda'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().min(8, 'Nomor WA/telepon tidak valid'),
  message: z.string().min(10, 'Mohon ceritakan kebutuhan Anda')
});

type FormData = z.infer<typeof Schema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(Schema)
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 700));
    alert('Terima kasih! Kami akan menghubungi Anda via WhatsApp/email.');
    try { localStorage.setItem('contact:last', JSON.stringify(data)); } catch {}
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm text-white/80">Nama</label>
        <input {...register('name')} className="input mt-1" placeholder="Nama lengkap" />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-white/80">Email</label>
          <input {...register('email')} className="input mt-1" placeholder="Alamat email" />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm text-white/80">WhatsApp / Telepon</label>
          <input {...register('phone')} className="input mt-1" placeholder="Contoh: +62..." />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label className="text-sm text-white/80">Pesan</label>
        <textarea {...register('message')} className="textarea mt-1" placeholder="Ceritakan kebutuhan acara Anda" />
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
      </div>
      <button disabled={isSubmitting} className="btn-primary w-full">{isSubmitting ? 'Mengirim...' : 'Kirim'}</button>
    </form>
  );
}


