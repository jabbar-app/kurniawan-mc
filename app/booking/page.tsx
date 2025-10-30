import BookingForm from './BookingForm';

export default function BookingPage() {
  return (
    <main className="section max-w-2xl">
      <h1 className="text-3xl font-semibold">Booking</h1>
      <p className="text-white/80 mt-2">Share your event details and we’ll tailor a package for you.</p>
      <div className="card p-6 mt-6">
        <BookingForm />
      </div>
    </main>
  );
}


