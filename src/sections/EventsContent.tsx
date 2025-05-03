import EventsBuyTickets from '../components/EventsContent/EventsBuyTickets';
import PopularEvents from '../components/EventsContent/PopularEvents';
import CloseToYou from '../components/EventsContent/CloseToYou';
import Tendency from '../components/EventsContent/Tendency';

export default function EventsContent(): JSX.Element {
  return (
    <div className="max-w-[1280px] px-10 py-20 mx-auto mt-[-40px] flex flex-col gap-10">
      <EventsBuyTickets />
      <PopularEvents />
      <CloseToYou />
      <Tendency />
    </div>
  );
}
