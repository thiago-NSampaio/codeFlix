'use client';
import { useScroll } from '../hooks/useScroll';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { UserProfile } from './UserProfile';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Search } from './Search';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Header() {
  const isScrolled = useScroll();
  const router = useRouter();
  const params = useSearchParams();
  const initialSearchTerm = params.get('title') || '';
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

  function onSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newParams = new URLSearchParams(params.toString());
    newParams.set('title', searchTerm);
    router.push(`/search?${newParams.toString()}`);
  }

  function onSearchTermChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return (
    <header
      className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between bg-gradient-to-t from-transparent to-black p-2 px-4 transition-all lg:px-16 lg:py-4`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Link href='/'>
          <Logo />
        </Link>
        <NavLinks />
      </div>
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Search
          onSearch={onSearch}
          onSearchTermChange={onSearchTermChange}
          searchTerm={searchTerm}
        />
        <UserProfile />
      </div>
    </header>
  );
}
