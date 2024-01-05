'use client';

import { useState } from 'react';

import Eye from '@/app/svgs/Eye';
import ClosedEye from '@/app/svgs/ClosedEye';

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='login-input'>
      <label htmlFor='password'>Password</label>
      <input
        type={showPassword ? 'text' : 'password'}
        id='password'
        name='password'
        placeholder='Your Password'
        autoComplete='off'
      />
      <button
        type='button'
        className='w-[27px] h-[27px] absolute right-[15px] top-1/2 -translate-y-1/2 transform'
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <ClosedEye className='w-[27px] h-[27px]' />
        ) : (
          <Eye className='w-[27px] h-[27px]' />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
