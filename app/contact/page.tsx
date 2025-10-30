import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <main className="section max-w-2xl">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p className="text-white/80 mt-2">Tell us about your event and we’ll get back to you shortly.</p>
      <div className="card p-6 mt-6">
        <ContactForm />
      </div>
    </main>
  );
}


