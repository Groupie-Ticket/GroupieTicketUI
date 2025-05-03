interface SectorCardProps {
  name: string;
  price: string;
  available: number;
}

export default function SectorCard({ name, price, available }: SectorCardProps): JSX.Element {
  return (
    <div className="w-60 flex flex-col p-4 border border-gray-300 rounded-lg">
      <div className="text-black text-base font-bold">{name}</div>
      <div className="text-sm text-gray-600">{price}</div>
      <div className="text-sm text-green-600">Disponibles: {available}</div>
    </div>
  );
}
