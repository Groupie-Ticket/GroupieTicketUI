import ArtistCard from '../../elements/ArtistCard';
import { getPopularArtists } from '../../constants/artists.ts';

export default function PopularArtists() {
  const artists = getPopularArtists();

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
