type Item = {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
};

export default function PortfolioCard({ item }: { item: Item }) {
  return (
    <div className="card overflow-hidden">
      <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="badge">{item.category}</span>
          <span className="text-xs text-white/60">{new Date(item.date).toLocaleDateString()}</span>
        </div>
        <h4 className="mt-2 font-medium">{item.title}</h4>
      </div>
    </div>
  );
}


