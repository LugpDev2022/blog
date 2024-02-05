import { ChangeEvent, FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { useForm } from '@/src/hooks/useForm';

export const useLoginForm = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    isVerifying: false,
    error: '',
  });

  const { onInputChange, email, password } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setFormState({ isVerifying: true, error: '' });

    if (email.length < 1 || password.length < 1) {
      return setFormState({
        isVerifying: false,
        error: 'Email and password are required',
      });
    }

    if (!email.includes('@')) {
      return setFormState({
        isVerifying: false,
        error: 'Introduce a valid email',
      });
    }

    const resp = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (resp?.status !== 200) {
      return setFormState({
        isVerifying: false,
        error: 'Email or password incorrect',
      });
    }

    router.push('/studio');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((state) => ({ ...state, error: '' }));
    onInputChange(e);
  };

  return {
    formState,
    handleChange,
    handleSubmit,
    values: {
      email,
      password,
    },
  };
};
