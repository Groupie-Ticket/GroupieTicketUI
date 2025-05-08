import Hero from '../sections/Hero';
import HomeContent from '../sections/HomeContent';
// import Reproductor from '../sections/Reproductor';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <Hero />
      {/* <Reproductor /> */}
      <HomeContent />
    </div>
  );
}
