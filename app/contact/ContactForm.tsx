"use client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(8, 'Enter a valid phone/WhatsApp'),
  message: z.string().min(10, 'Please provide details')
});

type FormData = z.infer<typeof Schema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(Schema)
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 700));
    alert('Thanks! We will contact you via WhatsApp/email.');
    try { localStorage.setItem('contact:last', JSON.stringify(data)); } catch {}
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm text-white/80">Name</label>
        <input {...register('name')} className="input mt-1" placeholder="Your name" />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-white/80">Email</label>
          <input {...register('email')} className="input mt-1" placeholder="Email" />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm text-white/80">WhatsApp / Phone</label>
          <input {...register('phone')} className="input mt-1" placeholder="e.g. +62..." />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label className="text-sm text-white/80">Message</label>
        <textarea {...register('message')} className="textarea mt-1" placeholder="How can we help?" />
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
      </div>
      <button disabled={isSubmitting} className="btn-primary w-full">{isSubmitting ? 'Sending...' : 'Send'}</button>
    </form>
  );
}


