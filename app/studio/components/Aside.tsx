'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import logo from '@/public/studio-logo.png';

const Aside: React.FC = () => {
  const pathname = usePathname();

  if (pathname === '/studio/login') {
    return <></>;
  }

  return (
    <aside className='h-svh w-[240px] items-center bg-white/5 inline-flex flex-col'>
      <header>
        <Link href='/studio' className='flex text-cyan-300'>
          <Image src={logo} alt='Logo' height={55} width={158} />
        </Link>
      </header>

      <form>
        <input type='text' className='w-[210px]' />
      </form>

      <nav>
        <ul>
          <li>
            <Link className='' href='/studio'>
              Home
            </Link>
          </li>
          <li>
            <Link className='' href='/studio'>
              Home
            </Link>
          </li>
          <li>
            <Link className='' href='/studio'>
              Home
            </Link>
          </li>
          <li>
            <Link className='' href='/studio'>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
