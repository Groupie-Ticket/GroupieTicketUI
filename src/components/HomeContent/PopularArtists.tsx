import ArtistCard from '../../elements/ArtistCard';
import artista1 from '../../assets/artista1.png';
import artista2 from '../../assets/artista2.png';
import artista3 from '../../assets/artista3.png';
import artista4 from '../../assets/artista4.png';

interface Artist {
  id: number;
  name: string;
  price: string;
  image: string;
}

const artists: Artist[] = [
  {
    id: 1,
    name: 'Christian Nodal',
    price: 'Desde $0,000.00 MXN',
    image: artista1,
  },
  {
    id: 2,
    name: 'Santa Fe Klan',
    price: 'Desde $0,000.00 MXN',
    image: artista2,
  },
  {
    id: 3,
    name: 'Banda MS',
    price: 'Desde $0,000.00 MXN',
    image: artista3,
  },
  {
    id: 4,
    name: 'Julión Álvarez',
    price: 'Desde $0,000.00 MXN',
    image: artista4,
  },
];

export default function PopularArtists(): JSX.Element {
  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <div className="w-full flex justify-between items-center">
        <div className="text-black text-3xl font-bold font-['Open_Sans'] leading-10">
          Artistas populares
        </div>
        <div className="text-black text-base font-bold font-['Open_Sans'] leading-normal cursor-pointer">
          Ver más
        </div>
      </div>

      <div className="w-full flex justify-start items-start gap-4">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} {...artist} />
        ))}
      </div>
    </div>
  );
}
