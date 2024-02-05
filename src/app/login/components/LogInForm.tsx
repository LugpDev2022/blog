'use client';

import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import PasswordInput from './PasswordInput';
import { useForm } from '@/src/hooks/useForm';

const LogInForm = () => {
  const router = useRouter();
  const [isCharging, setIsCharging] = useState(false);
  const { onInputChange, email, password } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsCharging(true);

    const resp = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (resp?.status === 200) {
      router.push('/studio');
    }

    setIsCharging(false);
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

      <button type='submit' className='login-btn' disabled={isCharging}>
        LOG IN
      </button>
    </form>
  );
};

export default LogInForm;
