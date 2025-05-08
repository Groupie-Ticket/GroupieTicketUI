import Hero from '../sections/Hero';
import EventsContent from '../sections/EventsContent';
// import Reproductor from '../sections/Reproductor';

export default function Events() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <Hero />
      {/* <Reproductor /> */}
      <EventsContent />
    </div>
  );
}
