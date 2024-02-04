import { ChangeEvent, useState } from 'react';

import Eye from '@/src/icons/Eye';
import ClosedEye from '@/src/icons/ClosedEye';

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const PasswordInput: React.FC<Props> = ({ onChange, value }) => {
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
        onChange={onChange}
        value={value}
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
