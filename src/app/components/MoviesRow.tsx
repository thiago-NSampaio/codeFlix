import Image from 'next/image';

type MoviesRowProps = {
  sectionTitle: string;
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }: MovieCardProps) => {
  return (
    <div
      className='group relative h-28 min-w-[200px] transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:z-50 hover:scale-110 sm:h-36 md:min-w-[300px] lg:h-52 lg:min-w-[400px]'
    >
      <Image
        className='rounded'
        src={`/item_${index}.png`}
        alt={`Item ${index}`}
        fill={true}
      />
    </div>
  );
};

export function MoviesRow({ sectionTitle }: MoviesRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='inline-flex items-center text-2xl font-bold'>{sectionTitle}</h2>
      </div>
      <div className='-ml-8 flex p-6 space-x-4 scrollbar-hide'>
        {[1, 2, 3, 4, 5].map((index) => (
          <MovieCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
