'use client';

import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';

import useSearchBox from '@/src/app/[lang]/hooks/useSearchBox';

interface Props {
  isSpanish: boolean;
}

const SearchBox: React.FC<Props> = ({ isSpanish }) => {
  const { searchBox, inputHandlers } = useSearchBox(isSpanish);
  const { onChange, onBlur, onFocus, onResetForm } = inputHandlers;

  return (
    <form
      className='relative w-full mt-5 md:w-[340px] md:mt-0'
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor='searchBox'>
        <HiMagnifyingGlass
          color='#36DDE8'
          size={24}
          className='absolute top-1/2 left-[10px] transform -translate-y-1/2 w-6 h-6'
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
        <IoMdClose size={20} color='#36DDE8' />
      </button>
    </form>
  );
};

export default SearchBox;
