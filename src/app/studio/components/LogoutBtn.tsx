'use client';

import { signOut } from 'next-auth/react';
import LogoutIcon from '../icons/LogoutIcon';

const LogoutBtn = () => {
  return (
    <button
      className='flex w-full gap-5 py-[10px] pl-5 items-center transition duration-300 hover:bg-[#ff0000]'
      onClick={() => signOut()}
    >
      <LogoutIcon /> Logout
    </button>
  );
};

export default LogoutBtn;
