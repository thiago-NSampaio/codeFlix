import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { ChangeEvent, FormEvent } from 'react';

interface SearchProps {
  onSearch: (e: FormEvent<HTMLFormElement>) => void;
  searchTerm: string;
  onSearchTermChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Search({
  onSearch,
  onSearchTermChange,
  searchTerm,
}: SearchProps) {
  return (
    <form onSubmit={onSearch} className='flex items-center space-x-2'>
      <button type='submit'>
        <MagnifyingGlassIcon className='h-6 w-6' />
      </button>
      <input
        type='search'
        id='search'
        name='search'
        value={searchTerm}
        placeholder='Search'
        onChange={onSearchTermChange}
        className='bg-transparent text-white placeholder-white outline-none'
      />
    </form>
  );
}
