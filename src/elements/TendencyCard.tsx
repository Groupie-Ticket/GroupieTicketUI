interface TendencyCardProps {
  name: string;
  price: string;
  image: string;
}

export default function TendencyCard({ name, price, image }: TendencyCardProps) {
  return (
    <div className="w-60 flex flex-col">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
      <div className="text-black text-base font-bold mt-2">{name}</div>
      <div className="text-black text-sm font-normal">{price}</div>
    </div>
  );
}
