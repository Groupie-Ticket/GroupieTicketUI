import PopularArtists from '../components/HomeContent/PopularArtists';
import NewTickets from '../components/HomeContent/NewTickets';
import AuctionsTickets from '../components/HomeContent/AuctionsTickets';
import SecundarySale from '../components/HomeContent/SecundarySale';
import Promocionated from '../components/HomeContent/Promocionated';
import Merch from '../components/HomeContent/Merch';
import Streaming from '../components/HomeContent/Streaming';

export default function HomeContent(): JSX.Element {
  return (
    <div className="max-w-[1280px] px-10 py-20 mx-auto mt-[-40px] flex flex-col gap-10">
      <PopularArtists />
      <NewTickets />
      <AuctionsTickets />
      <SecundarySale />
      <Promocionated />
      <Merch />
      <Streaming />
    </div>
  );
}
