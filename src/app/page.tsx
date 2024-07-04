import { Banner } from './components/Banner';
import Header from './components/Header';
import { MoviesRow } from './components/MoviesRow';

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b from-transparent to-black lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner/>
        <MoviesRow sectionTitle='Featured'/>
        <MoviesRow sectionTitle='Trending Top'/>
      </main>
    </div>
  );
}