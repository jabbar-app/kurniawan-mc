export default function AboutPage() {
  return (
    <main className="section max-w-3xl">
      <h1 className="text-3xl font-semibold">About Us</h1>
      <p className="text-white/80 mt-4">
        Kurniawan MC & Event Organizer provides professional MC and event management services
        for weddings, corporate functions, and special events. We blend hospitality, attention to detail,
        and precise run-down execution to deliver unforgettable experiences.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card p-6">
          <h3 className="font-medium text-lg">Our Mission</h3>
          <p className="text-white/80 mt-2">Make every moment seamless, meaningful, and on-time.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-medium text-lg">Our Approach</h3>
          <p className="text-white/80 mt-2">Professional hosting, clear communication, and vendor synergy.</p>
        </div>
      </div>
    </main>
  );
}


