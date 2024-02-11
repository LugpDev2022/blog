'use client';

import Image from 'next/image';

import useSearchBox from '../hooks/useSearchBox';
import magGlass from '@/public/mag-glass.png';
import closeIcon from '@/public/x.png';

interface Props {
  isSpanish: boolean;
}

const SearchBox: React.FC<Props> = ({ isSpanish }) => {
  const { searchBox, inputHandlers } = useSearchBox(isSpanish);
  const { onChange, onBlur, onFocus, onResetForm } = inputHandlers;

  return (
    <form
      className='relative hidden lg:block'
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor='searchBox'>
        <Image
          alt={isSpanish ? 'lupa' : 'magnifying glass'}
          className='absolute top-1/2 left-[10px] transform -translate-y-1/2'
          height={27}
          src={magGlass}
          width={27}
        />
      </label>

      <input
        autoComplete='off'
        className='searchBox'
        id='searchBox'
        name='searchBox'
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={isSpanish ? 'Buscar' : 'Search'}
        type='text'
        value={searchBox}
      />

      <button
        className={`${
          searchBox.length < 1 ? 'hidden' : 'block'
        } absolute top-1/2 right-[10px] transform -translate-y-1/2`}
        onClick={onResetForm}
        type='reset'
      >
        <Image src={closeIcon} width={20} height={20} alt='x icon' />
      </button>
    </form>
  );
};

export default SearchBox;
