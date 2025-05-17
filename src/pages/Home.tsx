import Hero from '../sections/Hero';
// import HomeContent from '../sections/HomeContent';
import HomeContentNew from '../sections/HomeContentNew';
// import Reproductor from '../sections/Reproductor';

export default function Home(): JSX.Element {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <Hero />
      {/* <Reproductor /> */}
      {/* <HomeContent /> */}
      <HomeContentNew  />
    </div>
  );
}
