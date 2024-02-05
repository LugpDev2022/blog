'use client';

import { useLoginForm } from '../hooks/useLoginForm';
import PasswordInput from './PasswordInput';

const LogInForm = () => {
  const { isVerifying, handleChange, handleSubmit, values } = useLoginForm();

  return (
    <form onSubmit={handleSubmit}>
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
        />
      </div>

      <PasswordInput value={values.password} onChange={handleChange} />

      <button type='submit' className='login-btn' disabled={isVerifying}>
        LOG IN
      </button>
    </form>
  );
};

export default LogInForm;
