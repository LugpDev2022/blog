import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/logo.svg';
import Arrow from '@/src/icons/Arrow';
import LogInForm from './components/LogInForm';

const StudioLogin = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
      <main className='w-[450px]'>
        <h1 className='flex mb-[50px] gap-[30px] justify-center items-center text-2xl'>
          <span>Welcome to the studio</span>
          <Image src={logo} alt='Logo' width={55} height={55} />
        </h1>

        <LogInForm />

        <Link href='/' className='see-more-link'>
          Return to blog page <Arrow />
        </Link>
      </main>
    </div>
  );
};

export default StudioLogin;
