import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { useForm } from '@/src/hooks/useForm';

export const useLoginForm = () => {
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(false);
  const { onInputChange, email, password } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsVerifying(true);

    const resp = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (resp?.status === 200) {
      router.push('/studio');
    }

    setIsVerifying(false);
  };

  return {
    isVerifying,
    handleChange: onInputChange,
    handleSubmit,
    values: {
      email,
      password,
    },
  };
};
