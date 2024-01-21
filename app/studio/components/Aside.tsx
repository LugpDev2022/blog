'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Nav from './Nav';
import logo from '@/public/studio-logo.png';
import Searchbox from './Searchbox';

const Aside: React.FC = () => {
  const pathname = usePathname();

  if (pathname === '/studio/login') {
    return <></>;
  }

  return (
    <aside className='h-svh w-[240px] fixed items-center bg-white/5 inline-flex flex-col '>
      <header className='pt-5'>
        <Link href='/studio' className='flex text-cyan-300'>
          <Image src={logo} alt='Logo' height={55} width={158} />
        </Link>
      </header>

      <Searchbox />
      <Nav />
    </aside>
  );
};

export default Aside;
