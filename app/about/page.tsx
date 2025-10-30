export default function AboutPage() {
  return (
    <main className="section max-w-3xl">
      <h1 className="text-3xl font-semibold">Tentang Fitra Kurniawan</h1>
      <p className="text-white/80 mt-4">
        Fitra Kurniawan adalah MC (Master of Ceremony) dan Event Organizer yang mengutamakan
        keramahan, ketepatan waktu, dan eksekusi run-down yang rapi. Dengan pengalaman pada
        pernikahan, acara korporat, dan peluncuran brand, Fitra membantu mewujudkan visi acara
        menjadi pengalaman yang berkesan dan terukur.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card p-6">
          <h3 className="font-medium text-lg">Misi</h3>
          <p className="text-white/80 mt-2">Menciptakan momen yang mulus, bermakna, dan tepat waktu.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-medium text-lg">Pendekatan</h3>
          <p className="text-white/80 mt-2">Pembawaan yang hangat, komunikasi jelas, dan sinergi dengan vendor.</p>
        </div>
      </div>
    </main>
  );
}


