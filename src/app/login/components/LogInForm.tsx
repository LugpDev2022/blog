'use client';

import { useForm } from '@/src/hooks/useForm';
import PasswordInput from './PasswordInput';
import { FormEventHandler } from 'react';
import { signIn } from 'next-auth/react';

const LogInForm = () => {
  const { onInputChange, email, password } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const resp = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    console.log(resp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='login-input'>
        <label htmlFor='email'>Email</label>
        <input
          autoComplete='off'
          id='email'
          name='email'
          onChange={onInputChange}
          placeholder='email@example.com'
          type='text'
          value={email}
        />
      </div>

      <PasswordInput value={password} onChange={onInputChange} />

      <button
        type='submit'
        className='text-center px-[20px] py-[17px] w-full border-[1px] border-cyan-300 rounded-[10px] text-xl text-cyan-300 mb-[20px] hover:bg-cyan-300 hover:text-[#090f3f] transition'
      >
        LOG IN
      </button>
    </form>
  );
};

export default LogInForm;
