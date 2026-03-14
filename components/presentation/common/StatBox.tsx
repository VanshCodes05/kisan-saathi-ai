'use client';

interface StatBoxProps {
  icon: string;
  label: string;
  value: string;
}

export function StatBox({ icon, label, value }: StatBoxProps) {
  const colors = ['bg-[#0D3B1F]', 'bg-[#B8760A]', 'bg-[#C4501A]', 'bg-[#6B3A1F]'];
  const colorIndex = Math.abs(label.charCodeAt(0) % colors.length);
  
  return (
    <div className={`${colors[colorIndex]} text-white p-6 rounded-lg text-center shadow-lg border-l-4 border-[#E8A020]`}>
      <div className="text-4xl mb-3">{icon}</div>
      <p className="text-sm text-gray-100 mb-2 font-jakarta">{label}</p>
      <p className="font-playfair text-3xl font-bold">{value}</p>
    </div>
  );
}
