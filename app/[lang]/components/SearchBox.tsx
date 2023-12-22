'use client';

import Image from 'next/image';

import { useForm } from '@/app/hooks/useForm';
import magGlass from '@/public/mag-glass.png';

interface Props {
  isSpanish: boolean;
}

const SearchBox: React.FC<Props> = ({ isSpanish }) => {
  //TODO: Add an X button to delete content

  const { onResetForm, onInputChange, searchBox } = useForm({
    searchBox: '',
  });

  const onSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(searchBox);
  };

  return (
    <form className='relative hidden md:block' onSubmit={onSubmitForm}>
      <label htmlFor='searchBox'>
        <Image
          src={magGlass}
          alt='magnifying glass'
          width={27}
          height={27}
          className='absolute top-1/2 left-[10px] transform -translate-y-1/2'
        />
      </label>

      <input
        type='text'
        placeholder={isSpanish ? 'Buscar' : 'Search'}
        className='searchBox'
        id='searchBox'
        name='searchBox'
        autoComplete='off'
        onChange={onInputChange}
        value={searchBox}
      />
    </form>
  );
};

export default SearchBox;
