interface PublicityProps {
  image: string;
  title: string;
  description: string;
}

export default function Publicity({
  image,
  title,
  description,
}: PublicityProps): JSX.Element {
  return (
    <div className="flex-1 flex flex-col justify-start items-start gap-1">
      <img className="self-stretch h-44 rounded-lg" src={image} alt={title} />
      <div className="self-stretch text-black text-lg font-bold font-['Open_Sans'] leading-relaxed">
        {title}
      </div>
      <div className="self-stretch text-black text-base font-normal font-['Open_Sans'] leading-normal">
        {description}
      </div>
      <div className="self-stretch text-amber-500 text-base font-bold font-['Open_Sans'] leading-normal cursor-pointer">
        Más información
      </div>
    </div>
  );
}
