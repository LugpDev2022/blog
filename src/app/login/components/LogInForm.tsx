'use client';

import { useLoginForm } from '../hooks/useLoginForm';
import PasswordInput from './PasswordInput';

const LogInForm = () => {
  const { formState, handleChange, handleSubmit, values } = useLoginForm();
  const { error, isVerifying } = formState;

  return (
    <form onSubmit={handleSubmit} className={error ? 'login-form-error' : ''}>
      <div className='login-input'>
        <label htmlFor='email'>Email</label>
        <input
          autoComplete='off'
          id='email'
          name='email'
          onChange={handleChange}
          placeholder='email@example.com'
          type='text'
          value={values.email}
          disabled={isVerifying}
        />
      </div>

      <PasswordInput
        value={values.password}
        onChange={handleChange}
        disabled={isVerifying}
      />

      <div className='relative'>
        <span className='absolute -top-6 left-0 text-[#FF0000]'>{error}</span>

        <button
          type='submit'
          className='login-btn'
          disabled={isVerifying || error.length > 0}
        >
          LOG IN
        </button>
      </div>
    </form>
  );
};

export default LogInForm;
