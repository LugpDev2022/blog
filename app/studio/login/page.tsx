import Image from 'next/image';
import Link from 'next/link';

import PasswordInput from './components/PasswordInput';
import logo from '@/public/logo.svg';
import Arrow from '@/app/components/Arrow';

import './login.css';

const StudioLogin = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
      <main className='w-[450px]'>
        <h1 className='flex mb-[50px] gap-[30px] justify-center items-center text-2xl'>
          <span>Welcome to the studio</span>
          <Image src={logo} alt='Logo' width={55} height={55} />
        </h1>

        <form>
          <div className='login-input'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='email@example.com'
            />
          </div>

          <PasswordInput />

          <button
            type='submit'
            className='text-center px-[20px] py-[17px] w-full border-[1px] border-cyan-300 rounded-[10px] text-xl text-cyan-300 mb-[20px] hover:bg-cyan-300 hover:text-[#090f3f] transition'
          >
            LOG IN
          </button>
        </form>

        <Link href='/' className='see-more-link'>
          Return to blog page <Arrow />
        </Link>
      </main>
    </div>
  );
};

export default StudioLogin;
